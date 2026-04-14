import { HiOutlineBellSnooze } from 'react-icons/hi2';
import FriendCard from '../components/ui/FriendCard'
import Button from '../components/ui/Button';
import { PiArchiveBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TbPhoneCall } from 'react-icons/tb';
import { BiMessageDots } from 'react-icons/bi';
import { IoVideocamOutline } from 'react-icons/io5';

const FriendDetails = () => {
    return (
        <div className='min-h-screen max-w-325 mx-auto py-20 px-5'>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">


                <div className="lg:col-span-4 space-y-4">
                    <FriendCard />

                    <Button
                        className={"w-full bg-gray-100 p-3 rounded flex justify-center items-center gap-1 font-medium"}
                        icon={<HiOutlineBellSnooze />}
                        children='Snooze 2 weeks' />
                    <Button
                        className={"w-full bg-gray-100 p-3 rounded flex justify-center items-center gap-1 font-medium"}
                        icon={<PiArchiveBold />}
                        children='Archive' />
                    <Button
                        className={"w-full bg-gray-100 p-3 rounded flex justify-center items-center gap-1 text-red-500 font-medium"}
                        icon={<RiDeleteBin6Line />}
                        children='Delete' />

                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-8 space-y-5">

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className='py-9 text-center shadow rounded-sm'>
                            <h2 className='text-3xl font-bold'>62</h2>
                            <p className='text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className='py-9  text-center shadow rounded-sm'>
                            <h2 className='text-3xl font-bold'>30</h2>
                            <p className='text-[#64748B]'>Goal (Days)</p>
                        </div>
                        <div className='py-9  text-center shadow rounded-sm'>
                            <h2 className='text-3xl font-bold'>Feb 27, 2026</h2>
                            <p className='text-[#64748B]'>Next Due</p>
                        </div>

                    </div>

                    {/* Goal */}
                    <div className="bg-white p-5 rounded shadow flex justify-between items-start">
                        <div>
                            <h3 className='text-[#244D3F] text-xl font-medium mb-3'>Relationship Goal</h3>
                            <p className='text-[#64748B] text-18px] '>Connect every <span className='text-black font-medium'>30 days</span></p>
                        </div>
                        <Button
                            className={"px-3 py-1 bg-gray-100 rounded   border border-gray-200 font-medium text-[14px] "}
                            children='Edit' />
                    </div>

                    {/* Quick Check-in */}
                    <div className="bg-white p-5 rounded shadow">
                        <h3 className='text-[#244D3F] text-xl font-medium mb-3'>Quick Check-In</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                            <Button
                                className={"p-4 bg-gray-100 rounded flex flex-col gap-2 justify-center items-center border border-gray-200 text-xl "}
                                icon={<TbPhoneCall />}
                                children='Call' />
                            <Button
                                className={"p-4 bg-gray-100 rounded flex flex-col gap-2 justify-center items-center border border-gray-200 text-xl "}
                                icon={<BiMessageDots />}
                                children='Text' />

                            <Button
                                className={"p-4 bg-gray-100 rounded flex flex-col gap-2 justify-center items-center border border-gray-200 text-xl "}
                                icon={<IoVideocamOutline />}
                                children='Video' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendDetails;