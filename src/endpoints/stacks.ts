import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/stacks';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, stackId: string) => {
    const url = `${host}/api/stacks/${stackId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getStackDefinitionFile = async(host: string, token: string, stackId: string) => {
    const url = `${host}/api/stacks/${stackId}/file`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data.StackFileContent;
};

export {
    getAll, getById, getStackDefinitionFile
};
