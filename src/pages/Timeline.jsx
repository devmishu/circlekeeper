import call from '../assets/call.png';

const Timeline = () => {
    return (
        <div className='min-h-screen max-w-325 mx-auto py-20 px-5'>
            <div >
                <h2 className='text-5xl font-bold'>Timeline</h2>
                <select  className='mt-6 w-60 border border-gray-300 border- shadow py-2 rounded-sm text-[#64748B] ring-inset hover:cursor-pointer bg-white outline-0 '>
                    <option >Filter timeline</option>
                    <option value="sel">Select 1</option>
                </select>
            </div>

            <div>
                <div name="" id="" className='mt-6 p-7  border border-gray-300  shadow rounded-sm text-[#64748B] ring-inset hover:cursor-pointer bg-white flex justify-start gap-5 items-center'>
                    <div>
                        <img src={call} alt="call" />
                    </div>
                    <div>
                        <h3 className='text-xl text-[#244D3F] font-medium'>Meetup <span className=' text-[#64748B] font-normal'>with Tom Baker</span></h3>
                        <p className='text-[#64748B] text-[16px] font-medium'>March 29, 2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;