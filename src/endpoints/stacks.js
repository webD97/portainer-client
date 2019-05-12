const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/stacks';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host, token, stackId) => {
    const url = `${host}/api/stacks/${stackId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getStackDefinitionFile = async(host, token, stackId) => {
    const url = `${host}/api/stacks/${stackId}/file`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data.StackFileContent;
};

module.exports = {
    getAll, getById, getStackDefinitionFile
};
