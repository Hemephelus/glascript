"use client";
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

type Props = {
  otherColor: boolean;
};

async function getAutocompleteResult(search: string) {
  const { data } = await supabase
    .from("apps_script_libraries")
    .select("library_id, description, library_name, author")
    .or(`description.ilike.%${search}%`)
    .limit(10);

  return data;
}

function useDebounceValue(value: string, time = 200) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
}

export default function SearchBar({ otherColor }: Props) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const debounceSearch = useDebounceValue(search);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}/`);
  };

  useEffect(() => {
    let ignore = false;
    (async () => {
      if (debounceSearch.length > 0) {
        const data = (await getAutocompleteResult(debounceSearch)) || [];
        if (!ignore) {
          setSuggestions(data);
        }
      } else {
        setSuggestions([]);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [debounceSearch]);

  return (
    <form
      id="search"
      method="GET"
      action="/search"
      className="flex w-full gap-1 relative"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        className={` ${
          otherColor ? "bg-background" : "bg-foreground"
        } p-2 w-full outline-none rounded-l`}
        placeholder="Search libraries"
        value={search}
      />
      <button
        className={`${
          otherColor ? "bg-background" : "bg-foreground"
        }  p-2 text-primary outline-none rounded-r`}
        title="search"
      >
        <Image
          src="/search-icon.svg"
          alt="blue Line"
          className=" "
          width={32}
          height={32}
          priority
        ></Image>
      </button>
      <div className={`absolute top-12 max-h-[300px] rounded ${
          otherColor ? "bg-background" : "bg-foreground"
        } w-full overflow-auto flex flex-col p-2 gap-2`}>
        {suggestions.map((suggestion) => (
          <Link
            href={`/library/${suggestion.library_id}`}
            key={suggestion.library_id}
            className={`px-4 py-2 border-b-secondary border-b`}
          >
            <h1 className="text-lg">{suggestion.library_name}</h1>

            <p
              className={` ${roboto.className} text-neutral_sub text-sm w-full  overflow-hidden whitespace-nowrap text-ellipsis`}
            >
              {suggestion.description}
            </p>
          </Link>
        ))}
      </div>
    </form>
  );
}
