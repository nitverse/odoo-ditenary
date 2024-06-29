import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/admin", "/admin/(.*)"]);

// export default clerkMiddleware((auth, req) => {
//   // Restrict admin routes to users with specific permissions
//   if (isProtectedRoute(req)) {
//     auth().protect((has) => {
//       return (
//         has({ permission: 'org:sys_memberships:manage' }) ||
//         has({ permission: 'org:sys_domains_manage' }) ||
//         has({ role: 'org:admin' })
//       );
//     });
//   }
// });
export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
