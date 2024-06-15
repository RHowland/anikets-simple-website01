import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    
      <div className="grid grid-cols-2 p-20 place-items-center">
        <div>
          <h1 className='text-5xl font-bold'>Discover the Power of <br></br>Our Services.</h1>
          <p className='mt-4'>Transform the business with our innovative solutions.</p>
          <div className='flex gap-4 mt-4'>
            <button className="bg-black text-white p-2">Learn More</button>
            <button className="">Sign Up</button>
          </div>
        </div>
        <div>
          <Image 
            src="/Happy Couple.jpg" 
            alt="Happy Couple"
            width={500}
            height={500}
          />
        </div>
      </div>
    
  )
}

export default HomePage
/**
* =====================================================================
*   ORIGINAL DOCUMENTATION  (Append to end of component code block)
* =====================================================================
* File Name      : page.tsx
* Component Name : HomePage
* Component Type : Home Page
* Date Created   : 2024-06-15
* Dev Name       : Aniket Sapra
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To follow standard coding guidelines.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  :   It displays Home Page as per requirements.
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