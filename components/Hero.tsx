import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/spotlight"
import { TextGenerateEffect } from "./ui/textGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { ArrowRightIcon } from "lucide-react"
import { FaLocationArrow } from "react-icons/fa"

const Hero = () => {
  return (
    <div>
      <div className="pb-20 pt-36">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen text-aqua-200 z-1" />
        <Spotlight className="top-50 left-full h-[80vh] w-[50vw] text-purple-300 z-2" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] text-blue-400 z-3" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello there, I'm Youssef Temraz
          </h2>
          <TextGenerateEffect
            words="Transforming concepts into Seamless User Experience"
            className="text-center text-[40px] md:text-5xl lg:text-6xl" 
            />
          <p className="text-center text-sm md:text-lg lg-text-2xl md:tracking-wider mb-4">
            Hi, i&apos;m Youssef Temraz, a Next js Developer based in Cairo
          </p>
          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => { }}
              otherClasses="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero