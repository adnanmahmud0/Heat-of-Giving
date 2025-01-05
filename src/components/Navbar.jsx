import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('user sign out successfully')
            })
            .catch(error => toast.error(error.message))
    }


    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="DonationCampaigns">Donation Campaigns</NavLink></li>
        <li><NavLink to="HowToHelp">How to Help</NavLink></li>
        {user ? 
                <li><NavLink to="Dashboard">Dashboard</NavLink></li> 
                : null
        }
        
    </>

    return (
        <div>
            <div className="fixed top-0 left-0 w-full bg-base-100 shadow-md z-50">
                <div className="navbar bg-base-100 max-w-7xl mx-auto">
                    {/* Navbar Start */}
                    <div className="navbar-start">
                        {/* Dropdown for Mobile */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                {link}
                            </ul>
                        </div>
                        {/* Logo and Title */}
                        <div className="flex items-center space-x-2">
                            <img className="w-10" src={logo} alt="logo" />
                            <a className="md:text-xl text-xs font-bold">Heat of Giving</a>
                        </div>
                    </div>

                    {/* Navbar Center */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{link}</ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end space-x-5">

                        {
                            user ? 
                            <>
                                <div>
                                    <div>
                                        <img
                                            className="w-10 h-10 rounded-full object-cover"
                                            alt="Profile"
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <a onClick={handleSignOut} className="btn" href="">Log Out</a>
                            </>
                            : 
                            <Link to="Login" className="btn">
                                Login
                            </Link>
                        }

                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Navbar;