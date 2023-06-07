import { supabase } from "@/utils/supabase";
import { Roboto } from "next/font/google";
import SearchBar from "./components/SearchBar";
import FilterAndSort from "./components/FilterAndSort";
import LibraryCard from "./components/LibraryCard";
import Link from "next/link";

const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});




export default async function Home() {
  const { data } = await supabase
    .from("apps_script_libraries")
    .select("library_id, description, recommended_version, updated_at, library_name, author")
    .limit(10);
    
  const  libraries: Array<Library>  = await data || []
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div className="flex flex-col items-center">
  <div className="flex flex-col px-[10%] py-8 items-center">
  <div className=" flex flex-col items-center text-center gap-4 w-1/2 py-16 px-8">
        <h1 className="text-5xl font-semibold">
          Discover the Perfect Apps Script Library with Ease
        </h1>
        <p className={`${roboto.className} text-neutral_sub text-xl`}>
          Effortlessly find and integrate powerful Apps Script Libraries
          tailored to your project&apos;s needs
        </p>
      </div>
      <SearchBar />
  </div>
      <main className="bg-foreground w-full py-8 px-[10%]">
      <FilterAndSort />
     <div className="flex flex-col gap-4">
     {
        libraries?.map((library:Library) => (
          <div key={library.library_id}>

          <LibraryCard libraryData={library} />
          </div>
       
        ))
      }  
     </div>
    </main>
      {/* <pre>
    {JSON.stringify(posts,null,2)}
  </pre> */}
    </div>
  );
}
