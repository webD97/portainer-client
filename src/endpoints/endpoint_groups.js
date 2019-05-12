const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/endpoints';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host, token, endpointGroupId) => {
    const url = `${host}/api/endpoints/${endpointGroupId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

module.exports = {
    getAll, getById
};
