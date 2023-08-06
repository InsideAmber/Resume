import React from 'react';

const ExperienceCard = ({
  title,
  location,
  description,
  list,
  techStack,
  isParagraph,
  isTime,
}) => {
  return (
    <>
      <h3 className="vertical-timeline-element-title font-semibold">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {location} &nbsp;
        <span className="font-semibold">{isTime && isTime}</span>
      </h4>
      <h3 className="mt-4 font-normal">
        {isParagraph ? (
          <h3 className="font-normal">
            Gained extensive hands-on experience in various frontend techniques
            during my internship, enhancing my proficiency in modern web
            development practices.
          </h3>
        ) : (
          <h3 className="font-normal">
            Crafted visually appealing and user-centric web designs that
            seamlessly blend aesthetics with intuitive functionality.
          </h3>
        )}
        {description}
      </h3>
      <ul className="mt-4 list-disc">
        {list.map((item) => (
          <li key={item.id} className="ml-4">
            {item.text}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap justify-start xs:justify-between pb-6">
        {techStack.map((item) => (
          <button
            key={item.id}
            className="ml-2 mt-2 px-4 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full"
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default ExperienceCard;
