import React from 'react';
import { FaPlus } from 'react-icons/fa';
import FriendCard from '../components/ui/FriendCard';



const Home = () => {
    return (
        <div className='min-h-screen max-w-325 mx-auto px-5'>
            <div className='flex flex-col justify-between items-center gap-4 mt-20'>
                <h1 className='text-4xl text-center font-bold sm:text-5xl'>Friends to keep close in your life</h1>
                <p className='text[#64748B] text-[16px] text-center text-gray-500 max-w-150'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>
                <button className='bg-[#244D3F] flex justify-center items-center gap-1 text-white font-semibold px-4 py-2 rounded-sm border-0 hover:cursor-pointer mt-4 '>
                    <FaPlus />
                    Add a Friend
                </button>
            </div>

            <div className='grid gap-7 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 border-b pb-10 border-gray-200'>
                <div className='py-7 px-14 text-center shadow rounded-sm'>
                    <h2 className='text-3xl font-bold'>10</h2>
                    <p className='text-[#64748B]'>Topal Friends</p>
                </div>
                <div className='py-7 px-14 text-center shadow rounded-sm'>
                    <h2 className='text-3xl font-bold'>10</h2>
                    <p className='text-[#64748B]'>Topal Friends</p>
                </div>
                <div className='py-7 px-14 text-center shadow rounded-sm'>
                    <h2 className='text-3xl font-bold'>10</h2>
                    <p className='text-[#64748B]'>Topal Friends</p>
                </div>
                <div className='py-7 px-14 text-center shadow rounded-sm'>
                    <h2 className='text-3xl font-bold'>10</h2>
                    <p className='text-[#64748B]'>Topal Friends</p>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>Your Friends</h2>
                <div className='grid gap-7  sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-3'>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                    <FriendCard/>
                </div>
            </div>
        </div>
    );
};

export default Home;