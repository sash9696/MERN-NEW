import fs from "node:fs/promises";

// const DB_PATH = new URL("../db.json", import.meta.url).pathname;

// correct way
//cross platform compatible
import { fileURLToPath } from 'url';

const DB_PATH = fileURLToPath(new URL('../db.json', import.meta.url));


// get data

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");

  return JSON.parse(db);
};

// save the data

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};

// insert the data

export const insert = async (data) => {
  const db = await getDB();
  db.notes.push(data);
  await saveDB(db);
};
