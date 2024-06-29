import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-full min-w-max">
      <div className="font-bold text-4xl">
        <h1>User Details</h1>
      </div>
    </div>
  );
};

export default page;
