import React from 'react';
import { FcBriefcase } from 'react-icons/fc';
import media from '../../asset/media.svg';

const CAREER = [
  {
    key: 'summary',
    icon: <FcBriefcase size={50} />,
    title: 'Summary',
    description: `학부 시절부터 지금까지의 활동을 담고 있습니다.`,
    contents: [
      { period: '2013.01 - 2013.12', content: '2대 학생회 과대표' },
      { period: '2018.01 - 2018.12', content: '7대 학생회 정학생회장' },
      { period: '2019.01 - 2019.12', content: '8대 학생회 과대표' },
      {
        period: '2020.05 - 2020.11',
        content: '한국품질재단 AI 개발자 양성 과정 수료',
      },
      { period: '2021.04 - 2021.11', content: '긱웍스 에아이이' },
      {
        period: '2021.11 - 재직중',
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
];

export default CAREER;
