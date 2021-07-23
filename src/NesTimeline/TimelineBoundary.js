import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

function TimelineBoundary({ active, airac, gregorian, format = 'DD-MM-YYYY', color = '#046fcc', type = 'date' }) {
    return (
        <div className='timeline-boundary'>
            <span
                // style={{ border: `2px solid ${color}` }}
                className={classNames( {
                    'timeline-boundary-active': active,
                    'timeline-circle': type === 'date',
                    'timeline-boundary-bot': type === 'bot',
                    'timeline-boundary-ufn': type === 'ufn',
                    'timeline-boundary-bot-active': type === 'bot' && active,
                    'timeline-boundary-ufn-active': type === 'ufn' && active
                })}
            ></span>
            <div className='date-wrapper'>
                {!!airac && <span className='airac'>{airac}</span>}
                {!!gregorian && <span className='gregorian'>{moment(gregorian).format(format)}</span>}
            </div>
        </div>
    );
}

export default TimelineBoundary;
