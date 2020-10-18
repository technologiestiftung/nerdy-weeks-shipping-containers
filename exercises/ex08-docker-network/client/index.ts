import { Client } from "pg";
/**
 * Ups someone left an error in this file. Where can we get the variables for
 * host, user and password from?
 */
const client = new Client({
  host: ,
  user: ,
  password:,
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
