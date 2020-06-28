import {
    showErrorNotification,
    destroyNotifications,
    showSuccessNotification,
} from '../components/common-components/Notification';
import * as authService from '../services/auth';

const setLoggedIn = (user) => ({
    type: 'SET_LOGGED_IN',
    user,
});

export const setLoginRedirectUrl = (redirectUrl) => ({
    type: 'SET_LOGIN_REDIRECT_URL',
    redirectUrl,
});

const setLoggedOut = () => ({
    type: 'SET_LOG_OUT',
});

const updateMyProfile = (user) => ({
    type: 'UPDATE_MY_PROFILE',
    user,
});

export const startLogin = ({ email, password }) => {
    return (dispatch) => {
        destroyNotifications();
        return authService
            .login({ email, password })
            .then((res) => {
                const user = res.data;
                dispatch(
                    setLoggedIn({
                        uid: user._id,
                        username: user.name,
                        isA: user.isA,
                        email: user.email,
                    })
                );
            })
            .catch(() => {
                showErrorNotification(
                    'Error',
                    'Given email or password is incorrect!',
                    0
                );
            });
    };
};

export const startUpdateMyProfile = (values) => {
    return (dispatch) => {
        destroyNotifications();
        return authService
            .updateMyProfile(values)
            .then((res) => {
                const user = res.data;
                dispatch(
                    updateMyProfile({
                        uid: user._id,
                        username: user.name,
                        isA: user.isAdmin,
                        email: user.email,
                    })
                );
                showSuccessNotification(
                    'Success',
                    'Your profile updated successfully',
                    2
                );
            })
            .catch(() => {
                showErrorNotification('Error', 'Some error occurred!', 0);
            });
    };
};

export const startLogout = () => {
    return (dispatch) => {
        return authService
            .logout()
            .then(() => {
                // logged out
            })
            .finally(() => {
                dispatch(setLoggedOut());
            });
    };
};

export const checkLogin = () => {
    return (dispatch) => {
        return authService.checkLogin().then((res) => {
            const user = res.data;
            if (user.caut) {
                dispatch(
                    setLoggedIn({
                        uid: user._id,
                        username: user.name,
                        isA: user.isA,
                        email: user.email,
                    })
                );
            }
        });
    };
};
