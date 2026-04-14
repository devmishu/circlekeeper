import React from 'react';
import { FaPlus } from 'react-icons/fa';
import FriendCard from '../components/ui/FriendCard';
import useFriends from '../hook/useFriends';
import Spinner from '../components/ui/Spinner';
import StatCards from '../components/ui/StatCards';



const Home = () => {
    const { friends, loading } = useFriends();

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
                <StatCards value={friends.length} label="Total friends" />
                <StatCards value={friends.length} label="Total friends" />
                <StatCards value={friends.length} label="Total friends" />
                <StatCards value={friends.length} label="Total friends" />
            </div>

            <div className='mt-10'>
                <h2 className='text-2xl font-semibold'>Your Friends</h2>
                {
                    loading ? <Spinner /> :
                        <div className='grid gap-7  sm:grid-cols-2 lg:grid-cols-4  mt-3 mb-16'>
                            {
                                friends.map(friend => <FriendCard
                                    key={friend.id}
                                    friend={friend}
                                    id={friend.id}
                                    picture={friend.picture}
                                    name={friend.name}
                                    contactDays={friend.days_since_contact}
                                    tags={friend.tags}
                                    status={friend.status}

                                />)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Home;