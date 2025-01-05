import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebase.init"; 


const UpdateProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const name = e.target.name.value;
    
        updateUserProfile({ displayName: name, photoURL: image })
            .then(() => {
                
                const updatedUser = { ...auth.currentUser };
                setUser(updatedUser);
                toast.success("Profile updated successfully!");
                navigate('/Dashboard');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    



    return (
        <div className="">
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse lg:w-[60%]">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Profile</h1>
                        <p className="py-6">
                            Heare you can update your name and profile image.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleUpdate} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Image URL</span>
                                    </label>
                                    <input
                                        type="url"
                                        name="image"
                                        placeholder="Image URL"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update Now</button>
                                </div>
                            </form>
                            <label className="label">
                                    <div>
                                        <span className="label-text-alt">
                                            Don't want to update?{" "}
                                            <Link to="/Dashboard" className="label-text-alt link link-hover font-bold">
                                                Go to Dashboard!
                                            </Link>
                                        </span>
                                    </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default UpdateProfile;