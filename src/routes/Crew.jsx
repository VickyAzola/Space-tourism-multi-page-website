import CardCrew from '/src/components/CardCrew.jsx'
import TheNavbar from '/src/components/TheNavbar.jsx'

function Crew() {

    return (
        <>
        <div className='crew'>
            <header>
                <TheNavbar />
            </header>
            <main className='max-w-[80rem] px-[2rem] mx-auto grid min-h-screen pt-[20%] lg:pt-[12%] '>
                <h1 
                    className='text-white text-center md:text-left barlow-CondensedFont lg:pl-14 
                    tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] text-[1rem] md:text-[1.25rem] lg:text-[1.75rem]'>
                    <span className='opacity-40 font-black mr-3'>02</span> MEET YOUR CREW
                </h1>
                <CardCrew />
            </main>
        </div>
        </>
    )
}

export default Crew
