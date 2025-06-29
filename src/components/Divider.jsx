/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { classes, cssProps, numToMs } from '../lib/utils';

export const Divider = ({
    lineWidth = '100%',
    lineHeight = '2px',
    notchWidth = '90px',
    notchHeight = '10px',
    collapsed = false,
    collapseDelay = 0,
    className,
    style,
    ...rest
}) => (
    <div
        className={classes("divider", className)}
        style={cssProps(
            {
                lineWidth: lineWidth,
                lineHeight: lineHeight,
                notchWidth: notchWidth,
                notchHeight: notchHeight,
                collapseDelay: numToMs(collapseDelay),
            },
            style
        )}
        {...rest}
    >
        <div className="dividerLine" data-collapsed={collapsed} />
        <div
            className="dividerNotch"
            data-collapsed={collapsed}
            style={cssProps({ collapseDelay: numToMs(collapseDelay + 160) })}
        />
    </div>
);

// Divider.defaultProps = {
//     lineWidth: '100%',
//     lineHeight: '2px',
//     notchWidth: '90px',
//     notchHeight: '10px',
//     collapsed: false,
//     collapseDelay: 0,
// };
