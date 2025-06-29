export const Intro = () => {
    return (
        <span className="text-primary inline-flex flex-col w-auto h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.8xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block font-medium animate-text-slide text-left leading-tight [&_li]:block">
                <li>Director </li>
                <li>Designer </li>
                <li>Leader </li>
                <li>Developer </li>
                <li>Thinker </li>
                <li aria-hidden="true">Director</li>
            </ul>
        </span>
    )
}