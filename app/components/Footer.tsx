import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
  return (
 <nav className='flex flex-col gap-4 px-[10%] py-8'>
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
 <div className='flex flex-col items-end gap-2'>
   
    <Link href="/docs">Docs</Link>
    <Link href="/about">About</Link>
    <Link href="/community">Community</Link>
    <Link href="/donation">Donation</Link>


 </div>
 </nav>
  )
}