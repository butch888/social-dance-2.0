import { pool } from "../../db";
import {saveToAirtable} from "./airtable";

async function checkUserExists(email, guide) {
  const checkQuery = "SELECT * FROM users WHERE email = $1 AND guide = $2";
  const checkResult = await pool.query(checkQuery, [email, guide]);
  return checkResult.rowCount > 0;
}

async function saveUserToDatabase(email, guide) {
  try {
    const checkExists = await checkUserExists(email);
    if (checkExists) {
        throw new Error("User already exists");
    } else {
        const insertQuery = "INSERT INTO users (email, guide) VALUES ($1, $2)";
        const values = [email, guide];
        await pool.query(insertQuery, values);

        const result = await pool.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        if (result.rowCount > 0) {
          await saveToAirtable(result.rows[0], 'EmailData');
          console.log("Record inserted successfully.");
        }
    }
  } catch (err) {
    console.error("Error executing query", err.stack);
    throw err;
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, guide } = req.body; 
    try {
      await saveUserToDatabase(email, guide); 
      res.status(200).json({ message: "User saved successfully." });
    } catch (error) {
      console.error(error);
      if (error.message === "User already exists") {
        res.status(409).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unexpected error occurred." });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
