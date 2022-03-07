import React from 'react';
import tistory from '../../asset/tistory.svg';
import octocat from '../../asset/octocat.jpg';

const CAREER = [
  {
    icon: <img alt="octocat" src={octocat} />,
    title: 'Job Preparation',
    link: 'github.com/aosjehdgus',
    description: `학부 시절 및 취업 준비 동안의 활동을 담고 있습니다.`,
    contents: [
      { period: '2013', content: '나노융합공학과 2대 학생회 과대표' },
      { period: '2018', content: '나노융합공학과 7대 학생회 정학생회장' },
      { period: '2019', content: '나노융합공학과 2대 학생회 과대표' },
      {
        period: '2020.05 - 2020.11',
        content: '한국품질재단 AI 개발자 양성 과정 수료',
      },
    ],
  },
  {
    icon: <img alt="tistory" src={tistory} />,
    title: 'Job',
    link: 'aosjehdgus.tistory.com',
    description: '취업 후 경력 사항을 담고 있습니다.',
    contents: [
      { period: '2021.04', content: '긱웍스 에아이이 입사' },
      {
        period: '2021.05 - 2021.07',
        content:
          '(국립국어원) 말뭉치 언어의 사회적 인식 조사 분류 사업 개발 인력 참여',
      },
      {
        period: '2021.11',
        content: '(주)미디어 코퍼스로 소속 이전',
      },
      {
        period: '2021.11 - 2022.04',
        content:
          '(국립국어원) 비윤리적 표현 말뭉치 연구 분석 및 시범 구축 개발 인력 참여',
      },
    ],
  },
];

export default CAREER;
