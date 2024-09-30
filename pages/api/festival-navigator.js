import { pool } from "../../db";
import {saveToAirtable} from "./airtable";

async function checkUserExists(email) {
  const checkQuery = "SELECT * FROM festivalnavigator WHERE email = $1";
  const checkResult = await pool.query(checkQuery, [email]);
  return checkResult.rowCount > 0;
}

async function saveUserToDatabase(data) {
    const { email, budget, city, dancelevel, styles } = data;

  try {
    const checkExists = await checkUserExists(email);
    if (checkExists) {
        throw new Error("User already exists");
    } else {
        const insertQuery = "INSERT INTO festivalnavigator (email, budget, city, dancelevel, styles) VALUES ($1, $2, $3, $4, $5)";
        const values = [email, budget, city, dancelevel, styles];
        await pool.query(insertQuery, values);

        const result = await pool.query("SELECT * FROM festivalnavigator WHERE email = $1", [
          email,
        ]);
        
        if (result.rowCount > 0) {
         await saveToAirtable(result.rows[0], 'FestivalNavigator');
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

    try {
      await saveUserToDatabase(req.body); 
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
