export const isAuthenticated = (user) => {
    return !!user.uid;
};

export const getUserName = (user) => {
    return user.uid ? user.username : '';
};

export const getEmail = (user) => {
    return user.uid ? user.email : '';
};

export const isAdmin = (user) => {
    return !!user.isA;
};

