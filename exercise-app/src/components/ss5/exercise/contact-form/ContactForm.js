import React, {useState} from 'react';
import './ContactForm.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Formik} from "formik";


export default function ContactForm() {
    const MESSAGE_ERROR = {
        fullName: "Name invalid",
        email: "Email invalid",
        phone: "Phone invalid",
        message: "Message invalid"
    };

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.fullName) {
            errors.fullName = "Required";
        }
        if (!form.phone) {
            errors.phone = "Required";
        }
        if (!form.message) {
            errors.message = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Add contact successfully!!!");
    }

    return (
        <div className="container justify-content-center d-flex">
            <h1>Contact Form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${
                                errors.fullName ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={form.fullName || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.fullName}</p>
                        </div>
                        <div
                            className={`custom-input ${
                                errors.email ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div
                            className={`custom-input ${
                                errors.phone ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div
                            className={`custom-input ${
                                errors.message ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Message</label>
                            <input
                                type="text"
                                name="message"
                                value={form.message || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.message}</p>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}