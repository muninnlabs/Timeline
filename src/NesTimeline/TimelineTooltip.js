import React from 'react'
import './TimelineTooltip.css';

function TimelineTooltip({tootipContent}) {
    return (
        <div className='timeline-tooltip'>
            {tootipContent}
        </div>
    )
}
export default TimelineTooltip;
