import React from 'react';
import { FcBusinessContact } from '@react-icons/all-files/fc/FcBusinessContact';
import { FcPlanner } from '@react-icons/all-files/fc/FcPlanner';
import { FcMindMap } from '@react-icons/all-files/fc/FcMindMap';
import { FcGraduationCap } from '@react-icons/all-files/fc/FcGraduationCap';

const ABOUT = [
  {
    icon: <FcBusinessContact size={50} />,
    name: '이름',
    content: '김동현',
  },
  {
    icon: <FcPlanner size={50} />,
    name: '생년월일',
    content: '1993.01.21',
  },
  {
    icon: <FcGraduationCap size={50} />,
    name: '학력',
    content: '서경대학교',
  },
  {
    icon: <FcMindMap size={50} />,
    name: '이메일',
    content: 'kdhsea@gmail.com',
  },
];

export default ABOUT;
