import React from 'react';
import moment from 'moment';
import classNames from 'classnames';

function TimelineBoundary({ active, airac, gregorian, format = 'DD-MM-YYYY', color = '#046fcc', type = 'date' }) {
    return (
        <div className='timeline-boundary'>
            {type === 'date' && (
                <span
                    style={{
                        border: `2px solid ${color}`
                    }}
                    className={classNames({
                        'timeline-boundary-active': active,
                        'timeline-circle': type === 'date'
                    })}
                ></span>
            )}

            {type === 'bot' && (
                <div className={classNames("bot-boundary",{
                    'timeline-boundary-active': active,
                })}
                 style={{borderColor: color}} ></div>
            )}

            {type === 'ufn' && (
                <div 
                className={classNames("ufn-boundary",{
                    'timeline-boundary-active': active,
                })}
                style={{borderColor: color}} ></div>

            )}

            <div className='date-wrapper'>
                {!!airac && <span className='airac'>{airac}</span>}
                {!!gregorian && <span className='gregorian'>{moment(gregorian).format(format)}</span>}
                {type === 'bot' && <span className='airac bot'>BOT</span>}
                {type === 'ufn' && <span className='airac ufn'>UFN</span>}

            </div>
        </div>
    );
}

export default TimelineBoundary;
