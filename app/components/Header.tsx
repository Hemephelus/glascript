import Image from 'next/image'
import Link from 'next/link';

export default function Header() {
  return (
 <nav className='flex justify-between py-8 px-16'>
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
 <div className='flex gap-8 items-center'>
   
    <Link href="/docs">Docs</Link>
    <Link href="/about">About</Link>
    <Link href="/about">Community</Link>
    <Link href="/donation">Donation</Link>
    <Link href="/" className='secondary-button hover:border-b-2 hover:border-accent'>Login</Link>
    <Link href="/" className='primary-button hover:scale-95 duration-300'>Sign Up</Link>

 </div>
 </nav>
  )
}