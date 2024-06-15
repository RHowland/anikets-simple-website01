import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer className='self-end w-full'>
      <div className='footerline'></div>
      <div className='flex justify-between mt-7 mb-10'>
        <div className='ml-20'>
        <Link href='/'>
          <Image 
            alt='logo'
            src='/SimpleLogo.jpg'
            width={70}
            height={70}
          />
        </Link>
        </div>
        <div>
          <ul className='flex text-lg gap-7'>
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
        <div className='mr-20'>
          <ul className='flex text-lg gap-2'>
            <li>
              <Image src='/icons8-facebook-48.png' 
                alt='facebook icon'
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </li>
            <li>
              <Image src='/icons8-instagram-48.png' 
                alt='instagram icon'
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </li>
            <li>
              <Image src='/icons8-linkedin-48.png' 
                alt='linkedin icon'
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </li>
            <li>
              <Image src='/icons8-youtube-48.png' 
                alt='youtube icon'
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
/**
* =====================================================================
*   ORIGINAL DOCUMENTATION  (Append to end of component code block)
* =====================================================================
* File Name      : FooterComponent.tsx
* Component Name : FooterComponent
* Component Type : Footer 
* Date Created   : 2024-06-15
* Dev Name       : Aniket Sapra
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To follow standard coding guidelines.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  :   It displays Footer as per requirements.
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