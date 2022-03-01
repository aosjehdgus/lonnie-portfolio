import { HOME_PATH, PROFILE_PATH, CONTACT_PATH } from './AppConfig';

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

export const CONTACT = [
  {
    title: 'Contact',
    path: CONTACT_PATH,
  },
];

const NAV_CONFIG = [...HOME, ...PROFILE, ...CONTACT];

export default NAV_CONFIG;
