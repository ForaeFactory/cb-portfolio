/* eslint-disable react/prop-types */
import { useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { Image } from '../components/image';
import { NavUpdate } from './Nav/NavUpdate.jsx';
import {
    ProjectContainer,
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
import qBack from '../assets/queue/Back_q.png';
import bewellBack from '../assets/bewell/bw-12_brand.png'

// Placeholder Imports
import budImg from '../assets/bud/bud_king.png';
import ultraImg from '../assets/mulBackground.png';
import blsImg from '../assets/blsPlace.png';
import khImg from '../assets/khBackground.png';
import qHeader from '../assets/queue/Intro_q.png';
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

export const ProjectsUpdate = ({ id, sectionRef, ...rest }) => {
    const location = useLocation();

    const projects = [
        {
            key: 'queue',
            title: 'Build the Vibe',
            vid: qVideo,
            placeholder: qHeader,
            imgBack: qBack,
            url: '/queue',
            projDesc: "Design an intuitive app that allows people in the same physical or virtual space to join a shared music queue, add tracks via their preferred streaming services, and vote on what plays next—making the listening experience social, fair, and dynamic.",
            imgDesc: 'Lively crowd partying to their favorite playlists',
            vidDesc: 'Animation of Queue interactions and UI.'
        },
        {
            key: 'ultra',
            title: 'Look of the Leader',
            vid: ultraImg,
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
            vid: blsImg,
            placeholder: blsImg,
            imgBack: blsBack,
            url: '/bls-flavor',
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

    return (
        <div className=''
            id={id}
            ref={sectionRef}
        >
            <NavUpdate />
            {projects.map((project, key) => (
                <ProjectContainer key={key}>
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
                        <ProjectSectionColumns width="full">
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
                                srcSet={`${project.vid} 1280w, ${project.vid} 2560w`}
                                width={1280}
                                height={800}
                                placeholder={project.placeholder}
                                alt={project.vidDesc}
                                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                            />
                        </ProjectSectionColumns>
                    </ProjectSection>
                </ProjectContainer>
            ))}
        </div>
    );
};
