import React from 'react';
import { FaReact, FaGitAlt, FaSourcetree, FaGithub } from 'react-icons/fa';

import {
  SiRedux,
  SiReduxsaga,
  SiWebpack,
  SiBabel,
  SiMongodb,
  SiNestjs,
  SiAmazonaws,
  SiSwagger,
  SiPostman,
  SiBitbucket,
} from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';

export const FRONT_CONFIG = [
  {
    name: 'React',
    description: 'React 재밌다',
    proficiency: 82,
    icon: <FaReact />,
  },
  {
    name: 'Redux',
    description: 'Redux 재밌다',
    proficiency: 22,
    icon: <SiRedux />,
  },
  {
    name: 'Redux-saga',
    description: 'Redux-saga 재밌다',
    proficiency: 32,
    icon: <SiReduxsaga />,
  },
  {
    name: 'Webpack',
    description: 'Webpack 재밌다',
    proficiency: 32,
    icon: <SiWebpack />,
  },
  {
    name: 'Babel',
    description: 'Babel 재밌다',
    proficiency: 32,
    icon: <SiBabel />,
  },
];

export const BACK_CONFIG = [
  {
    name: 'Node.js',
    description: 'Node.js 재밌다',
    proficiency: 32,
    icon: <DiNodejs />,
  },
  {
    name: 'MongoDB',
    description: 'MongoDB 재밌다',
    proficiency: 82,
    icon: <SiMongodb />,
  },
  {
    name: 'Nest.js',
    description: 'Nest.js 재밌다',
    proficiency: 22,
    icon: <SiNestjs />,
  },
  {
    name: 'Swagger',
    description: 'Swagger 재밌다',
    proficiency: 22,
    icon: <SiSwagger />,
  },
  {
    name: 'Postman',
    description: 'Postman 재밌다',
    proficiency: 32,
    icon: <SiPostman />,
  },
];
export const CLOUD_CONFIG = [
  {
    name: 'AWS',
    description: 'AWS 재밌다',
    proficiency: 32,
    icon: <SiAmazonaws />,
  },

  {
    name: 'Git',
    description: 'Git 재밌다',
    proficiency: 52,
    icon: <FaGitAlt />,
  },
  {
    name: 'Github',
    description: 'Github 재밌다',
    proficiency: 32,
    icon: <FaGithub />,
  },
  {
    name: 'Bitbucket',
    description: 'Bitbucket 재밌다',
    proficiency: 32,
    icon: <SiBitbucket />,
  },
  {
    name: 'Sourcetree',
    description: 'Sourcetree 재밌다',
    proficiency: 12,
    icon: <FaSourcetree />,
  },
];
