import React from 'react';
import {
  FcFaq,
  FcFinePrint,
  FcList,
  FcRegisteredTrademark,
  FcTemplate,
  FcShop,
} from 'react-icons/fc';
import DikeImage from '../../asset/dike-img.png';
import NiklImage from '../../asset/nikl-img.jpg';
import DongleImage from '../../asset/dongle-img.jpg';
import MatImage from '../../asset/mat-img.jpg';

const PROJECT = [
  {
    key: 'lonnie',
    title: 'Lonnie Portfolio Project',
    icon: <FcFinePrint size={30} />,
    image: <img alt="dike" src={DikeImage} />,
    description: `현재 보고 게시는 포트폴리오 페이지입니다. Create React App을 사용하지 않고 직접 React 개발 환경을 구축한 프로젝트로, 
    Webpack을 커스터 마이징 하며 작업하였습니다. Data Fetching은 무거운 Redux에서 벗어나 SWR로 진행해 보았습니다. 
    스타일 라이브러리는 Emotion을 사용하며 css-in-js에 익숙해지려고 노력했습니다. 백엔드는 NestJS와 MongoDB로 구축하고, Vercel을 통해 배포를 진행하였습니다.
    `,
    period: '2021.02 - 2022.03',
    development: {
      github: '',
      '주요 내용': [
        '간단한 소개',
        '저장 공간 공유',
        '개발 스킬',
        '활동 사항',
        '프로젝트 소개',
      ],
      frontend: ['React', 'SWR', 'Emotion'],
      backend: ['NodeJS', 'NestJS'],
      database: 'MongoDB',
      build: ['Webpack', 'Babel'],
      deploy: 'Vercel',
    },
  },
  {
    key: 'dike',
    title: 'Dike Project',
    icon: <FcFinePrint size={30} />,
    image: <img alt="dike" src={DikeImage} />,
    description: `비윤리적 표현의 단계적 평가를 진행한 데이터를 수집하고,
    이를 관리 할 수 있는 도구를 개발한 프로젝트 입니다. 프론트엔드 개발을 전담해서 맡았습니다.
    `,
    period: '2021.11 - 2022.04',
    development: {
      github: '',
      func: [
        '원하는 작업 번호로 이동',
        '기준에 따른 평가',
        '작업 패스',
        '작업 진행률 확인',
      ],
      frontend: ['React', 'Redux-toolkit', 'Redux-saga', 'Material-UI'],
      backend: ['NodeJS', 'SailsJS'],
      database: 'MongoDB',
      build: [],
      deploy: 'AWS CloudFront',
    },
    func: [
      '원하는 작업 번호로 이동',
      '기준에 따른 평가',
      '작업 패스',
      '작업 진행률 확인',
    ],
    github: '',
  },
  {
    key: 'nikl',
    title: 'Nikl Project',
    icon: <FcFaq size={30} />,
    image: <img alt="nikl" src={NiklImage} />,
    description: `말뭉치를 6가지 기준에 맞게 라벨링을 진행한 데이터를 수집하고,
    이를 관리 할 수 있는 도구를 개발한 프로젝트 입니다. 프론트엔드 개발을 전담해서 맡았습니다.
    `,
    period: '2021.05 - 2021.09',
    development: {
      front: ['React', 'Redux', 'Redux-saga'],
      back: ['NodeJS', 'SailsJS'],
      database: 'MongoDB',
      build: [],
      deploy: 'AWS CloudFront',
    },
    func: ['1', '2'],
    github: '',
  },
  {
    key: 'management',
    title: 'Management Client',
    icon: <FcList size={30} />,
    image: <img alt="nikl" src={NiklImage} />,
    description: `고객 리스트를 받아오고, 추가, 삭제, 검색 기능을 통해 고객을 관리할 수 있는 프로덕트를 만든 프로젝트 입니다.`,
    period: '2021.03',
    development: {
      front: ['React'],
      back: ['NodeJS'],
      database: 'AWS RDS (MySql)',
      build: [],
      deploy: '',
    },
    func: ['고객 추가', '고객 삭제', '고객 검색'],
    github: 'https://github.com/aosjehdgus/management-product',
  },
  {
    key: 'login',
    title: 'Login Product',
    icon: <FcRegisteredTrademark size={30} />,
    image: <img alt="nikl" src={NiklImage} />,
    description: `간단한 로그인 프로덕트를 풀스텍으로 구현해본 프로젝트 입니다.`,
    period: '2021.03',
    development: {
      front: ['React', 'Mobx'],
      back: ['NodeJS', 'Express'],
      database: 'MySql',
      build: [],
      deploy: '',
    },
    func: ['간단한 로그인 기능'],
    github: 'https://github.com/aosjehdgus/login-product',
  },
  {
    key: 'dongle',
    title: `dongle's portfoilo`,
    icon: <FcTemplate size={30} />,
    image: <img alt="nikl" src={DongleImage} />,
    description: `저의 이전 포트폴리오 내용을 담고 있습니다. 간단한 기능들을 구현해보며 만들어본 프로젝트 입니다.`,
    period: '2020.12 - 2021.03',
    development: {
      front: ['HTML', 'CSS', 'Javascript'],
      back: [],
      database: '',
      build: [],
      deploy: '',
    },
    func: ['별도의 라이브러리 사용 없이 구현'],
    github: 'https://github.com/aosjehdgus/dongle-s-portfolio',
  },
  // {
  //   key: 'ad',
  //   icon: 'ad',
  //   image: <img alt="mediaCorpus" src={media} />,
  //   description: `‘광고에 얼굴 인식을 더하다 ‘ 의 의미를 지니고 있습니다.
  //   얼굴 인식을 통해 추출한 데이터를 기반으로
  //   광고를 추천하는 서비스 입니다.
  //   `,
  //   period: '2020.10.15 - 2020.11.15',
  //   development: {
  //     library: ['Dlib', 'OpenCV', 'Pytorch']
  //     model: 'EfficientnetB4',
  //   },
  //   func: ['성별, 나이, 악세사리 유무, 감정 추출'],
  //   github: '깃허브',
  // },
  {
    key: 'mat',
    title: '맛.zip project',
    icon: <FcShop size={30} />,
    image: <img alt="nikl" src={MatImage} />,
    description: `맛.zip은 ‘맛의 알집을 푼다’는 의미를 지니고 있습니다.
    알집의 내용은 요리의 레시피를 전달하고,
    냉장고 관리, 장보기 메모 기능을 담고 있는 서비스 입니다. 냉장고 관리 페이지 개발을 맡았습니다.
    `,
    period: '2020.06 - 2020.07',
    development: {
      front: ['HTML', 'CSS', 'Javascript'],
      back: [],
      database: '',
      build: [],
      deploy: '',
    },
    func: ['레시피 전달', '냉장고 관리', '장보기 메모'],
    github: 'https://github.com/aosjehdgus/Mat.zip',
  },
];

export default PROJECT;
