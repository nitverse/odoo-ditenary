import axios from "axios";

import DietCard from "@/components/dietplan/DietCard";
import { FC } from "react";
import DietList from "@/components/dietplan/DietList";

interface pageProps {}

const dietList = ["Spinach", "Broccoli"];

async function fetchImages(keywords: string[]) {
  // const requests = keywords.map((keyword) =>
  //   axios.get(`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`, {
  //     headers: { Authorization: process.env.PEXELS },
  //   })
  // );
  // try {
  //   const responses = await Promise.all(requests);
  //   const imagesPerKeyword = responses.map((res) => res.data.photos);
  //   return imagesPerKeyword;
  // } catch (error) {
  //   console.error("Error fetching images:", error);
  //   return [];
  // }
}

const DietPlan: FC<pageProps> = async ({}) => {
  const images = await fetchImages(dietList);
  return (
    <div className="m-2 w-full h-full">
      <div className="p-2">
        <DietList />
      </div>
      <div className="flex flex-wrap">
        {dietList.map((diet, i) => {
          return <DietCard key={i} idx={i} images={images} />;
        })}
      </div>
    </div>
  );
};

export default DietPlan;
