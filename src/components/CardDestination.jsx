import data from '/src/data.json'
import { useState } from 'react'

function Destination() {
    //state to select the current index of the data
    const [selected, setSelected] = useState(0)

     //variable to store the data
    const destinationData = data.destinations

    //styles for the buttons
    const baseClassButtons = {
        base : 'barlow-CondensedFont text-[0.875rem] md:text-[1rem] uppercase text-gray-text tracking-[2.36px] border-b-[3px] border-transparent hover:border-white/70 py-2',
        active : 'active [&.active]:border-b-[3px] [&.active]:border-b-white'
    }

    //change the current item displayed through its index
    function handleClick(index) {
        setSelected(index)
    }

    return (
        <>
        <article 
            className='grid place-items-center lg:grid-cols-2 lg:gap-x-[5rem] lg:items-end'>

            {/* Image */}
            <div className='w-full h-full flex flex-col justify-end items-end'>
            <img 
                loading='lazy'
                src={destinationData[selected].images.webp} 
                className='mx-auto lg:mx-0 w-[10.625rem] md:w-[20rem] lg:w-[27.813rem] lg:ml-24 mt-10 md:mt-0 lg:mt-10'  
                alt={destinationData[selected].alt} 
            />
            </div>
            
            
            <div className='lg:pr-16 w-full h-full'>
                
                {/* buttons */}
                <div className='flex justify-center lg:justify-start gap-x-5 md:gap-x-8 lg:gap-x-11 mt-6 mb-8 md:mt-8 lg:mt-14'>
                    {destinationData.map((item, index) => (
                        <button 
                            onClick={() => handleClick(index)}
                            key={item.name}
                            className={ ` ${baseClassButtons.base} ${index == selected ? baseClassButtons.active : '' } ` }>
                                {item.name}
                            </button>
                        ))
                    }
                </div>

                    {/* name and description */}
                <section className='lg:text-left text-center text-white'>
                    <h2 className='bellefairFont text-[3.5rem] md:text-[5rem] lg:text-[6.25rem] uppercase mb-4 md:mb-8'>{destinationData[selected].name} </h2>
                    <p className='barlowFont text-gray-text text-[0.938rem] md:text-[1rem] lg:text-[1.125rem] leading-[1.7rem] 
                    pb-10 border-b border-b-white/30  max-w-[20.438rem] md:max-w-[35.813em] lg:max-w-[40rem] mx-auto lg:mx-0'>
                        {destinationData[selected].description}
                    </p>
                </section>

                    {/* text bottom */}
                <section className='uppercase md:flex md:justify-center md:gap-x-32 lg:gap-x-14 lg:justify-start text-center lg:text-left text-white'>
                    <div className='mt-10 lg:mt-8'>
                        <h3 className='text-gray-text text-[0.875rem] barlow-CondensedFont tracking-[2.36px] mb-2'>
                            AVG. DISTANCE
                        </h3>
                        <p className='bellefairFont text-[1.75rem]'>{destinationData[selected].distance} </p>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-gray-text text-[0.875rem] barlow-CondensedFont tracking-[2.36px] mb-2'>
                            EST. TRAVEL TIME
                        </h3>
                        <p className='bellefairFont text-[1.75rem]'>{destinationData[selected].travel} </p>
                    </div>
                </section>

            </div>
        </article>
        </>
    )
}

export default Destination



