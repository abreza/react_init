import vars from '../assets/core/mui_variable';
export default {
  palette: {
    primary: {
      main: vars.primary,
      contrastText: 'white',
    },
    grey: {
      300: vars.inheritDefault1,
      A100: vars.inheritDefault2,
    },
    secondary: {
      main: vars.secondary,
    },
    error: {
      main: vars.red,
    },
    success: {
      main: vars.green,
    },
    warning: {
      main: vars.orange,
    },
    helpers: {
      primary: vars.blue,
      main: 'rgba(25, 46, 91, .09)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: '0.5rem',
  },
  overrides: {
    MuiButton: {
      text: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      containedSizeSmall: {
        paddingLeft: '14px',
        paddingRight: '14px',
      },
      root: {
        textTransform: 'none',
        fontWeight: 'normal',
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: vars.second,
        padding: '8px 16px',
        fontSize: '13px',
      },
      arrow: {
        color: vars.second,
      },
    },
  },
};
