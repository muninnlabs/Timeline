import NesTimeline from './NesTimeline';
import { noDates, fixedTimelineData1, fixedTimelineData2, fixedTimelineData3, fixedTimelineData4 } from './NesTimeline/mockedData';
import { Table } from 'antd';
import React, { useState } from 'react';

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
            <Table columns={columns} dataSource={intervalValue} pagination={false} />
        </>
    );
};

const tooltipIntervalData = (initialValue) => {
    return <Table columns={columns} dataSource={initialValue} pagination={false} />;
};

const onClick = (interval ) => {
    console.log('clicked', interval );
};

const onClickfixedTimelineData1 = (interval ) => {
    console.log('clicked', interval );
};


function App() {
    
    const [stateFixedTimelineData2, setStateFixedTimelineData2] = useState(fixedTimelineData2);
    
    const onClickfixedTimelineData2 = (interval ) => {
        setStateFixedTimelineData2(
            stateFixedTimelineData2.map((data)=>{
                if(data.id === interval.id) {
                    data.isSelected = true;
                }else{
                    data.isSelected = false;
                }
                return data;
            })
        )
    };

    return (
        <div className='App'>
            <NesTimeline
                timelineData={fixedTimelineData1}
                selectedIntervalRenderer={selectedIntervalData}
                tooltipDataRenderer={tooltipIntervalData}
                isSelectable={false}
                formatDate='DD-MM-YYYY'
                onClick={onClickfixedTimelineData1}
            />
            <NesTimeline
                timelineData={noDates}
                selectedIntervalRenderer={selectedIntervalData}
                tooltipDataRenderer={tooltipIntervalData}
                isSelectable={false}
                formatDate='DD-MM-YYYY'
                onClick={onClick}
            />
            <NesTimeline
                timelineData={fixedTimelineData3}
                selectedIntervalRenderer={selectedIntervalData}
                tooltipDataRenderer={tooltipIntervalData}
                isSelectable={false}
                formatDate='DD-MMM-YYYY'
                onClick={onClick}
                />
            <NesTimeline
                timelineData={fixedTimelineData4}
                selectedIntervalRenderer={selectedIntervalData}
                tooltipDataRenderer={tooltipIntervalData}
                isSelectable={false}
                formatDate='DD-MMM-YYYY'
                onClick={onClick}
                />
            <NesTimeline
                timelineData={stateFixedTimelineData2}
                selectedIntervalRenderer={selectedIntervalData}
                tooltipDataRenderer={tooltipIntervalData}
                isSelectable={true}
                formatDate='DD-MM-YYYY'
                onClick={onClickfixedTimelineData2}
                /> 
        </div>
    );
}

export default App;
