const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/templates';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host, token, templateId) => {
    const url = `${host}/api/templates/${templateId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

module.exports = {
    getAll, getById
};
