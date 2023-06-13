"use client";
import { useState, FormEvent, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useGetAutocompleteResult from "@/lib/useGetAutocompleteResult";
import SearchResult from "./SearchResult";
import { useDebounceValue } from "@/lib/useDebouncer";

type Props = {
  otherColor: boolean;
};



export default function SearchBar({ otherColor }: Props) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const debounceSearch = useDebounceValue(search);
  const router = useRouter();
  const { data, isLoading, error } = useGetAutocompleteResult(debounceSearch);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}/`);
  };

  useEffect(() => {
    setSuggestions(data);
  }, [data]);

  function closeSearchResult(){
    setSuggestions([])
  }

  return (
    <form
      id="search"
      method="GET"
      action="/search"
      className="flex w-full gap-1 relative z-10"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        id="search"
        className={` ${
          otherColor ? "bg-background" : "bg-foreground"
        } p-2 w-full outline-none rounded-l `}
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

      <SearchResult
        suggestions={suggestions}
        otherColor={otherColor}
        isLoading={isLoading}
        error={error}
        closeSearchResult={closeSearchResult}
      />
    </form>
  );
}
