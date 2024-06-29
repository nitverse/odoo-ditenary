import DashboardContent from "@/components/DashboardContent";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
import { FC } from "react";
interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  
  return (
      <div className="h-full">
        <Navbar />
        <div className="w-[72px] z-30 flex mt-32">
        <Sidebar />
        {children}
        <main className="md:pl-[250px] h-full">{children}</main>
        </div>
      </div>
  );
};

export default layout;
