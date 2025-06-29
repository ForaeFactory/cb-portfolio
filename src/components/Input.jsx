/* eslint-disable react/prop-types */
import { useId, useRef, useState } from 'react';
import { Icon } from '../components/icon';
import { tokens } from '../components/ThemeProvider/theme';
import { Transition } from '../components/transition';
import { classes, cssProps, msToNum } from '../lib/utils';
import { TextArea } from '../components/TextArea';

export const Input = ({
    id,
    label,
    value,
    multiline,
    className,
    style,
    error,
    onBlur,
    autoComplete,
    required,
    maxLength,
    type,
    onChange,
    name,
    ...rest
}) => {
    const [focused, setFocused] = useState(false);
    const generatedId = useId();
    const errorRef = useRef();
    const inputId = id || `${generatedId}input`;
    const labelId = `${inputId}-label`;
    const errorId = `${inputId}-error`;
    const InputElement = multiline ? TextArea : 'input';

    const handleBlur = event => {
        setFocused(false);

        if (onBlur) {
            onBlur(event);
        }
    };

    return (
        <div
            className={classes("inputContainer", className)}
            data-error={!!error}
            style={style}
            {...rest}
        >
            <div className="inputContent">
                <label
                    className="inputLabel"
                    data-focused={focused}
                    data-filled={!!value}
                    id={labelId}
                    htmlFor={inputId}
                >
                    {label}
                </label>
                <InputElement
                    className="input"
                    id={inputId}
                    aria-labelledby={labelId}
                    aria-describedby={error ? errorId : undefined}
                    onFocus={() => setFocused(true)}
                    onBlur={handleBlur}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    required={required}
                    maxLength={maxLength}
                    type={type}
                    name={name}
                />
                <div className="inputUnderline" data-focused={focused}/>
            </div>
            <Transition unmount in={error} timeout={msToNum(tokens.base.durationM)}>
                {({ visible, nodeRef }) => (
                    <div
                        ref={nodeRef}
                        className="inputError"
                        data-visible={visible}
                        id={errorId}
                        role="alert"
                        style={cssProps({
                            height: visible ? errorRef.current?.getBoundingClientRect().height : 0,
                        })}
                    >
                        <div className="inputErrorMessage" ref={errorRef}>
                            <Icon icon="inputError" />
                            {error}
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
};
