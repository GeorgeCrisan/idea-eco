import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const title = 'what title should this have?';

const email = 'georgerdp@gmail.com';

const messages = {
  app: {
    crash: {
      title: 'Error! Something is wrong.',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Error from loader, fix your component',
  },
  images: {
    failed: 'something went wrong during image loading',
  },
  404: 'Are you lost?',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Starter kit for modern web applications',
};

export { loader, notifications, dateFormat, messages, email, title, defaultMetaTags };
