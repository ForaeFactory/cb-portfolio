
// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const MAX_EMAIL_LENGTH = 512;
// const MAX_MESSAGE_LENGTH = 4096;
// const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;


// const contactFormValidation =
//     Yup.object().shape({
//         firstName: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('Required'),
//         lastName: Yup.string()
//             .min(2, 'Too Short!')
//             .max(50, 'Too Long!')
//             .required('Required'),
//         email: Yup.string().email('Invalid email').required('Required'),
//         message: Yup.string()
//             .min(15, "Must be 15 characters or more")
//             .required("Required")
//     })




// export const ValidationSchemaExample = () => {


//     return (
//         <div>
//             <h1>Signup</h1>
//             <Formik
//                 initialValues={{
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                 }}
//                 validationSchema={contactFormValidation}
//                 onSubmit={values => {
//                     // same shape as initial values
//                     console.log(values);
//                 }}
//             >
//                 {({ errors, touched }) => (
//                     <Form>
//                         <Field name="firstName" />
//                         {errors.firstName && touched.firstName ? (
//                             <div>{errors.firstName}</div>
//                         ) : null}
//                         <Field name="lastName" />
//                         {errors.lastName && touched.lastName ? (
//                             <div>{errors.lastName}</div>
//                         ) : null}
//                         <Field name="email" type="email" />
//                         {errors.email && touched.email ? <div>{errors.email}</div> : null}
//                         <button type="submit">Submit</button>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     )

// };

/*

 


const Validation = () => {
               <ThemeToggle />
               <Section className="contact">
   
                   <Formik
                       initialValues={{
                           firstName: "",
                           lastName: "",
                           email: "",
                           message: ""
                       }}
                       validationSchema={contactFormValidation}
                       onSubmit={async (values, actions) => {
                           setTimeout(() => {
                               alert(JSON.stringify(actions, null, 2));
                               actions.setSubmitting(false);
                           }, 1000)
                           actions.resetForm({
                               values: {
                                   firstName: '',
                                   lastName: '',
                                   email: '',
                                   message: '',
                               },
                           })
                       }}
                   ></Formik>
}
*/