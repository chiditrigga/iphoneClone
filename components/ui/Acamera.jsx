
import { motion,useScroll } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import iphonegirl from '@/public/images/phonegirl.jpg'
import zoom1 from '@/public/images/zoom1.jpeg'
import zoom5 from '@/public/images/zoom5.jpeg'

import Image from "next/image";


const Acamera = () => {

  return (
    <div className="md:mt-[15rem]  mx-auto">


 <motion.div className=" md:mt-20 lg:max-w-[80vw] xl:max-w-[70vw] mx-3 md:mx-auto md:px-10 text-2xl mb-[3rem]  2xl:px-56 font-semibold md:text-5xl xl:text-7xl 2xl:text-7xl"
 initial={{
    opacity:0,
    y:'20px'
 }}
 whileInView={{
    opacity:1,
    y:0
 }}
 transition={{
    duration:0.3,
    ease:'easeIn'
 }}
 >

<span className=" md:leading-[3.5rem]">A camera that captures your wildest imagination.</span> 


 </motion.div>
 <motion.div  className=" font-semibold md:text-2xl text-[#86868b] lg:max-w-[70vw] mx-3 md:mx-auto my-5 md:my-8">
 From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.
 </motion.div>
<div className="p-4   dark:bg-neutral-900 bg-transparent   px-4">
    
    <Compare
      firstImage="https://www.apple.com/v/iphone-15-pro/c/images/overview/camera/camera__bo5k5tfk6cmu_large.jpg"
      secondImage="https://www.apple.com/v/iphone-15-pro/c/images/overview/camera/camera__bo5k5tfk6cmu_large.jpg"
      firstImageClassName="object-cover object-left-top"
      secondImageClassname="object-cover object-left-top"
      className="h-[250px] w-[95vw] mx-auto md:h-[900px] md:w-full"
      slideMode="hover"
    />
  </div>


  <div className=" font-semibold  text-[#86868b]  lg:max-w-[70vw] mx-auto my-5 md:my-8">
  A green iguana, captured by the 48MP Main camera
 </div>



     {/* iphone girl */}


     <div className="mt-40 md:mt-56  xl:gap-x-5 md:gap-x-5 grid md:grid-cols-2 w-[80vw]  xl:w-[60vw] mx-auto ">
       
       <motion.div 
       initial={{
        opacity:0
       }}

       whileInView={{
        opacity:1
       }}

       transition={{
        duration:0.7,
        
       }}

       viewport={{
        margin:'-200px'
       }}
       >
         <Image src={iphonegirl} alt="iphone" />
       </motion.div>
       <motion.div 
       
       
       className="text-[#86868b] font-bold text-xl flex flex-col justify-center h-full my-10 md:my-1">
      <motion.span
      

      initial={{
        opacity:0,
        y:'30px'
       }}

       whileInView={{
        opacity:1,
        y:0
       }}

       transition={{
        duration:0.6,
        
       }}

       viewport={{
        margin:'-200px'
       }}
      
      className=" leading-8">The 48MP Main camera is more advanced than ever, capturing superhighresolution photos with a <span className=" text-white">new level of detail and color</span> .</motion.span> 
      <br />

       <motion.div 
         initial={{
          opacity:0,
          y:'30px'
         }}
  
         whileInView={{
          opacity:1,
          y:0
         }}
  
         transition={{
          duration:0.6,
          
         }}
  
         viewport={{
          margin:'-100px'
         }}
       
       
       
       
       
       >
         <span

         
         
         className=" leading-8 text-pretty">
            Youll see the improvements in your portraits. And now you no longer have to switch to Portrait mode. If your subject is a person, dog, or cat, iPhone automatically captures depth information. So you can choose to instantly <span className=" text-white">see your photo as a portrait</span> , with an artful blur effect. Or later in the Photos app.
         </span>
       
       </motion.div>

       </motion.div>
       
         
      



    
     </div>
     <div className="  my-32 border-b border-[#86868b]  w-[80vw]  xl:w-[70vw] mx-auto">
       
       </div>

       {/* 120 mm */}

       
       <div>
           


       <div  className=" md:w-[80vw] lg:w-[70vw] xl:w-[50vw] md:text-4xl text-base md:mx-auto text-center font-semibold px-2  leading-[2rem]">
       Shoot magical spatial videos,
       then relive them on Apple Vision Pro


    
       </div>

        <div className=" mt-24 md:mt-96 md:mb-24">

              <div  className=" md:mt-20 lg:max-w-[60vw] md:max-w-[70vw] xl:max-w-[45vw]  mx-auto md:px-10 text-3xl mb-[3rem]  2xl:px-56 font-semibold lg:text-7xl md:text-6xl xl:text-7xl 2xl:text-7xl max-w-[70vw]  text-center">
             

              <span className=" md:leading-[3.5rem]"> 120 mm of pure Pro zoom.</span> 

              </div>



        </div>


            <div className="px-2">
                  
              <Image className=" mx-auto" src={zoom5} alt="zoom" />
            </div>
           
           <div>
            
           <div style={{lineHeight:'2rem'}} className=' mt-12 px-3 md:mt-16 xl:gap-x-10 md:gap-x-10 grid text-[#86868b] font-bold text-xl md:grid-cols-2 md:w-[90vw] xl:w-[70vw] mx-auto'>
        <div>
            <motion.div 
             initial={{
                y:30,
                opacity:0
             }}
             whileInView={{
                y:0,
                opacity:1,

             }}
             
             transition={{
                duration:0.4,
                ease:'easeIn'
             }}
             viewport={{
              margin:'-100px'
             }}
            >
            For iPhone 15 Pro Max, we designed a 5x Telephoto camera with the <span className=' text-white'>the longest optical zoom of any iPhone ever</span> to fit in our compact Pro camera system.
            </motion.div>
            <motion.div 
             initial={{
                y:30,
                opacity:0
             }}
             whileInView={{
                y:0,
                opacity:1,

             }}
             
             transition={{
                duration:0.5,
                ease:'easeIn',
                
                
             }}

             viewport={{
              margin:'-100px'
             }}
             className=' mt-5'
            >
           Now you can <span className=' text-white'> take sharper closeups from farther away</span>— like a phenomenal photo of your friend or a goal in your kids soccer match.
            </motion.div >
        </div>



        <motion.div 
             initial={{
              y:30,
              opacity:0
           }}
           whileInView={{
              y:0,
              opacity:1,

           }}
           
           transition={{
              duration:0.4,
              ease:'easeIn'
           }}
           viewport={{
            margin:'-100px'
           }}
           className=" md:text-center"
            >
       
<span className=' md:text-3xl xl:text-5xl font-bold text-white '>5x optical zoom</span>  <br />
with the 120 mm lens

        </motion.div>
        
    </div>
    





           </div>






       </div>







    </div>
  )
}

export default Acamera