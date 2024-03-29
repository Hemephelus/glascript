import { supabase } from "@/utils/supabase";
import SideBar from "./components/LibrarySideBar";
import { Suspense } from "react";
import LibraryHeader from "./components/LibraryHeader";
import LoadingHeader from "./loadingSkeletons/HeaderSkeleton";
import { registerView } from "@/utils/helperFunctions";
import SubNavBar from "./components/SubNavBar";

export const revalidate = 0

type Props = {
  params: { library_id: string };
  children: React.ReactNode;
};

// if (!librarySideBarDetails) {
//   notFound();
// }
export default async function SearchPageLayout({
  children,
  params: { library_id },
}: Props) {
  // sidebar data
  const { data: sideBarData } = await supabase
    .from("apps_script_libraries")
    .select(
      "user_id, repository_url, recommended_version, license_id, library_id, library_website"
    )
    .match({ library_id })
    .single();
  const sideBarDetails: LibrarySideBar = (await sideBarData) || null;

  // header data
  const { data: headerData } = await supabase
    .from("apps_script_libraries")
    .select("updated_at, library_id, description, library_name, author, views")
    .match({ library_id })
    .single();
  const headerDetails: LibraryHeader = (await headerData) || null;

  await registerView(library_id);

  return (
    <section className="bg-foreground min-h-screen  w-full px-[5%] ">
      <Suspense fallback={<LoadingHeader />}>
        {/* @ts-expect-error Async Server Component */}
        <LibraryHeader libraryHeaderDetails={headerDetails} />
      </Suspense>

      <main className="flex flex-col-reverse laptop:grid laptop:grid-cols-[1fr,_minmax(200px,400px)] gap-4 relative pb-8">
        <div>
         <SubNavBar library_id={library_id}/>
          {children}
        </div>
        <Suspense fallback={<h2>Loading...</h2>}>
          {/* @ts-expect-error Async Server Component */}
          <SideBar librarySideBarDetails={sideBarDetails} />
        </Suspense>
      </main>
    </section>
  );
}
