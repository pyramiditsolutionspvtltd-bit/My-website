import React from 'react';

const Home3Progress = ({ progress_line1, progress_line2, progress_line3, progress_line4, progress_icon1, progress_icon2, progress_icon3, progress_icon4, heart_pulse_rate_orange_2, heart_pulse_rate_orange }) => {
    const progressData = [
        { id:1, progressImg: progress_line1, processIcon: progress_icon1, title: 'Requirement', details: 'Podcasting operational change management' },
        { id:2, progressImg: progress_line2, processIcon: progress_icon2, title: 'UI/UX Design', details: 'Podcasting operational change management' },
        { id:3, progressImg: progress_line3, processIcon: progress_icon3, title: 'Prototype', details: 'Podcasting operational change management' },
        { id:4, progressImg: progress_line4, processIcon: progress_icon4, title: 'Development', details: 'Podcasting operational change management' }
    ];


    return (
        <div className="rs-progress pt-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-title black">
                            <div className="top-sub-heading">
                                <img src={heart_pulse_rate_orange_2} alt="icon" />
                                <span>Working Process </span>
                                <img src={heart_pulse_rate_orange} alt="icon" />
                            </div>
                            <h2 className="title split-in-fade">Process we <span className="color">follow</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        progressData && progressData.map((data) => {
                            return (
                                <div key={data.id} className="col-lg-3 col-sm-6">
                                    <div className={`rs-progress__item-box ${data.id > 1 ? 'item-'+ data.id : ''}`}>
                                        <div className="rs-progress-line">
                                            <img src={data.progressImg} alt="progress line" />
                                        </div>
                                        <div className="rs-progress__item">
                                            <div className="icon">
                                                <img src={data.processIcon} alt="progress icon" />
                                            </div>
                                            <h4 className="title">{data.title}</h4>
                                            <p>{data.details}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home3Progress;
