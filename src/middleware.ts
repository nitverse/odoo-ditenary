import { clerkMiddleware } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

export default clerkMiddleware();
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
