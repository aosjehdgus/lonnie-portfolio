import React from 'react';

import useProject from '../../hooks/useProject';
import Slider from '../../components/carousel/Slider';

const ProjectContent = () => {
  const { project } = useProject();

  return <Slider project={project} />;
};

export default ProjectContent;
