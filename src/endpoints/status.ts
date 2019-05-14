import axios from 'axios';

const get = async (host: string) => {
    const url = host + '/api/status';

    const response = await axios.get(url);

    return response.data;
};

export {
    get
};
