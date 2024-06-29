import axios from "axios";
import { redirect } from "next/navigation";
import getDietPlan from "@/actions/openAI";
import { prisma } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import DietCard from "@/components/dietplan/DietCard";
import DietList from "@/components/dietplan/DietList";

interface pageProps {}

async function fetchImages(keywords: string[]) {
  const requests = keywords.map((keyword) =>
    axios.get(`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`, {
      headers: { Authorization: process.env.PEXELS },
    })
  );
  try {
    const responses = await Promise.all(requests);
    const imagesPerKeyword = responses.map((res) => res.data.photos);
    return imagesPerKeyword;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
  // return [];
}

const DietPlan = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let frequency;
  if (searchParams && searchParams.frequency) {
    frequency = searchParams.frequency;
  } else {
    frequency = "daily";
  }
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;

  const dbUser = await prisma.user.findUnique({ where: { id: user.id } });
  if (!dbUser) return <div>User not found</div>;

  if (!dbUser.height || !dbUser.weight || !dbUser.age) {
    redirect("/dashboard/user-details");
  }

  const prompt = `Return an array (with 4 objects) containing name, description and tags (1-2 word describing benefits) of meal which user should eat/follow. Here are the user details. Gender: ${dbUser.gender}, Height: ${dbUser.height}, Weight: ${dbUser.weight}, Age: ${dbUser.age}, dietaryPreference: ${dbUser.dietaryPreferences}, goal: ${dbUser.healthGoals}, allergies: ${dbUser.allergies}, frequency: ${frequency}. NO OTHER TEXT OR EXPLANATION, JUST THE ARRAY.`;
  let dietPlan = await getDietPlan(prompt);
  dietPlan = JSON.parse(dietPlan);
  console.log("BELOW IS MY DIET PLAN");
  console.log(dietPlan);

  const images = await fetchImages(dietPlan.map((diet: any) => diet.name));
  return (
    <div className="m-2 w-full h-full">
      <div className="p-2">
        <DietList active={frequency} />
      </div>
      <div className="flex gap-10 flex-wrap ml-10">
        {dietPlan.map((diet: any, i: number) => {
          return (
            <DietCard
              name={diet.name}
              description={diet.description}
              tags={diet.tags}
              key={i}
              idx={i}
              images={images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DietPlan;
