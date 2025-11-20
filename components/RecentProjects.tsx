"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { techIcons } from "@/utils/techIcons";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { TechIconKey } from "@/utils/techIcons";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="Project background" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 max-h-full object-contain"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconComponents?.map((iconKey: TechIconKey, index: number) => (
                    <div
                      key={iconKey}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center text-white"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                      title={iconKey}
                    >
                      {techIcons[iconKey]}
                    </div>
                  ))}
                </div>

                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-center items-center hover:opacity-80 transition-opacity"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item.link === '#' ? 'Coming Soon' : 'Check Live Site'}
                  </p>
                  {item.link !== '#' && <FaLocationArrow className="ms-3" color="#CBACF9" />}
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
