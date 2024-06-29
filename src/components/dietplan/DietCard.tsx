import Image from "next/image";
import Link from "next/link";

const DietCard = ({
  name,
  description,
  tags,
  images,
  idx,
}: {
  name: any;
  description: any;
  tags: any;
  images: any;
  idx: number;
}) => {
  const dietPlan = "page";
  console.log("inside dietcard");
  console.log(name, description, tags);

  // console.log(images[idx][0].src);
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80">
      <div className="relative h-40 mx-4 -mt-6 overflow-hidden rounded-xl">
        {images.length > 0 && (
          <Image
            src={images[idx][0]?.src.landscape}
            // width={60}
            // height={70}
            layout="fill"
            objectFit="cover"
            alt="Dietplan"
            className="rounded-xl"
          />
        )}
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-900">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags &&
            tags?.length > 0 &&
            tags.map((tag: any, i: number) => {
              return (
                <span
                  key={i}
                  className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs uppercase font-semibold"
                >
                  {tag}
                </span>
              );
            })}
        </div>
      </div>
      <div className="p-6 pt-0 bottom-0">
        <Link href={`/dashboard/diet-plans/${dietPlan}`}>
          <button
            className="font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DietCard;
