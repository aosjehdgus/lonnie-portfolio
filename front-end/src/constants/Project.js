import React from 'react';
import { FcBriefcase, FcFinePrint } from 'react-icons/fc';
import DikeImage from '../../asset/dike-img.png';
import NiklImage from '../../asset/nikl-img.jpg';
import media from '../../asset/media.jpg';

const PROJECT = [
  {
    key: 'dike',
    title: 'Dike Project',
    icon: <FcFinePrint size={30} />,
    image: <img alt="dike" src={DikeImage} />,
    description: `비윤리적 표현의 단계적 평가를 진행한 데이터를 수집하고,
    이를 관리 할 수 있는 도구를 개발한 프로젝트 입니다.
    `,
    period: '2021.11 - 2022.04',
    development: {
      front: ['React', 'Redux-toolkit'],
      back: ['NodeJS', 'SailsJS'],
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
    github: '깃허브',
  },
  {
    key: 'nikl',
    title: 'Nikl Project',
    image: <img alt="nikl" src={NiklImage} />,
    description: `말뭉치를 6가지 기준에 맞게 라벨링을 진행한 데이터를 수집하고,
    이를 관리 할 수 있는 도구를 개발한 프로젝트 입니다.
    `,
    period: '2021.05 - 2021.09',
    development: {
      front: ['1', '2'],
      back: ['1', '2'],
      database: '1',
      build: ['1', '2'],
      deploy: '1',
    },
    func: ['1', '2'],
    github: '깃허브',
  },
  {
    key: 'management',
    title: 'Management Client',
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
    github: '깃허브',
  },
  {
    key: 'login',
    title: 'Login Product',
    image: <img alt="mediaCorpus" src={media} />,
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
    github: '깃허브',
  },
  {
    key: 'dongle',
    title: `dongle's portfoilo`,
    image: <img alt="mediaCorpus" src={media} />,
    description: `저의 이전 포트폴리오 내용을 담고 있습니다.`,
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
  //     editor: 'Jupyter notebook',
  //     landmark: 'dlib',
  //     crop: 'OpenCV',
  //     model: 'EfficientnetB4',
  //     framework: 'pytorch',
  //   },
  //   func: ['성별, 나이, 악세사리 유무, 감정 추출'],
  //   github: '깃허브',
  // },
  {
    key: 'mat',
    title: 'mat',
    image: <img alt="mediaCorpus" src={media} />,
    description: `맛.zip은 ‘맛의 알집을 푼다’는 의미를 지니고 있습니다.
    알집의 내용은 요리의 레시피를 전달하고,
    냉장고 관리, 장보기 메모 기능을 담고 있는 서비스 입니다.
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
    github: '깃허브',
  },
];

export default PROJECT;
