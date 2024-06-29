"use client";
import { useAuth } from "@clerk/nextjs";

const Admin = () => {
  // const auth = useAuth();

  // if (!auth.isLoaded) {
  //   return <p>Loading...</p>;
  // }

  // if (!auth.isSignedIn || auth.orgRole !== "admin") {
  //   return <p>You do not have access to this page</p>;
  // }

  return (
    <div>
      <h1>Welcome to the Admin Page!</h1>
      {/* <p>{auth?.userId}</p> */}
    </div>
  );
};

export default Admin;
