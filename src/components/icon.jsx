/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { forwardRef } from 'react';
import sprites from '../assets/icons.svg';

export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
    return (
        <svg
            aria-hidden
            ref={ref}
            className="socialIcon"
            width={size || 24}
            height={size || 24}
            {...rest}
        >
            <use href={`${sprites}#${icon}`} />
        </svg>
    );
});