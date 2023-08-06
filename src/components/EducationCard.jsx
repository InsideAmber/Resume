import React from 'react';

const EducationCard = () => {
  return (
    <>
      <ol className="relative border-l border-gray-400 dark:border-gray-400">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-200">
            2017-2021
          </time>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            B.Tech, &nbsp;
            <span className="font-semibold">Computer Science Engineering</span>
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
            Poornima University, Jaipur
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-400"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-200">
            2014-2016
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            High School
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-300">
            Zila School, Motihari
          </p>
        </li>
      </ol>
    </>
  );
};

export default EducationCard;
