import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
export const loginTwitch = async () => {
  await supabase.auth.signIn({
    provider: "twitch",
  });
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

export default supabase;
