import Image from "next/image"


const Hero = () => {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat px-8 py-16 sm:p-16 flex justify-center lg:items-center max-lg:flex-col gap-0 sm:gap-16 w-full">
        <div className="flex flex-1 flex-col gap-10">
            <Image 
                src="/logo.svg"
                alt="logo"
                width={101}
                height={96}
                className="object-contain"
            />
            <h1 className="text-5xl sm:text-6xl text-white lg:max-w-lg font-bold leading-[120%]">
                Explore The <span className="red-gradient"> Anime Universe </span>
            </h1>
        </div>
        <div className="w-full lg:flex-1 relative h-[50vh] justify-center">
            <Image 
                src="/anime.png"
                alt="anime"
                fill
                className="object-contain"
            />
        </div>
    </header>
  )
}

export default Hero