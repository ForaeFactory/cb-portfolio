import mulHero from '../assets/ultraBack_update.png';
import blsHero from '../assets/blsBack_update.png';
import budHero from '../assets/budBack_update.png';
import khcHero from '../assets/khBack_update.png';

//LOGO IMPORTS

import blsLogo from '../assets/logos/blsLogo.png';
import budLogo from '../assets/logos/budLogo.png';
import khLogo from '../assets/logos/khLogo.png';
import ultraLogo from '../assets/logos/ultraLogo.png';

const clients = [
    { brand: 'Michelob Ultra', url: './projects/ultra-leader', logo: ultraLogo, hero: mulHero, logoAlt: 'brand logo', heroAlt: "" },
    { brand: 'Bud Light Seltzer', url: './projects/bls-flavor', logo: blsLogo, hero: blsHero, logoAlt: 'brand logo', heroAlt: "" },
    { brand: 'Kraft Heinz', url: './projects/kh-digital', logo: khLogo, hero: khcHero, logoAlt: 'brand logo', heroAlt: "" },
    { brand: 'Budweiser', url: './projects/bud-king', logo: budLogo, hero: budHero, logoAlt: 'brand logo', heroAlt: "" },
]

export const Showcase = () => {

    return (
        <div className="group flex max-md:flex-col md:justify-center gap-0">
                <article className="group/article relative w-full overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                    <a className="absolute inset-0 text-white z-10" href="#0">
                        <span className="absolute bottom-5 text-2xl font-medium m-auto md:px-15 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                            <img className="object-contain h-32 md:h-50 md:w-auto w-[50%] md:group-hover:w-[60%]" src={ultraLogo} width="100" height="50" alt="Image 01" />
                        </span>
                    </a>
                    <img className="object-cover h-72 md:h-screen md:w-auto" src={mulHero} width="960" height="480" alt="Image 02" />
                </article>
                <article className="group/article relative w-full overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                    <a className="absolute inset-0 text-white z-10" href="#0">
                        <span className="absolute bottom-5 text-2xl font-medium m-auto md:px-15 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                            <img className="object-contain h-32 md:h-50 md:w-auto w-[50%] md:group-hover:w-[60%]" src={blsLogo} width="100" height="50" alt="Image 01" />
                        </span>
                    </a>
                    <img className="object-cover h-72 md:h-screen md:w-auto" src={blsHero} width="960" height="480" alt="Image 02" />
                </article>
                <article className="group/article relative w-full overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                    <a className="absolute inset-0 text-white z-10" href="#0">
                        <span className="absolute bottom-5 text-2xl font-medium m-auto md:px-15 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                            <img className="object-contain h-32 md:h-50 md:w-auto w-[50%] md:group-hover:w-[60%]" src={khLogo} width="100" height="50" alt="Image 01" />
                        </span>
                    </a>
                    <img className="object-cover h-72 md:h-screen md:w-auto" src={khcHero} width="960" height="480" alt="Image 02" />
                </article>
                <article className="group/article relative w-full overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300">
                    <a className="absolute inset-0 text-white z-10" href="#0">
                        <span className="absolute bottom-5 text-2xl font-medium m-auto md:px-15 md:py-8 md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                            <img className="object-contain h-32 md:h-50 md:w-auto w-[50%] md:group-hover:w-[60%]" src={budLogo} width="100" height="50" alt="Image 01" />
                        </span>
                    </a>
                    <img className="object-cover h-72 md:h-screen md:w-auto" src={budHero} width="960" height="480" alt="Image 02" />
                </article>
        </div>
    )
}