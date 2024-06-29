"use client";
import { useAuth } from "@clerk/nextjs";

const Users = () => {
  // const auth = useAuth();

  // if (!auth.isLoaded) {
  //   return <p>Loading...</p>;
  // }

  // if (!auth.isSignedIn || auth.orgRole !== "Member") {
  //   return <p>You do not have access to this page</p>;
  // }
  return (
    <div>
      <h1>Welcome to the Users Page!</h1>
      {/* Add any content or components specific to the Users page here */}
    </div>
  );
};

export default Users;
