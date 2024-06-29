import React from "react";
import Image from "next/image";

const DietPlanComponent: React.FC = () => {
  return (
    <div className="flex flex-col mt-6 text-gray-700 bg-white shadow-md rounded-xl w-full lg:w-80">
      <div className="lg:flex lg:flex-row">
        <div className="lg:w-1/2 relative h-40 lg:h-auto overflow-hidden rounded-tl-xl rounded-bl-xl lg:rounded-bl-none lg:rounded-tr-xl">
          <Image
            src=""
            layout="fill"
            objectFit="cover"
            alt="Dietplan"
            className="rounded-tl-xl rounded-bl-xl lg:rounded-bl-none lg:rounded-tr-xl"
          />
        </div>

        <div className="lg:w-1/2 bg-blue-gray-100 p-6 rounded-br-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl">
          <h5 className="mb-2 font-semibold text-xl text-blue-gray-900">
            Nutrition Plan
          </h5>
          <p className="text-base text-gray-900 leading-relaxed">
            A balanced diet includes lean proteins, whole grains, fruits, and
            vegetables, ensuring nutrient variety and portion control for
            optimal health.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs uppercase font-semibold">
              Lean Proteins
            </span>
            <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs uppercase font-semibold">
              Whole Grains
            </span>
            <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs uppercase font-semibold">
              Fruits
            </span>
            <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs uppercase font-semibold">
              Vegetables
            </span>
          </div>
          <div className="mt-6">
            <button
              className="font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none"
              type="button"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietPlanComponent;
