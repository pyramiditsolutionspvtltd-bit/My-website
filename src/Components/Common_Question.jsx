import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

const formatIndex = (index) => {
    return index < 9 ? `0${index + 1}` : `${index + 1}`;
};

const faqData = [
    { title: ' What services does Pyramid IT Solutions provide?', details: 'We offer end-to-end IT infrastructure services including design, implementation, configuration, and management. Our expertise covers wired, wireless, and optical fiber installations, as well as turnkey solutions for voice and data networks.' },
    { title: ' Who are Pyramid’s clients?', details: 'We cater to small and medium businesses (SMBs), as well as large organizations and campus networks across multiple industries.' },
    { title: 'Where is Pyramid IT Solutions based?', details: 'Our headquarters is in Hyderabad, with extended operations in Pune, Bangalore, and Visakhapatnam.' },
    { title: 'Do you provide customized IT solutions?', details: 'Yes. We design and implement tailored IT solutions that match each client’s unique requirements, ensuring scalability, reliability, and security.' }
    
];

const Common_Question = ({activeItem,addClass, selectedIndices = [], serviceFaqs = null}) => {

    // Use service-specific FAQs if provided, otherwise use default FAQs
    const faqsToUse = serviceFaqs || faqData;
    const dataToRender = selectedIndices.length > 0 ? selectedIndices.map(index => faqsToUse[index]) : faqsToUse;
    return (
        <Accordion defaultActiveKey={activeItem} className={`rs-faq__wrapper ${addClass ? addClass : ''}`}>
            {
                dataToRender && dataToRender.map((data, index) => (
                    <Accordion.Item eventKey={index} key={index} className="">
                        <Accordion.Button className="accordion_tab">
                            {formatIndex(index)}. {data.question || data.title}
                            <div className="accordion_arrow">
                                <i className="ri-subtract-fill"></i>
                            </div>
                        </Accordion.Button>
                        <Accordion.Body className="accordion_content">
                            <div className="accordion_item">
                                <p>{data.answer || data.details}</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
};

Common_Question.propTypes = {
    activeItem: PropTypes.string,
    addClass: PropTypes.string,
    selectedIndices: PropTypes.array,
    serviceFaqs: PropTypes.arrayOf(PropTypes.shape({
        question: PropTypes.string,
        answer: PropTypes.string
    }))
};

export default Common_Question;