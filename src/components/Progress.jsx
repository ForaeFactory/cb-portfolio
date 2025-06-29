import { useState, useRef } from 'react';

export const Progress = () => {
    const progressText = useRef();
    const progressBar = useRef();
    const [interval, setInterval] = useState(0);

    const duration = 5000;
    const active = 0;
    let progress = 0;
    const firstFrameTime = 0;
    const updateInterval = 50;
    const maxProgress = 65;

    const items = [1, 2, 3, 4];

    const updateProgress = () => {
        progress++;
        if (progress > maxProgress) {
            clearInterval(interval);
            progress = maxProgress;
        }
    }
    updateProgress();
    // setInterval(updateProgress, updateInterval);


    return (
        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
            <div
                className="bg-primary h-2 rounded-full origin-left animate-grow"
                style={{ width: 50 + "%" }}
            />
        </div>
    )
};