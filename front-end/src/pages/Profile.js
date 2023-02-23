import React from 'react';
/* Profile Container */
import ProfileContatiner from '../components/common/main';
/* Profile Content */
import AboutContent from '../contents/profile/AboutContent';
import ArchiveContent from '../contents/profile/ArchiveContent';
import SkillContent from '../contents/profile/SkillContent';
import ActivityContent from '../contents/profile/ActivityContent';
import ProjectContent from '../contents/profile/ProjectContent';

const profileConfig = [
  { title: 'About', content: <AboutContent /> },
  { title: 'Archive', content: <ArchiveContent /> },
  { title: 'Skill', content: <SkillContent /> },
  { title: 'Activity', content: <ActivityContent /> },
  { title: 'Project', content: <ProjectContent /> },
];

const Profile = () => {
  return (
    <>
      {profileConfig.map(({ title, content }, idx) => (
        <ProfileContatiner
          idx={idx}
          key={title}
          title={title}
          content={content}
        />
      ))}
    </>
  );
};

export default Profile;
