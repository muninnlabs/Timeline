import Timeline from './Timeline/'
import {fixedTimelineData, fixedTimelineData2, fixedTimelineData3} from './Timeline/mockedData';
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

const selectedIntervalData = (initialValue, finalValue) => {

    return (
        <>
            <Table  columns={columns} dataSource={[initialValue]} pagination={false} />
        </>
    );
}

const tooltipIntervalData = (initialValue, finalValue) => {
    return(
        <Table columns={columns} dataSource={[initialValue]} pagination={false} />
    )
}

function App() {
    return (
        <div className='App'>
            <Timeline 
                timelineData={fixedTimelineData2} 
                selectedIntervalRender={selectedIntervalData} 
                tooltipDataRender={tooltipIntervalData}
                isSelectable = {false}
                formatDate='DD-MM-YYYY'
                />
            <Timeline 
                timelineData = {fixedTimelineData} 
                selectedIntervalRender = {selectedIntervalData} 
                tooltipDataRender = {tooltipIntervalData}
                isSelectable = {true}
                formatDate = 'DD-MMM-YYYY'
                /> 
            <Timeline 
                timelineData={fixedTimelineData3} 
                selectedIntervalRender={selectedIntervalData} 
                tooltipDataRender={tooltipIntervalData}
                isSelectable = {true}
                formatDate='DD-MM-YYYY'
            />
        </div>
    );
}

export default App;
