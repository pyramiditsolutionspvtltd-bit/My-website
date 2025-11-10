import React, { useState, useEffect } from 'react';

const ProgressBar = ({ duration, targetProgress, title, item_margin_bottom }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let startTime = null;
        let startProgress = 0;

        const animateProgressBar = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startProgress, targetProgress - startProgress, duration);
        setProgress(run);
        if (timeElapsed < duration) requestAnimationFrame(animateProgressBar);
        };

        const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animateProgressBar);

        return () => {
        // Cleanup
        };
    }, [duration, targetProgress]);

    return (
        <div className="rs-progress-skill-comp"
            style={{
                marginBottom: '35px' || {item_margin_bottom}
            }}
        >
            <h4 className="rs-progress__title">{title}</h4>
            <div
                className="rs-progress-skill why-choose-two__progress"
                style={{
                    width: '100%',
                    height: '8px',
                    position: 'relative',
                    backgroundColor: '#fef5ee',
                    borderRadius: '5px'
                }}
            >
                <div
                style={{
                    height: '100%',
                    background: 'linear-gradient(123deg, rgb(242, 76, 26) 0%, rgb(242, 142, 38) 100%)',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    transition: 'width 0.2s ease-in-out',
                    width: `${progress}%`,
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                }}
                >
                <div className="rs-progress__inner rs-count-bar counted" data-percent={targetProgress}></div>
                <p className="rs-progress__number count-text">{Math.round(progress)}%</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;