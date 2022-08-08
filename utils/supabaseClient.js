import { createClient } from "@supabase/supabase-js";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
export const signInTwitch = async (redirectTo = `${baseUrl}/vote`) => {
  await supabase.auth.signIn(
    {
      provider: "twitch",
    },
    { redirectTo }
  );
};

export const signOutTwitch = async () => {
  await supabase.auth.signOut();
};

export default supabase;
