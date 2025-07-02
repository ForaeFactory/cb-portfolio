/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { Icon } from '../components/icon';
import { Loader } from '../components/loader';
import { Transition } from '../components/Transition';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { classes } from '../lib/utils';


function isExternalLink(href) {
    return href?.includes('://');
}

export const Button = forwardRef(({ href, ...rest }, ref) => {
    if (isExternalLink(href) || !href) {
        return <ButtonContent href={href} ref={ref} {...rest} />;
    }

    return (
        <ButtonContent
            viewTransition
            as={Link}
            prefetch="intent"
            to={href}
            ref={ref}
            {...rest}
        />
    );
});

const ButtonContent = forwardRef(
    (
        {
            className,
            as,
            secondary,
            loading,
            loadingText = 'loading',
            icon,
            iconEnd,
            iconHoverShift,
            iconOnly,
            children,
            rel,
            target,
            href,
            disabled,
            ...rest
        },
        ref
    ) => {
        const isExternal = isExternalLink(href);
        const defaultComponent = href ? 'a' : 'button';
        const Component = as || defaultComponent;

        return (
            <Component
                className={classes('button', className)}
                data-loading={loading}
                data-icon-only={iconOnly}
                data-secondary={secondary}
                data-icon={icon}
                href={href}
                rel={rel || isExternal ? 'noopener noreferrer' : undefined}
                target={target || isExternal ? '_blank' : undefined}
                disabled={disabled}
                ref={ref}
                {...rest}
            >
                {!!icon && (
                    <Icon
                        className='btnIcon'
                        data-start={!iconOnly}
                        data-shift={iconHoverShift}
                        icon={icon}
                    />
                )}
                {!!children && <span className='btnText'>{children}</span>}
                {!!iconEnd && (
                    <Icon
                        className='btnIcon'
                        data-end={!iconOnly}
                        data-shift={iconHoverShift}
                        icon={iconEnd}
                    />
                )}
                <Transition unmount in={loading}>
                    {({ visible, nodeRef }) => (
                        <Loader
                            ref={nodeRef}
                            className='btnLoader'
                            size={32}
                            text={loadingText}
                            data-visible={visible}
                        />
                    )}
                </Transition>
            </Component>
        );
    }
);

export const ButtonVid = forwardRef(({ href, ...rest }, ref) => {
    if (isExternalLink(href) || !href) {
        return <ButtonVidContent href={href} ref={ref} {...rest} />;
    }

    return (
        <ButtonContent
            viewTransition
            as='a'
            prefetch="intent"
            to={href}
            ref={ref}
            {...rest}
        />
    );
});

const ButtonVidContent = forwardRef(
    (
        {
            className,
            as,
            secondary,
            loading,
            loadingText = 'loading',
            icon,
            iconEnd,
            iconHoverShift,
            iconOnly,
            children,
            rel,
            target,
            href,
            disabled,
            ...rest
        },
        ref
    ) => {
        const isExternal = isExternalLink(href);
        const defaultComponent = href ? 'a' : 'button';
        const Component = as || defaultComponent;

        return (
            <Component
                className="button"
                data-loading={loading}
                data-icon-only={iconOnly}
                data-secondary={secondary}
                data-icon={icon}
                href={href}
                rel={rel || isExternal ? 'noopener noreferrer' : undefined}
                target={target || isExternal ? '_blank' : undefined}
                disabled={disabled}
                ref={ref}
                {...rest}
            >
                {!!icon && (
                    <Icon
                        className="btnIcon"
                        data-start={!iconOnly}
                        data-shift={iconHoverShift}
                        icon={icon}
                    />
                )}
                {!!children && <span className="btnText">{children}</span>}
                {!!iconEnd && (
                    <Icon
                        className="btnIcon"
                        data-end={!iconOnly}
                        data-shift={iconHoverShift}
                        icon={iconEnd}
                    />
                )}
                <Transition unmount in={loading}>
                    {({ visible, nodeRef }) => (
                        <Loader
                            ref={nodeRef}
                            className="btnLoader"
                            size={32}
                            text={loadingText}
                            data-visible={visible}
                        />
                    )}
                </Transition>
            </Component>
        );
    }
);
