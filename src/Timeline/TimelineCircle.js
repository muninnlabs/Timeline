import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

export default function TimelineCircle({ 
    active, 
    AIRAC, 
    gregorian, 
    format = 'DD-MM-YYYY',
    color ='#046fcc' }) {

    return (
        <div className='timeline-item'>
            <span
            style ={{border: `2px solid ${color}`}}
                className={classNames('timeline-circle', {
                    'timeline-circle-active': active
                })}
            ></span>
            <div className='date-wrapper'>
                {!!AIRAC && <span className='airac'>{AIRAC}</span>}
                {!!gregorian && <span className='gregorian'>{moment(gregorian).format(format)}</span>}
            </div>
        </div>
    );
}
