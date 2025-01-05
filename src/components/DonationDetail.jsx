import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetail = () => {
    const { id } = useParams();
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formRef = useRef(null);

    useEffect(() => {
        fetch('/campaigns.json')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch(err => {
                setError("Failed to load campaigns.");
                setLoading(false);
            });
    }, []);

    const selectedCampaign = campaigns.find((item) => item.id === parseInt(id));

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!selectedCampaign) {
        return <div className="text-center text-red-500">Campaign not found.</div>;
    }

    const handleDonation = e => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon");

        formRef.current.reset();
    }

    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-32">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={selectedCampaign.image} alt="Campaign Image" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-[#4FC3F7]">{selectedCampaign.title}</h1>
                        <p className="text-sm text-gray-500 mt-2">Division: {selectedCampaign.division}</p>
                        <p className="text-gray-700 mt-4">{selectedCampaign.description}</p>
                        <p className="text-sm text-gray-600 mt-4 font-semibold">Contact: {selectedCampaign.contactInfo}</p>
                        <p className="text-sm text-green-600 mt-2 font-semibold">Status: {selectedCampaign.status}</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-10 p-6">
                    <h2 className="text-2xl font-bold text-[#4FC3F7] mb-6">Donation Form</h2>
                    <form ref={formRef} onSubmit={handleDonation}>
                        <div className="mb-4">
                            <label htmlFor="quantity" className="block text-gray-700 font-medium">Quantity of Items</label>
                            <input
                                name="QuantityItems"
                                type="text"
                                id="quantity"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
                                placeholder="e.g., 2 jackets, 3 blankets"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="itemType" className="block text-gray-700 font-medium">Item Type</label>
                            <input
                                name="ItemType"
                                type="text"
                                id="itemType"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
                                placeholder="e.g., Blanket, Jacket, Sweater"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pickupLocation" className="block text-gray-700 font-medium">Pickup Location</label>
                            <input
                                name="Location"
                                type="text"
                                id="pickupLocation"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
                                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="notes" className="block text-gray-700 font-medium">Additional Notes</label>
                            <textarea
                                name="Notes"
                                id="notes"
                                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:ring focus:ring-blue-300 focus:outline-none"
                                placeholder="Optional..."
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-[#4FC3F7] hover:bg-white text-white hover:text-black font-semibold py-2 px-4 rounded-md transition"
                            >
                                Submit Donation
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default DonationDetail;
