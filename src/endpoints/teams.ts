import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/teams';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, teamId: string) => {
    const url = `${host}/api/teams/${teamId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getTeamMemberships = async (host: string, token: string, teamId: string) => {
    const url = `${host}/api/teams/${teamId}/memberships`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

export {
    getAll, getById, getTeamMemberships
};
