import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/templates';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, templateId: string) => {
    const url = `${host}/api/templates/${templateId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

export {
    getAll, getById
};
