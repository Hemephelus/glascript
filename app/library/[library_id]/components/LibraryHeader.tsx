import Image from "next/image";
import { Roboto } from "next/font/google";
import { getRelativeTimeString } from "@/utils/relativetime";
export const revalidate = 0
const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

type Props = {
    libraryHeaderDetails: LibraryHeader 
 }
 export default async function LibraryHeader({ libraryHeaderDetails }:Props) {
  console.log(libraryHeaderDetails);
  
  function formatDate(date: string = "") {
    const milliseconds = Date.parse(date);
    return getRelativeTimeString(milliseconds, "en");
  }

  return (
      <header className="flex items-end border-b-primary py-1 border-b-2 mb-4">
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg mobile-lg:text-xl">
              {libraryHeaderDetails?.library_name}
            </h1>

            <p
              className={` ${roboto.className} text-neutral_sub text-sm w-full  overflow-hidden whitespace-nowrap text-ellipsis`}
            >
              {libraryHeaderDetails?.description}
            </p>
          </div>
          <div
            className={`text-xs ${roboto.className} flex flex-wrap gap-4 text-neutral_sub`}
          >
            <p>
              <span className="text-primary">{libraryHeaderDetails?.author}</span>
            </p>
            <p>
              Updated: <span>{formatDate(libraryHeaderDetails?.updated_at)}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-xs mobile-lg:text-sm font-light text-neutral_sub pt-2 flex-1 justify-end">
          <div className="flex gap-1 items-center">
            <Image
              src="/views.svg"
              alt="views"
              className=" "
              width={24}
              height={24}
              priority
            ></Image>
            <span>Views : {libraryHeaderDetails?.views}</span>
          </div>
        
        </div>
      </header>
  );
}
