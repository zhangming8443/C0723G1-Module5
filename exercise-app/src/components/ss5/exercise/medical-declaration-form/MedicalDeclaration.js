import React, {useState} from 'react';
import './MedicalDeclaration.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Formik} from "formik";

export default function MedicalDeclaration() {

    const MESSAGE_ERROR = {
        fullName: 'Required',
        idCard: 'Required',
        dateOfBirth: 'Required',
        nationality: 'Required',
        province: 'Required',
        district: 'Required',
        apartmentNumber: 'Required',
        phone: 'Required',
        email: 'Required'
    }

    const SEX_LIST = [
        {
            label: 'Nam',
            value: 'male'
        },
        {
            label: 'Nữ',
            value: 'female'
        }
    ]

    const [form, setForm] = useState({});


    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };


    const handleChange = (event) => {
        const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;

        setForm({...form, [event.target.name]: event.target.value});
    }

    function handleValidate() {
        const errors = {};
        if (!form.fullName) {
            errors.fullName = MESSAGE_ERROR.fullName;
        }

        if (!form.idCard) {
            errors.idCard = MESSAGE_ERROR.idCard;
        }

        if (!form.dateOfBirth) {
            errors.dateOfBirth = MESSAGE_ERROR.dateOfBirth;
        } else {
            const date = new Date(form.dateOfBirth);
            if (date.getFullYear() < 1900) {
                errors.dateOfBirth = "Invalid date";
            }
        }

        if (!form.nationality) {
            errors.nationality = MESSAGE_ERROR.nationality;
        }

        if (!form.province) {
            errors.province = MESSAGE_ERROR.province;
        }

        if (!form.district) {
            errors.district = MESSAGE_ERROR.district;
        }

        if (!form.apartmentNumber) {
            errors.apartmentNumber = MESSAGE_ERROR.apartmentNumber;
        }

        if (!form.phone) {
            errors.phone = MESSAGE_ERROR.phone;
        }


        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
    }

    function handleSubmit() {
        alert("Declared successfully!!!");
    }

}