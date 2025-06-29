/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Text } from '../components/text';
import { useReducedMotion } from 'framer-motion';
import { classes, cssProps } from '../lib/utils';
import { forwardRef } from 'react';


export const Loader = forwardRef(
  (
    { className, style, width = 32, height = 4, text = 'Loading...', center, ...rest },
    ref
  ) => {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
      return (
        <Text className={classes('loader', className)} weight="medium" {...rest}>
          {text}
        </Text>
      );
    }

    return (
      <div
        ref={ref}
        className={classes('loader', className)}
        data-center={center}
        style={cssProps({ width, height }, style)}
        {...rest}
      >
        <div className="loader span" />
      </div>
    );
  }
);
