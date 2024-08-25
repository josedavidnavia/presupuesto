import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgress.css';

const CircularProgress = ({ percentage }) => {
    return (
        <div className="circular-progress">
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`} 
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#3b82f6',
                    textColor: '#3b82f6',
                    trailColor: '#d6d6d6',
                })}
            />
        </div>
    );
};

export default CircularProgress;
