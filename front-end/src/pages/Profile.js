import React from 'react';
/* Layout */
import ProfileLayout from '../layouts/profile/ProfileLayout';
/* Content */
import AboutContent from '../contents/profile/AboutContent';
import ArchiveContent from '../contents/profile/ArchiveContent';
import SkillContent from '../contents/profile/SkillContent';
import CareerContent from '../contents/profile/CareerContent';
import ProjectContent from '../contents/profile/ProjectContent';

const profileConfig = [
  { title: 'About', content: <AboutContent /> },
  { title: 'Archive', content: <ArchiveContent /> },
  { title: 'Skill', content: <SkillContent /> },
  { title: 'Career', content: <CareerContent /> },
  { title: 'Project', content: <ProjectContent /> },
];

const Profile = () => {
  return (
    <>
      {profileConfig.map(({ title, content }) => {
        return <ProfileLayout key={title} title={title} content={content} />;
      })}
    </>
  );
};

export default Profile;
