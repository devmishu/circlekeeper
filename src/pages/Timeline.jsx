import { useContext } from 'react';
import { ActionContext } from '../context/actioncontext/ActionContext';
import ActionCard from '../components/ui/ActionCard';


const Timeline = () => {
    const { action } = useContext(ActionContext);

    
    return (
        <div className='min-h-screen max-w-325 mx-auto py-20 px-5'>



            <div >
                <h2 className='text-5xl font-bold'>Timeline</h2>
                <select className='mt-6 w-60 border border-gray-300 border- shadow py-2 rounded-sm text-[#64748B] ring-inset hover:cursor-pointer bg-white outline-0 '>
                    <option >Filter timeline</option>
                    <option value="sel">Select 1</option>
                </select>
            </div>

            {
                action.map((actionData, ind) => <ActionCard
                    key={ind}
                    type={actionData.type}
                    icon={actionData.icon}
                    name={actionData.name}
                    date={actionData.date}
                />)

            }

        </div>
    );
};

export default Timeline;