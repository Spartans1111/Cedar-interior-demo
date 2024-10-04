import React from 'react';
import Accordion from './Accordion'; // Import your Accordion component
import './accordian.css'; // Import your CSS file

const AccordianPage = () => {
  // Define your accordion items here
  const items = [
    {
      title: 'Can your company handle commercial projects?',
      content: 'This is the content for Section 1. It can include text, images, or other elements.',
    },
    {
      title: 'Are your electrical engineers experienced?',
      content: 'Here is the content for Section 2. You can add more details or information specific to this section.',
    },
    {
      title: 'What types of industries electrical solutions for?',
      content: 'Content for Section 3 goes here. Feel free to include any additional information or media.',
    },
    {
          title:'Do you offer a transportation?',
          content:'Content for Section 3 goes here. Feel free to include any additional information or media.'
    },
  ];

  return (
    <div className='accordian'>
      <div className="accordian-col">
        <p className='qa'>QUESTIONS & ANSWERS</p>
        <h2 className='header2'>Come let’s clear your doubts & queries</h2>
        <p className='qa-exp'>
          Experience the ultimate getaway at our luxurious design,
          where every detail is designed to offer you unparalleled
          comfort and relaxation. Nestled in a stunning location,
          <br /><br />
          Experience the ultimate getaway at our luxurious resort,
          where every detail is designed to offer.
        </p>
      </div>
      
      <div className="accordian-col">
        {/* Place the Accordion component here */}
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default AccordianPage;
