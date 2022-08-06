// @ts-nocheck
import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export default NextAuth({
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_ID,
      clientSecret: process.env.TWITCH_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {},
  pages: {},
  events: {},
  debug: false,
});
