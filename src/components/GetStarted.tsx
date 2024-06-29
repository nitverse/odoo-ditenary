import Image from "next/image";

const GetStarted = () => {
  return (
    <div className="bg-yellow-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 relative h-96">
          <Image
            src="/images/get-started-image.jpg"
            alt="Get Started Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-3/5 bg-green-300 p-12 rounded-lg">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Get Started
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Begin your journey to better health with our personalized diet plans
            tailored to your needs. Whether you're looking to lose weight, build
            muscle, or simply eat healthier, we have a plan for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
