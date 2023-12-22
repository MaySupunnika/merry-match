// import { createClient } from "@supabase/supabase-js";
// import dotenv from "dotenv";
// dotenv.config();
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

// import { createClient } from "@supabase/supabase-js";

// import dotenv from "dotenv";
// dotenv.config();

// const supabaseUrl = "YOUR_SUPABASE_URL";
// const supabaseKey = "YOUR_SUPABASE_API_KEY";

// const supabase = createClient(supabaseUrl, supabaseKey);

// export async function createUser(email, password) {
//   const { data, error } = await supabase.from("users").upsert([
//     {
//       email: email,
//       password: password,
//     },
//   ]);

//   if (error) {
//     console.error("Error creating user:", error);
//     return { success: false, error: error.message };
//   }

//   return { success: true, data: data[0] };
// }
