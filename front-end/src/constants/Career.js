import React from 'react';
import { FcSearch, FcBusiness } from 'react-icons/fc';

const CAREER = [
  {
    icon: <FcSearch size={50} />,
    title: 'Job Preparation',
    link: 'github.com/aosjehdgus',
    description: `학부 시절 및 취업 준비 동안의 활동을 담고 있습니다.`,
    contents: [
      { period: '2013', content: '나노융합공학과 2대 학생회 과대표' },
      { period: '2018', content: '나노융합공학과 7대 학생회 정학생회장' },
      { period: '2019', content: '나노융합공학과 8대 학생회 과대표' },
      {
        period: '2020.05 - 2020.11',
        content: '한국품질재단 AI 개발자 양성 과정 수료',
      },
    ],
  },
  {
    icon: <FcBusiness size={50} />,
    title: 'Job',
    link: 'aosjehdgus.tistory.com',
    description: '경력 사항을 담고 있습니다.',
    contents: [
      { period: '2021.04', content: '긱웍스 에아이이 입사' },
      {
        period: '2021.11',
        content: '(주)미디어 코퍼스로 소속 이전',
      },
    ],
  },
];

export default CAREER;
