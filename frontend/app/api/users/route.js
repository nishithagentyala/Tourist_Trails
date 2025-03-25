// pages/api/users.js
import { connectToDatabase } from "../../../lib/mongodb";

export async function GET(req) {
  const db = await connectToDatabase();
  console.log(db);
  try {
    const users = await db.collection("users").find({}).toArray();
    console.log(users);
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
      status: 500,
    });
  }
}
export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    const result = await db
      .collection("users")
      .insertOne({ username, email, password, createdAt: new Date() });
    return new Response(JSON.stringify(result.ops[0]), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create user" }), {
      status: 500,
    });
  }
}
