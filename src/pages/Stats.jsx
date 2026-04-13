import React from 'react';

const Stats = () => {
    return (
        <div className='min-h-screen max-w-325 mx-auto py-20 px-5'>
            <h2 className='text-4xl md:text-5xl font-bold'>Friendship Analytics</h2>
            <div className='px-5 py-9  bg-white shadow-sm rounded-sm mt-6 '>
                <h3 className='text-[#244D3F] text-xl font-medium'>By Interaction Type</h3>

                <div className='flex justify-center items-center mt-10'>
                    <div className='w-60 h-60 bg-red-500 rounded-full'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;