import { knex } from 'knex';
import { Model } from 'objection';

// initialize knex
export const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.HOST,
    port: 10744,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
  migrations: {
    tableName: 'migrations',
  },
});

Model.knex(db);

export async function connectDb(): Promise<void> {
  await db.raw('SELECT VERSION()');
  console.log('database connected successfully');
}
