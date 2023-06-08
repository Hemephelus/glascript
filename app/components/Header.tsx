'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Header() {

  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeNavBg = () => {
   window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  return (
 <nav className={`px-4 py-4  flex justify-between md:pt-8 md:pb-4 md:px-[10%] sticky top-0 ${navBg?' bg-background':''}`} onScroll={changeNavBg}>
    <Link href="/">
        <Image
          src="/glascript.svg"
          alt="blue Line"
          className=" "
          width={125}
          height={25}
          priority
          >
        </Image>
    </Link>

 <div className='flex gap-2 md:gap-4 items-center'>
   
    <Link href="/docs" className='hidden md:flex'>Docs</Link>
    <Link href="/about" className='hidden md:flex'>About</Link>
    <Link href="/about" className='hidden md:flex'>Community</Link>
    <Link href="/donation" className='hidden md:flex'>Donation</Link>
    <Link href="/" className='secondary-button hover:border-b-2 hover:border-accent hidden md:flex'>Login</Link>
    <Link href="/" className='primary-button hover:scale-95 duration-300'>Sign Up</Link>

    <button className='bg-foreground p-1 rounded md:hidden' onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/more-outlined.svg"
          alt="blue Line"
          className="  "
          width={24}
          height={24}
          priority
          >
        </Image>
    </button>
 </div>

    <div className={`
      bg-foreground m-2 p-2 flex flex-col items-end absolute w-[90%] rounded duration-300 ${isOpen?"scale-100":"scale-0"}
    `} >
    <button className=' border-2 flex justify-center items-center border-primary rounded-full' onClick={() => setIsOpen(!isOpen)}>
        <Image
          src="/close.svg"
          alt="blue Line"
          className="  "
          width={24}
          height={24}
          priority
          >
        </Image>
    </button>
   
<div className="flex flex-col gap-4 w-full">
<Link href="/docs" className=''>Docs</Link>
    <Link href="/about" className=''>About</Link>
    <Link href="/about" className=''>Community</Link>
    <Link href="/donation" className=''>Donation</Link>
    <Link href="/" className='secondary-button hover:border-b-2 hover:border-accent '>Login</Link>
    <Link href="/" className='primary-button hover:scale-95 duration-300'>Sign Up</Link>
</div>

 </div>

    


 </nav>
  )
}