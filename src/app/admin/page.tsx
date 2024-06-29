import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import withRole from "@/components/WithRole";

type Props = {};

const Page: React.FC<Props> = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Page;
// export default withRole(Page, "org:admin");
