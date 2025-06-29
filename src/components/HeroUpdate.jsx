/* eslint-disable react/prop-types */
import { Heading } from '../components/heading';
import { Section } from '../components/Section';
import { useTheme } from '../components/ThemeProvider/ThemeProvider';
import { tokens } from '../components/ThemeProvider/theme';
import { Transition } from '../components/transition';
import { VisuallyHidden } from '../components/visually-hidden';
import { ArrowDown } from "lucide-react";
import { Link } from 'react-router-dom';
import { useInterval } from '../hooks/useInterval';
import { usePrevious } from '../hooks/usePrevious';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { useEffect, useState } from 'react';
import { cssProps } from '../lib/utils';
// import styles from './intro.module.css';

// const DisplacementSphere = lazy(() =>
//   import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
// );

const config = {
    "name": "Craig Brooks",
    "role": "Designer",
    "disciplines": ["Creator", "Innovator", "Director", "Motivator", "Developer"],
    "url": "https://foraefactory.com",
    "linkedin": "craigbrooks",
    "repo": "https://github.com/ForaeFactory/cb-design",
    "ascii": "__  __  __\n\u005C \u005C \u005C \u005C \u005C\u2215\n \u005C \u005C\u2215\u005C \u005C\n  \u005C\u2215  \u005C\u2215\n"
}

export function HeroUpdate({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
    const { theme } = useTheme();
    const { disciplines } = config;
    const [disciplineIndex, setDisciplineIndex] = useState(0);
    const prevTheme = usePrevious(theme);
    const introLabel = [disciplines.slice(0, -1).join(', '), disciplines.slice(-1)[0]].join(
        ', and '
    );
    const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
    const titleId = `${id}-title`;
    const scrollToHash = useScrollToHash();

    useInterval(
        () => {
            const index = (disciplineIndex + 1) % disciplines.length;
            setDisciplineIndex(index);
        },
        5000
    );

    useEffect(() => {
        if (prevTheme && prevTheme !== theme) {
            setDisciplineIndex(0);
        }
    }, [theme, prevTheme]);

    const handleScrollClick = event => {
        event.preventDefault();
        scrollToHash(event.currentTarget.href);
    };

    return (
        <Section
            ref={sectionRef}
            className="introSection"
            as="section"
            id={id}
            aria-labelledby={titleId}
            tabIndex={-1}
            {...rest}
        >
            <Transition in key={theme} timeout={3000}>
                {({ visible, status }) => (
                    <>
                        <header className="introText">
                            <h1 className="introName" data-visible={visible} id={titleId}>
                                {config.name}
                            </h1>
                            <Heading level={0} as="h2" className="introTitle">
                                <VisuallyHidden className="introLabel">
                                    {`${config.role} + ${introLabel}`}
                                </VisuallyHidden>
                                <span aria-hidden className="introRow">
                                    <span
                                        className="introWord"
                                        data-status={status}
                                    // style={cssProps({ delay: tokens.base.durationXS })}
                                    >
                                        {config.role}
                                    </span>
                                    <span className="introLine" data-status={status} />
                                </span>
                                <div className="introRow">
                                    {disciplines.map(item => (
                                        <Transition
                                            unmount
                                            in={item === currentDiscipline}
                                            timeout={{ enter: 3000, exit: 2000 }}
                                            key={item}
                                        >
                                            {({ status, nodeRef }) => (
                                                <span
                                                    aria-hidden
                                                    ref={nodeRef}
                                                    className="introWord"
                                                    data-plus={true}
                                                    data-status={status}
                                                // style={cssProps({ delay: tokens.base.durationL })}
                                                >
                                                    {item}
                                                </span>
                                            )}
                                        </Transition>
                                    ))}
                                </div>
                            </Heading>
                        </header>
                        <Link
                            to="/#projects"
                            className="scrollIndicator"
                            data-status={status}
                            data-hidden={scrollIndicatorHidden}
                            onClick={handleScrollClick}
                        >
                            <VisuallyHidden>Scroll to projects</VisuallyHidden>
                        </Link>
                        <Link
                            to="/#projects"
                            className="mobileScrollIndicator"
                            data-status={status}
                            data-hidden={scrollIndicatorHidden}
                            onClick={handleScrollClick}
                        >
                            <VisuallyHidden>Scroll to projects</VisuallyHidden>
                            <svg
                                aria-hidden
                                stroke="currentColor"
                                width="43"
                                height="15"
                                viewBox="0 0 43 15"
                            >
                                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
                            </svg>
                        </Link>
                    </>
                )}
            </Transition>
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-md text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-7 w-7 text-primary" />
            </div> */}
        </Section>
    );
}