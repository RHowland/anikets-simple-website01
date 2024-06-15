import React from 'react'
import Image from "next/image";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <nav>
        <div className='flex flex-row pt-6'>
            <div className='pl-20 pr-10'>
            <Link href='/' className='flex'>
                <Image 
                alt='logo'
                src='/SimpleLogo.jpg'
                width={80}
                height={80}
                />
            </Link>
            </div>
            <div>
            <ul className='flex text-lg gap-10'>
                <li>
                <Link href="/AboutusPage">About Us</Link>
                </li>
                <li>
                <Link href="/ServicesPage">Services</Link>
                </li>
                <li>
                <Link href="/ContactPage">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavbarComponent
/**
* =====================================================================
*   ORIGINAL DOCUMENTATION  (Append to end of component code block)
* =====================================================================
* File Name      : NavbarComponent.tsx
* Component Name : NavbarComponent
* Component Type : Navbar 
* Date Created   : 2024-06-15
* Dev Name       : Aniket Sapra
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To follow standard coding guidelines.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  :   It displays Navbar as per requirements.
* 
* ------------------------------
* Footnote Comments:   (Enter "none" if you have no comments)
* none
* ------------------------------
* Input Comments:     (Enter "none" if you have no comments)
* none
* ------------------------------
* Output Comments:    (Enter "none" if you have no comments)
* none
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : no
*
*/