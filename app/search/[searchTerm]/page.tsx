import { supabase } from "@/utils/supabase";
import LibrariesSection from "@/app/components/LibrariesSection";
export const revalidate = 60;

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchPage({ params: { searchTerm } }: Props) {
  const { data } = await supabase
    .from("apps_script_libraries")
    .select(
      "library_id, description, recommended_version, updated_at, library_name, author, views"
    )
    .or(`description.ilike.%${searchTerm}%`)
    .limit(10);

  const libraries: Array<Library> = (await data) || [];

  return (
    <>
      <LibrariesSection librariesData={libraries} showFilterSort={false} />
    </>
  );
}
