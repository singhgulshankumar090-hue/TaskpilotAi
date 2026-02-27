import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL is missing in environment variables");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

// Test DB connection
(async () => {
  try {
    await sql`SELECT 1`;
    console.log("✅ Neon database connected successfully");
  } catch (error) {
    console.error("❌ Neon database connection failed:", error.message);
  }
})();

export default sql;
