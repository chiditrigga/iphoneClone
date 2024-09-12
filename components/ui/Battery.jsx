import { motion} from "framer-motion";
import battery from '@/public/images/battery.jpeg'
import iphone from '@/public/images/iphoneround.png'
import Image from "next/image";

const Battery = () => {
  return (
    <div className="px-3 my-[20rem]">



          <div className=" md:mt-20 lg:max-w-[80vw] xl:max-w-[70vw] mx-3 md:mx-auto text-center md:px-10 text-3xl mb-[1rem] md:mb-[3rem]  2xl:px-56 font-semibold md:text-5xl  xl:text-7xl 2xl:text-7xl">
        
            Battery life thats <br /> positively Pro.
           
          </div>

          <div className="font-semibold md:text-2xl text-[#86868b] text-center lg:max-w-[60vw] xl:max-w-[50vw] mx-3 md:mx-auto my-5 md:my-8">
          Even with so many advanced new features, iPhone 15 Pro still gives you amazing allday battery life.
          </div>



          <div>

          <Image  className=" mx-auto  w-[80%]" src={battery}  alt="battery" />




          </div>

          <div  className=" my-20  text-[#86868b] font-bold md:text-xl grid-cols-2 md:w-[80vw]  lg:w-[70vw] xl:w-[70vw] mx-auto">

        <motion.div className=" grid grid-cols-2 lg:gap-x-16"
         
        
        
        >
             <motion.div
               initial={{
                y:'30px',
                opacity:0
             }}
             whileInView={{
                y:'0px',
                opacity:1,
    
             }}
             
             transition={{
                duration:0.4,
                ease:'easeIn'
             }}
             viewport={{
              margin:'-100px'
             }}
             
             
             
             className=" leading-[2rem] max-w-[70%]">
            Up to <br />


<h3 className=' md:text-3xl xl:text-7xl font-bold text-white py-3'>29 hrs</h3>  
<h3 className=" ">video playback on iPhone 15 Pro Max12</h3> 
            </motion.div>

            <motion.div
             initial={{
                y:'30px',
                opacity:0
             }}
             whileInView={{
                y:0,
                opacity:1,
    
             }}
             
             transition={{
                duration:0.4,
                ease:'easeInOut'
             }}
             viewport={{
              margin:'-170px'
             }}
            
            className="leading-[2rem] text-2xl pt-3">
           Add a MagSafe Charger for  <span  className=" text-white ">fast, efficient wireless charging13</span>
            </motion.div>
           


        </motion.div>

        <div className=" grid grid-cols-2 my-5 mx-auto  lg:gap-x-28"
         
        
        
        >
            <motion.div
               initial={{
                y:'30px',
                opacity:0
             }}
             whileInView={{
                y:'0px',
                opacity:1,
    
             }}
             
             transition={{
                duration:0.4,
                ease:'easeIn'
             }}
             viewport={{
              margin:'-100px'
             }}
             
             
             
             className=" md:leading-[2rem] md:max-w-[70%]">
            Up to <br />


<h3 className=' md:text-3xl xl:text-7xl font-bold text-white py-3'>23 hrs</h3>  
<h3 className=" ">video playback on iPhone 15 Pro12</h3> 
            </motion.div>
            <motion.div
               initial={{
                y:'30px',
                opacity:0
             }}
             whileInView={{
                y:'0px',
                opacity:1,
    
             }}
             
             transition={{
                duration:0.4,
                ease:'easeInOut'
             }}
             viewport={{
              margin:'-70px'
             }}
                 className="leading-[2rem] flex justify-between gap-x-7 pt-8  border-t border-[#86868b]">
           <div>
            <Image width={100} src={iphone} alt="iphone" />
           </div>
           <div>
           iPhone 15 Pro Max has up to 9 more hours video playback than iPhone 12 Pro Max
iPhone 15 Pro has
<br /> <br />
iPhone 15 Pro has up to 6 more hours video playback than iPhone 12 Pro
           </div>
          
             
            </motion.div>

          
        </div>









        </div>
        





          </div>






   
  )
}

export default Battery