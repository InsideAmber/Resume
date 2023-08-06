import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { FaNodeJs } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { SiSolidity } from 'react-icons/si';
import 'react-vertical-timeline-component/style.min.css';

import ProjectCard from './ProjectCard';
import {
  projectOneCardData,
  projectTwoCardData,
  projectThreeCardData,
  projectFourCardData,
  projectFiveCardData,
} from '../constants';

const ProjectTimeline = ({ theme }) => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: theme ? '#1e293b' : '#fff',
            color: theme ? '#fff' : '#000',
            borderTop: '2px solid rgb(33, 150, 243)',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GrReactjs />}
        >
          <ProjectCard
            techStack={projectOneCardData.techStack}
            title={projectOneCardData.title}
            subTitle={projectOneCardData.subTitle}
            description={projectOneCardData.description}
            featureTitle={projectOneCardData.featureTitle}
            featureLists={projectOneCardData.featureLists}
            exploreBtn={projectOneCardData.exploreBtn}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: theme ? '#1e293b' : '#fff',
            color: theme ? '#fff' : '#000',
            borderTop: '2px solid rgb(33, 150, 243)',
          }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GrReactjs />}
        >
          <ProjectCard
            techStack={projectTwoCardData.techStack}
            title={projectTwoCardData.title}
            subTitle={projectTwoCardData.subTitle}
            description={projectTwoCardData.description}
            featureTitle={projectTwoCardData.featureTitle}
            featureLists={projectTwoCardData.featureLists}
            exploreBtn={projectTwoCardData.exploreBtn}
          />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: theme ? '#1e293b' : '#fff',
            color: theme ? '#fff' : '#000',
            borderTop: '2px solid rgb(16, 204, 82)',
          }}
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaNodeJs />}
        >
          <ProjectCard
            techStack={projectThreeCardData.techStack}
            title={projectThreeCardData.title}
            subTitle={projectThreeCardData.subTitle}
            description={projectThreeCardData.description}
            featureTitle={projectThreeCardData.featureTitle}
            featureLists={projectThreeCardData.featureLists}
            exploreBtn={projectThreeCardData.exploreBtn}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          contentStyle={{
            background: theme ? '#1e293b' : '#fff',
            color: theme ? '#fff' : '#000',
            borderTop: '2px solid rgb(16, 204, 82)',
          }}
          date="November 2012"
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaNodeJs />}
        >
          <ProjectCard
            techStack={projectFourCardData.techStack}
            title={projectFourCardData.title}
            subTitle={projectFourCardData.subTitle}
            description={projectFourCardData.description}
            featureTitle={projectFourCardData.featureTitle}
            featureLists={projectFourCardData.featureLists}
            exploreBtn={projectFourCardData.exploreBtn}
          />
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education "
          contentStyle={{
            background: theme ? '#1e293b' : '#fff',
            color: theme ? '#fff' : '#000',
            borderTop: '2px solid gray',
          }}
          date="November 2012"
          iconStyle={{ background: 'gray', color: '#000' }}
          icon={<SiSolidity />}
        >
          <ProjectCard
            techStack={projectFiveCardData.techStack}
            title={projectFiveCardData.title}
            subTitle={projectFiveCardData.subTitle}
            description={projectFiveCardData.description}
            featureTitle={projectFiveCardData.featureTitle}
            featureLists={projectFiveCardData.featureLists}
            exploreBtn={projectFiveCardData.exploreBtn}
          />
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </>
  );
};

export default ProjectTimeline;
