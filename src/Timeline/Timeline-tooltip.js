import React from 'react'
import './Timeline-tooltip.css';

export default function TimelineTooltip({tootipContent}) {
    return (
        <div className='timeline-tooltip'>
            {tootipContent}
        </div>
    )
}
