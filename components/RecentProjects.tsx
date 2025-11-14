import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

const RecentProjects = () => {
    return (
        <div className="py-20">
            <h2 className="heading"> A Small Selection Of {" "}
                <br />
                <span className="text-purple">Recent Projects</span>
            </h2>
            <div className='flex flex-wrap justify-center items-center p-4 mt-20 gap-4 '>
                {projects.map((
                    { id, title, img, des, iconLists, link }
                ) => (
                    <div key={id} className='lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vw] '>
                   <PinContainer title={title} href={link}>
                       <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] **:'>
                            <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img src={img} alt={title} className='z-20 absolute bottom-0' />
                       </div>
                       <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                        {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>
                    </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects