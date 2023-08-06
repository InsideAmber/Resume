import React from 'react';
import { MdWork } from 'react-icons/md';

import ExperienceCard from './ExperienceCard';
import { experienceOneCardData, experienceTwoCardData } from '../constants';

const CustomExperienceTimeline = () => {
  return (
    <>
      <ol className="relative border-l border-gray-400 dark:border-gray-700">
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <MdWork />
          </span>
          <ExperienceCard
            title={experienceOneCardData.title}
            description={experienceOneCardData.description}
            location={experienceOneCardData.location}
            list={experienceOneCardData.list}
            techStack={experienceOneCardData.techStack}
            isTime="Aug 2021 - present"
          />
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <MdWork />
          </span>
          <ExperienceCard
            title={experienceTwoCardData.title}
            description={experienceTwoCardData.description}
            location={experienceTwoCardData.location}
            list={experienceTwoCardData.list}
            techStack={experienceTwoCardData.techStack}
            isParagraph
            isTime="Aug 2020 - May 2021"
          />
        </li>
      </ol>
    </>
  );
};

export default CustomExperienceTimeline;
