import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { getRelativeTimeString } from "@/utils/relativetime";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

interface LibraryCardProps {
  libraryData: Library;
}

const LibraryCard: React.FC<LibraryCardProps> = ({ libraryData }) => {
  function formatDate(date: string = "") {
    const milliseconds = Date.parse(date);
    return getRelativeTimeString(milliseconds,"en")
  }
  return (
      <Link
        href={`/library/${libraryData.library_id}`}
        key={libraryData.library_id}
      >
    <div className="bg-[#0000001A] hover:bg-[#00000033] duration-300 delay-100 shadow-card p-4 rounded-lg flex flex-col gap-1">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg mobile-lg:text-xl">{libraryData.library_name}</h1>

            <p className={` ${roboto.className} text-neutral_sub text-sm w-full  overflow-hidden whitespace-nowrap text-ellipsis`}>{libraryData.description}</p>
          </div>
          <div className={`text-xs ${roboto.className} flex flex-wrap gap-4 text-neutral_sub`}>
            <p>
              <span className="text-primary">{libraryData.author}</span>
            </p>
            <p>
            Updated: <span>{formatDate(libraryData.updated_at)}</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-xs mobile-lg:text-sm font-light text-neutral_sub border-t-secondary border-t pt-2">
      <div className="flex gap-1 items-center">
    
        <Image
          src="/views.svg"
          alt="views"
          className=" "
          width={24}
          height={24}
          priority
          >
        </Image>
        <span>Views : {libraryData.views}</span>
      </div>
      <div className="flex gap-1 items-center">
    
        <Image
          src="/recommend.svg"
          alt="recommend"
          className=" "
          width={24}
          height={24}
          priority
          >
        </Image>
        <span><span className="hidden mobile-lg:inline">Recommended</span> Version : {libraryData.recommended_version}</span>
      </div>
        </div>
    </div>
      </Link>
  );
  // Component implementation
};

export default LibraryCard;
