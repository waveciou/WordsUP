module.exports = {
  prefix: 'tw-',
  content: [
    './pages/*.{js,ts,jsx,tsx}',
    './components/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/*.{scss,module.scss}',
  ],
  theme: {
    screens: {
      mini: '370px',
      mobile: '480px',
      mobile_space: `${480 + 30}px`,
      tablet: '768px',
      tablet_space: `${768 + 30}px`,
      desktop: '1025px',
      desktop_space: `${1024 + 30}px`,
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#333333',
      gray: '#c8c9cc',
      'gray-light': '#f5f5f5',
      'gray-dark': '#858585',
      green: '#1ea79d',
      'green-light': '#4caf50',
      'green-dark': '#168077',
      wine: '#a31621',
      brown: '#420c14',
      orange: '#f58f29',
      yellow: '#ffe464',
      'yellow-light': '#fcf8e3',
      red: '#f87171',
    },
    fontSize: {
      xl: '32px',
      lg: '24px',
      md: '22px',
      base: '20px',
      sm: '18px',
      xs: '16px',
      xxs: '14px',
      'error-caption': '70px',
      'not-found-caption': '96px',
    },
    minWidth: {
      105: '105px',
      140: '140px',
      200: '200px',
    },
    maxWidth: {
      400: '400px',
      670: '670px',
    },
    minHeight: {
      300: '300px',
      '100p': '100%',
    },
    extend: {
      spacing: {
        'header-height': '50px',
        'menu-width': '80%',
      },
      zIndex: {
        3000: '3000',
        4000: '4000',
        4500: '4500',
        5000: '5000',
        6000: '6000',
        7000: '7000',
      },
    },
  },
  plugins: [],
};
