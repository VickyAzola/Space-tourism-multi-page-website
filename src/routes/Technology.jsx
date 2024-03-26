import TheNavbar from '/src/components/TheNavbar.jsx'
import CardTechnology from '/src/components/CardTechnology.jsx'

function Technology() {


    return (
        <>
        <div className='technology'>
            <header>
                <TheNavbar />
            </header>
            <main className='mx-auto pb-[2rem] md:pb-[4rem] grid min-h-screen pt-[20%] lg:pt-[12%] '>
                <h1           
                    className='text-white text-center md:text-left barlow-CondensedFont md:pl-8 lg:pl-24 md:pb-10 lg:pb-0 
                    tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] text-[1rem] md:text-[1.25rem] lg:text-[1.75rem]'>
                    <span className='opacity-40 font-black mr-3'>03</span> SPACE LAUNCH 101
                </h1>
                <CardTechnology />
            </main>
        </div>
        </>
    )
}

export default Technology
