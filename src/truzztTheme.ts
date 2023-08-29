import { createTheme } from '@mui/material';

const truzztBoxStyles = {
  backgroundColor: '#0F0F0F',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex'
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#f3ae0e',
    },
    secondary: {
      main: '#0EF3AE',
    },
  },
  shadows: [
    'none',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.20), 0px 3px 3px 0px rgba(0, 0, 0, 0.12), 0px 3px 4px 0px rgba(0, 0, 0, 0.14)',
    '0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14)',
    '0px 3px 5px 0px rgba(0, 0, 0, 0.20), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
    '0px 5px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 14px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.14)',
    '0px 5px 6px 0px rgba(0, 0, 0, 0.20), 0px 3px 16px 0px rgba(0, 0, 0, 0.12), 0px 9px 12px 0px rgba(0, 0, 0, 0.14)',
    '0px 7px 8px 0px rgba(0, 0, 0, 0.20), 0px 5px 22px 0px rgba(0, 0, 0, 0.12), 0px 12px 17px 0px rgba(0, 0, 0, 0.14)',
    '0px 8px 10px 0px rgba(0, 0, 0, 0.20), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)',
    '0px 11px 15px 0px rgba(0, 0, 0, 0.20), 0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px 24px 38px 0px rgba(0, 0, 0, 0.14)',
    '0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)',
    '0px 1px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14)',
    '0px 1px 8px 0px rgba(0, 0, 0, 0.20), 0px 3px 3px 0px rgba(0, 0, 0, 0.12), 0px 3px 4px 0px rgba(0, 0, 0, 0.14)',
    '0px 2px 4px 0px rgba(0, 0, 0, 0.20), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 4px 5px 0px rgba(0, 0, 0, 0.14)',
    '0px 3px 5px 0px rgba(0, 0, 0, 0.20), 0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 6px 10px 0px rgba(0, 0, 0, 0.14)',
    '0px 5px 5px 0px rgba(0, 0, 0, 0.20), 0px 3px 14px 0px rgba(0, 0, 0, 0.12), 0px 8px 10px 0px rgba(0, 0, 0, 0.14)',
    '0px 5px 6px 0px rgba(0, 0, 0, 0.20), 0px 3px 16px 0px rgba(0, 0, 0, 0.12), 0px 9px 12px 0px rgba(0, 0, 0, 0.14)',
    '0px 7px 8px 0px rgba(0, 0, 0, 0.20), 0px 5px 22px 0px rgba(0, 0, 0, 0.12), 0px 12px 17px 0px rgba(0, 0, 0, 0.14)',
    '0px 8px 10px 0px rgba(0, 0, 0, 0.20), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)',
    '0px 11px 15px 0px rgba(0, 0, 0, 0.20), 0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px 24px 38px 0px rgba(0, 0, 0, 0.14)',
    '0px 5px 6px 0px rgba(0, 0, 0, 0.20), 0px 3px 16px 0px rgba(0, 0, 0, 0.12), 0px 9px 12px 0px rgba(0, 0, 0, 0.14)',
    '0px 7px 8px 0px rgba(0, 0, 0, 0.20), 0px 5px 22px 0px rgba(0, 0, 0, 0.12), 0px 12px 17px 0px rgba(0, 0, 0, 0.14)',
    '0px 8px 10px 0px rgba(0, 0, 0, 0.20), 0px 6px 30px 0px rgba(0, 0, 0, 0.12), 0px 16px 24px 0px rgba(0, 0, 0, 0.14)',
    '0px 11px 15px 0px rgba(0, 0, 0, 0.20), 0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px 24px 38px 0px rgba(0, 0, 0, 0.14)',
  ],
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#454545',
          color: 'white', 
          border: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.24)',
          },
          backgroundColor: '#202020',
          width: "326px",
          height: "54px",
          color: "white",
          placeholder: "none",
          input: {
            color: 'white',
          },  
        },
      },
    },
    MuiInputLabel:{
      styleOverrides: {
        root: {
          color: "white",
          input: {
            color: 'white',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'white',
          fontFamily: 'Montserrat',
          h1: {
              fontSize: '96px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '112px',
              letterSpacing: '-1.5px',
          },
          h2: {
              fontSize: '60px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '72px',
              letterSpacing: '-0.5px', 
          },
          h3: {
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '56px',
          },
          h4: {
              fontSize: '34px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '36px',
          },
          h5: {
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0.18px', 
          },
          body1: {
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0.5px', 
          },
          body2: {
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
              letterSpacing: '0.5px', 
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#151515',
          color: 'white',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#151515',
          color: 'white',
          height: '320px',
          width: '320px',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: '#202020',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          borderRadius: '50px',
          display: 'inline-flex',
          padding: '6px 22px 6px 24px',
          alignItems: 'flex-start',
        },
      },
    },
  },
});

export default theme;
