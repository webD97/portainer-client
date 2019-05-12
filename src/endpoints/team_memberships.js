const axios = require('axios').default;

const getAll = async (host, token) => {
    const url = host + '/api/team_memberships';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

module.exports = {
    getAll
};
