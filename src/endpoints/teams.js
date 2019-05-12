const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/teams';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host, token, teamId) => {
    const url = `${host}/api/teams/${teamId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getTeamMemberships = async (host, token, teamId) => {
    const url = `${host}/api/teams/${teamId}/memberships`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

module.exports = {
    getAll, getById, getTeamMemberships
};
