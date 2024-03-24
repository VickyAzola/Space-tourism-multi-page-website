import CardDestination from '/src/components/CardDestination.jsx'
import TheNavbar from '/src/components/TheNavbar.jsx'

function Destination() {

    return (
        <>
        <div className='destination scroll-smooth'>
            <header>
                <TheNavbar />
            </header>
            <main className='max-w-[80rem] px-[2rem] mx-auto pb-[2rem] md:pb-[4rem] grid min-h-screen pt-[20%] lg:pt-[12%] '>
                <h1 
                    className='text-white text-center md:text-left barlow-CondensedFont lg:pl-14 
                    tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] text-[1rem] md:text-[1.25rem] lg:text-[1.75rem]'>
                    <span className='opacity-40 font-black mr-3'>01</span> PICK YOUR DESTINATION
                </h1>
                <CardDestination />
            </main>
        </div>
        </>
    )
}

export default Destination
