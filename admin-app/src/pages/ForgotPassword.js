import React from 'react';
import CustomInput from './../components/CustomInput';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="py-5" style={{ background: '#F7E1AE', minHeight: '100vh' }}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
                <h3 className="text-center">Forgot Password</h3>
                <p className="text-center">
                    Please enter your register email to get reset password.
                </p>
                <form action="">
                    <CustomInput type="text" label="Email" i_id="email" />
                    <button
                        className="border-0 px-3 py-2 text-dark fw-bold w-100"
                        style={{ background: '#F7E1AE' }}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <p className="text-center mt-3 mb-0">
                    <Link className='text-dark text-decoration-none' to="/">Cancel</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
