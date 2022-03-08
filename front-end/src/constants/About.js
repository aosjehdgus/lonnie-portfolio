import React from 'react';
import {
  FaUser,
  FaUniversity,
  FaBirthdayCake,
  FaGithub,
  FaClipboardList,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ABOUT = [
  {
    icon: <FaUser size={50} color="rgba(0, 0, 0, 0.7)" />,
    name: '이름',
    content: '김동현',
  },
  {
    icon: <FaBirthdayCake size={50} color="rgba(0, 0, 0, 0.7)" />,
    name: '생년월일',
    content: '1993.01.21',
  },
  {
    icon: <FaUniversity size={50} color="rgba(0, 0, 0, 0.7)" />,
    name: '학력',
    content: '서경대학교',
  },
  {
    icon: <MdEmail size={50} color="rgba(0, 0, 0, 0.7)" />,
    name: '이메일',
    content: 'kdhsea@gmail.com',
  },
  {
    icon: <FaGithub size={50} color="rgba(0, 0, 0, 0.7)" />,
    name: '깃허브',
    content: 'github.com/aosjehdgus',
  },
  {
    icon: <FaClipboardList size={50} color="rgba(0, 0, 0, 0.7)" />,
    name: '블로그',
    content: 'aosjehdgus.tistory.com',
  },
];

export default ABOUT;
