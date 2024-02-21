import React from 'react'
import Image from 'next/image'

function HeroSection() {
    return (

        <section><h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello I'm Ross</h1>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center'>
                    <p className='text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nosbis nisi, necessitatibus, illum ad sint rerum modi similique quae laboriosam eveniet blanditiis ex ullam. Dicta suscipit dolore nemo adipisci doloribus voluptates!</p>
                </div>
                <div className='col-span-5'>
                    <Image src='/public/images/hero.jpg' alt='hero' width={500} height={500} />
                </div>
            </div>
        </section>

    )
}

export default HeroSection