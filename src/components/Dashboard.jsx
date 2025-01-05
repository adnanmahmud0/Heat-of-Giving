import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Dashboard = () => {

    const { user } = useContext(AuthContext); 

    return (
        <div>
            <div class="min-h-screen bg-gray-100 md:py-24 py-32">

                <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div class="p-6 text-center">
                        <h1 class="text-3xl font-bold text-[#4FC3F7]">Dashboard</h1>
                        <p class="text-lg text-gray-600 mt-2">
                            Welcome back, <span class="text-[#4FC3F7] font-semibold">{user.displayName}</span>!
                        </p>
                    </div>
                </div>
                <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-6 p-6">
                    <div class="md:flex items-center space-x-6">

                        <img
                            src={user?.photoURL}
                            alt="User Profile"
                            class="w-24 h-24 rounded-full border border-gray-300"
                        />

                        <div>
                            <h2 class="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
                            <p class="text-gray-600">Email: {user?.email}</p>
                        </div>
                    </div>

                    <div class="mt-6">
                        <Link to='/UpdateProfile'
                            class="btn bg-[#4FC3F7] text-white hover:text-black font-semibold py-2 px-4 rounded-md transition"
                        >
                            Update Profile
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;