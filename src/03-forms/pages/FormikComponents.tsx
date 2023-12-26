import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>FormikComponents</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Ingrese un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().isTrue(
            "Debe aceptar los terminos y condiciones"
          ),
          jobType: Yup.string().required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senor">IT - Senior</option>
              <option value="it-jr">IT - Junior</option>
            </Field>
            <ErrorMessage name="email" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and Conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
