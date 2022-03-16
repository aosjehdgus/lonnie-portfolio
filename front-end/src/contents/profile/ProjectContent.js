import React from 'react';

import { getAllProject } from '../../hooks/useProject';
import Slider from '../../components/carousel/Slider';

const ProjectContent = () => {
  const { project } = getAllProject();
  return <Slider project={project} />;
};

export default ProjectContent;
