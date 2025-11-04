import { Spotlight } from "./ui/spotlight"

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen text-white z-1"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw] text-purple-400 z-2"/>
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] text-blue-400 z-3"/>
      
    </div>
  )
}

export default Hero