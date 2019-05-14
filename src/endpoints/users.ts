import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/users';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, userId: string) => {
    const url = `${host}/api/users/${userId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getUserMemberships = async (host: string, token: string, userId: string) => {
    const url = `${host}/api/users/${userId}/memberships`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const checkAdminAccount = async (host: string) => {
    const url = host + '/api/users/admin/check';

    const response = await axios.get(url);

    return response.status === 204;
};

export {
    getAll, getById, getUserMemberships, checkAdminAccount
};
