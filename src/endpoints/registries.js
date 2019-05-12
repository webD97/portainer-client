const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/registries';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host, token, registryId) => {
    const url = `${host}/api/registries${endpointGroupId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

module.exports = {
    getAll, getById
};