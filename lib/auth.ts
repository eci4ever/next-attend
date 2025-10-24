import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin as adminPlugin, organization } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import db from "@/lib/db";
import * as schema from "@/drizzle/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [adminPlugin(), organization(), nextCookies()],
});
