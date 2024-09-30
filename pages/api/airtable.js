import Airtable from 'airtable';
import dotenv from 'dotenv';
import moment from 'moment';

dotenv.config();

const base = new Airtable({ apiKey: 'patVoxoK2QrQ7h3ku.3f66a75009238ff8697c08b14cbe97ea6a876521925b60e36c20be464105f341' }).base('appIe4Y5AGCIWKKvx');

async function saveToAirtable(data, tableName) {

  try {
    const records = await base(tableName).create([
      {
        fields: {
          ...data,
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

async function getFromAirtable(tableName) {
  return new Promise((resolve, reject) => {
    base(tableName).select({
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      const data = records.map(record => ({
        id: record.id,
        Name: record.get('Name'),
      }));

      resolve(data);

      fetchNextPage();
    }, function done(err) {
      if (err) {
        reject(err);
        return;
      }
    });
  });
}



export {saveToAirtable, getFromAirtable};