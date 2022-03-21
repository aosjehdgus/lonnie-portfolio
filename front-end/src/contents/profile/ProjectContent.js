import React from 'react';
import PROJECT from '../../constants/Project';
// import useProject from '../../hooks/useProject';
import Slider from '../../components/carousel/Slider';

const ProjectContent = () => {
  // const { project } = useProject();

  return <Slider project={PROJECT} />;
};

export default ProjectContent;
