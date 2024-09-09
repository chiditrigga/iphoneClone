"use client"
import {motion, AnimatePresence} from 'framer-motion'
import Image from 'next/image'
import all from "@/public/images/all_colors.jpg"
import white from "@/public/images/white_titanium.jpg"
import natural from "@/public/images/natural_titanium.jpg"
import blue from "@/public/images/blue_titanium.jpg"
import black from "@/public/images/black_titanium.jpg"
import swatch from "@/public/images/swatch_all.jpg"
import { useState } from 'react'

const closerlook = () => {
    const imageList = [
        {
            link: all,
            des:'6.1” iPhone 15 Pro1 in four colors'
        },
        {
            link: natural,
            des:'6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Natural Titanium'
        },
        {
            link: blue,
            des:'6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Blue Titanium'
        },
        {
            link: white,
            des:'6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in White Titanium'
        },
        {
            link: black,
            des:'6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Black Titanium'
        }
    ]
    const [currentImage, setCurrentImage] = useState(all);
  return (
    <div className=' md:py-44'>

     <motion.div
      initial={{
        opacity:0,
        y:40
      }}
      whileInView={{
        opacity:1,
        y:0

      }}

      transition={{
        duration:0.5,
        ease:'easeIn'
      }}
     className='md:ms-16 text-2xl ps-3 md:ps-0 md:text-5xl font-bold text-[#86868b] opacity-0'>Take a closer look.</motion.div>
    
     <div className=' relative mt-10 w-screen h-[30rem] md:h-[30rem]'>
      
      <motion.div
      className='flex justify-center absolute w-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: currentImage === white ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      >
        <Image src={white} alt="iPhone Image" />
      </motion.div>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: currentImage === black ? 1 : 0 }}
       transition={{ duration: 0.6 }}
      className='flex justify-center absolute w-screen opacity-0'
       
      >
        <Image src={black} alt="iPhone Image" />
      </motion.div>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: currentImage === blue ? 1 : 0 }}
       transition={{ duration: 0.6}}
      className='flex justify-center absolute w-screen opacity-0'
       
      >
        <Image src={blue} alt="iPhone Image" />
      </motion.div>
      <motion.div
       initial={{ opacity: 1 }}
       animate={{ opacity: currentImage === all ? 1 : 0 }}
       transition={{ duration: 0.6 }}
      className='flex justify-center absolute w-screen opacity-0'
       
      >
        <Image className='w-[90vw]  md:w-fit' src={all} alt="iPhone Image" />
      </motion.div>

      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: currentImage === natural ? 1 : 0 }}
       transition={{ duration: 0.8 }}
      className='flex justify-center absolute w-screen opacity-0'
       
      >
        <Image src={natural} alt="iPhone Image" />
      </motion.div>
      
</div>
      
      <div className="flex justify-center">
        <div className='flex bg-[#424245] mt-5 px-6 py-4 rounded-full gap-4'>

         <div>
             <Image
         src={swatch}
          onClick={() => setCurrentImage(all)}
          className="bg-none cursor-pointer"
        />
         </div>
         <div
          onClick={() => setCurrentImage(natural)}
          className=" h-6 w-6 bg-[#8f8a81] cursor-pointer rounded-full"
        >
            </div>
            <div
          onClick={() => setCurrentImage(blue)}
          className="h-6 w-6 bg-[#202630] cursor-pointer rounded-full"
        >
         
        </div>
          
        
         <div
          onClick={() => setCurrentImage(white)}
          className="h-6 w-6 bg-[#c9c8c3] cursor-pointer rounded-full"
        >
        
        </div>
       
       
       

        <div
          onClick={() => setCurrentImage(black)}
          className="h-6 w-6 bg-[#242526] cursor-pointer rounded-full"
        >
       
        </div>

        

       

       

      
        </div>
    </div>

       
                 
    </div>
             
           
        
        
   



  )
}

export default closerlook