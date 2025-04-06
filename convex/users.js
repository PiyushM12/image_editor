import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if a user with the given email already exists
    const existingUsers = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (existingUsers.length === 0) {
      // Insert new user if not found
      const userId = await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        picture: args.picture,
      });

      return { _id: userId, ...args };
    }

    // Return the existing user
    return existingUsers[0];
  },
});
