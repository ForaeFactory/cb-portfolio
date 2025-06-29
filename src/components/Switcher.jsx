import { useState, useEffect, useRef } from 'react'

const Switcher = ({ onSwitch, currentStatus, isChecked }) => {
    console.log(currentStatus, '<-- is Dark')



    useEffect(() => {
        //   const storedTheme = localStorage.getItem("theme");
        //   if (storedTheme === "dark") {
        //     setIsLightMode(false);
        //     switcherUI.classList.add("dark");
        //   } else {
        //     localStorage.setItem("theme", "light");
        //     setIsLightMode(false);
        //   }

    }, []);

    // const toggleTheme = () => {
    //     if (isLightMode) {
    //         switcherUI.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //         setIsLightMode(true);
    //     } else {
    //         switcherUI.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //         setIsLightMode(false);
    //     }
    // };


    return (
        <div className='mb-[6rem]'>
            <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                <input
                    type='checkbox'
                    checked={currentStatus}
                    onChange={onSwitch}
                    className='sr-only'
                />
                <span className='label flex items-center text-lg font-medium text-foreground'>
                    Light
                </span>
                <span
                    className={`slider mx-8 flex h-10 w-[80px] items-center rounded-full p-1 duration-200 ${currentStatus ? 'bg-[#0f1729]' : 'bg-[#CCCCCE]'
                        }`}
                >
                    <span
                        className={`dot h-8 w-8 rounded-full bg-white duration-200 ${currentStatus ? 'translate-x-[38px]' : ''
                            }`}
                    ></span>
                </span>
                <span className='label flex items-center text-lg font-medium text-foreground'>
                    Dark
                </span>
            </label>
        </div>
    )
}

export default Switcher
