import React from 'react';
import { FcSearch, FcBriefcase } from 'react-icons/fc';
import media from '../../asset/media.jpg';

const CAREER = [
  {
    key: 'summary',
    icon: <FcBriefcase size={50} />,
    title: 'Summary',
    description: `학부 시절부터 지금까지의 활동을 담고 있습니다.`,
    contents: [
      { period: '2013', content: '2대 학생회 과대표' },
      { period: '2018', content: '7대 학생회 정학생회장' },
      { period: '2019', content: '8대 학생회 과대표' },
      {
        period: '2020.05 - 2020.11',
        content: '한국품질재단 AI 개발자 양성 과정 수료',
      },
      { period: '2021.04', content: '긱웍스 에아이이 입사' },
      {
        period: '2021.11',
        content: '(주)미디어 코퍼스로 소속 이전',
      },
    ],
  },
  {
    key: 'media',
    icon: <img alt="mediaCorpus" src={media} />,
    working: '2021.04 - 재직중',
    description: `미디어 코퍼스는 '인공지능 말뭉치' 구축하는 업체입니다. 저는 삼성전자, 국립국어원의 데이터 구축을 위한 Tool의 프론트 엔드 개발 및 관리를 담당하고 있습니다.`,
    contents: [
      {
        period: '2021.11 - 2022.04',
        role: '프론트 엔드 개발 연구원',
        project: '비윤리적 표현 말뭉치 연구 분석 및 시범 구축 사업',
        developments: [
          '로그인 페이지 개발',
          '회원 가입 페이지 개발',
          '회원 정보 인증 페이지 개발',
          '비윤리적 표현 항목별 평가 페이지 개발',
          '작업 현황 점검 페이지 개발',
          '공지사항 페이지 개발',
        ],
      },
      {
        period: '2021.05 - 2021.09',
        role: '프론트 엔드 개발 인력',
        project: '말뭉치 언어의 사회적 인식 조사 분류 사업',
        developments: [
          '로그인 페이지 개발',
          '비밀번호 변경 페이지 개발',
          '말뭉치를 라벨링 하기 위한 컨텍스트 메뉴 개발',
          '작업 현황 및 파일 진행 상황 점검을 위한 관리 페이지 개발',
          '작업 완료된 파일의 검수를 위한 페이지 개발',
        ],
      },
    ],
  },
  // {
  //   icon: <FcBriefcase size={50} />,
  //   title: 'Project',
  //   subtitle: '제가 진행한 프로젝트를 간략하게 요약하였습니다.',
  //   contents: [
  //     {
  //       period: '2021.11 - 2022.04',
  //       role: '연구원 (프론트 엔드 개발)',
  //       project: '말뭉치 언어의 사회적 인식 조사 분류 사업',
  //       description: '',
  //     },
  //     {
  //       period: '2021.05 - 2021.09',
  //       role: '개발 인력 (프론트 엔드 개발)',
  //       project: '비윤리적 표현 말뭉치 연구 분석 및 시범 구축 사업',
  //       description: '',
  //     },
  //     {
  //       period: '2021.03',
  //       project: '고객 관리 프로덕트 개발',
  //       description:
  //         'React, NodeJS, MySQL을 활용하여 추가, 삭제, 검색으로 고객을 관리 할 수 있는 페이지 개발하였습니다.',
  //     },
  //     {
  //       period: '2021.03',
  //       project: '로그인 프로덕트 개발',
  //       description:
  //         'React, Mobx, NodeJS, MySQL을 활용하여 프론트부터 백엔드까지 간단한 로그인 프로덕트를 개발하였습니다.',
  //     },
  //     {
  //       period: '2020.12',
  //       project: "dongle's portfolio",
  //       description:
  //         'dongle은 저의 닉네임이고 저의 초기 포트폴리오 내용을 담고 있습니다. HTML, CSS, JS를 통해 개발하였습니다.',
  //     },
  //     {
  //       period: '2020.10.15 - 2020.11.15',
  //       project: 'AD add 프로젝트',
  //       description:
  //         '얼굴 인식을 통해 추출한 데이터를 기반으로 광고를 추천하는 서비스 입니다. 120만장의 사진 데이터 라벨링 작업, Dlib, OpenCV를 이용한 데이터 전처리, EfficientnetB4를 통한 모델링 및 학습을 진행하였습니다.',
  //     },
  //     {
  //       period: '2020.06',
  //       project: '맛.zip 프로젝트',
  //       description:
  //         '요리의 레시피를 전달하고, 냉장고 관리, 장보기 메모 기능을 담고 있는 서비스 입니다. 냉장고 관리 페이지의 HTML, CSS, JS를 담당하였습니다.',
  //     },
  //   ],
  // },
];

export default CAREER;
