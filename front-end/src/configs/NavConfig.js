import { HOME_PATH, PROFILE_PATH } from './AppConfig';

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

const NAV_CONFIG = [...HOME, ...PROFILE];

export default NAV_CONFIG;
