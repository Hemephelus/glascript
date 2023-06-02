"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/?q=${search}`);
  };

  return (
    <form
      id="search"
      method="GET"
      action="/search"
      className="flex w-1/2 gap-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        className=" bg-foreground p-2 w-full outline-none rounded"
        placeholder="Find a library"
        value={search}
      />
      <button
        className=" bg-foreground p-2 text-primary outline-none rounded"
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
    </form>
  );
}
