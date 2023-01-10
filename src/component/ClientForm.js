import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import moment from "moment";
import gregorianAge from "../utils/time";
import {createClient} from "../api/springbootApi";
export default function ClientForm({refresh, toggleRefresh}) {

    return (
        <Formik

            initialValues={{firstName: '', lastName: '', age: 0, birthDate: new Date()}}

            onSubmit={(values, {setSubmitting, setFieldError}) => {
                if(values.age !== gregorianAge(values.birthDate, new Date())) {
                    setFieldError("birthDate", "La fecha de nacimiento y la edad no concuerdan.");
                }
                createClient(values).then(result => result.json()).then(res => console.log(res))
                setSubmitting(false);
                toggleRefresh(!refresh);
            }}

            validationSchema={Yup.object({
                firstName: Yup.string().required("El nombre del cliente no puede ser vacío."),
                lastName: Yup.string().required("El apellido del cliente no puede ser vacío."),
                age: Yup.number().min(0, "La edad del cliente no puede ser menor a 0.").required("La edad del cliente no puede ser vacía."),
                birthDate: Yup.date().required("La fecha de nacimiento del cliente no puede ser vacía")
            })
            }
        >
            {({
                  isSubmitting,
              }) => (
                <Form className="col-3">
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Nombre</label>
                        <Field type="text" name="firstName" className="form-control" />
                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <Field type="text" name="lastName" className="form-control" />
                        <ErrorMessage name="lastName" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Edad</label>
                        <Field type="number" name="age" className="form-control" />
                        <ErrorMessage name="age" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birthDate" className="form-label">Fecha de Nacimiento</label>
                        <Field type="date" name="birthDate" className="form-control" />
                        <ErrorMessage name="birthDate" component="div" className="text-danger" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Submit</button>
                    </div>
                </Form>)}
        </Formik>
    )
}