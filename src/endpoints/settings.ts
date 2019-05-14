import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/settings';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getPublic = async (host: string) => {
    const url = `${host}/api/settings/public`;
    const response = await axios.get(url);

    return response.data;
};

export {
    getAll, getPublic
};
