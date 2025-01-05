import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../providers/AuthProvider";


const ForgetPassword = () => {
    const {forgetPassword} = useContext(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);
    const handleForgetPassword = (e) => {
        e.preventDefault();

        console.log(email);
    
        forgetPassword(email)
            .then(() => {
                toast.success("Password reset email sent successfully!");
                window.location.href = "https://mail.google.com/"
            })
            .catch((error) => {
                const errorMessage = error.message || "Something went wrong!";
                toast.error(errorMessage);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse lg:w-[60%]">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Forget Password!</h1>
                    <p className="py-6">
                        Enter Email Address to reset password.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleForgetPassword} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset Password</button>
                        </div>
                        <div>
                            <span className="label-text">Remember Password, <Link to="/Login" className="font-bold">Go to Login.</Link></span>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ForgetPassword;
