/* eslint-disable react/prop-types */

import { media } from '../lib/utils';
import { useEffect, useRef, useState } from 'react';
import { useInView, useScroll } from 'framer-motion';

export const ProjectCard = ({ desc, cardLg, logo }) => {
    const vertMargin = 10;

    const cardContainer = useRef(null);

    const [maxScrollY, setMaxScrollY] = useState(Infinity);
    const [dynamicStyles, setDynamicStyles] = useState({
        scale: 1,
        filter: 0,
    });

    const { scrollY } = useScroll({
        target: cardContainer,
    });

    const isInView = useInView(cardContainer, {
        margin: `0px 0px -${100 - vertMargin}% 0px`,
        once: true,
    });

    scrollY.on("change", (scrollY) => {
        let animationValue = 1;
        if (scrollY > maxScrollY) {
            animationValue = Math.max(0, 1 - (scrollY - maxScrollY) / 10000)
        }

        setDynamicStyles({
            scale: animationValue,
            filter: (1 - animationValue) * 100,
        })
    })

    useEffect(() => {
        if (isInView) {
            setMaxScrollY(scrollY.get());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);



    return (
        <>
            <div
                ref={cardContainer}
                className="sticky h-[90vh] w-[80vw] rounded-xl overflow-hidden"
                style={{
                    top: `${vertMargin}vh`,
                    height: `${100 - 2 * vertMargin}vh`,
                    transform: `scale(${dynamicStyles.scale})`,
                    filter: `blur(${dynamicStyles.filter}px)`
                }}
            >
                <div dir='ltr'>
                    <img
                        src={logo}
                        alt={desc}
                        className='absolute w-1/4 h-auto inset-y-7/8 end-1/16' />
                </div>
                <img
                    className="h-full w-full object-cover"
                    srcSet={`${cardLg} 1x`}
                    alt={desc}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
            </div>
        </>
    )
}