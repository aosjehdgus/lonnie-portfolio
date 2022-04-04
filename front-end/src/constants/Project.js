// import { FcFaq } from '@react-icons/all-files/fc/FcFaq';
// import { FcShop } from '@react-icons/all-files/fc/FcShop';
// import { FcList } from '@react-icons/all-files/fc/FcList';
// import { FcTemplate } from '@react-icons/all-files/fc/FcTemplate';
// import { FcFinePrint } from '@react-icons/all-files/fc/FcFinePrint';
// import { FcRegisteredTrademark } from '@react-icons/all-files/fc/FcRegisteredTrademark';
// import LonnieImage from '../../asset/lonnie.gif';
// import DikeImage from '../../asset/dike-img.png';
// import NiklImage from '../../asset/nikl-img.png';
// import DongleImage from '../../asset/dongle-img.png';
// import ManageImage from '../../asset/management.png';
// import LoginImage from '../../asset/login-product.png';
// import MatImage from '../../asset/mat-img.png';

const PROJECT = [
  {
    id: '1',
    key: 'lonnie',
    title: "Lonnie's Portfolio",
    // icon: <FcFinePrint size={50} />,
    // image: <img alt="dike" src={LonnieImage} />,
    description: `현재 보고계시는 포트폴리오 페이지입니다. CRA를 사용하지 않고 직접 React 개발 환경을 구축한 프로젝트로,
    Webpack을 커스터 마이징 하며 작업하였습니다. 스타일 라이브러리는 Emotion을 사용하며 css-in-js를 적용했습니다. Github pages를 통해 배포를 진행하였습니다.
    `,
    startDate: '2022.02 ',
    endDate: ' 2022.04',
    github: 'https://github.com/aosjehdgus/lonnie-portfolio',
    summary: [
      '내 정보',
      ' 블로그 및 깃허브',
      ' 개발 스킬 숙련도',
      ' 활동 및 경력 사항',
      ' 프로젝트 별 요약',
    ],
    frontend: ['React', ' Emotion'],
    backend: [],
    database: '',
    build: ['Webpack', ' Babel'],
    deploy: 'Github pages',
  },
  {
    id: '2',
    key: 'dike',
    title: 'Dike Project',
    // icon: <FcFinePrint size={50} />,
    // image: <img alt="dike" src={DikeImage} />,
    description: `국립국어원, 서울 교대와 함께 진행한 프로젝트로 AI 학습을 위한 가공된 데이터를 만드는 프로젝트를 진행하였습니다.
  비윤리적 표현을 정해진 기준에 맞게 평가할 수 있도록 도와주는 도구를 개발하고 작업 현황을 확인할 수 있는 admin 페이지를 개발 하였습니다. 프론트엔드 개발을
   전담해서 맡아서 진행하였고, 백엔드 데이터 업로드 및 정제 작업을 인수인계 받아 진행하였습니다
    `,
    startDate: '2021.11 ',
    endDate: ' 2022.04',
    github: 'https://github.com/aosjehdgus/dike-project',
    summary: [
      '비윤리적 표현 평가 페이지',
      ' 작업 진행률 확인 페이지',
      ' 로그인 페이지',
      ' 회원 가입 및 인증 페이지',
    ],
    frontend: ['React', ' Redux-toolkit', ' Redux-saga', ' Material-UI'],
    backend: ['Node', ' Sails'],
    database: 'MongoDB',
    build: [],
    deploy: 'AWS CloudFront',
  },
  {
    id: '3',
    key: 'nikl',
    title: 'Nikl Project',
    // icon: <FcFaq size={50} />,
    // image: <img alt="nikl" src={NiklImage} />,
    description: `국립 국어원, 중앙 대학교와 함께 진행한 프로젝트로 raw 데이터에서 비윤리적 표현을 선별하기 위해 6가지 항목의 별도 컨텍스트 메뉴를 개발하고, 라벨링 할 수 있는 저작 도구를 개발하였습니다.
    작업자들의 요구 및 애로 사항을 실시간으로 반영하며 개발을 진행하였고 프론트엔드 개발을 전담해서 맡았습니다.
    `,
    startDate: '2021.05',
    endDate: '2021.09',
    github: '',
    summary: [
      '비윤리적 표현 태깅 페이지',
      ' 작업 파일 목록 페이지',
      ' 작업별, 작업자별 작업 현황 페이지',
      ' 로그인 페이지',
      ' 비밀번호 변경 페이지',
    ],
    frontend: ['React', ' Redux', ' Redux-saga', 'Ant-Design'],
    backend: ['Node', ' Sails'],
    database: 'MongoDB',
    build: [],
    deploy: 'AWS CloudFront',
  },
  // {
  //   id: '4',
  //   key: 'management',
  //   title: 'Management Client',
  //   icon: <FcList size={50} />,
  //   image: <img alt="nikl" src={ManageImage} />,
  //   description: `고객 리스트를 받아오고, 추가, 삭제, 검색 기능을 통해 고객을 관리할 수 있는 프로덕트를 만든 프로젝트 입니다.`,
  //   startDate: '2021.03 ',
  //   endDate: ' 2021.03',
  //   github: 'https://github.com/aosjehdgus/management-product',
  //   summary: ['고객 조회', ' 고객 추가', ' 고객 삭제', ' 고객 검색'],
  //   frontend: ['React', ' Material-UI'],
  //   backend: ['Node', ' Express'],
  //   database: 'AWS RDS (MySql)',
  //   build: [],
  //   deploy: '',
  // },
  // {
  //   id: '5',
  //   key: 'login',
  //   title: 'Login Product',
  //   icon: <FcRegisteredTrademark size={50} />,
  //   image: <img alt="nikl" src={LoginImage} />,
  //   description: `간단한 로그인 프로덕트를 풀스텍으로 구현해본 프로젝트 입니다.`,
  //   startDate: '2021.03',
  //   endDate: '2021.03',
  //   github: 'https://github.com/aosjehdgus/login-product',
  //   summary: ['간단한 로그인 기능'],
  //   frontend: ['React', ' Mobx'],
  //   backend: ['Node', ' Express'],
  //   database: 'MySql',
  //   build: [],
  //   deploy: '',
  // },
  // {
  //   id: '6',
  //   key: 'dongle',
  //   title: `dongle's portfoilo`,
  //   icon: <FcTemplate size={50} />,
  //   image: <img alt="nikl" src={DongleImage} />,
  //   description: `저의 이전 포트폴리오 내용을 담고 있습니다. 간단한 기능들을 구현해보며 만들어본 프로젝트 입니다.`,
  //   startDate: '2020.12',
  //   endDate: '2021.03',
  //   github: 'https://github.com/aosjehdgus/dongle-s-portfolio',
  //   summary: ['프로필', ' 사용 기술', ' 프로젝트 소개', ' 보유 역량'],
  //   frontend: ['HTML', ' CSS', ' Javascript'],
  //   backend: [],
  //   database: '',
  //   build: [],
  //   deploy: '',
  // },
  {
    id: '4',
    key: 'mat',
    title: '맛.zip project',
    // icon: <FcShop size={50} />,
    // image: <img alt="nikl" src={MatImage} />,
    description: `맛.zip은 ‘맛의 알집을 푼다’는 의미를 지니고 있습니다.
    알집의 내용은 요리의 레시피를 전달하고,
    냉장고 관리, 장보기 메모 기능을 담고 있는 서비스 입니다. 냉장고 관리 페이지 개발을 맡았습니다. 라이브러리 사용 없이 HTML, CSS, Javascript 만으로 
    개발한 프로젝트 입니다.
    `,
    startDate: '2020.06',
    endDate: '2020.07',
    github: 'https://github.com/aosjehdgus/Mat.zip',
    summary: [
      '냉장고 내의 재고 확인 기능',
      ' 신선도 체크 그래프',
      ' 장볼 식재료 메모 기능',
      ' 간단한 Tip 제공',
    ],
    frontend: ['HTML', ' CSS', ' Javascript'],
    backend: [],
    database: '',
    build: [],
    deploy: '',
  },
];

export default PROJECT;
