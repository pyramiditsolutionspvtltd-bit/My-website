import React, { useState } from 'react';

const CareersContent = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const jobOpenings = [
        {
            id: 1,
            title: 'Senior Network Engineer',
            department: 'IT Services',
            location: 'Hyderabad, India',
            type: 'Full-time',
            experience: '5-8 years',
            description: 'We are looking for an experienced Network Engineer to join our IT Services team. The ideal candidate will have extensive experience in network design, implementation, and troubleshooting.',
            requirements: [
                'Bachelor\'s degree in Computer Science, IT, or related field',
                '5+ years of experience in network engineering',
                'Strong knowledge of Cisco, Juniper, and HPE networking equipment',
                'Experience with OSPF, BGP routing protocols',
                'CCNP or equivalent certification preferred',
                'Excellent problem-solving and communication skills'
            ],
            responsibilities: [
                'Design and implement network infrastructure solutions',
                'Configure and manage switches, routers, and firewalls',
                'Monitor network performance and troubleshoot issues',
                'Collaborate with clients on network requirements',
                'Provide technical support and documentation',
                'Stay updated with latest networking technologies'
            ]
        },
        {
            id: 2,
            title: 'Cybersecurity Analyst',
            department: 'Security Services',
            location: 'Hyderabad, India',
            type: 'Full-time',
            experience: '3-5 years',
            description: 'Join our cybersecurity team to help protect our clients from evolving cyber threats. We\'re seeking a skilled analyst with expertise in threat detection and incident response.',
            requirements: [
                'Bachelor\'s degree in Cybersecurity, Computer Science, or related field',
                '3+ years of experience in cybersecurity',
                'Experience with SIEM platforms and security tools',
                'Knowledge of threat intelligence and incident response',
                'Security certifications (CISSP, CEH, etc.) preferred',
                'Strong analytical and documentation skills'
            ],
            responsibilities: [
                'Monitor security events and analyze threats',
                'Conduct vulnerability assessments and penetration testing',
                'Respond to security incidents and breaches',
                'Develop and maintain security policies',
                'Provide security awareness training',
                'Stay current with cybersecurity trends and threats'
            ]
        },
        {
            id: 3,
            title: 'Structured Cabling Technician',
            department: 'Structured Cabling',
            location: 'Hyderabad, India',
            type: 'Full-time',
            experience: '2-4 years',
            description: 'We need skilled cabling technicians to support our growing structured cabling projects. Experience in fiber optic and copper cabling installation is essential.',
            requirements: [
                'Diploma or certification in telecommunications/networking',
                '2+ years of structured cabling experience',
                'Experience with Cat6/Cat6A, fiber optic installations',
                'Knowledge of TIA/EIA-568 standards',
                'Ability to read technical drawings and blueprints',
                'Physical fitness for installation work'
            ],
            responsibilities: [
                'Install and terminate structured cabling systems',
                'Test and certify cable installations',
                'Maintain accurate project documentation',
                'Follow safety protocols and industry standards',
                'Coordinate with project teams and clients',
                'Troubleshoot cabling issues and provide solutions'
            ]
        },
        {
            id: 4,
            title: 'Cloud Solutions Architect',
            department: 'Cloud Computing',
            location: 'Hyderabad, India',
            type: 'Full-time',
            experience: '6+ years',
            description: 'Lead cloud transformation projects and help clients migrate to modern cloud platforms. Design scalable, secure cloud architectures using AWS, Azure, or Google Cloud.',
            requirements: [
                'Bachelor\'s/Master\'s degree in Computer Science or Engineering',
                '6+ years of experience in cloud technologies',
                'Expertise in AWS, Azure, or Google Cloud platforms',
                'Experience with containerization and microservices',
                'Cloud architecture certifications required',
                'Strong leadership and client-facing skills'
            ],
            responsibilities: [
                'Design and implement cloud migration strategies',
                'Architect scalable and secure cloud solutions',
                'Lead technical discussions with clients',
                'Mentor junior team members',
                'Ensure compliance with security standards',
                'Drive innovation in cloud service offerings'
            ]
        },
        {
            id: 5,
            title: 'IT Project Manager',
            department: 'Professional Services',
            location: 'Hyderabad, India',
            type: 'Full-time',
            experience: '4-7 years',
            description: 'Manage complex IT infrastructure projects from initiation to completion. Work closely with clients and technical teams to ensure successful project delivery.',
            requirements: [
                'Bachelor\'s degree in Project Management, IT, or related field',
                '4+ years of IT project management experience',
                'PMP or equivalent certification preferred',
                'Experience with Agile and Waterfall methodologies',
                'Strong client relationship management skills',
                'Excellent communication and leadership abilities'
            ],
            responsibilities: [
                'Plan and execute IT infrastructure projects',
                'Manage project timelines, budgets, and resources',
                'Coordinate with cross-functional teams',
                'Communicate project status to stakeholders',
                'Identify and mitigate project risks',
                'Ensure quality deliverables and client satisfaction'
            ]
        }
    ];

    const handleJobClick = (job) => {
        setSelectedJob(selectedJob?.id === job.id ? null : job);
    };

    const handleApply = (jobTitle) => {
        const subject = `Application for ${jobTitle} Position`;
        const body = `Dear Hiring Team,\n\nI am interested in applying for the ${jobTitle} position at Pyramid IT Solutions.\n\nPlease find my resume attached.\n\nThank you for your consideration.\n\nBest regards,`;
        window.location.href = `mailto:careers@pyramititsolutions.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="careers-page pt-90 pb-120">
            <div className="container">
                {/* Career Introduction */}
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="careers-intro">
                            <h2 className="mb-4">Join Our Growing Team</h2>
                            <p className="lead mb-4">
                                At Pyramid IT Solutions, we believe our people are our greatest asset. We're always looking for talented, passionate individuals who want to make a difference in the world of technology.
                            </p>
                            <p>
                                We offer competitive compensation, comprehensive benefits, professional development opportunities, and a collaborative work environment where innovation thrives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Join Us Section */}
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <div className="why-join-us">
                            <h3 className="mb-4 text-center">Why Join Pyramid IT Solutions?</h3>
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="benefit-card text-center p-4" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', height: '100%' }}>
                                        <div className="benefit-icon mb-3">
                                            <i className="ri-team-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                        </div>
                                        <h5>Collaborative Culture</h5>
                                        <p>Work with talented professionals in a supportive, team-oriented environment.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="benefit-card text-center p-4" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', height: '100%' }}>
                                        <div className="benefit-icon mb-3">
                                            <i className="ri-graduation-cap-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                        </div>
                                        <h5>Growth Opportunities</h5>
                                        <p>Continuous learning and career advancement through training and certification programs.</p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="benefit-card text-center p-4" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', height: '100%' }}>
                                        <div className="benefit-icon mb-3">
                                            <i className="ri-trophy-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                        </div>
                                        <h5>Innovation Focus</h5>
                                        <p>Work on cutting-edge projects with the latest technologies and industry best practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Current Openings */}
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="mb-4"> Job Openings</h3>
                        <div className="job-openings">
                            {jobOpenings.map((job) => (
                                <div key={job.id} className="job-card mb-4" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                                    <div 
                                        className="job-header p-4" 
                                        style={{ cursor: 'pointer', borderBottom: selectedJob?.id === job.id ? '1px solid #e0e0e0' : 'none' }}
                                        onClick={() => handleJobClick(job)}
                                    >
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <h5 className="mb-2">{job.title}</h5>
                                                <div className="job-meta">
                                                    <span className="badge bg-primary me-2">{job.department}</span>
                                                    <span className="me-3"><i className="ri-map-pin-line"></i> {job.location}</span>
                                                    <span className="me-3"><i className="ri-time-line"></i> {job.type}</span>
                                                    <span><i className="ri-briefcase-line"></i> {job.experience}</span>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-end">
                                                <button className="btn btn-outline-primary me-2">
                                                    {selectedJob?.id === job.id ? 'Hide Details' : 'View Details'}
                                                </button>
                                                <button 
                                                    className="btn btn-primary"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleApply(job.title);
                                                    }}
                                                >
                                                    Apply Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Details */}
                                    {selectedJob?.id === job.id && (
                                        <div className="job-details p-4">
                                            <div className="row">
                                                <div className="col-md-12 mb-4">
                                                    <h6>Job Description</h6>
                                                    <p>{job.description}</p>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <h6>Requirements</h6>
                                                    <ul>
                                                        {job.requirements.map((req, index) => (
                                                            <li key={index}>{req}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <h6>Key Responsibilities</h6>
                                                    <ul>
                                                        {job.responsibilities.map((resp, index) => (
                                                            <li key={index}>{resp}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className="careers-contact" style={{ backgroundColor: '#f8f9fa', padding: '3rem', borderRadius: '8px' }}>
                            <h4 className="mb-3">Don't See a Perfect Match?</h4>
                            <p className="mb-4">
                                We're always interested in meeting talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
                            </p>
                            <div className="contact-info">
                                <p><strong>Email:</strong> <a href="mailto:careers@pyramititsolutions.com">careers@pyramititsolutions.com</a></p>
                                <p><strong>Phone:</strong> +91 40 1234 5678</p>
                                <p><strong>Address:</strong> Pyramid IT Solutions, Hyderabad, India</p>
                            </div>
                            <button 
                                className="btn btn-primary mt-3"
                                onClick={() => handleApply('General Application')}
                            >
                                Send General Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersContent;