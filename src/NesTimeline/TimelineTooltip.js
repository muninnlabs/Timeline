import React from 'react'
import './TimelineTooltip.css';

function TimelineTooltip({tooltipContent}) {
    return (
        <div className='timeline-tooltip'>
            {tooltipContent}
        </div>
    )
}
export default TimelineTooltip;
