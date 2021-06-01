import React, { useState } from 'react';
import classNames from 'classnames';
import TimelineTooltip from './TimelineTooltip';

export default function TimelineInterval({
    mainItem,
    previousItem,
    index,
    tooltipClassname,
    isSelectable,
    isActive,
    onClickHandle,
    selectedInterval,
    tooltipRenderer,
    color,
    disabled = false
}) {

    const [hoverInterval, setHoverInterval] = useState();
    const showTooltip = () => {
        const interval = {
            index: index,
            initial: previousItem,
            final: mainItem
        };
        setHoverInterval(interval);
    };
    const width = mainItem.span > 1 ? 76 * mainItem.span - 16 : 60;

    if (!color) {
        color = '#046fcc';
        if (disabled) {
            color = '#8c8c8c';
        }
    }

    return (
        <div
            className={classNames('timeline-interval ', {
                'timeline-interval__selectable': isSelectable,
                'timeline-interval-active': isActive,
                'timeline-interval-no-data': disabled
            })}
            onClick={() => {
                isSelectable && !disabled && onClickHandle(index);
            }}
            onMouseOver={() => showTooltip(index)}
            onMouseLeave={() => setHoverInterval()}
            style={{
                width: width
            }}
        >
            <div
                className={`timeline-connector ${selectedInterval && selectedInterval.index === index ? 'timeline-connector-active' : ''}`}
                style={{
                    width: width,
                    background: color
                }}
            >
            </div>
            {hoverInterval && tooltipRenderer && (
                <div className={tooltipClassname}>
                    <TimelineTooltip tooltipContent={tooltipRenderer(mainItem?.intervalData, previousItem?.intervalData)} />
                </div>
            )}
        </div>
    );
}
