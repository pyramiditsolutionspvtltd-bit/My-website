import React from 'react';


const Progress = (props) => {
    const { figurebg, labelColor, completed } = props;
    

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        background: figurebg,
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'right',
    }

    return (
        <div className="rs-progress-skill why-choose-two__progress">
            <h4 className={props.ProgressLabelClass} style={ labelColor }>{props.label}</h4>
            <div className="rs-progress__bar">
                <p className='rs-progress__number count-text'>{`${completed}%`}</p>
                <div id='rs-progress__inner rs-count-bar' className={props.ProgressFigure} style={fillerStyles}></div>
            </div>
        </div>
    );
};

export default Progress;
