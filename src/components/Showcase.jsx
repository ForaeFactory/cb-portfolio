import { ProjectCard } from './ProjectCard';

import budBack from '../assets/budHeroBack_lg.png';
import ultraBack from '../assets/ultraHeroBack_lg.png';
import blsBack from '../assets/blsHeroBack_lg.png';
import khBack from '../assets/khHeroBack_lg.png';
import qBack from '../assets/qBackLarge.png';
import bewellBack from '../assets/bewell/bw-12_brand.png';

// Card Images Large 2560
import budCardLg from '../assets/cards/budCardLg.png';
import ultraCardLg from '../assets/cards/ultraCardLg.png';
import blsCardLg from '../assets/cards/blsCardLg.png';
import khCardLg from '../assets/cards/khCardLg.png';
import qCardLg from '../assets/cards/qCard2.png';
import bwCardLg from '../assets/cards/bwCardLg.png';

// Card Images 1280
import budCard from '../assets/cards/budCard.png';
import ultraCard from '../assets/cards/ultraCard.png';
import blsCard from '../assets/cards/blsCard.png';
import khCard from '../assets/cards/khCard.png';
import qCard from '../assets/cards/qCard2.png';
import bwCard from '../assets/cards/bwCard.png';

// Card Logos
import budLogo from '../assets/logos/budLogo.png';
import ultraLogo from '../assets/logos/ultraLogo.png';
import blsLogo from '../assets/logos/blsLogo.png';
import khLogo from '../assets/logos/khLogo.png';
import qLogo from '../assets/logos/qLogoLg.png';

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

const projects = [
    {
        key: 'queue',
        title: 'Build the Vibe',
        vid: qVideo,
        logo: qLogo,
        placeholder: qBack,
        cardLg: qCardLg,
        cardSm: qCard,
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
        logo: ultraLogo,
        placeholder: ultraImg,
        cardLg: ultraCardLg,
        cardSm: ultraCard,
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
        logo: khLogo,
        placeholder: khImg,
        cardLg: khCardLg,
        cardSm: khCard,
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
        logo: blsLogo,
        placeholder: blsImg,
        cardLg: blsCardLg,
        cardSm: blsCard,
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
        logo: budLogo,
        placeholder: budImg,
        cardLg: budCardLg,
        cardSm: budCard,
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
        logo: '',
        placeholder: bewellHeader,
        cardLg: bwCardLg,
        cardSm: bwCard,
        imgBack: bewellBack,
        url: '/bewell',
        projDesc: "Despite global success and widespread recognition, Budweiser had seen declining multicultural brand relevance and regional sales from its past leader Houston, TX. The brand's heritage messaging and national campaigns weren’t resonating locally.",
        imgDesc: 'Large billboard on the side of a building with Budweiser "Be A King" imagery',
        vidDesc: 'Houston Rapper Slim Thug performing at a local Budweiser event'
    }
]

export const Showcase = () => {
    return (
        <main className="flex flex-col items-center min-h-screen">
            <section className="relative flex flex-col gap-[10vh]">
                {projects.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        logo={proj.logo}
                        cardLg={proj.cardLg}
                        desc={proj.imgDesc}
                        title={proj.title} />
                ))}
            </section>
        </main>
    );
}