import { supabase } from "@/utils/supabase";
import SideBar from "./components/LibrarySideBar";
import { Suspense } from "react";
import LibraryHeader from "./components/LibraryHeader";
import Link from "next/link";
import LoadingHeader from "./loadingSkeletons/HeaderSkeleton";

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

  return (
    <section className="bg-foreground min-h-screen  w-full px-[5%] ">
      <Suspense fallback={<LoadingHeader/>}>
        {/* @ts-expect-error Async Server Component */}
        <LibraryHeader libraryHeaderDetails={headerDetails} />
      </Suspense>
   
      <main className="grid grid-cols-[1fr,_auto] gap-4 relative pb-8">
        <div>
        <nav className="flex py-1 border-b-2 border-b-secondary gap-4 mb-4">
        <Link href={`/library/${library_id}/`} className="hidden tablet:flex hover:text-primary duration-300">
          Readme
        </Link>
        <Link href={`/library/${library_id}/code`} className="hidden tablet:flex hover:text-primary duration-300">
          Code
        </Link>
     
        {/* <Link href={`/library/${library_id}/ask-glas`} className="hidden tablet:flex">
          Ask Glas
        </Link> */}
      </nav>
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
