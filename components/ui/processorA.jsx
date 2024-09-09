import chip from '@/public/images/chip.jpg'
import casephone from '@/public/images/case.png'
import Image from 'next/image'
import { Cover } from "@/components/ui/cover";
import {motion} from 'framer-motion'

const processorA = () => {
  return (
    <div className="flex flex-col items-center justify-center  mx-auto pb-10">
    <div className=' mt-28 md:mt-14'>
     <Cover >
      <Image  src={chip} alt="Chip Image" />
     </Cover>
    

    </div>
    <div className="text-center md:mt-20 md:px-10 text-xl  2xl:px-56 font-semibold md:text-5xl lg:text-6xl 2xl:text-7xl">
      A17 Pro chip. <br /> A monster win for gaming.
    </div>
    <div  className=' text-center font-semibold md:text-2xl text-[#86868b] my-5 md:my-8'>
    Its here. The biggest redesign in the history of Apple GPUs.
    </div>
    <div className=' h-40  md:h-[56vh] xl:h-[70vh] lg:h-[70vh] md:w-[75vw]   relative w-[90vw]  flex justify-center'>
    <video
        className=' md:rounded-[2rem] xl:rounded-[3rem]    2xl:rounded-[5.9rem] px-[0.4rem] rounded-lg   md:px-1   xl:w-[98%] w-[100%] mt-[0.4rem] md:mt-3 lg:w-[99%]  lg:mt-4 2xl:w-[97%] 2xl:mt-12  object-cover absolute'
        autoPlay
        muted
        
        playsInline
      >
 <source src='/videos/frame.mp4 ' type='video/mp4' />
      </video>

      <Image className=' w-full absolute' src={casephone} />
     
    </div>
    <div>
        <h3 className='text-[#86868b] font-bold'>Honkai: Star Rail</h3>
    </div>
    <div style={{lineHeight:'2rem'}} className=' mt-12 px-3 md:mt-16 xl:gap-x-10 md:gap-x-5 grid text-[#86868b] font-bold text-xl md:grid-cols-2 md:w-[70vw] xl:w-[60vw]'>
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
                duration:0.5,
                ease:'easeIn'
             }}
            >
            A17 Pro is an entirely new class of iPhone chip that delivers our <span className=' text-white'>best graphics performance by far</span>. 
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
                delay:0.3,
                
             }}
             className=' mt-5'
            >
            Mobile <span className=' text-white'>games will look and feel so immersive</span>, with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
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
                duration:0.5,
                ease:'easeIn'
             }}
             style={{
                lineHeight:'2.5rem'
             }}
            >
        New <br />
<span className=' md:text-3xl xl:text-5xl font-bold text-white'>Pro-class GPU</span>  <br />
with 6 cores
        </motion.div>
    </div>
  </div>
  
  )
}

export default processorA