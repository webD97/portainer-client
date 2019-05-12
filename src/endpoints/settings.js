const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/settings';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getPublic = async (host) => {
    const url = `${host}/api/settings/public`;
    const response = await axios.get(url);

    return response.data;
};

module.exports = {
    getAll, getPublic
};
