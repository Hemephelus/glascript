'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';

export default function Header() {

  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeNavBg = () => {
   window.scrollY >= 20 ? setNavBg(true) : setNavBg(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])

  return (
 <nav className={`z-20 px-4 py-4 w-full  flex justify-between tablet:pt-8 tablet:pb-4 tablet:px-[5%] duration-300 fixed top-0 ${navBg?' bg-background':''}`} onScroll={changeNavBg}>
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

 <div className='flex gap-2 tablet:gap-4 items-center'>
   
    <Link href="/docs" className='hidden tablet:flex'>Docs</Link>
    <Link href="/about" className='hidden tablet:flex'>About</Link>
    <Link href="https://discord.gg/n9hrcnCSNT" target='_blank' title='Community'  className='hidden tablet:flex'> <Image
          src="/discord.svg"
          alt="blue Line"
          className="  "
          width={24}
          height={24}
          priority
          >
        </Image></Link>
    {/* <Link href="/donation" className='hidden tablet:flex'>Donation</Link> */}
    {/* <Link href="/" className='secondary-button hover:border-b-2 hover:border-accent hidden tablet:flex'>Login</Link>
    <Link href="/" className='primary-button hover:scale-95 duration-300'>Sign Up</Link> */}

    <button className='bg-foreground p-1 rounded tablet:hidden' onClick={() => setIsOpen(!isOpen)}>
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
    <Link href="https://discord.gg/n9hrcnCSNT" target='_blank' className=''>Community</Link>
    {/* <Link href="/donation" className=''>Donation</Link> */}
    {/* <Link href="/" className='secondary-button hover:border-b-2 hover:border-accent '>Login</Link>
    <Link href="/" className='primary-button hover:scale-95 duration-300'>Sign Up</Link> */}
</div>

 </div>

    


 </nav>
  )
}