import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <section id='about' className='relative z-20 min-h-screen grid place-content-center'>
            <BentoGrid>
                {
                   gridItems.map(({id, title, description, className, imgClassName, img, titleClassName, spareImg}) => (
                        <BentoGridItem 
                        id={id} 
                        key={id} 
                        title={title} 
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                         />
                    ))
                }
            </BentoGrid>
        </section>
    )
}

export default Grid