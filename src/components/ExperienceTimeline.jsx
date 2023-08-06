import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { MdWork } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

import { experienceOneCardData, experienceTwoCardData } from '../constants';
import ExperienceCard from './ExperienceCard';

const ExperienceTimeline = ({ theme }) => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: theme ? '#1e293b' : '#fff',
            color: theme ? '#fff' : '#000',
            borderTop: '2px solid #000',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Aug 2021 - present"
          iconStyle={{ background: '#fff', color: '#000' }}
          icon={<MdWork />}
        >
          <ExperienceCard
            title={experienceOneCardData.title}
            description={experienceOneCardData.description}
            location={experienceOneCardData.location}
            list={experienceOneCardData.list}
            techStack={experienceOneCardData.techStack}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: theme ? '#1e293b' : '#fff',
            color: theme ? '#fff' : '#000',
            borderTop: '2px solid #000',
          }}
          date="Aug 2020 - May 2021"
          iconStyle={{ background: '#fff', color: '#000' }}
          icon={<MdWork />}
        >
          <ExperienceCard
            title={experienceTwoCardData.title}
            description={experienceTwoCardData.description}
            location={experienceTwoCardData.location}
            list={experienceTwoCardData.list}
            techStack={experienceTwoCardData.techStack}
            isParagraph
          />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default ExperienceTimeline;
