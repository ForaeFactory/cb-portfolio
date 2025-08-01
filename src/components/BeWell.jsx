/* eslint-disable react/no-unescaped-entities */
import { ArrowUp } from 'lucide-react';
// Background Images
import bewellBackground from '../assets/bewell/bw-12_brand.png';

// Header Image Set
import bewellHero from '../assets/bewell/bw-1_brand.png';
import bewellVid from '../assets/bewell/bewellVid.mp4';

// Experiential Carousel Set
import bewellBrand1 from '../assets/bewell/bw-1_brand.png';
// import bewellBrand2 from '../assets/bewell/bw-2_brand.png';
import bewellBrand3 from '../assets/bewell/bw-3_brand.png';
import bewellBrand4 from '../assets/bewell/bw-4_brand.png';
import bewellBrand5 from '../assets/bewell/bw-5_brand.png';
import bewellBrand6 from '../assets/bewell/bw-6_brand.png';
import bewellBrand7 from '../assets/bewell/bw-7_brand.png';
import bewellBrand8 from '../assets/bewell/bw-8_brand.png';
import bewellBrand9 from '../assets/bewell/bw-9_brand.png';
import bewellBrand10 from '../assets/bewell/bw-10_brand.png';


// Trade Carousel Set
// import mulTrade1 from '../assets/ultra/mulTrade1_1.png';
// import mulTrade2 from '../assets/ultra/mulTrade2.png';
// import mulTrade3 from '../assets/ultra/mulTrade3_1.png';
// import mulTrade4 from '../assets/ultra/mulTrade4_1.png';
// import mulTrade5 from '../assets/ultra/mulTrade5.png';

import { Image } from './image.jsx';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectImage,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectTextRow,
    ProjectImageSection,
} from './Project-Layout.jsx';
import { Fragment, useEffect } from 'react';
import { media, baseMeta } from '../lib/utils';
import { FooterUpdate } from './FooterUpdate.jsx';
import { useLocation } from 'react-router-dom';


const expCarousel = [
    { key: 3, url: bewellBrand3, desc: "Multicultural group laughing on a rooftop patio" },
    { key: 4, url: bewellBrand4, desc: "Multicultural group enjoying Bud Light Seltzer on a rooftop patio" },
    { key: 5, url: bewellBrand5, desc: "Young adults dancing and partying" },
    { key: 6, url: bewellBrand6, desc: "Four young woman posing looking fierce with different flavors of Bud Light Seltzer" },
    { key: 7, url: bewellBrand7, desc: "Four young women enjoying Bud Light Seltzer at modern city bar" },
    { key: 8, url: bewellBrand8, desc: "Young woman smiling and giving a cheers with Bud Light Seltzer" },
    { key: 9, url: bewellBrand9, desc: "Young woman smiling and giving a cheers with Bud Light Seltzer" },
    { key: 10, url: bewellBrand10, desc: "Young woman smiling and giving a cheers with Bud Light Seltzer" },
];

// const tradeCarousel = [
//     { key: 2, url: mulTrade2, desc: "Three seperate designs of how to use the carb/cal count for Ultra graphics." },
//     { key: 3, url: mulTrade3, desc: "Examples of the new aesthetic being used across billboards and activations." },
//     { key: 4, url: mulTrade4, desc: "Apparel mockups that will be used for sell and promotional giveaways" },
//     { key: 5, url: mulTrade5, desc: "The Michelob Ultra Van wrap that will be implemented at launch" },
// ];

const title = 'Bewell: Brand Refresh';
const description =
    "What started as a logo redesign, evolved into building the brand's base visual identity to better reflect the current vision.";
const roles = ['Brand Design', 'Typography', 'Color', 'Logo Design'];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Bewell = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleClick = () => {
        window.scrollTo(0, 0);
    };


    return (
        <Fragment>
            {/* <ThemeToggle /> */}
            <ProjectContainer>
                <ProjectBackground
                    src={bewellBackground}
                    srcSet={`${bewellBackground} 1280w, ${bewellBackground} 2560w`}
                    width={1280}
                    height={800}
                    placeholder={bewellBackground}
                    opacity={0.8}
                />
                <ProjectHeader
                    title={title}
                    description={description}
                    roles={roles}
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectImage
                            srcSet={`${bewellHero} 800w, ${bewellHero} 1920w`}
                            width={800}
                            height={500}
                            placeholder={bewellHero}
                            alt="The Michelob Ultra Brand Logo."
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow className="mt-20px mx-0 mb-60px">
                        <ProjectSectionHeading>Introduction</ProjectSectionHeading>
                        <ProjectSectionText>
                            The aim is to evolve its visual identity and messaging to better reflect its current values and market position.
                            This initiative will strategically refine Bewell's core assets, including its logo, color palette, and
                            brand voice, to create a more modern, cohesive, and compelling brand presence that resonates with its target
                            audience and supports future growth.
                        </ProjectSectionText>
                    </ProjectTextRow>
                    {expCarousel.map(img => (
                        <ProjectImageSection key={img.key} className="my-10">
                            <Image
                                raised
                                srcSet={`${img.url} 1280w, ${img.url} 2560w`}
                                width={1280}
                                height={900}
                                placeholder={img.url}
                                alt="Image of the artboard used to designed the new ULTRA aesthetic."
                                sizes="100vw"
                            />
                        </ProjectImageSection>
                    ))}


                </ProjectSection>
                <ProjectImageSection className="my-10">
                    <Image
                        raised
                        srcSet={`${bewellVid} 1280w, ${bewellVid} 2560w`}
                        width={1280}
                        height={800}
                        placeholder={bewellBrand1}
                        alt="Concert event with headlining rapper, Slim Thug."
                        sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                    />
                </ProjectImageSection>

            </ProjectContainer>
            <button className='flex cosmic-button bg-black text-(--accent) border border-(--accent) mt-15 mx-auto' onClick={handleClick}>
                <ArrowUp size={25} />
                <p className="mx-3">Return to Top of {title}</p>
            </button>
            <FooterUpdate />
        </Fragment>
    );
};
