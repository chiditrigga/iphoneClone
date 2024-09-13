import { motion } from "framer-motion";
import blue from '@/public/images/iblue.jpeg'
import pink from '@/public/images/ipink.jpeg'
import a16 from '@/public/images/a16.png'
import a17 from '@/public/images/a17.png'
import cam from '@/public/images/cam.png'
import battery from '@/public/images/indicator.png'
import procam from '@/public/images/procam.png'
import Image from "next/image";

const Exploring = () => {
  return (
    <div className='bg-[#101010] md:mt-32  pt-60  py-32 '>
         
         <div className="bg-[black] px-7 md:px-10 lg:px-12 xl:px-36 2xl:px-60 rounded-3xl  grid justify-items-center md:w-[90%] xl:w-[90%] mx-auto grid-cols-2 py-24 ">
            

            <div >
                <div className=" border-b border-[#86868b] md:pb-6">

               
                 <Image className=" mx-auto" src={blue} alt="blue" />
                 <div className=" text-center my-14 md:my-10">
                    <h6>New</h6>
                  <h3 className=" md:text-2xl font-semibold md:my-2">iPhone 15 Pro</h3>  <br />
                  <span className=" text-[#86868b] font-medium">Currently viewing</span>
                  </div>
                  
                 </div>
                <div className="my-8 gap-y-20 grid">
                  <div>
                    <Image className=" mx-auto" src={a17} alt="pro" />
                    <div className="text-center my-3 text-base font-semibold md:text-2xl">
                    A17 Pro chip <br />
                    with 6-core GPU
                    </div>
                  </div>
                  <div>
                  <Image className=" mx-auto" src={procam} alt="pro" />
                    <div className="text-center my-3 text-base font-semibold md:text-2xl md:w-[50%] mx-auto" >
                    Pro camera system <br />
                    <span className=" text-xs font-normal ">
                    Our most advanced 48MP Main camera
3x or 5x Telephoto camera
Ultra Wide camera
                    </span>
                    
                    </div>
                  </div>
                  <div>
                    <Image className=" mx-auto" src={battery} alt="pro" />
                    <div className="text-center my-3 text-base font-semibold md:text-2xl md:max-w-[60%] mx-auto">
                    Up to 29 hours video playback15
                    </div>
                  </div>
                </div>
                 
            </div>
            
           <div>

           
            <div className="border-b border-[#86868b] pb-[0.8rem] md:pb-0">
            <Image className=" mx-auto" src={pink} alt="pink" />
            <div className=" text-center my-8 md:my-10">
                    <h6>New</h6>
                  <h3 className="text-base md:text-2xl font-semibold my-2">iPhone 15</h3>  <br />
                  <button className="px-3 py-2 md:px-5 md:py-3 bg-[blue] rounded-3xl font-medium">Learn more</button>
                 </div>
            </div>      
            <div className="my-8 gap-y-20 grid">
                  <div>
                    <Image className=" mx-auto" src={a16} alt="pro" />
                    <div className="text-center my-3 text-base font-semibold md:text-2xl">
                    A16 Bionic chip
 <br />
 with 5-core GPU
                    </div>
                  </div>
                  <div>
                  <Image className=" mx-auto" src={cam} alt="pro" />
                    <div className="text-center my-3 text-base font-semibold md:text-2xl md:w-[50%] mx-auto" >
                    Advanced dual-camera system <br />
                    <span className=" text-xs font-normal ">
                    48MP Main camera
2x Telephoto
Ultra Wide camera
                    </span>
                    
                    </div>
                  </div>
                  <div>
                    <Image className=" mx-auto" src={battery} alt="pro" />
                    <div className="text-center my-3 text-base font-semibold md:text-2xl md:max-w-[60%] mx-auto">
                    Up to 26 hours video playback15
                    </div>
                  </div>
                </div>
</div>
         </div>
           
        
        
        </div>
  )
}

export default Exploring