/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { classes } from '../lib/utils';

export const VisuallyHidden = forwardRef(
    (
        { className, showOnFocus, as: Component = 'span', children, visible, ...rest },
        ref
    ) => {
        return (
            <Component
                className={classes("hidden", className)}
                data-hidden={!visible && !showOnFocus}
                data-show-on-focus={showOnFocus}
                ref={ref}
                {...rest}
            >
                {children}
            </Component>
        );
    }
);