"use client";
import { supabase } from "@/utils/supabase";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "next/navigation";
import FilterAndSort from "../components/FilterAndSort";
import LibraryCard from "../components/LibraryCard";
export const revalidate = 60;

export default async function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { data } = await supabase
    .from("apps_script_libraries")
    .select(
      "library_id, description, recommended_version, updated_at, library_name, author, views"
    )
    .or(`description.ilike.%${q}%`)
    // .or(`library_name.ilike.${q}%`)git 

  const libraries: Array<Library> = (await data) || [];

  return (
    <div>
      <div className="px-[10%] md:px-[20%] pt-8 w-full">
        <SearchBar otherColor={false} />
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
