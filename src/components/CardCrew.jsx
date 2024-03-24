import data from '/src/data.json'
import { useState } from 'react'

function CardCrew() {
    
    //state to select the current index of the data
    const [selected, setSelected] = useState(0)

    //variable to store the data
    const crewData = data.crew

    //buttons of the carrucel
    const carrucel = [
        {id: '0'},
        {id: '1'},
        {id: '2'},
        {id: '3'},
    ]

    //styles for the carrucel 
    const baseClassCarrucel = {
        base : 'h-[0.625rem] w-[0.625rem] lg:h-[0.938rem] lg:w-[0.938rem] bg-white rounded-full opacity-20 hover:cursor-pointer hover:opacity-60',
        active : 'active [&.active]:bg-white [&.active]:opacity-100'
    }

    //change the current item displayed through its index
    function handleClick(index) {
        setSelected(index)
    }

    return (
        <>
            <article 
                className='grid place-items-center lg:grid-cols-2 lg:gap-x-[1rem] lg:items-end lg:pl-14'>
                
                {/* Image */}
                <div className='w-full h-full flex md:order-last border-b border-b-white/30 md:border-none justify-end items-end pt-6 md:pt-0'>
                    <img 
                        src={crewData[selected].images.webp} 
                        className={`min-h-[13.875rem] max-h-[13.875rem] md:min-h-[33.25rem] md:max-h-[33.25rem] lg:min-h-[38rem] lg:max-h-[38rem] md:w-auto mx-auto`}  
                        alt={crewData[selected].alt} />
                </div>
                
                <section className=' w-full flex flex-col text-center lg:text-left'>
                    
                    {/* buttons */}
                    <div className='flex justify-center lg:justify-start gap-x-5 md:order-last py-6 md:py-10 lg:py-28'>
                        {carrucel.map((item, index) => (
                            <button 
                                onClick={() => handleClick(index)}
                                key={index}
                                className={ ` ${baseClassCarrucel.base} ${index == selected ? baseClassCarrucel.active : '' } ` }>
                                </button>
                            ))
                        }
                    </div>

                    {/* text */}
                    <div>
                        <h2 className='bellefairFont text-white opacity-50 uppercase text-[1rem] md:text-[1.5rem] lg:text-[2rem] '>
                            {crewData[selected].role}
                        </h2>
                        <h3 className='bellefairFont text-white text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] mt-4 mb-6 uppercase'>
                            {crewData[selected].name}
                        </h3>
                        <p className='barlowFont text-gray-text text-[0.938rem] md:text-[1rem] lg:text-[1.125rem] leading-[1.7rem] 
                        max-w-[20.438rem] md:max-w-[28.625rem] lg:max-w-[27.75rem] mx-auto lg:mx-0 pb-[2rem] md:pb-0'>
                            {crewData[selected].bio}
                        </p>
                    </div>

                </section>
            </article>
        </>
    )
}

export default CardCrew



