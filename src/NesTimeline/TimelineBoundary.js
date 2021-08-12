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
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                    <polygon
                        className={classNames({
                            'timeline-boundary-active': active
                        })}
                        fill={color}
                        points='16 7 3 7 3 0 0 0 0 7 0 9 0 16 3 16 3 9 16 9 16 7'
                    />
                </svg>
            )}

            {type === 'ufn' && (
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                    <polygon
                        className={classNames({
                            'timeline-boundary-active': active
                        })}
                        fill={color}
                        points='0 9 13 9 13 16 16 16 16 9 16 7 16 0 13 0 13 7 0 7 0 9'
                    />
                </svg>
            )}

            <div className='date-wrapper'>
                {!!airac && <span className='airac'>{airac}</span>}
                {!!gregorian && <span className='gregorian'>{moment(gregorian).format(format)}</span>}
            </div>
        </div>
    );
}

export default TimelineBoundary;
