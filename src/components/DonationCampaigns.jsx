import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DonationCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch("./campaigns.json")
            .then((res) => res.json())
            .then((data) => {
                setCampaigns(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch campaigns:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (campaigns.length === 0) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-lg text-gray-600">No donation campaigns available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-40">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-[#4FC3F7]">Donation Campaigns</h1>
                <p className="text-lg text-gray-600 mt-2">
                    Explore ongoing campaigns and make a difference.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-20">
                {campaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={campaign.image}
                            alt={campaign.title || "Campaign Image"}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 flex flex-col">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{campaign.title}</h2>
                                <p className="text-sm text-gray-600 mt-2">{campaign.description}</p>
                                <p className="text-sm text-[#4FC3F7] mt-2 font-semibold">
                                    Division: {campaign.division}
                                </p>
                            </div>
                            <div>
                                <Link to={`/DonationDetail/${campaign.id}`}>
                                    <button className="btn mt-4 w-full bg-[#4FC3F7] text-white hover:text-black font-semibold py-2 px-4 rounded-md transition">
                                        Donate Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationCampaigns;
