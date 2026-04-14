import profile from '../../assets/Ellipse 1.png';

const FriendCard = () => {
    return (
        <div className='py-7 px-12 text-center flex flex-col gap-1 justify-center items-center shadow rounded-sm'>
            <img src={profile} alt="" />
            <h2 className='text-xl font-semibold'>David Kim</h2>
            <p className='text-[16px] text-[#64748B]'>62d ago</p>
            <p>work</p>
            <p>Almost Due</p>
        </div>
    );
};

export default FriendCard;