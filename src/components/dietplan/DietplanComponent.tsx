import React from "react";
import Image from "next/image";

const DietPlanComponent: React.FC = () => {
  const dietPlan = {
    name: "Balanced Diet Plan",
    description:
      "A well-rounded diet focusing on lean proteins, whole grains, fruits, and vegetables, ensuring nutrient variety and portion control for optimal health.",
    caloricIntake: "1500-2000 calories per day",
    nutritionalGuidelines:
      "Balanced macronutrient distribution with emphasis on whole foods and adequate micronutrient intake.",
    allowedFoods: "Lean proteins, whole grains, fruits, vegetables",
    restrictedFoods: "Processed foods, high-sugar items",
    mealFrequency: "3 meals + 2 snacks per day",
    portionSizes: "Controlled portions to meet caloric and nutritional needs",
    mealPlans:
      "Example meal plans include breakfast: oatmeal with fruits, lunch: grilled chicken salad, dinner: salmon with quinoa.",
    hydrationRecommendations:
      "Drink at least 8 glasses (64 ounces) of water per day.",
    exerciseRecommendations: "Moderate-intensity exercise 3-5 times per week.",
    lifestyleRecommendations:
      "Ensure adequate sleep (7-9 hours per night) and manage stress through relaxation techniques.",
    shoppingLists:
      "Weekly grocery list includes fresh produce, lean meats, whole grains.",
    cookingTips:
      "Use healthy cooking methods like baking, grilling, or steaming.",
    mealPrep: "Prepare meals in advance to maintain dietary consistency.",
  };
  return (
    <div className="container mx-auto py-8 w-full">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-80">
          <Image
            src="/images/diet-plan-placeholder.jpg"
            alt="Diet Plan Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {dietPlan.name}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{dietPlan.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Nutritional Guidelines
            </h3>
            <p>
              <span className="font-semibold">Caloric Intake:</span>{" "}
              {dietPlan.caloricIntake}
            </p>
            <p>
              <span className="font-semibold">Macro and Micro-nutrients:</span>{" "}
              {dietPlan.nutritionalGuidelines}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Food Lists</h3>
            <p>
              <span className="font-semibold">Allowed Foods:</span>{" "}
              {dietPlan.allowedFoods}
            </p>
            <p>
              <span className="font-semibold">Restricted Foods:</span>{" "}
              {dietPlan.restrictedFoods}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Meal Structure</h3>
            <p>
              <span className="font-semibold">Meal Frequency:</span>{" "}
              {dietPlan.mealFrequency}
            </p>
            <p>
              <span className="font-semibold">Portion Sizes:</span>{" "}
              {dietPlan.portionSizes}
            </p>
            <p>
              <span className="font-semibold">Meal Plans:</span>{" "}
              {dietPlan.mealPlans}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Hydration Recommendations
            </h3>
            <p>{dietPlan.hydrationRecommendations}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Exercise and Lifestyle Recommendations
            </h3>
            <p>
              <span className="font-semibold">Physical Activity Levels:</span>{" "}
              {dietPlan.exerciseRecommendations}
            </p>
            <p>
              <span className="font-semibold">Lifestyle Guidelines:</span>{" "}
              {dietPlan.lifestyleRecommendations}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Supporting Information
            </h3>
            <p>
              <span className="font-semibold">Shopping Lists:</span>{" "}
              {dietPlan.shoppingLists}
            </p>
            <p>
              <span className="font-semibold">Cooking Tips:</span>{" "}
              {dietPlan.cookingTips}
            </p>
            <p>
              <span className="font-semibold">Meal Prep:</span>{" "}
              {dietPlan.mealPrep}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlanComponent;
