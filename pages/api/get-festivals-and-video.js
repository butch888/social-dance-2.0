import { getFromAirtable } from "./airtable";

export default async function handler(req, res) {
  try {
    const records = await getFromAirtable('festivalsandvideo'); 
    res.status(200).json(records); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve data' }); 
  }
}
