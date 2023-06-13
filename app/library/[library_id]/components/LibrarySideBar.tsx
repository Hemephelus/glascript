import Image from "next/image";

type Props = {
   librarySideBarDetails: LibrarySideBar 
}
export default async function SideBar({ librarySideBarDetails }:Props) {
 
  return (
    <aside className=" bg-background_sub  px-4 py-8 rounded-lg sticky top-24 h-fit w-[400px] shadow-card flex flex-col gap-3">
      <div>
        <p>Script ID</p>
        <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
          <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
            {librarySideBarDetails?.library_id}
          </p>
          <button>
            <Image
              src="/copy.svg"
              alt="copy"
              className=" "
              width={24}
              height={24}
              priority
            ></Image>
          </button>
        </div>
      </div>
      <div>
        <p>Repository</p>
        <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
          {librarySideBarDetails?.repository_url ? (
            <a
              href={librarySideBarDetails?.repository_url}
              target="_blank"
              className="w-full overflow-hidden whitespace-nowrap text-ellipsis"
            >
              {librarySideBarDetails?.repository_url}
            </a>
          ) : (
            <p className=" opacity-50">No Link</p>
          )}
        </div>
      </div>
      <div>
        <p>Website</p>
        <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
          {librarySideBarDetails?.library_website ? (
            <a
              href={librarySideBarDetails?.library_website}
              target="_blank"
              className="w-full overflow-hidden whitespace-nowrap text-ellipsis"
            >
              {librarySideBarDetails?.library_website}
            </a>
          ) : (
            <p className=" opacity-50">No Link</p>
          )}
        </div>
      </div>
      <div className="flex gap-2 w-full justify-center">
        <div className="flex-1">
          <p>Versions</p>
          <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
            {librarySideBarDetails?.recommended_version ? (
              <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {librarySideBarDetails?.recommended_version} (Recommended)
              </p>
            ) : (
              <p className=" opacity-50">No Link</p>
            )}
          </div>
        </div>
        <div className="flex-1">
          <p>License</p>
          <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
            {librarySideBarDetails?.license_id ? (
              <p
                className="w-full overflow-hidden whitespace-nowrap text-ellipsis"
              >
                {librarySideBarDetails?.license_id}
              </p>
            ) : (
              <p className=" opacity-50">No Link</p>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
