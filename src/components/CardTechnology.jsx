import data from '/src/data.json'
import { useEffect, useState } from 'react'

function CardTechnology() {

    //state to watch the window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //state to select the current index of the data
    const [selected, setSelected] = useState(0)

    //effect to listen to the resize of the width
    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

     //variable to store the data
    const technologyData = data.technology

    //buttons to change item displayed
    const buttons = [
        {id: '0', num: '1'},
        {id: '1', num: '2'},
        {id: '2', num: '3'},
    ]

    //styles for the buttons
    const baseClassButtons = {
        base : 'bellefairFont w-[2.5rem] md:w-[3.75rem] md:text-[1.5rem] lg:w-[5rem] lg:text-[2rem] rounded-full text-white border border-[#d0d6f97c] aspect-square hover:border-white hover:cursor-pointer',
        active: 'active [&.active]:bg-white [&.active]:text-[#0B0D17]'
    }

    //change the current item displayed through its index
    function handleClick(index) {
        setSelected(index)
    }

    return (
        <>
            <article 
                className="grid place-items-center lg:grid-cols-2 lg:items-center">
                
                {/* Image, change depending on width*/}
                <div className='w-full h-full lg:h-auto md:w-auto lg:order-last lg:inset-rigth-0 lg:ml-auto'>
                    <img 
                        loading='lazy'
                        src={windowWidth < '1024' ? technologyData[selected].images.landscape : technologyData[selected].images.portrait} 
                        className='w-full h-[10rem] md:h-[22rem] lg:h-auto aspect-auto'  
                        alt={technologyData[selected].alt}/>
                </div>

                <div className='w-full h-full lg:h-auto flex flex-col lg:flex-row gap-x-14 lg:ml-28'>
                    {/* map on buttons*/}
                    <div className='flex lg:flex-col lg:justify-start lg:gap-y-7 justify-center gap-x-4 my-4 md:my-8 lg:my-0'>
                        {buttons.map((item, index) => (
                            <button 
                                onClick={() => handleClick(item.id)}
                                key={index}
                                className={`${baseClassButtons.base} ${index == selected ? baseClassButtons.active : ''}`}
                                >
                                    {item.num}
                                </button>
                            ))
                        }
                    </div>

                    {/*text*/}
                    <section className='text-center lg:text-left'>
                        <p className='barlow-CondensedFont text-gray-text tracking-[2.36px] text-[0.875rem] md:text-[1rem] md:tracking-[2.7px] '>
                            THE TERMINOLOGY...
                        </p>
                        <h2 className='bellefairFont text-white text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] uppercase mt-4 mb-4 md:mb-6'>
                            {technologyData[selected].name}
                        </h2>
                        <p className='barlowFont text-gray-text text-[0.938rem] md:text-[1rem] lg:text-[1.125rem] leading-[1.7rem] 
                            max-w-[22rem] md:max-w-[28.625rem] lg:max-w-[27.75rem] mx-auto'>
                            {technologyData[selected].description}
                        </p>
                    </section>
                </div>
            </article>
        </>
    )
}

export default CardTechnology



