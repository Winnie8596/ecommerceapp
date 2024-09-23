import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import '../styles/ContactPageStyles.css';
import Container from './../components/Container';
import { createQuery } from '../features/contact/contactSlice';

let contactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    mobile: Yup.string().default('').nullable().required('Mobile is required'),
    comment: Yup.string().default('').nullable().required('Comment is required'),
});

const Contact = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            comment: '',
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            dispatch(createQuery(values))
        },
    });
    return (
        <>
            <Meta title={'Contact Us'} />
            <BreadCrumb title="Contact Us" />
            <Container class1="contact-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59527.2734151513!2d106.03643638876136!3d21.17409304857687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350c5b3464ae51%3A0x1a3035b9749102f9!2zVHAuIELhuq9jIE5pbmgsIELhuq9jIE5pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1682307541457!5m2!1svi!2s"
                            height={450}
                            className="border-0 w-100"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title mb-4">Contact</h3>
                                <form onSubmit={formik.handleSubmit} action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="form-control"
                                            name="name"
                                            onChange={formik.handleChange('name')}
                                            onBlur={formik.handleBlur('name')}
                                            value={formik.values.name}
                                        />
                                        <div className="error">
                                            {formik.touched.name && formik.errors.name}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email *"
                                            className="form-control"
                                            name="email"
                                            onChange={formik.handleChange('email')}
                                            onBlur={formik.handleBlur('email')}
                                            value={formik.values.email}
                                        />
                                        <div className="error">
                                            {formik.touched.email && formik.errors.email}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Mobile"
                                            className="form-control"
                                            name="mobile"
                                            onChange={formik.handleChange('mobile')}
                                            onBlur={formik.handleBlur('mobile')}
                                            value={formik.values.mobile}
                                        />
                                        <div className="error">
                                            {formik.touched.mobile && formik.errors.mobile}
                                        </div>
                                    </div>
                                    <div>
                                        <textarea
                                            type="text"
                                            placeholder="Comments"
                                            className="w-100 form-control"
                                            cols="30"
                                            rows="4"
                                            name="comment"
                                            onChange={formik.handleChange('comment')}
                                            onBlur={formik.handleBlur('comment')}
                                            value={formik.values.comment}
                                        />
                                        <div className="error">
                                            {formik.touched.comment && formik.errors.comment}
                                        </div>
                                    </div>
                                    <div>
                                        <button className="button border-0">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">Get in touch with us</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineHome className="fs-5" />
                                            <address className="mb-0">
                                                Address: 1234 Heaven Stress, Beverly Hill,
                                                Melbourne, USA.
                                            </address>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiPhoneCall className="fs-5" />
                                            <a href="tel:098 9831 609">098 9831 609</a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineMail className="fs-5" />
                                            <a href="mailto:nguyendu334@gmail.com">
                                                nguyendu334@gmail.com
                                            </a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiInfoCircle className="fs-5" />
                                            <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
