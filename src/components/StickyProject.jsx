/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/Button';
import { Image } from '../components/image';
import {
    ProjectSection,
    ProjectSectionColumns,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectPageText,
    ProjectTextRow,
} from './Project-Layout.jsx';
import { baseMeta, media } from '../lib/utils';

// Background Imports
import budBack from '../assets/budHeroBack_lg.png';
import ultraBack from '../assets/ultraHeroBack_lg.png';
import blsBack from '../assets/blsHeroBack_lg.png';
import khBack from '../assets/khHeroBack_lg.png';
import qBack from '../assets/qBackLarge.png';
import bewellBack from '../assets/bewell/bw-12_brand.png';

// Placeholder Imports
import budImg from '../assets/bud/bud_king.png';
import ultraImg from '../assets/mulBackground.png';
import blsImg from '../assets/blsPlace.png';
import khImg from '../assets/khBackground.png';
import bewellHeader from '../assets/bewell/bw-1_brand.png';

// Video Imports
import budVid from '../assets/bud/BeAKing-Teaser.mp4';
import khVid from '../assets/khc/KHDR_Exp.mp4';
import qVideo from '../assets/queue/Q-V2_Opt.mp4';

const linkLabel = 'View Project';

const heading = 'Featured Projects';
const description =
    'Five featured projects including: Queue Mobile App, Bud Light Seltzer, Kraft Heinz, Michelob Ultra and Budweiser.';

export const meta = () => {
    return baseMeta({ heading, description, prefix: 'Projects' });
};

const projects = [
    {
        key: 'queue',
        title: 'Build the Vibe',
        vid: qVideo,
        placeholder: qBack,
        imgBack: qBack,
        url: '/queue',
        projDesc: "Design an intuitive app that allows people in the same physical or virtual space to join a shared music queue, add tracks via their preferred streaming services, and vote on what plays next—making the listening experience social, fair, and dynamic.",
        imgDesc: 'High fidelity wireframes leveraging the new design system.',
        vidDesc: 'High fidelity wireframes leveraging the new design system.'
    },
    {
        key: 'ultra',
        title: 'Look of the Leader',
        vid: '',
        placeholder: ultraImg,
        imgBack: ultraBack,
        url: '/ultra-leader',
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
    },
    {
        key: 'bewell',
        title: 'Bewell Brand Refresh',
        vid: bewellHeader,
        placeholder: bewellHeader,
        imgBack: bewellBack,
        url: '/bewell',
        projDesc: "Despite global success and widespread recognition, Budweiser had seen declining multicultural brand relevance and regional sales from its past leader Houston, TX. The brand's heritage messaging and national campaigns weren’t resonating locally.",
        imgDesc: 'Large billboard on the side of a building with Budweiser "Be A King" imagery',
        vidDesc: 'Houston Rapper Slim Thug performing at a local Budweiser event'
    }
]

export const StickySection = ({ id, sectionRef, ...rest }) => {
    const featureRefs = useRef([]);
    const stickyContainer = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [height, setHeight] = useState(0);
    const [scrollValue, setScrollValue] = useState(0);
    const [scrollPercent, setScrollPercent] = useState(0);
    const docHeight = document.body.scrollHeight;

    const onScroll = () => {
        handleSections();
    }

    const handleSections = () => {
        const viewportTop = window.scrollY;

        const elHeight = stickyContainer.current.clientHeight;
        const elTop = stickyContainer.current.offsetTop;
        const elBottom = elTop + elHeight;

        setScrollPercent((height / (docHeight - elHeight)) * 100)

        if (elBottom <= viewportTop) {
            setScrollValue(projects.length + 1)
        } else if (elTop >= viewportTop) {
            setScrollValue(0)
        } else {
            setScrollValue(remapValue(viewportTop, elTop, elBottom, 0, projects.length + 1))
        }

        setActiveIndex(Math.floor(scrollValue) >= projects.length ? projects.length - 1 : Math.floor(scrollValue));

        featureRefs.current.forEach((section, i) => {
            if (i === activeIndex) {
                section.style.setProperty('--stick-visibility', '1');
                section.style.setProperty('--stick-scale', '1');
            } else {
                section.style.setProperty('--stick-visibility', '0');
                section.style.setProperty('--stick-scale', '.8');
            }
        });
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
        <div className=''
            id={id}
            ref={sectionRef}
        >
            <div ref={stickyContainer} className="max-w-screen mx-auto lg:max-w-none lg:min-h-[var(--stick-items)]" style={{ '--stick-items': `${projects.length + 1}00vh` }} data-sticky-sections >
                <div className="lg:sticky lg:top-0 lg:h-screen space-y-16 lg:space-y-0">

                    {projects.map((project, index) => (
                        <div key={project.key} ref={(node) => { if (node) { featureRefs.current[index] = node } }} className="lg:absolute lg:inset-0 z-[var(--stick-visibility)]">
                            <ProjectSection
                                backgroundOverlayOpacity={0.9}
                                backgroundElement={
                                    <Image
                                        srcSet={`${project.imgBack} 1280w, ${project.imgBack} 2560w`}
                                        width={1280}
                                        height={900}
                                        placeholder={project.placeholder}
                                        alt={project.imgDesc}
                                        sizes="100vw"
                                    />
                                }
                            >
                                <ProjectSectionColumns width="full"
                                    className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                                    <ProjectSectionContent width="full">
                                        <ProjectTextRow width="xs">
                                            <ProjectSectionHeading>{project.title}</ProjectSectionHeading>
                                            <ProjectPageText>
                                                {project.projDesc}
                                            </ProjectPageText>
                                            <Button
                                                secondary
                                                iconHoverShift
                                                className="linkButton"
                                                icon="chevron-right"
                                                href={location.pathname === '/' ? `./projects${project.url}` : `.${project.url}`}
                                            >
                                                {linkLabel}
                                            </Button>
                                        </ProjectTextRow>
                                    </ProjectSectionContent>
                                    <Image
                                        raised
                                        reveal
                                        className="video"
                                        srcSet={`${project.vid} 1280w`}
                                        width={1280}
                                        height={800}
                                        placeholder={project.placeholder}
                                        alt={project.vidDesc}
                                        sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                                        loading='lazy'
                                    />
                                </ProjectSectionColumns>
                            </ProjectSection>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}