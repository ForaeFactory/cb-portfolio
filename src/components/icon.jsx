/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { forwardRef } from 'react';
import sprites from '../assets/icons.svg';
import { classes } from '../lib/utils';

export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
    return (
        <svg
            aria-hidden
            ref={ref}
            className={classes('icon', className)}
            width={size || 24}
            height={size || 24}
            {...rest}
        >
            <use href={`${sprites}#${icon}`} />
        </svg>
    );
});