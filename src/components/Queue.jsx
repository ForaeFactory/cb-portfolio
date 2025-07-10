/* eslint-disable react/no-unescaped-entities */
import { ArrowUp } from 'lucide-react';
// Background Image Set
import qBack from '../assets/queue/Back_q.png';

// Header Image Set
import qHeader from '../assets/queue/Intro_q.png';

// Concept Image Set
import qResearch1 from '../assets/queue/Data_q.png';
import qResearch2 from '../assets/queue/Personas_q.png';
import qResearch3 from '../assets/queue/Journeys_q.png';
import qResearch4 from '../assets/queue/Sketches_q.png';

//Wireframes
import qWire1 from '../assets/queue/LofiWire_q.png';
// import qWire2 from '../assets/queue/HiFiWire_q.png';
import qWire3 from '../assets/queue/HifiRoutes_q.png';

// Culture Image Set
import qDesign1 from '../assets/queue/Logos_q.png';
import qDesign2 from '../assets/queue/Fonts_q.png';
import qDesign3 from '../assets/queue/Colors_q.png';
import qDesign4 from '../assets/queue/Buttons_q.png';
import qDesign5 from '../assets/queue/Components_q.png';
import qDesign6 from '../assets/queue/HeadFoot_q.png';
import qDesign7 from '../assets/queue/ui_q.png';

// Video Content
import qVideo from '../assets/queue/Q_V2.mp4';

// Filler Content
// import budFill1 from '../assets/bud/BudFill1.png';
// import budFill2 from '../assets/bud/BudSplash.png';

// import { Footer } from "./Footer.jsx";
import { Image } from '../components/image';
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
import { useLocation } from 'react-router-dom';
import { media, baseMeta } from '../lib/utils.js';
import { ImageCarousel } from './ImageCarousel.jsx';
// import { useTheme } from '../components/ThemeProvider/ThemeProvider.jsx';
import { FooterUpdate } from './FooterUpdate.jsx';

const researchImages = [
    { key: 1, url: qResearch1, desc: "Initial data about music streaming" },
    { key: 2, url: qResearch2, desc: "Three example user personas" },
    { key: 3, url: qResearch3, desc: "User Journey based on research" },
    { key: 4, url: qResearch4, desc: "Initial sketches of architecture and main frames" },
];

const designImages = [
    { key: 1, url: qDesign1, desc: "Logo Designs for queue" },
    { key: 2, url: qDesign2, desc: "Font selection: Satoshi" },
    { key: 3, url: qDesign3, desc: "Primary color palette including shades, gradients and hexcodes for all" },
    { key: 4, url: qDesign4, desc: "Example buttons and variants for UI" },
    { key: 5, url: qDesign5, desc: "Iconography examples" },
    { key: 6, url: qDesign6, desc: "Header and bottom nav bar designs" },
    { key: 7, url: qDesign7, desc: "Examples of how list items such as songs, playlists and queues." },
    { key: 8, url: qWire3, desc: "High fidelity wireframes leveraging the new design system." },
];

const title = 'Queue: Build the Vibe';
const description =
    "Design an intuitive app that allows people in the same physical or virtual space to join a shared music queue, add tracks via their preferred streaming services, and vote on what plays next—making the listening experience social, fair, and dynamic.";
const roles = ['Product Design', 'Design System', 'Interaction Design', 'Motion Graphics'];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const Queue = () => {
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
                    src={qBack}
                    srcSet={`${qBack} 1280w, ${qBack} 2560w`}
                    width={1280}
                    height={800}
                    placeholder={qBack}
                    opacity={0.8}
                />
                <ProjectHeader
                    title={title}
                    description={description}
                    roles={roles}
                />
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectImage
                            srcSet={`${qHeader} 800w, ${qHeader} 1920w`}
                            width={800}
                            height={500}
                            placeholder={qHeader}
                            alt="The Budweiser Logo"
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection padding="none">
                    <ProjectTextRow>
                        <ProjectSectionHeading>The Situation</ProjectSectionHeading>
                        <ProjectSectionText>
                            In social settings, music often becomes a point of friction—someone always dominates the aux cord,
                            and others have no say in the playlist. The result? Disengaged listeners and an unbalanced music experience.
                            There is a need for a democratic, real-time way for everyone to contribute to and influence the music being played.
                        </ProjectSectionText>
                    </ProjectTextRow>
                </ProjectSection>

                <ProjectSection>
                    <ProjectTextRow>
                        <ProjectSectionHeading>User Research</ProjectSectionHeading>

                    </ProjectTextRow>
                    <ImageCarousel images={researchImages} />
                </ProjectSection>
                <ProjectImageSection padding="top">
                    {/* <ProjectTextRow>
                <ProjectSectionHeading>The Situation</ProjectSectionHeading>
                </ProjectTextRow> */}
                    <Image
                        className="imageBackground"
                        src={qWire1}
                        placeholder={qWire1}
                        alt="Budweiser bowties spread across the screen in a diagonal pattern."
                    />
                </ProjectImageSection>
                <ProjectSection light>
                    <ProjectTextRow>
                        <ProjectSectionHeading>Design System</ProjectSectionHeading>
                        <ProjectSectionText>
                            With macro trade assets done, we switched focus to regional experiences and imagery.
                            The goal was simple: Reconnect with Houston’s consumer base that was driving sales through culturally relevant storytelling and vibrant imagery.
                        </ProjectSectionText>
                    </ProjectTextRow>
                    <ImageCarousel images={designImages} />
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Improving the Vibe</ProjectSectionHeading>
                            <ProjectSectionText>
                                Key feedback highlights the importance of seamless onboarding, personalized interaction, and social recognition within the app experience. It seems engagement is driven by a blend of technical curiosity and emotional connection to music. To engage and retain users, Queue must balance intelligent design with opportunities for discovery, contribution, and community.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            raised
                            className="videoProj"
                            srcSet={`${qVideo} 1280w, ${qVideo} 2560w`}
                            width={1280}
                            height={800}
                            placeholder={qHeader}
                            alt="Concert event with headlining rapper, Slim Thug."
                            sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectImageSection padding="top">
                    <Image
                        className="imageBackground"
                        src={qHeader}
                        placeholder={qHeader}
                        alt="Budweiser bottle on vivid red background."
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
