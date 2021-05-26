import React, { Fragment, useState } from 'react';
import './Timeline.css';
import classNames from 'classnames';
import TimelineCircle from './TimelineCircle';
import TimelineInterval from './TimelineInterval';

export default function Timeline({ timelineData, selectedIntervalRender, tooltipDataRender, isSelectable, formatDate }) {
    const [selectedInterval, setSelectedInterval] = useState();

    const intervalTableRender = (initialValue, finalValue) => {
        return selectedIntervalRender(initialValue, finalValue);
    };

    const intervalClickHandling = (intervalPosition) => {
        const interval = {
            index: intervalPosition,
            initial: timelineData[intervalPosition - 1],
            final: timelineData[intervalPosition]
        };
        setSelectedInterval(interval);
    };

    return (
        <Fragment>
            <div className='timeline-wrapper'>
                <div className='timeline'>
                    {timelineData &&
                        timelineData
                            .sort((a, b) => (a.id > b.id ? 1 : -1))
                            .map((data, index) => {
                                const classname = classNames('tooltip-wrapper', {
                                    'tooltip-wrapper__first': index === 0,
                                    'tooltip-wrapper__second': index === 1,
                                    'tooltip-wrapper__third': index === 2,
                                    'tooltip-wrapper__secondLast': timelineData.length - 2 === index,
                                    'tooltip-wrapper__thirdLast': timelineData.length - 3 === index,
                                    'tooltip-wrapper__last': timelineData.length - 1 === index
                                });

                                const activeCircle =
                                    selectedInterval && (selectedInterval.index === index || selectedInterval.index === index + 1);
                                const newColor = timelineData[index + 1]?.color ? timelineData[index + 1].color : data.color;
                                const hasIntervalData = !!data.intervalData;

                                return (
                                    <Fragment key={data.id}>
                                        <TimelineInterval
                                            mainItem={data}
                                            previousItem={timelineData[index - 1]}
                                            index={index}
                                            tooltipClassname={classname}
                                            isSelectable={isSelectable}
                                            isActive={selectedInterval && selectedInterval.index === index}
                                            onClickHandle={intervalClickHandling}
                                            selectedInterval={selectedInterval}
                                            tooltipRender={tooltipDataRender}
                                            color={data.color}
                                            disabled={!hasIntervalData}
                                        />

                                        <TimelineCircle
                                            active={activeCircle}
                                            AIRAC={data.AIRAC}
                                            gregorian={data.gregorian}
                                            format={formatDate}
                                            color={newColor}
                                        />

                                        {timelineData.length - 1 === index && (
                                            <TimelineInterval
                                                mainItem={data}
                                                previousItem={timelineData[index - 1]}
                                                index={index + 1}
                                                tooltipClassname={classname}
                                                isSelectable={isSelectable}
                                                isActive={selectedInterval && selectedInterval.index === index + 1}
                                                onClickHandle={intervalClickHandling}
                                                selectedInterval={selectedInterval}
                                                tooltipRender={tooltipDataRender}
                                                color={data.color}
                                                hasIntervalData={hasIntervalData}
                                            />
                                        )}
                                    </Fragment>
                                );
                            })}
                </div>
            </div>

            {isSelectable && selectedInterval && (
                <div className='timeline-data-display'>
                    {intervalTableRender(selectedInterval?.initial?.intervalData, selectedInterval?.final?.intervalData)}
                </div>
            )}
        </Fragment>
    );
}
