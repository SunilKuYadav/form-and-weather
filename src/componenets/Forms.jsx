import React, { useState } from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import WeatherApi from "./WeatherApi";
import FormText from "./form/FormText";
import FormDate from './form/FormDate'
import FormRadio from "./form/FormRadio";

// form validation Schema using Yup
const loginSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2).max(20).matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  lastName: Yup.string().required().min(2).max(20).matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
  email: Yup.string().email().required(),
  userName: Yup.string().required().min(4).max(20),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/(?=.*?[A-Z])/g, "Should contain a Capital latter")
    .matches(/(?=.*?[a-z])/g, "Should contain a Small latter")
    .matches(/(?=.*?[0-9])/g, "Should contain a Number")
    .matches(/(?=.*?[#?!@$%^&*-])/g, "Should contain a Spacial latter"),
  dob: Yup.date().required().test("age", "You must be 18 or older", function (birthdate) {
    const cutoff = new Date();
    cutoff.setFullYear(cutoff.getFullYear() - 18);
    return birthdate <= cutoff;
  }),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password")], "password should match")
    .required(),
  city: Yup.string().required().matches(/^[A-Za-z ]*$/, 'Please enter valid city name'),
  pin: Yup.number()
    .required()
    .min(100000, "Pin Code must be of 6 number")
    .max(999999, "Pin Code must be of 6 number"),
  gender: Yup.string().required().oneOf(["male", "female", "other"]),
});

// form initial values
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  rePassword: "",
  city: "",
  pin: "",
  dob: "",
  gender: "",
};

export function Forms() {
  const [showWeather, setShowWeather] = useState(false);
  const [cityName, setCityName] = useState("");

  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(data) => {
          setCityName(data.city);
          setShowWeather(true);
        }}
      >
        {() => (
          <Form className="formContainer">
            <FormText name="firstName" type="text" label="First Name" />
            <FormText name="lastName" type="text" label="Last Name" />
            <FormRadio
              name="gender"
              values={["male", "female", "other"]}
              labels={["Male", "Female", "Other"]}
            />
            <FormDate name="dob" type="date" label="Date Of Birth" />
            <FormText name="city" type="text" label="City Name" />
            <FormText name="pin" type="number" label="Pin Code" />
            <FormText name="email" type="email" label="Email" />
            <FormText name="userName" type="text" label="username" />
            <FormText name="password" type="password" label="Password" />
            <FormText
              name="rePassword"
              type="password"
              label="Conform Password"
            />
            <div className="submitBtn">
              <Button
                variant="outlined"
                size="large"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      {/* conditionally showing the weather tempreture */}
      {showWeather ? <WeatherApi city={cityName} /> : null}
    </div>
  );
}
