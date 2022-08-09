import { createClient, User } from "@supabase/supabase-js";

const baseUrl = process.env.NEXT_VERCEL_URL
  ? `https://${process.env.NEXT_VERCEL_URL}`
  : "http://localhost:3000";
const VOTES_TABLE = "votes";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ""
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

// TODO: handle errors
export const getUsersVote = async (userId: User["id"]) => {
  const { data, error } = await supabase
    .from(VOTES_TABLE)
    .select("vote")
    .filter("user_id", "eq", userId);

  return data;
};

// TODO: handle errors
export const updateVoteForUser = async (userId: User["id"], vote: string) => {
  const { data, error } = await supabase
    .from(VOTES_TABLE)
    .update({ vote: vote })
    .eq("user_id", userId);

  return data;
};

// TODO: handle errors
export const insertVoteForUser = async (userId: User["id"], vote: string) => {
  const { data, error } = await supabase
    .from(VOTES_TABLE)
    .insert({ user_id: userId, vote: vote }, { returning: "minimal" });

  return data;
};

export default supabase;
