import React, {useRef} from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useOnClickOutside } from "../hooks/useOnclickOutside";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

type Props = {
  suggestions: Suggestions[];
  isLoading: boolean;
  otherColor: boolean;
  error: string | null;
  closeSearchResult: () => void;
};

function SearchResult({ suggestions, isLoading, otherColor, error, closeSearchResult }: Props) {
  const parentRef = useRef<any>(null)
  useOnClickOutside(parentRef,() => {closeSearchResult()})
  if (isLoading) {
    return (
      <div
        className={`absolute top-12 max-h-[300px] rounded ${
          otherColor ? "bg-background" : "bg-foreground"
        } w-full overflow-auto flex p-2 gap-2`}
      >
        <div className="h-2 w-2 bg-primary animate-spin"></div>
        <div className="h-2 w-2 bg-secondary animate-spin"></div>
        <div className="h-2 w-2 bg-neutral_sub animate-spin"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div
        className={`absolute top-12 max-h-[300px] rounded ${
          otherColor ? "bg-background" : "bg-foreground"
        } w-full overflow-auto flex p-2 gap-2 text-secondary`}
      >
        error
      </div>
    );
  }

  if (suggestions.length <= 0) {
    return <></>;
  }
  return (
    <div
      className={`absolute top-12 max-h-[300px] rounded ${
        otherColor ? "bg-background" : "bg-foreground"
      } w-full overflow-auto flex flex-col p-2 gap-2`}
      ref={parentRef}
    >
      {suggestions.map((suggestion) => (
        <Link
          href={`/library/${suggestion.library_id}`}
          key={suggestion.library_id}
          className={`px-2 py-2 border-b-secondary border-b`}
          onClick={closeSearchResult}
        >
          <h1 className="">{suggestion.library_name}</h1>

          <p
            className={` ${roboto.className} text-neutral_sub text-xs w-full  overflow-hidden whitespace-nowrap text-ellipsis`}
          >
            {suggestion.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default SearchResult;
