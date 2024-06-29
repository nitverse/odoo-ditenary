import DietCard from "@/components/dietplan/DietCard";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <DietCard />
    </div>
  );
};

export default page;
