import { BiDonateHeart } from "react-icons/bi";
import { GrImpact } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
const HowToHelp = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            {/* Hero Section */}
            <div className="bg-[url('https://www.anjumanmibd.org/storage/Causes/show/2020-12-10-5fd20bc705dad.jpg')] bg-cover bg-no-repeat text-center mt-5">
                <div className="py-20 bg-black/50">
                    <h1 className="text-4xl font-bold text-white">
                        How to Help
                    </h1>
                    <p className="text-lg text-white mt-4">
                        Together, we can make this winter warmer for those in need.
                    </p>
                </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-10 px-6">
                    <h2 className="text-3xl font-bold text-[#4FC3F7] text-center mb-6">
                        Steps to Help
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">

                        <div class="flex flex-col items-center">
                            <div class="bg-blue-100 p-6 rounded-full shadow-md mb-6">
                                <div><CiCirclePlus className="size-10" /></div>
                            </div>
                            <h3 class="text-xl font-semibold text-black mb-2">Step 1: Choose a Campaign</h3>
                            <p class="text-gray-600 text-center">
                                Browse through our active donation campaigns and select one that resonates with you.
                            </p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="bg-orange-100 p-6 rounded-full shadow-md mb-6">
                                <div><BiDonateHeart className="size-10" /></div>
                            </div>
                            <h3 class="text-xl font-semibold text-black mb-2">Step 2: Donate Items</h3>
                            <p class="text-gray-600 text-center">
                                Fill out the donation form with details about your items, pickup location, and additional notes.
                            </p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="bg-green-100 p-6 rounded-full shadow-md mb-6">
                                <div><GrImpact className="size-10" /></div>
                            </div>
                            <h3 class="text-xl font-semibold text-black mb-2">Step 3: Make an Impact</h3>
                            <p class="text-gray-600 text-center">
                                Our volunteers will collect and distribute your donations to those in need, bringing warmth and hope.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Collection Points Section */}
            <div className="bg-gray-200 py-10">
                <h2 className="text-3xl font-bold text-[#4FC3F7] text-center mb-6">
                    Collection Points
                </h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <img className="h-[150px] w-full object-cover rounded-md" src={banner1} alt="" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Dhaka
                        </h3>
                        <p className="text-gray-600 mt-2">
                            House #12, Road 5, Mirpur, Dhaka
                        </p>
                        <p className="text-sm text-gray-500">9 AM - 6 PM</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <img className="h-[150px] w-full object-cover rounded-md" src={banner2} alt="" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Chattogram
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Block A, Agrabad, Chattogram
                        </p>
                        <p className="text-sm text-gray-500">10 AM - 5 PM</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <img className="h-[150px] w-full object-cover rounded-md" src={banner3} alt="" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            Rajshahi
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Old Bus Stand, Rajshahi
                        </p>
                        <p className="text-sm text-gray-500">8 AM - 4 PM</p>
                    </div>
                </div>
            </div>
            <div className="">
                <div class="p-4 bg-white py-20">
                    <div className="mx-auto max-w-xl">
                        <h1 class="text-3xl text-gray-800 font-bold text-center">Contact us</h1>
                        <form class="mt-8 space-y-4">
                            <input type='text' placeholder='Name'
                                class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                            <input type='email' placeholder='Email'
                                class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                            <input type='text' placeholder='Subject'
                                class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                            <textarea placeholder='Message' rows="6"
                                class="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                            <button type='button'
                                class="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-5xl mx-auto py-10 px-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Frequently Asked Questions
                </h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Can I donate used items?</div>
                    <div className="collapse-content">
                        <p>Yes, as long as they are clean and in good condition.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Is pickup available in all divisions?</div>
                    <div className="collapse-content">
                        <p>Pickup is currently available in Dhaka, Chattogram, and Rajshahi.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowToHelp;
