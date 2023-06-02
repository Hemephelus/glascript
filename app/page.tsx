import { supabase } from "@/utils/supabase";
import { Roboto } from "next/font/google";
import SearchBar from "./components/SearchBar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

export default async function Home() {
  const { data: posts } = await supabase
    .from("apps_script_libraries")
    .select("*");

  return (
    <div className="flex flex-col py-8 px-16 items-center">
      <div className=" flex flex-col items-center text-center gap-4 w-1/2 py-16 px-8">
        <h1 className="text-5xl font-semibold">
          Discover the Perfect Apps Script Library with Ease
        </h1>
        <p className={`${roboto.className} text-neutral_sub text-xl`}>
          Effortlessly find and integrate powerful Apps Script Libraries
          tailored to your project's needs
        </p>
      </div>
      <SearchBar />
      {/* <pre>
    {JSON.stringify(posts,null,2)}
  </pre> */}
    </div>
  );
}
