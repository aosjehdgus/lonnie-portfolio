import React from 'react';
import ReactLogo from '../../asset/react.svg';
import ReduxLogo from '../../asset/redux.svg';
import ReduxSagaLogo from '../../asset/redux-saga.svg';
import WebpackLogo from '../../asset/webpack.svg';
import NestJsLogo from '../../asset/nestjs.svg';
import PostmanLogo from '../../asset/postman.svg';
import AWSLogo from '../../asset/aws.svg';
import BitbucketLogo from '../../asset/bitbucket.svg';
import GitLogo from '../../asset/git.svg';
import GithubLogo from '../../asset/github.svg';
import MongoDBLogo from '../../asset/mongodb.svg';
import NodeJsLogo from '../../asset/nodejs.svg';
import SourceTreeLogo from '../../asset/sourcetree.svg';
import BabelLogo from '../../asset/babel.svg';

const FRONT_SKILL = [
  {
    name: 'React',
    description: '',
    proficiency: 72,
    icon: <img alt="react" src={ReactLogo} />,
  },
  {
    name: 'Redux',
    description: '',
    proficiency: 70,
    icon: <img alt="react" src={ReduxLogo} />,
  },
  {
    name: 'Redux-saga',
    description: '',
    proficiency: 67,
    icon: <img alt="react" src={ReduxSagaLogo} />,
  },
  {
    name: 'Webpack',
    description: '',
    proficiency: 50,
    icon: <img alt="react" src={WebpackLogo} />,
  },
  {
    name: 'Babel',
    description: '',
    proficiency: 43,
    icon: <img alt="babel" src={BabelLogo} />,
  },
];

const BACK_SKILL = [
  {
    name: 'Node.js',
    description: '',
    proficiency: 51,
    icon: <img alt="react" src={NodeJsLogo} />,
  },
  {
    name: 'MongoDB',
    description: '',
    proficiency: 53,
    icon: <img alt="react" src={MongoDBLogo} />,
  },
  {
    name: 'Nest.js',
    description: '',
    proficiency: 12,
    icon: <img alt="react" src={NestJsLogo} />,
  },
  {
    name: 'Postman',
    description: 'Postman 재밌다',
    proficiency: 62,
    icon: <img alt="react" src={PostmanLogo} />,
  },
];
const CLOUD_SKILL = [
  {
    name: 'AWS',
    description: 'AWS 재밌다',
    proficiency: 51,
    icon: <img alt="react" src={AWSLogo} />,
  },
  {
    name: 'Git',
    description: 'Git 재밌다',
    proficiency: 52,
    icon: <img alt="react" src={GitLogo} />,
  },
  {
    name: 'Github',
    description: 'Github 재밌다',
    proficiency: 53,
    icon: <img alt="react" src={GithubLogo} />,
  },
  {
    name: 'Bitbucket',
    description: 'Bitbucket 재밌다',
    proficiency: 54,
    icon: <img alt="react" src={BitbucketLogo} />,
  },
  {
    name: 'Sourcetree',
    description: 'Bitbucket 재밌다',
    proficiency: 52,
    icon: <img alt="sourcetree" src={SourceTreeLogo} />,
  },
];

export const SKILL = [...FRONT_SKILL, ...BACK_SKILL, ...CLOUD_SKILL];
export default SKILL;
