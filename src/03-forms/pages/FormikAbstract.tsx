import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import { MyCheckbox } from "../components/MyCheckbox";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>FormikAbstract</h1>

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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="Email"
              type="email"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senor">IT - Senior</option>
              <option value="it-jr">IT - Junior</option>
            </MySelect>

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
