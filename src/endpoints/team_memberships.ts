import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/team_memberships';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

export {
    getAll
};
