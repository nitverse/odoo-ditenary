import { currentUser } from "@clerk/nextjs/server";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
export default async function Home() {
  const user = await currentUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />
      <div className="h-[calc(100vh-100px)] w-full">
        <span>.</span>
      </div>
      <Footer />
    </div>
  );
}
