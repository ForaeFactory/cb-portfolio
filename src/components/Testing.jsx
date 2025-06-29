import { Navbar } from "./Navbar";
import { Transition } from "./Transition";
import { useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { usePrevious } from "../hooks/usePrevious";
import { VisuallyHidden } from "./Visually-Hidden";
import { cssProps } from "../lib/utils";

export const Testing = () => {
    const disciplines = ["one", "two", "three", "four"];
    const [disciplineIndex, setDisciplineIndex] = useState(0);
    const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
    const role = "Designer";
    const introLabel = "Creator";

    useInterval(
        () => {
            const index = (disciplineIndex + 1) % disciplines.length;
            setDisciplineIndex(index);
        },
        5000
    );

    return (
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <Transition in key={'nameId'} timeout={2000}>
                    {({ visible, status }) => (
                        <>
                            <header className="">
                                <h1 className="name" data-visible={visible} id={'craig'}>
                                    Craig Brooks
                                </h1>
                                <h2 className="tracking-wider">
                                    <VisuallyHidden className="label">
                                        {`${role} + ${introLabel}`}
                                    </VisuallyHidden>
                                    <span aria-hidden className="row">
                                        <span
                                            className="text-4xl"
                                            data-status={status}
                                            style={cssProps({ delay: 200 })}
                                        >
                                            Designer
                                        </span>
                                        <span className="line" data-status={status} />
                                    </span>
                                    <div className="row">
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
                                                        className="word-intro"
                                                        data-plus={true}
                                                        data-status={status}
                                                        style={cssProps({ delay: 600 })}
                                                    >
                                                        {item}
                                                    </span>
                                                )}
                                            </Transition>
                                        ))}
                                    </div>
                                </h2>
                            </header>
                        </>
                    )}
                </Transition>
            </div>
        </>
    )
}