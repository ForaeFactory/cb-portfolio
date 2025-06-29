/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useState, useRef } from 'react';
import { SignpostBig, BookOpen, Puzzle } from "lucide-react";
import ultraHero from '../assets/ultra/ultraBack_portfolio.webp';
import ultraLogo from '../assets/ultra/ultraLogo.png';

const roles = [
    //Bud Light Seltzer
    { name: "Campaign Strategy", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bls' },
    { name: "Multicultural", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bls' },
    { name: "Art Direction", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bls' },
    { name: "Production", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bls' },
    //Ultra
    { name: "Brand Strategy", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'mul' },
    { name: "Experiential", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'mul' },
    { name: "Production", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'mul' },
    { name: "Trade Marketing", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'mul' },
    //KHC
    { name: "UX Research", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'khc' },
    { name: "Digital Design", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'khc' },
    { name: "Motion Graphics", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'khc' },
    { name: "Visual Identity", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'khc' },
    //Budweiser
    { name: "Multicultural", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bud' },
    { name: "Experiential", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bud' },
    { name: "Production", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bud' },
    { name: "Trade Marketing", desc: "Achieve business goals and build a distinct, compelling identity in the market", client: 'bud' },
]




// eslint-disable-next-line react/display-name, react/prop-types
export const Featured = forwardRef(({ section, scrollPercent }, ref) => {
    const [activeCategory, setActiveCategory] = useState("vision");
    const element = useRef();
    const [percent, setPercent] = useState(0);

    const filteredRoles = roles.filter(
        (role) => role.client === section.abbr
    );

    const onScroll = () => {
        getSection();
    }

    const getSection = () => {
        const viewportTop = window.scrollY;
        const winHeight = element.current.clientHeight;
        const scrollPercent = (viewportTop / winHeight) * 100;
        // console.log(viewportTop, docHeight, winHeight)
        setPercent(scrollPercent / 500 * 100)
        console.log(scrollPercent / 500)
    }


    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    });



    return (
        <section ref={ref} className="absolute inset-0 z-[var(--stick-visibility)] bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${section.image})` }}>
            <div ref={element} className="backdrop-blur-sm flex h-full space-y-4 lg:space-y-0 lg:space-x-20">
                <div className="flex flex-col justify-start items-center m-auto lg:opacity-[var(--stick-visibility)] transition-opacity duration-500 order-1 lg:order-none">
                    <img className='w-[40vw]' src={section.logo} alt={`${section.id} Logo`} />
                    <h2 className="text-4xl text-white font-bold tracking-wider mt-[1rem]">{section.title}</h2>
                    <div className='flex w-[80vw] justify-evenly'>
                        <div className='w-[75vw] space-y-[1rem] opacity-0 animate-fade-in-delay-2'>
                            <h2 className="text-2xl text-white font-medium tracking-wide text-left mt-[10rem]">Project Description</h2>
                            <p className="text-2xl text-white font-light text-left tracking-wide w-[55vw]">{section.body}</p>

                            <div className='flex flex-row space-x-20 mt-[4rem]'>
                                {filteredRoles.map((role, key) => (
                                    <div key={key} className="opacity-0 animate-fade-in-delay-3">
                                        <div className='flex items-center text-xl text-white font-medium tracking-wide text-left mt-[2rem]'>
                                            <h2 className="">{role.name}</h2>
                                        </div>
                                        <hr
                                            className="my-3 h-px border-t-0 bg-transparent bg-linear-to-r from-white opacity-40 via-white to-transparent" />
                                        <p className="text-g font-light text-slate-300 text-left">{role.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 animate-fade-in">
                <div className="h-full bg-blue-500 animate-grow" style={{ width: `${percent}` + `%` }}></div>
            </div> */}
        </section>
    )
}
);
