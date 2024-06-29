import React from "react";
import { auth } from "@clerk/nextjs/server";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Unauthorized from "@/components/Unauthorized";
import withRole from "@/components/WithRole";

type Props = {};

const page = (props: Props) => {
  const { has } = auth();

  const canAccess = has({ permission: "org:sys_profile:manage" });

  if (!canAccess) return <Unauthorized />;

  return (
    <div>
      {/* <Navbar /> */}
      <Sidebar />
    </div>
  );
};

// export default WithRole(page,"org:admin");
export default page;
