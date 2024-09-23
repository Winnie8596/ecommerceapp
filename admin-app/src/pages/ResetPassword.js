import React from 'react';
import CustomInput from './../components/CustomInput';

const ResetPassword = () => {
    return (
        <div className="py-5" style={{ background: '#F7E1AE', minHeight: '100vh' }}>
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-3">
                <h3 className="text-center">Reset Password</h3>
                <p className="text-center">
                    Please enter your new password and confirm new password.
                </p>
                <form action="">
                    <CustomInput type="password" label="Password" i_id="password" />
                    <CustomInput type="password" label="Confirm Password" i_id="confirm-password" />
                    <button
                        className="border-0 px-3 py-2 text-dark fw-bold w-100"
                        style={{ background: '#F7E1AE' }}
                        type="submit"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
