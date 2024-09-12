
import {motion} from 'framer-motion'


const hero = () => {
    


  return (
    <div className=' xl:h-[85vh]'>
        <div className='px-2 mt-9 text-[#94928d]'>
            <h3 className='text-3xl text-center mt-[20px] absolute left-[50%] translate-x-[-50%]'>iphone15Pro</h3>
              <video
        className='block md:hidden w-full h-full min-h-[70vh] object-cover'
        autoPlay
        muted
        
        playsInline
      >
 <source src={'/videos/smallHero.mp4'} type='video/mp4' />
      </video>
      <video
        className=' hidden md:block w-full h-full min-h-[70vh] object-cover'
        autoPlay
        muted
        
        playsInline
      >
 <source src={'/videos/hero.mp4'} type='video/mp4' />
      </video>
      <motion.div 
       initial={{
        y:'30px',
        opacity:0
       }}
         
       animate={{
        y:"-30px",
        opacity:1
       }}

       transition={{
        duration:2,
        ease:'easeInOut'
       }}


      className=' text-center'>
        <button className='mb-3 hover:bg-black hover:text-[#2997ff] border border-[#2997ff] text-white bg-[#2997ff] py-2 px-5  rounded-full'>Buy</button>
       <h3 className=' text-white text-xl mb-28'>From $199/month or $999</h3> 
      </motion.div>
        </div>
       
    

    </div>
  )
}

export default hero