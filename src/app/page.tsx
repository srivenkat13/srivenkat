import Herosection from "@/components/Herosection";
import Featured from "@/components/Featured";
import Techstack from "@/components/Techstack";

export default function Home() {
  return (
    <>
      {/* <div className=" text-center">
        <h1 className=" mt-4 text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-500  text-transparent  inline-block bg-clip-text">
          Welcome to next
        </h1>
      </div> */}
      <Herosection />
      <Featured />
      <Techstack />
      <div className="h-[2rem] py-2  text-xs font-bold  antialiased text-neutral-300 text-center bg-white/[0.04]">
        🪄 By Venkat
      </div>
    </>
  );
}
