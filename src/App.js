import NesTimeline from './NesTimeline'
import {fixedTimelineData, fixedTimelineData2, fixedTimelineData3} from './NesTimeline/mockedData';
import { Table } from 'antd';

const columns = [
    {
        title: 'Name (all screens)',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a href='google.com'>{text}</a>
    },
    {
        title: 'Age (medium screen or bigger)',
        dataIndex: 'age',
        key: 'age',
        responsive: ['md']
    },
    {
        title: 'Address (large screen or bigger)',
        dataIndex: 'address',
        key: 'address',
        responsive: ['lg']
    }
];

const selectedIntervalData = (intervalValue) => {

    return (
        <>
            <Table  columns={columns} dataSource={[intervalValue]} pagination={false} />
        </>
    );
}

const tooltipIntervalData = (initialValue) => {
    return(
        <Table columns={columns} dataSource={[initialValue]} pagination={false} />
    )
}

function App() {
    return (
        <div className='App'>
            <NesTimeline 
                timelineData={fixedTimelineData2} 
                selectedIntervalRenderer={selectedIntervalData} 
                tooltipDataRenderer={tooltipIntervalData}
                isSelectable = {false}
                formatDate='DD-MM-YYYY'
                />
            <NesTimeline 
                timelineData = {fixedTimelineData3} 
                selectedIntervalRenderer = {selectedIntervalData} 
                tooltipDataRenderer = {tooltipIntervalData}
                isSelectable = {true}
                formatDate = 'DD-MMM-YYYY'
                /> 
            <NesTimeline 
                timelineData={fixedTimelineData} 
                selectedIntervalRenderer={selectedIntervalData} 
                tooltipDataRenderer={tooltipIntervalData}
                isSelectable = {true}
                formatDate='DD-MM-YYYY'
            />
        </div>
    );
}

export default App;
