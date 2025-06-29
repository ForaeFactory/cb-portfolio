/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { classes } from '../lib/utils';

export const Section = forwardRef(
    ({ as: Component = 'div', children, className, ...rest }, ref) => (
        <Component className={classes('section', className)} ref={ref} {...rest}>
            {children}
        </Component>
    )
);
