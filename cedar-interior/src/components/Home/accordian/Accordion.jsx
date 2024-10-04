import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


const AccordionItem = ({ title, content, isActive, onClick }) => (
  <div className="accordion-item">
    <div className="accordion-header" onClick={onClick}>
      <h3>{title}</h3>
      <span>{isActive ? <SlArrowUp /> : <SlArrowDown />}</span>
    </div>
    <div className={`accordion-content ${isActive ? 'active' : ''}`}>
      <div>{content}</div>
    </div>
  </div>
);

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
