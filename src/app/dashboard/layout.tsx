import DashboardContent from "@/components/DashboardContent";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { FC } from "react";
interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="h-full w-full">
      <div className="z-30 flex w-full overflow-hidden">
        <Sidebar />
        <div className="absolute left-[16rem]">{children}</div>
      </div>
    </div>
  );
};

export default layout;
