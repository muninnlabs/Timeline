import React, { Fragment, useState } from 'react';
import './NesTimeline.css';
import classNames from 'classnames';
import TimelineBoundary from './TimelineBoundary';
import TimelineInterval from './TimelineInterval';
import PropTypes from 'prop-types';

function NesTimeline({ timelineData, selectedIntervalRenderer, tooltipDataRenderer, isSelectable = false, formatDate, onClick }) {
    const [selectedInterval, setSelectedInterval] = useState();

    const intervalTableRender = (initialValue, finalValue) => {
        return selectedIntervalRenderer(initialValue, finalValue);
    };

    const intervalClickHandling = (intervalPosition) => {
        const interval = {
            index: intervalPosition,
            initial: timelineData[intervalPosition]
        };
        setSelectedInterval(interval);
    };

    const isSequentialDate = timelineData.find((data, index) =>
        index !== 0
            ? data.start.airac !== timelineData[index - 1].end.airac || data.start.gregorian !== timelineData[index - 1].end.gregorian
            : ''
    );

    return (
        <Fragment>
            {isSequentialDate && <h5 style={{ color: 'red' }}>The dates should be sequential! Error at id {isSequentialDate?.id}</h5>}

            {!isSequentialDate && (
                <div className='timeline-wrapper'>
                    <div className='timeline'>
                        {timelineData &&
                            timelineData
                                .sort((a, b) => (a.id > b.id ? 1 : -1))
                                .map((data, index) => {
                                    const classname = classNames('tooltip-wrapper', {
                                        'tooltip-wrapper__first': index === 0 || timelineData.length === 1,
                                        'tooltip-wrapper__second': index === 1,
                                        'tooltip-wrapper__third': index === 2,
                                        'tooltip-wrapper__secondLast': timelineData.length - 2 === index && timelineData.length > 4,
                                        'tooltip-wrapper__thirdLast': timelineData.length - 3 === index && timelineData.length > 4,
                                        'tooltip-wrapper__last': timelineData.length - 1 === index && timelineData.length > 4
                                    });

                                    const activeCircle =
                                        selectedInterval && (selectedInterval.index === index || selectedInterval.index === index + 1);
                                    const newColor = timelineData[index + 1]?.color ? timelineData[index + 1].color : data.color;
                                    const isEmptyIntervalData =  data.intervalData === undefined || data.intervalData.length === 0 ;

                                    return (
                                        <Fragment key={data.id}>
                                            {index === 0 && (
                                                <TimelineBoundary
                                                    active={selectedInterval?.index === index}
                                                    airac={data.start.airac}
                                                    gregorian={data.start.gregorian}
                                                    format={formatDate}
                                                    color={newColor}
                                                    type={data.start.type}
                                                />
                                            )}

                                            <TimelineInterval
                                                mainItem={data}
                                                previousItem={timelineData[index - 1]}
                                                index={index}
                                                tooltipClassname={classname}
                                                isSelectable={isSelectable}
                                                isActive={selectedInterval && selectedInterval.index === index}
                                                onClickHandle={intervalClickHandling}
                                                selectedInterval={selectedInterval}
                                                tooltipRenderer={tooltipDataRenderer}
                                                color={data.color}
                                                disabled={isEmptyIntervalData}
                                                onClick={onClick}
                                            />

                                            <TimelineBoundary
                                                active={activeCircle}
                                                airac={data.end.airac}
                                                gregorian={data.end.gregorian}
                                                format={formatDate}
                                                color={newColor}
                                                type={data.end.type}
                                            />
                                        </Fragment>
                                    );
                                })}
                    </div>
                </div>
            )}

            {isSelectable && selectedInterval && (
                <div className='timeline-data-display'>
                    {intervalTableRender(selectedInterval?.initial?.intervalData, selectedInterval?.final?.intervalData)}
                </div>
            )}
        </Fragment>
    );
}

NesTimeline.propTypes = {
    timelineData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            airac: PropTypes.number,
            gregorian: PropTypes.date,
            span: PropTypes.number,
            color: PropTypes.string,
            intervalData: PropTypes.array,
            tooltipData: PropTypes.array
        })
    ),
    selectedIntervalRenderer: PropTypes.func,
    tooltipDataRenderer: PropTypes.func,
    isSelectable: PropTypes.bool,
    formatDate: PropTypes.string
};

export default NesTimeline;
