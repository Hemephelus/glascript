import { supabase } from "@/utils/supabase";
import { Roboto } from "next/font/google";
import SearchBar from "./components/SearchBar";
import LibrariesSection from "./components/LibrariesSection";

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
        <div className=" flex flex-col items-center text-center gap-1 tablet:gap-4 px-[5%] mobile-lg:px-[10%] tablet:px-[10%] pt-16 my-16">
          <h1 className="text-xl sm:text-3xl tablet:text-5xl font-semibold">
           Discover  <span className="text-primary">Apps Script</span><br />Libraries with <span className="text-secondary" >Ease</span>
          </h1>
          <p
            className={`${roboto.className} text-neutral_sub text-sm sm:text-base tablet:text-xl`}
          >
            Effortlessly find and integrate powerful Apps Script Libraries in
            your projects
          </p>
        </div>
        <div className="px-[5%] table:px-[] w-full">
          <SearchBar otherColor={false} />
        </div>
      </div>
      <LibrariesSection librariesData={libraries} showFilterSort={false}/>

    </div>
  );
}
