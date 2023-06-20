'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";


type Props = {
    library_id: string 
 }
export default function SubNavBar({ library_id }:Props) {
    const pathname = usePathname()
    const [currentPage, setCurrentPage] = useState('readme')
    useEffect(() => {
        let newCurrentPage = pathname.split('/')[3]
        if(!newCurrentPage){
            newCurrentPage = 'readme'
        }
      setCurrentPage(newCurrentPage)
    
    }, [pathname])

  return (
    <nav className="flex py-1 border-b-2 border-b-secondary gap-4 mb-4">
    <Link
      href={`/library/${library_id}/`}
      className={`hidden tablet:flex hover:text-primary ${currentPage==='readme'?'text-primary':''} duration-300 flex items-center gap-1 text-lg`}
    >
        <Image
          src="/readme.svg"
          alt="blue Line"
          className=" "
          width={20}
          height={20}
          priority
          >
        </Image>
      Readme
    </Link>
    <Link
      href={`/library/${library_id}/code`}
      className={`hidden tablet:flex hover:text-primary ${currentPage==='code'?'text-primary':''} duration-300 text-lg flex items-center gap-1`}
    >
        <Image
          src="/code.svg"
          alt="blue Line"
          className="text-primary "
          width={20}
          height={20}
          priority
          color={`${currentPage==='code'?'#1A73E8':''}`}
          >
        </Image>
      Code
    </Link>

    {/* <Link href={`/library/${library_id}/ask-glas`} className="hidden tablet:flex">
  Ask Glas
</Link> */}
  </nav>
  )
}