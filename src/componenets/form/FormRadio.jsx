import React from "react";
import { Field, ErrorMessage } from "formik";

export default function FormRadio(props) {
  let { name, values, labels } = props;
  return (
    <div>
       <label>
      <Field type="radio" name={name} value={values[0]} />
      {labels[0]}
    </label>
    <label>
      <Field type="radio" name={name} value={values[1]} />
      {labels[1]}
    </label>
    <label>
      <Field type="radio" name={name} value={values[2]} />
      {labels[2]}
    </label>
      <div className="error">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}


// called by !!!

{/* <FormRadio name="gender" values={["male", "female", "other"]} labels={["Male", "Female", "Other"]}/> */}