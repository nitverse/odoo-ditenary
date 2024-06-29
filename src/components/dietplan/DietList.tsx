import { FC } from "react";
import { CircleCheck, Wheat, Leaf, Apple, Salad, Bean } from "lucide-react";

interface DietListProps {}

const DietList: FC<DietListProps> = ({}) => {
  const dietFoodCategories = [
    { name: "Lean Proteins", icon: <CircleCheck size={24} /> },
    { name: "Whole Grains", icon: <Wheat size={24} /> },
    { name: "Leafy Greens", icon: <Leaf size={24} /> },
    { name: "Fresh Fruits", icon: <Apple size={24} /> },
    { name: "Vegetables", icon: <Salad size={24} /> },
    { name: "Nuts and Seeds", icon: <Bean size={24} /> },
  ];
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Select Your Preferred Category
      </h1>
      <div className="flex flex-wrap gap-4">
        {dietFoodCategories.map((category, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md shadow-md"
          >
            <div className="w-6 h-6">{category.icon}</div>
            <span className="text-gray-800">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietList;
