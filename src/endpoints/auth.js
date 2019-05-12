const axios = require('axios').default;

/**
 * Authenticate against Portainer instance
 * 
 * @param {string} host Portainer host
 * @param {string} username Name of user to authenticate
 * @param {string} password Password of user to authenticate
 */
const authenticate = async (host, username, password) => {
    const url = host + '/api/auth'
    const response = await axios.post(url, { Username: username , Password: password });

    return response.data.jwt;
};

module.exports = {
    default: authenticate
};
