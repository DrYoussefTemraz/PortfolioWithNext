import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import {GlobeDemo} from './GridGlobe'
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 md:auto-rows-[5rem] lg:auto-rows-[8rem] md:grid-cols-6 lg:grid-cols-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  id,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "relative group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border black-gradient p-4 transition duration-200 hover:shadow-xl dark:border-white/20 dark:shadow-none overflow-hidden",
        className,
      )}
    >
      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          {img && (<img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center')} />)}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (<img src={spareImg} alt={spareImg} className='object-cover object-center' />)}

        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold " />

          </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-20">
            {description}
          </div>
          <div className=" font-sans font-bold text-lg lg:text-3xl max-w-96 z-20">
            {title}
          </div>
        </div>
        {id === 2 && <GlobeDemo/>}
      </div>

    </div>
  );
};
