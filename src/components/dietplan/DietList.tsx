import { FC } from "react";
import { CalendarCheck, CalendarClock, CalendarDays } from "lucide-react";
import Link from "next/link";

const DietList = ({ active }: { active: any }) => {
  const dietFoodCategories = [
    { name: "Daily", icon: <CalendarCheck size={24} /> },
    { name: "Weekly", icon: <CalendarClock size={24} /> },
    { name: "Monthly", icon: <CalendarDays size={24} /> },
  ];
  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        {dietFoodCategories.map((category, index) => (
          <Link
            href={`/dashboard/diet-plans?frequency=${category.name.toLowerCase()}`}
            key={index}
            className={`flex items-center gap-2 ${
              active === category.name.toLowerCase()
                ? "bg-blue-200"
                : "bg-gray-100"
            } px-3 py-2 rounded-md shadow-md cursor-pointer`}
          >
            <div className="w-6 h-6">{category.icon}</div>
            <span className="text-gray-800">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DietList;
