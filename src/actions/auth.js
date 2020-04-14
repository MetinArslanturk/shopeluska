import { showErrorNotification, destroyNotifications } from '../components/Notification';
import * as authService from '../services/auth';

const setLoggedIn = (user) => ({
    type: 'SET_LOGGED_IN',
    user: user
});

const setLoggedOut = () => ({
    type: 'SET_LOG_OUT'
});

export const startLogin = ({ email, password }) => {
    return (dispatch) => {
        destroyNotifications();
        return authService.login({ email, password }).then(res => {
            const user = res.data;
            dispatch(setLoggedIn({ uid: user.id, username: user.name, isA: user.isA }));
        }).catch(err => {
            showErrorNotification('Error', 'Given email or password is incorrect!', 0);
            return;
        })

    }
}

export const startLogout = () => {
    return (dispatch) => {
        return authService.logout().then(res => {
        // logged out
        }).finally(() => {
            dispatch(setLoggedOut());
        });
    }
}

export const checkLogin = () => {
    return (dispatch) => {
        return authService.checkLogin().then(res => {
            const user = res.data;
            if (user.caut) {
                dispatch(setLoggedIn({ uid: user.id, username: user.name, isA: user.isA }));
            } else {
                return;
            }
        });
    }
}