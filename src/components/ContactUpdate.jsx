/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { ThemeToggle } from "./ThemeToggle";
import { Heading } from "./Heading";
import { Input } from "./Input";
import { Transition } from "./Transition";
// import { useFormInput } from '../hooks/useFormInput';
import { Section } from "./Section";
import { cssProps, msToNum, numToMs } from '../lib/utils';
import { tokens } from '../components/ThemeProvider/theme';
import { Divider } from "./Divider";
import emailjs from '@emailjs/browser';
import { Button } from "./Button";
import { Text } from "./text";
import { Icon } from "./icon"
import { NavUpdate } from "./Nav/NavUpdate";


const NewInput = (props) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Input {...field} {...props} data-error={meta.error && meta.touched ? true : false} />
            {meta.touched && meta.error ?
                <div className="contactFormErrorMessage">
                    <Icon className="contactFormErrorIcon" icon="error" />
                    {meta.error}
                </div>
                : null}
        </>
    );
}

// And now we can use these
export const ContactUpdate = () => {
    const [resData, setResData] = useState();
    const [isSubmitting, setSubmitting] = useState(false);
    const initDelay = tokens.base.durationS;
    const form = useRef();
    const sending = isSubmitting === true;

    emailjs.init({
        publicKey: 'Te-0wcc13pcoyUYYj',
        // Do not allow headless browsers
        blockHeadless: true,
        blockList: {},
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });

    const sendEmail = (err) => {

        if (Object.keys(err)) {
            emailjs.sendForm('service_w75e0ch', 'cbDesign_Inquiry_6-25', form.current,
            )
                .then(
                    (response) => {
                        setResData({ success: response.text });
                        console.log("resData: ", resData)
                    },
                    (error) => {
                        setResData({ error: error.text });
                        console.log("resData: ", resData)
                    },
                )
        }
    }

    return (
        <>
            <NavUpdate />
            <ThemeToggle />
            <Section className="contact">
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: ''
                    }}
                    // validationSchema={formValSchema}
                    validate={values => {
                        const errors = {}
                        if (!values.firstName) {
                            errors.firstName = 'Required';
                        } else if (values.firstName.length > 15) {
                            errors.firstName = 'Must be 15 characters or less';
                        }

                        if (values.lastName.length > 30) {
                            errors.lastName = 'Must be 30 characters or less';
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        console.log(errors)
                        return errors
                    }}
                    onSubmit={errors => sendEmail(errors)}
                >
                    <Transition unmount in={!resData?.success} timeout={1600} >
                        {({ status, nodeRef, errors }) => (
                            <Form
                                id="connectForm"
                                className='contactForm'
                                method="post"
                                ref={form}
                            >
                                <Heading
                                    className="contactTitle"
                                    data-status={status}
                                    level={3}
                                    as="h1"
                                    style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                                >
                                    Say Hello!
                                </Heading>
                                <Divider
                                    className="contactDivider"
                                    data-status={status}
                                    style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
                                />
                                {/* Hidden honeypot field to identify bots */}
                                <Input
                                    className="contactBotKiller"
                                    label="Name"
                                    name="name"
                                />
                                <NewInput
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                    className="contactInput"
                                    data-status={status}
                                    data-error={errors?.firstName ? true : false}
                                    style={getDelay(tokens.base.durationXS, initDelay)}
                                />
                                <NewInput
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    className="contactInput"
                                    data-status={status}
                                    style={getDelay(tokens.base.durationS, initDelay)}
                                />
                                <NewInput
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    className="contactInput"
                                    data-status={status}
                                    style={getDelay(tokens.base.durationS, initDelay)}
                                />
                                <NewInput
                                    multiline
                                    className="contactInput"
                                    data-status={status}
                                    style={getDelay(tokens.base.durationS, initDelay)}
                                    label="Message"
                                    name="message"
                                    type="text"
                                />
                                <Button
                                    className="contactButton"
                                    data-status={status}
                                    data-sending={sending}
                                    style={getDelay(tokens.base.durationM, initDelay)}
                                    disabled={sending}
                                    loading={sending}
                                    loadingText="Sending..."
                                    icon="send"
                                    type="submit"
                                >
                                    Send message
                                </Button>
                            </Form>
                        )}
                    </Transition>
                </Formik>
                <Transition unmount in={resData?.success}>
                    {({ status, nodeRef }) => (
                        <div className="contactComplete" aria-live="polite" ref={nodeRef}>
                            <Heading
                                level={3}
                                as="h3"
                                className="contactCompleteTitle"
                                data-status={status}
                            >
                                Message Sent
                            </Heading>
                            <Text
                                size="l"
                                as="p"
                                className="contactCompleteText"
                                data-status={status}
                                style={getDelay(tokens.base.durationXS)}
                            >
                                I’ll get back to you as soon as possible, thank you.
                            </Text>
                            <Button
                                secondary
                                iconHoverShift
                                className="contactCompleteButton"
                                data-status={status}
                                style={getDelay(tokens.base.durationM)}
                                href="/"
                                icon="chevron-right"
                            >
                                Back to homepage
                            </Button>
                        </div>
                    )}
                </Transition>
            </Section>
        </>
    );
};


function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
    const numDelay = msToNum(delayMs) * multiplier;
    return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}

