import React, { useState } from 'react';

const CorporateGovernanceContent = () => {
    const [activeSection, setActiveSection] = useState('code-of-conduct');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="corporate-governance-page pt-90 pb-120">
            <div className="container">
                {/* Introduction Section */}
                <div className="row mb-5">
                    <div className="col-lg-10 mx-auto text-center">
                        <div className="governance-intro">
                            <h2 className="mb-4">Corporate Governance</h2>
                            <p className="lead mb-4">
                                At Pyramid IT Solutions, we are committed to maintaining the highest standards of corporate governance, ethical business practices, and transparency. Our governance framework ensures accountability, integrity, and responsible business conduct across all our operations.
                            </p>
                            <p>
                                We believe that strong corporate governance is fundamental to building trust with our stakeholders, protecting shareholder interests, and ensuring sustainable business growth.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div className="governance-nav text-center">
                            <div className="nav nav-pills justify-content-center" style={{ display: 'inline-flex', backgroundColor: '#f8f9fa', padding: '0.5rem', borderRadius: '50px' }}>
                                <button 
                                    className={`nav-link px-4 py-2 mx-2 ${activeSection === 'code-of-conduct' ? 'active' : ''}`}
                                    style={{ 
                                        backgroundColor: activeSection === 'code-of-conduct' ? '#f24c1a' : 'transparent',
                                        color: activeSection === 'code-of-conduct' ? 'white' : '#6c757d',
                                        border: 'none',
                                        borderRadius: '25px',
                                        fontWeight: '500'
                                    }}
                                    onClick={() => handleSectionChange('code-of-conduct')}
                                >
                                    Code of Conduct
                                </button>
                                <button 
                                    className={`nav-link px-4 py-2 mx-2 ${activeSection === 'anti-corruption' ? 'active' : ''}`}
                                    style={{ 
                                        backgroundColor: activeSection === 'anti-corruption' ? '#f24c1a' : 'transparent',
                                        color: activeSection === 'anti-corruption' ? 'white' : '#6c757d',
                                        border: 'none',
                                        borderRadius: '25px',
                                        fontWeight: '500'
                                    }}
                                    onClick={() => handleSectionChange('anti-corruption')}
                                >
                                    Anti-Corruption Policy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="row">
                    <div className="col-lg-12">
                        {/* Code of Conduct Section */}
                        {activeSection === 'code-of-conduct' && (
                            <div className="governance-section fade-in">
                                <div className="section-header mb-4">
                                    <h3 className="text-center mb-4" style={{ color: '#f24c1a' }}>Code of Conduct</h3>
                                    <p className="text-center lead mb-5">
                                        Our Code of Conduct serves as a guide for ethical decision-making and professional behavior across all levels of our organization.
                                    </p>
                                </div>

                                <div className="row">
                                    {/* Core Values */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-heart-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Core Values</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> <strong>Integrity:</strong> We conduct business with honesty and transparency</li>
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> <strong>Excellence:</strong> We strive for excellence in all our services and solutions</li>
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> <strong>Respect:</strong> We treat all stakeholders with dignity and respect</li>
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> <strong>Innovation:</strong> We embrace innovation and continuous improvement</li>
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> <strong>Responsibility:</strong> We take accountability for our actions and decisions</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Ethical Guidelines */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-shield-check-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Ethical Guidelines</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Fair and honest business practices</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Compliance with all applicable laws and regulations</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Protection of confidential information</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Avoidance of conflicts of interest</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Respect for intellectual property rights</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Professional Conduct */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-user-star-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Professional Conduct</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Maintain professional competence and skills</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Provide quality services to clients</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Foster a collaborative work environment</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Promote diversity and inclusion</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Ensure workplace safety and well-being</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Stakeholder Relations */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-team-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Stakeholder Relations</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Build trust-based relationships with clients</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Maintain transparent communication</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Respect stakeholder rights and interests</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Contribute to community development</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Support environmental sustainability</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Reporting and Compliance */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="governance-card" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem', backgroundColor: '#f8f9fa' }}>
                                            <div className="text-center">
                                                <div className="card-icon mb-3">
                                                    <i className="ri-feedback-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                                </div>
                                                <h5 className="mb-3">Reporting Violations</h5>
                                                <p className="mb-3">
                                                    We encourage all employees and stakeholders to report any violations of our Code of Conduct through our confidential reporting system.
                                                </p>
                                                <div className="contact-info">
                                                    <p><strong>Ethics Hotline:</strong> +91 40 1234 5678</p>
                                                    <p><strong>Email:</strong> <a href="mailto:ethics@pyramititsolutions.com">ethics@pyramititsolutions.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Anti-Corruption Policy Section */}
                        {activeSection === 'anti-corruption' && (
                            <div className="governance-section fade-in">
                                <div className="section-header mb-4">
                                    <h3 className="text-center mb-4" style={{ color: '#f24c1a' }}>Anti-Corruption Policy</h3>
                                    <p className="text-center lead mb-5">
                                        Pyramid IT Solutions maintains a zero-tolerance policy towards corruption, bribery, and all forms of unethical practices. We are committed to conducting business with integrity and transparency.
                                    </p>
                                </div>

                                <div className="row">
                                    {/* Policy Statement */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-shield-cross-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Zero Tolerance Policy</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-close-circle-line text-danger me-2"></i> <strong>No Bribery:</strong> Prohibit offering, giving, or accepting bribes</li>
                                                <li className="mb-2"><i className="ri-close-circle-line text-danger me-2"></i> <strong>No Kickbacks:</strong> Eliminate all forms of kickback arrangements</li>
                                                <li className="mb-2"><i className="ri-close-circle-line text-danger me-2"></i> <strong>No Facilitation Payments:</strong> Avoid payments to expedite routine services</li>
                                                <li className="mb-2"><i className="ri-close-circle-line text-danger me-2"></i> <strong>No Political Corruption:</strong> Maintain independence from political influence</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Prevention Measures */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-shield-check-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Prevention Measures</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> Regular anti-corruption training programs</li>
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> Due diligence on business partners</li>
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> Clear policies and procedures</li>
                                                <li className="mb-2"><i className="ri-check-line text-success me-2"></i> Internal audit and monitoring systems</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Gift and Entertainment Policy */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-gift-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Gifts & Entertainment</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Gifts must be of nominal value and culturally appropriate</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Entertainment must be reasonable and business-related</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> All gifts and entertainment must be transparent</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Cash gifts are strictly prohibited</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Third-Party Relations */}
                                    <div className="col-md-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-handshake-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Third-Party Relations</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Conduct due diligence on all business partners</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Include anti-corruption clauses in contracts</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Monitor third-party compliance regularly</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Maintain records of all transactions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Compliance and Reporting */}
                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem' }}>
                                            <div className="card-icon mb-3">
                                                <i className="ri-file-shield-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                            </div>
                                            <h5 className="mb-3">Compliance Framework</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Regular risk assessments</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Annual compliance certifications</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Continuous monitoring systems</li>
                                                <li className="mb-2"><i className="ri-arrow-right-s-line text-primary me-2"></i> Independent audit reviews</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <div className="governance-card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem', backgroundColor: '#fff3f0' }}>
                                            <div className="text-center">
                                                <div className="card-icon mb-3">
                                                    <i className="ri-alarm-warning-line" style={{ fontSize: '2.5rem', color: '#f24c1a' }}></i>
                                                </div>
                                                <h5 className="mb-3">Report Corruption</h5>
                                                <p className="mb-3">
                                                    If you suspect or witness any corrupt practices, please report immediately through our confidential channels.
                                                </p>
                                                <div className="contact-info">
                                                    <p><strong>Anti-Corruption Hotline:</strong> +91 40 1234 5679</p>
                                                    <p><strong>Secure Email:</strong> <a href="mailto:anti-corruption@pyramititsolutions.com">anti-corruption@pyramititsolutions.com</a></p>
                                                </div>
                                                <button 
                                                    className="btn btn-outline-danger mt-3"
                                                    onClick={() => window.location.href = 'mailto:anti-corruption@pyramititsolutions.com?subject=Corruption Report&body=Please provide details of the incident...'}
                                                >
                                                    Report Incident
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Legal Framework */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="governance-card" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '2rem', backgroundColor: '#f8f9fa' }}>
                                            <h5 className="mb-3 text-center">Legal Compliance</h5>
                                            <p className="text-center mb-4">
                                                Our anti-corruption policy ensures compliance with all applicable laws and international standards including:
                                            </p>
                                            <div className="row">
                                                <div className="col-md-3 text-center mb-3">
                                                    <div className="legal-item">
                                                        <i className="ri-government-line" style={{ fontSize: '2rem', color: '#f24c1a' }}></i>
                                                        <p className="mt-2 mb-0"><strong>Indian Prevention of Corruption Act</strong></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 text-center mb-3">
                                                    <div className="legal-item">
                                                        <i className="ri-global-line" style={{ fontSize: '2rem', color: '#f24c1a' }}></i>
                                                        <p className="mt-2 mb-0"><strong>UN Global Compact</strong></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 text-center mb-3">
                                                    <div className="legal-item">
                                                        <i className="ri-scales-line" style={{ fontSize: '2rem', color: '#f24c1a' }}></i>
                                                        <p className="mt-2 mb-0"><strong>International Anti-Bribery Standards</strong></p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 text-center mb-3">
                                                    <div className="legal-item">
                                                        <i className="ri-shield-star-line" style={{ fontSize: '2rem', color: '#f24c1a' }}></i>
                                                        <p className="mt-2 mb-0"><strong>ISO 37001 Compliance</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .fade-in {
                    animation: fadeIn 0.5s ease-in;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .governance-card {
                    transition: all 0.3s ease;
                }
                
                .governance-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }
                
                .nav-link {
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
};

export default CorporateGovernanceContent;