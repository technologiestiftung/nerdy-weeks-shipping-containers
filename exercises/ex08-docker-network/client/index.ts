import { Client } from "pg";
const client = new Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});
(async () => {
  try {
    await client.connect();
    const res = await client.query("SELECT $1::text as message", [
      "Hello world!",
    ]);
    console.log(res.rows[0].message); // Hello world!
    await client.end();
  } catch (error) {
    console.error(error);
  }
})();
