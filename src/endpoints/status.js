const axios = require('axios').default;

const get = async (host) => {
    const url = host + '/api/status';

    const response = await axios.get(url);

    return response.data;
};

module.exports = {
    get
};
