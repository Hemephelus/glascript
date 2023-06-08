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
  const {data} = await supabase
    .from("apps_script_libraries")
    .select(
      "library_id, description, recommended_version, updated_at, library_name, author, views"
    )
    .limit(5);

  const libraries: Array<Library> = (await data) || [];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className=" flex flex-col items-center text-center gap-1 md:gap-4 px-[10%] md:px-[20%] my-16">
          <h1 className="text-2xl md:text-5xl font-semibold">
            Discover Apps Script Library with Ease
          </h1>
          <p
            className={`${roboto.className} text-neutral_sub text-sm md:text-xl`}
          >
            Effortlessly find and integrate powerful Apps Script Libraries in
            your projects
          </p>
        </div>
        <div className="px-[10%] md:px-[20%] w-full">
          <SearchBar otherColor={false} />
        </div>
      </div>
      <main className="bg-foreground w-full py-8 px-4 lg:px-[20%] space-y-4 my-8">
        <FilterAndSort />
        <div className="flex flex-col gap-4">
          {libraries?.map((library: Library) => (
            <div key={library.library_id}>
              <LibraryCard libraryData={library} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
