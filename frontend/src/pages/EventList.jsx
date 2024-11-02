import Sidebar from "../components/Sidebar";

const EventList = () => {
    return (<div className="flex justify-around">
        <div className="flex-col">
            <Sidebar/>
            <div className="flex gap-x-16">
                <h1 className='flex-1'>event</h1>
                <h1 className='flex-1'>event</h1>
            </div>
        </div>
        
    </div>)
};

export default EventList;