import TheNavbar from '/src/components/TheNavbar.jsx'

function HomePage() {

    return (
        <>
        <main className='homePage'>
            
            <header>
                <TheNavbar />
            </header>

            <div className='min-h-screen grid place-items-center px-6 pt-[10%] lg:grid-cols-2 lg:gap-x-[2rem] lg:items-end lg:pb-[6rem] lg:px-28'>
                
                <article className=' w-full text-white text-center lg:text-left'>
                    <h1 className='barlow-CondensedFont tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] 
                    text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] text-gray-text mb-4 md:mb-6'>
                        SO, YOU WANT TO TRAVEL TO
                        <span className='mt-4 md:mt-6 bellefairFont text-[5rem] md:text-[9.375rem] text-white block'>
                            SPACE</span>
                    </h1>
                    <p className='barlowFont mx-auto lg:mx-0 text-gray-text text-[0.938rem] md:text-[1rem] lg:text-[1.125rem] leading-[1.7rem] max-w-[27.75rem]'>
                        Let&#39;s face it; if you want to go to space, you might 
                        as well genuinely go to outer space and not hover kind 
                        of on the edge of it. Well sit back, and relax because 
                        we&#39;ll give you a truly out of this world experience!
                    </p>
                </article>

                <div className='w-full lg:flex lg:justify-end'>
                    <a  
                        href='https://github.com/VickyAzola/Space-tourism-multi-page-website'
                        target='_blank'
                        className='bellefairFont mx-auto lg:mx-0 text-[1.25rem] md:text-[2rem] text-[#0B0D17] tracking-[2.7px] bg-white 
                        h-[9.375rem] w-[9.375rem] md:h-[15.125rem] md:w-[15.125rem] lg:h-[17.125rem] lg:w-[17.125rem] aspect-square
                        rounded-full grid place-items-center hover:shadow-[0_0_0_2rem_rgba(255,255,255,0.15)] 
                        md:hover:shadow-[0_0_0_3rem_rgba(255,255,255,0.15)] lg:hover:shadow-[0_0_0_4rem_rgba(255,255,255,0.15)] 
                        hover:transition-all hover:ease-in-out hover:duration-500 hover:cursor-pointer'
                    >
                        EXPLORE
                    </a>
                </div>

            </div>
            
        </main>
        </>
    )
}

export default HomePage
