import { motion} from "framer-motion";
import gigablast from '@/public/images/gigablast.jpeg'
import Image from "next/image";



const Gigablast = () => {
  return (
    <div className="px-3">

       <div className="md:my-28 my-14 mt-32  ms-10 md:mt-44 md:px-10 text-3xl md:ms-10 lg:ms-56  2xl:px-56 font-semibold md:text-5xl lg:text-7xl 2xl:text-7xl">
       Gigablast <br />
       your gigabits.
       </div>


       <motion.div
        initial={{
           
            opacity:0
         }}
         whileInView={{
           
            opacity:1,

         }}
         
         transition={{
            duration:0.5,
            ease:'easeIn'
         }}
         viewport={{
          margin:'-200px'
         }}
       
       >
        <Image className=" mx-auto" src={gigablast} alt="gigablast"/>
       </motion.div>

        <div  className=" my-20  text-[#86868b] font-bold md:text-xl md:grid-cols-2 md:w-[90vw] xl:w-[70vw] mx-auto">

        <motion.div className=" md:grid md:grid-cols-2 lg:gap-x-28"
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
            <div className="leading-[2rem]">
            iPhone 15 Pro is the first iPhone to support USB 3,5 for a <span  className=" text-white">huge leap in data transfer speeds</span>  and faster pro workflows than ever before.
            </div>
            <div className=" leading-[2.5rem]">
            Up to <br />


<span className=' md:text-3xl xl:text-5xl font-bold text-white '>20x faster</span>  <br />
file transfers
            </div>


        </motion.div>

        <motion.div className=" md:grid md:grid-cols-2 my-10 mx-auto  lg:gap-x-28"
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
            <div className="leading-[2rem]">
            The new USBC connector lets you <span  className=" text-white"> charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro</span>  . Byebye, cable clutter.
            </div>
            <div className="leading-[2rem]">
            And with allnew WiFi 6E6 you'll get<span  className=" text-white">  two times faster wireless speeds</span>. So you can upload, download, and transfer files in a flash.
            </div>


        </motion.div>









        </div>




       










    </div>
  )
}

export default Gigablast