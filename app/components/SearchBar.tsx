"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  otherColor: boolean
}

export default function SearchBar({otherColor}:Props) {
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
      className="flex w-full gap-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        className={` ${otherColor?"bg-background":"bg-foreground"} p-2 w-full outline-none rounded`}
        placeholder="Find a library"
        value={search}
      />
      <button
        className={`${otherColor?"bg-background":"bg-foreground"}  p-2 text-primary outline-none rounded`}
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
