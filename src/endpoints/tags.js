const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/tags';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host, token, tagId) => {
    const url = `${host}/api/tags/${tagId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

module.exports = {
    getAll, getById
};
