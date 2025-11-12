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
                    <div key={id} className='lg:min-h-130 h-100 flex items-center justify-center sm:w-96 w-[80vh] '>
                   <PinContainer>
                        {title}
                    </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects