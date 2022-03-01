import { HOME_PATH, PROFILE_PATH, TECH_PATH } from './AppConfig';

export const HOME = [
  {
    title: 'Home',
    path: HOME_PATH,
  },
];

export const PROFILE = [
  {
    title: 'Profile',
    path: PROFILE_PATH,
  },
];

export const TECH = [
  {
    title: 'Tech',
    path: TECH_PATH,
  },
];

const NAV_CONFIG = [...HOME, ...PROFILE, ...TECH];

export default NAV_CONFIG;
