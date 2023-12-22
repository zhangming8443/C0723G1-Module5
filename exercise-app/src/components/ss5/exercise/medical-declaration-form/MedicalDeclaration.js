// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './MedicalDeclaration.css'

import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useState} from "react";


export default function MedicalDeclaration() {

    const initialValues = {
        fullName: '',
        idCard: '',
        dateOfBirth: '',
        gender: null,
        nationality: '',
        workPlace: '',
        jobPosition: '',
        healthInsurance: 1,
        province: '',
        district: '',
        wards: '',
        apartmentNumber: '',
        phone: '',
        email: ''
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

    const [form, setForm] = useState(initialValues);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const validator = {
        fullName: Yup.string().required("Tên không được để trống"),
        idCard: Yup.string().required("Số nhà, phố, tổ dân phố /thôn /đội không được để trống"),
        dateOfBirth: Yup.date().required("Năm sinh không được để trống").min(new Date(1900, 0, 1), 'Năm sinh không hợp lệ'),
        nationality: Yup.string().required("Quốc tịch không được để trống"),
        province: Yup.string().required("Tỉnh /thành không được để trống"),
        district: Yup.string().required("Quận /huyện không được để trống"),
        wards: Yup.string().required("Phường /xã không được để trống"),
        apartmentNumber: Yup.string().required("Địa chỉ không được để trống"),
        phone: Yup.string().required("Số điện thoại không được để trống"),
        email: Yup.string().required("Email không được để trống").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không hợp lệ")
    }

    const handleSubmit = () => {
        alert("Khai báo thành công !!!");
    }


    return (
        <div className="container-fluid">
            <h1>Tờ khai báo ý tế</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validator)}
                onSubmit={handleSubmit}>
                <Form>

                    <div>

                        <label>Họ tên</label>
                        <Field id="fullName" type="text" name="fullName"/>
                        <span className="text-danger">
                            <ErrorMessage name="fullName"/>
                        </span>
                    </div>
                    <div>
                        <label>Số hộ chiếu /CMND</label>
                        <Field id="idCard" type="text" name="idCard"/>
                        <span className="text-danger">
                            <ErrorMessage name="idCard"/>
                        </span>
                    </div>
                    <div>
                        <label>Năm sinh</label>
                        <Field id="dateOfBirth" type="date" name="dateOfBirth"/>
                        <span className="text-danger">
                            <ErrorMessage name="dateOfBirth"/>
                        </span>
                    </div>
                    <div>
                        <label>Giới tính</label>
                        {SEX_LIST.map((option) => (
                            <label key={option.value}>
                                <Field
                                    type="radio"
                                    name="gender"
                                    value={option.value}
                                    checked={form.gender === option.value}
                                    onChange={handleChange}
                                />
                                {option.label}
                            </label>
                        ))}
                    </div>
                    <div>
                        <label>Quốc tịch</label>
                        <Field id="nationality" type="text" name="nationality"/>
                        <span className="text-danger">
                            <ErrorMessage name="nationality"/>
                        </span>
                    </div>
                    <div>
                        <label>Công ty làm việc</label>
                        <Field id="workPlace" type="text" name="workPlace"/>
                    </div>
                    <div>
                        <label>Bộ phận làm việc</label>
                        <Field id="jobPosition" type="text" name="jobPosition"/>
                    </div>
                    <div>
                        <label>Có thẻ bảo hiểm y tế</label>
                        <Field id="healthInsurance" value="1" type="checkbox" name="healthInsurance"/>
                    </div>
                    <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                    <div>
                        <label>Tỉnh thành</label>
                        <Field id="province" type="text" name="province"/>
                        <span className="text-danger">
                            <ErrorMessage name="province"/>
                        </span>
                    </div>
                    <div>
                        <label>Quận /huyện</label>
                        <Field id="district" type="text" name="district"/>
                        <span className="text-danger">
                            <ErrorMessage name="district"/>
                        </span>
                    </div>
                    <div>
                        <label>Phường /xã</label>
                        <Field id="wards" type="text" name="wards"/>
                        <span className="text-danger">
                            <ErrorMessage name="wards"/>
                        </span>
                    </div>
                    <div>
                        <label>Số nhà, phố, tổ dân phố /thôn /đội</label>
                        <Field id="apartmentNumber" type="text" name="apartmentNumber"/>
                        <span className="text-danger">
                            <ErrorMessage name="apartmentNumber"/>
                        </span>
                    </div>
                    <div>
                        <label>Điện thoại</label>
                        <Field id="phone" type="text" name="phone"/>
                        <span className="text-danger">
                            <ErrorMessage name="phone"/>
                        </span>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field id="email" type="text" name="email"/>
                        <span className="text-danger">
                            <ErrorMessage name="email"/>
                        </span>
                    </div>


                    <button type="submit">Xác nhận</button>
                </Form>
            </Formik>
        </div>
    );
}