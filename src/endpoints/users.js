const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/users';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host, token, userId) => {
    const url = `${host}/api/users/${userId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getUserMemberships = async (host, token, userId) => {
    const url = `${host}/api/users/${userId}/memberships`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const checkAdminAccount = async (host) => {
    const url = host + '/api/users/admin/check';

    const response = await axios.get(url);

    return response.status === 204;
};

module.exports = {
    getAll, getById, getUserMemberships, checkAdminAccount
};
