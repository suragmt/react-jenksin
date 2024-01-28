import React from "react";
import { Formik, useFormik, Form, Field } from "formik";
import * as Yup from "yup";
export default function Signup() {
  const validate = (values) => {
    let errors = {};
    if (values.email === "surag") {
      errors.email = "not acceptable";
    }
    return errors;
  };

  const signup = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().required("it is required").email("should be email"),
      password: Yup.string().required("it is required").max("10"),
    }),
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <div>signup</div>
      {JSON.stringify(signup.values, null, 2)}
      {JSON.stringify(signup.errors, null, 2)}

      {/* <form onSubmit={signup.handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            // value={signup.values.email}
            // onChange={signup.handleChange}
            // onBlur={signup.handleBlur}
            {...signup.getFieldProps("email")}
          />
        </div>
        <div>
          <label htmlFor="password">email</label>
          <input
            id="password"
            name="password"
            // value={signup.values.password}
            // onChange={signup.handleChange}
            {...signup.getFieldProps("password")}
            // onBlur={signup.handleBlur}
          />
        </div>
        <button type="submit">onSubmit</button>
      </form> */}
      <Formik
        initialValues={{
          email: "",
          password: "",
          details: { city: "" },
          properties: ["one", "two"],
          degrees: [],
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("it is required")
            .email("should be email"),
          password: Yup.string().required("it is required").max("10"),
          details: Yup.object({
            city: Yup.string().required(),
          }),
        })}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          {/* {({values})=>{
                <>
      {JSON.stringify(values, null, 2)} */}

          <div>
            <label htmlFor="email">email</label>
            <Field name="email" />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <Field name="password">
              {/* <option>opt 1</option>
              <option>opt 2</option> */}
            </Field>
          </div>
          <div>
            <label htmlFor="city">city</label>
            <Field name="details.city"></Field>
          </div>
          <div>
            <label htmlFor="properties[0]">prop</label>
            <Field name="properties[0]"></Field>
          </div>
          <div>
            <label htmlFor="properties[1]">prop</label>
            <Field name="properties[1]"></Field>
          </div>
          <div>
            <label htmlFor="bsc">bsc</label>
            <Field id='bsc' type="checkbox" name="checked" value="msc"></Field>
          </div>
          <div>
            <label htmlFor="msc">msc</label>
            <Field id='msc' type="checkbox" name="checked" value="msc"></Field>
          </div>
          <button type="submit">submit</button>
          {/* </>
        }} */}
        </Form>
      </Formik>
    </>
  );
}
