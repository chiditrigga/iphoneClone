import { motion} from "framer-motion";

import icons from '@/public/images/icons.jpeg'
import phonfet1 from '@/public/images/phonfet1.jpeg'
import phonfet2 from '@/public/images/phonfet2.jpeg'
import phonfet3 from '@/public/images/phonfet3.jpeg'

import Image from "next/image";

const Card = () => {
  return (
    <div>

     <div className="md:w-[98%] lg:w-[90%] 2xl:w-[70%] md:px-5  mx-auto bg-[#101010] lg:px-28 pt-36 pb-16">
      


      <Image className="mx-10 md:mx-1" src={icons} alt="icons" /> 

      <div className=" md:text-6xl text-4xl mx-10 md:mx-1    font-bold md:leading-[4rem] py-10 border-[#86868b] border-b">
      Designed to <br />

      make a difference.

      </div>
      <div  className=" my-20   text-[#86868b] md:font-bold font-semibold md:text-xl grid-cols-2 md:w-[90vw]  lg:w-[80vw] xl:w-[70vw] mx-auto 2xl:w-[80%]">

<motion.div className=" md:grid md:grid-cols-2 lg:gap-x-16"
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
  amount:'all'
 }}


>
<motion.div
    
    
    className="leading-[2rem] md:text-xl pt-3 mx-10   md:mx-1">
    <span  className=" text-white ">What matters to you matters to Apple, too. </span>
    From privacy protections that give you more control over your data. To using more recycled materials that minimize environmental impact. To creating built in features that make iPhone accessible to all.
    </motion.div>
    
     <motion.div
      
     
     
     
     className=" mx-10 md:mx-1 leading-[2rem] max-w-[80%]">
    The internal structural frame of iPhone 15 Pro has <br />


<h3 className=' text-3xl xl:text-4xl font-bold text-white py-3 '>100% recycled aluminum</h3>  

    </motion.div>

    
   


</motion.div>











</div>






     </div>





  {/* card 2  */}
  <div className="md:w-[98%] lg:w-[90%] 2xl:w-[70%] md:px-5 lg:px-10 mx-auto bg-[#101010] xl:px-28 pt-20 pb-16 mt-20">
      


     

      <div className=" md:text-6xl xl:ms-11 ms-9 text-3xl font-bold md:leading-[4rem] py-10  mb-20 ">
     <div className="text-[#86868b] text-4xl py-1">
        iOS 17.
        </div> 
      Style it out. Swap it over. Sticker it up.

      </div>
      <div className=" md:grid md:grid-cols-3 pb-5">
          <div className=" text-[#86868b] font-semibold text-lg">
             <motion.div
              initial={{
                opacity:0
              }}

              whileInView={{
                opacity:1
              }}

              transition={{
                duration:0.6
              }}
              viewport={{
                margin:'-200px'
              }}
             
             >
            <Image className="mx-auto" src={phonfet1} alt="phone"/>
          </motion.div>
          <motion.div
           initial={{
            y:'50px',
            opacity:0
          }}

          whileInView={{
            y:'0px',
            opacity:1
          }}

          transition={{
            duration:0.6
          }}
          viewport={{
            margin:'-200px'
          }}
          
          
          className=" w-[90%] 2xl:w-[70%] pt-10 md:pt-16 mx-auto px-10 md:px-1  my-10 md:my-0">
         <span className=" text-white">Contact Poster.</span>  Create your own poster that contacts will see when you call. Pick a favorite pic or Memoji, pair it with a favorite font, and there you have it — your very own calling card.
          </motion.div>
          </div>
         
          <div className=" text-[#86868b] font-semibold text-lg">
             <motion.div
              initial={{
                opacity:0
              }}

              whileInView={{
                opacity:1
              }}

              transition={{
                duration:0.6
              }}
              viewport={{
                margin:'-200px'
              }}
             
             >
            <Image className="mx-auto " src={phonfet2} alt="phone"/>
          </motion.div>
          <motion.div
           initial={{
            y:'50px',
            opacity:0
          }}

          whileInView={{
            y:'0px',
            opacity:1
          }}

          transition={{
            duration:0.6
          }}
          viewport={{
            margin:'-200px'
          }}
          
          
          className=" w-[90%] 2xl:w-[70%] pt-10 md:pt-16 mx-auto px-10 md:px-1  my-10 md:my-0">
         <span className=" text-white">Contact Poster.</span>  Create your own poster that contacts will see when you call. Pick a favorite pic or Memoji, pair it with a favorite font, and there you have it — your very own calling card.
          </motion.div>
          </div>
          <div className=" text-[#86868b] font-semibold md:text-lg">
             <motion.div
              initial={{
                opacity:0
              }}

              whileInView={{
                opacity:1
              }}

              transition={{
                duration:0.6
              }}
              viewport={{
                margin:'-200px'
              }}
             
             >
            <Image className="mx-auto" src={phonfet3} alt="phone"/>
          </motion.div>
          <motion.div
           initial={{
            y:'50px',
            opacity:0
          }}

          whileInView={{
            y:'0px',
            opacity:1
          }}

          transition={{
            duration:0.6
          }}
          viewport={{
            margin:'-200px'
          }}
          
          
          className="2xl:w-[70%] w-[90%] pt-10 md:pt-16 mx-auto px-10 md:px-1  my-12 md:my-0">
         <span className=" text-white">Contact Poster.</span>  Create your own poster that contacts will see when you call. Pick a favorite pic or Memoji, pair it with a favorite font, and there you have it — your very own calling card.
          </motion.div>
          </div>





      </div>






     </div>



    </div>
  )
}

export default Card