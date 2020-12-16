import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  notifications: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ENQUEUE_SNACKBAR:
      return enquequeSnackbar({ state, ...action });

    case actionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          action.dismissAll || notification.key === action.key
            ? { ...notification, dismissed: true }
            : { ...notification }
        ),
      };

    case actionTypes.REMOVE_SNACKBAR:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key
        ),
      };

    case actionTypes.SHOW_ERROR_MESSAGE:
      return enquequeSnackbar({
        state,
        myerror: action.payload,
        notification: {
          message: action.error,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error',
            autoHideDuration: 3000,
          },
        },
      });
    case actionTypes.SHOW_SUCCESS_MESSAGE:
      return enquequeSnackbar({
        state,
        notification: {
          message: action.message,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success',
            autoHideDuration: 3000,
          },
        },
      });
    default:
      return state;
  }
};

const enquequeSnackbar = ({ state, notification }) => ({
  ...state,
  notifications: [
    ...state.notifications,
    {
      key: notification.options.key,
      ...notification,
    },
  ],
});
