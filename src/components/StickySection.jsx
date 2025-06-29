/* eslint-disable react/prop-types */
import { useState, useRef, useEffect, Fragment } from 'react';
import { Featured } from './Featured';
import mulHero from '../assets/ultraBack_update.png';
import blsHero from '../assets/blsBack_update.png';
import budHero from '../assets/budBack_update.png';
import khcHero from '../assets/khBack_update.png';
import blsLogo from '../assets/logos/blsLogo.png';
import budLogo from '../assets/logos/budLogo.png';
import khLogo from '../assets/logos/khLogo.png';
import ultraLogo from '../assets/logos/ultraLogo.png';

// Background Imports
import budBack from '../assets/budBack_update.png';
import ultraBack from '../assets/ultraBack_update.png';
import blsBack from '../assets/blsBack_update.png';
import khBack from '../assets/khBack_update.png';

// Placeholder Imports
import budImg from '../assets/bud/bud_king.png';
import ultraImg from '../assets/mulBackground.png';
import blsImg from '../assets/blsPlace.png';
import khImg from '../assets/khBackground.png';

// Video Imports
import budVid from '../assets/bud/BeAKing-Teaser.mp4';
import khVid from '../assets/khc/KHDR_Exp.mp4';
import { ProjectsUpdate } from './FeaturedUpdate';
import { Section } from './Section';

// const sections = [
//     { id: 'Michelob Ultra', abbr: 'mul', logo: ultraLogo, title: 'Look of the Leader', heading: 'Support your users with popular topics', body: 'Enhance the premium aesthetic of Michelob Ultra through trade and experiential to unleash the true potential of the brand.', image: mulHero, imgDesc: 'Woman runner crossing finish line' },
//     { id: 'Kraft Heinz', abbr: 'khc', logo: khLogo, title: 'Insight Suite', heading: 'Personalise the support experience', body: "Building the initial suite of tools that lay the foundation for Kraft Heinz's digital transformation initiative.", image: khcHero, imgDesc: 'Young adults laughing and enjoying Kraft products' },
//     { id: 'Bud Light Seltzer', abbr: 'bls', logo: blsLogo, title: 'Bring Some Flavor', heading: 'Scale your sales using automation', body: "The multicultural campaign launch 'Flavors' of the Bud Light family extension: Bud Light Seltzer.", image: blsHero, imgDesc: 'Young women smiling and doing a cheers with Bud Light Seltzer' },
//     { id: 'Budweiser', abbr: 'bud', logo: budLogo, title: 'Be a King', heading: 'Make customer satisfaction easier', body: 'Create an experience that honors unique artists, creators, and influencers in Houston, Texas.', image: budHero, imgDesc: 'African American men in stylish suits with Budweiser' }
// ]

const projects = [
    {
        key: 'ultra',
        title: 'Look of the Leader',
        vid: '',
        placeholder: ultraImg,
        imgBack: ultraBack,
        url: '/ultra',
        projDesc: "As the national strategy was being finalized, ULTRA noticed opportunities to address issues involving their visuals and trade at a regional level that could unleash true potential of the brand.",
        imgDesc: 'Fit experts on stage as panelists at Michelob Ultra FitFest',
        vidDesc: 'Diverse group of young women in Michelob Ultra fitness apparel, sittin on a couch laughing and smiling.'
    },
    {
        key: 'khdigital',
        title: 'Digital Revolution',
        vid: khVid,
        placeholder: khImg,
        imgBack: khBack,
        url: '/kh-digital',
        projDesc: "Serving 97% of households, Kraft Heinz began owning their position of defining the next era of food innovation. This thought process shifted the focus to developing an internal digital toolset to replace current platforms.",
        imgDesc: 'Bottles of Kraft Heinz products arranged in a diagonal repeating pattern.',
        vidDesc: 'Video of the letter "KH" transforming into the digital suite logo.'
    },
    {
        key: 'blseltzer',
        title: 'Bring Your Flavor',
        vid: '',
        placeholder: blsImg,
        imgBack: blsBack,
        url: '/blseltzer',
        projDesc: "We all have a unique flavor that we bring to the world. It should be championed and unapologetic. Now more than ever, being yourself is encouraged. Every interaction needs some flavor. Why not bring yours?",
        imgDesc: 'The core four flavors of Bud Light Seltzer among corresponding fruits.',
        vidDesc: 'Four diverse young women smiling and holding unique flavors of Bud Light Seltzer'
    },
    {
        key: 'budweiser',
        title: 'Be a King',
        vid: budVid,
        placeholder: budImg,
        imgBack: budBack,
        url: '/bud-king',
        projDesc: "Despite global success and widespread recognition, Budweiser had seen declining multicultural brand relevance and regional sales from its past leader Houston, TX. The brand's heritage messaging and national campaigns weren’t resonating locally.",
        imgDesc: 'Large billboard on the side of a building with Budweiser "Be A King" imagery',
        vidDesc: 'Houston Rapper Slim Thug performing at a local Budweiser event'
    }
]

export const StickySections = ({ id, sectionRef, scrollIndicatorHidden, ...rest }) => {
    const featureRefs = useRef([]);
    const stickyContainer = useRef();
    const titleId = `${id}-title`;
    const [activeIndex, setActiveIndex] = useState(0)
    const [height, setHeight] = useState(0);
    const [scrollValue, setScrollValue] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const docHeight = document.body.scrollHeight;

    const onScroll = () => {
        handleSections();
    }

    const handleSections = () => {
        const viewportTop = window.scrollY;

        // const elHeight = featureRefs[activeIndex].clientHeight;
        // const elTop = featureRefs[activeIndex].offsetTop;
        // const elBottom = elTop + elHeight;
        const elHeight = stickyContainer.current.clientHeight;
        const elTop = stickyContainer.current.offsetTop;
        const elBottom = elTop + elHeight;
        // console.log(stickyContainer)
        setScrollPercent((height / (docHeight - elHeight)) * 100)

        if (elBottom <= viewportTop) {
            setScrollValue(projects.length + 1)
        } else if (elTop >= viewportTop) {
            setScrollValue(0)
        } else {
            setScrollValue(remapValue(viewportTop, elTop, elBottom, 0, projects.length + 1))
        }
        // console.log('sv ', scrollValue)
        // console.log(remapValue(viewportTop, elTop, elBottom, 0, sections.length + 1))
        // console.log('len: ', sections.length)
        setActiveIndex(Math.floor(scrollValue) >= projects.length ? projects.length - 1 : Math.floor(scrollValue));
        // console.log("ViewportTop", viewportTop)
        // console.log("Height: ", elHeight)
        // console.log("Top: ", elTop)
        // console.log("Bottom: ", elBottom)
        // console.log("current", featureRefs[activeIndex])
        for (let i in featureRefs) {
            if (i !== 'current') {
                if (i === activeIndex.toString()) {
                    featureRefs[i].style.setProperty('--stick-visibility', '1');
                    featureRefs[i].style.setProperty('--stick-scale', '1');
                } else {
                    featureRefs[i].style.setProperty('--stick-visibility', '0');
                    featureRefs[i].style.setProperty('--stick-scale', '.8');
                }
            }
        }
    };

    const remapValue = (val, start1, end1, start2, end2) => {
        const remapped = (val - start1) * (end2 - start2) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    });

    return (
        <>
                <ProjectsUpdate />
        </>

    )
}

{/* <div ref={stickyContainer} className="max-w-md mx-auto lg:max-w-none min-h-[500vh]" data-sticky-sections>
            <div className="sticky top-0 h-screen space-y-16 lg:space-y-0">
            </div>
        </div> */}