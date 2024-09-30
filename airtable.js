import Airtable from 'airtable';
import dotenv from 'dotenv';
import moment from 'moment';

dotenv.config();

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appIe4Y5AGCIWKKvx');

async function saveToAirtable(data) {
  const tableName = 'EmailData';

  try {
    const records = await base(tableName).create([
      {
        fields: {
          id: data.id,
          email: data.email,
          createdAt: moment(new Date()).format('MM/DD/YYYY'),
        },
      },
    ]);

    records.forEach((record) => {
      console.log(record.getId());
    });

    return records;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export default saveToAirtable;