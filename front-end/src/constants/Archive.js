import React from 'react';
import tistory from '../../asset/tistory.svg';
import octocat from '../../asset/octocat.jpg';

const ARCHIVE = [
  {
    icon: <img alt="octocat" src={octocat} />,
    title: 'Github',
    link: 'github.com/aosjehdgus',
    description: `소스 코드 기록 저장소`,
    contents: [
      '프로젝트, 프로덕트, 앱의 소스 코드',
      '혼자서 연습을 진행 했던 소스 코드',
    ],
  },
  {
    icon: <img alt="tistory" src={tistory} />,
    title: 'Tistory',
    link: 'aosjehdgus.tistory.com',
    description: '학습 내용 및 지식을 공유하는 블로그',
    contents: [
      '웹 개발자로서 공부한 지식 정리',
      '개발하면서 발생한 이슈 정리',
      '같은 문제를 겪는 사람들을 위한 지식 공유',
      '똑같은 실수를 반복하지 않기 위한 기록',
    ],
  },
];

export default ARCHIVE;
