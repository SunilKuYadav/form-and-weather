import React from 'react'
import { Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";

export default function FormText(props) {
    let { name,type, label } = props;
    return (
        <div>
            <Field
                variant="outlined"
                name={name}
                label={label}
                type={type}
                as={TextField}
              />
              <div className="error">
                <ErrorMessage name={name} />
              </div>
        </div>
    )
}
