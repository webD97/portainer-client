const authenticate = require('./src/endpoints/auth').default;
const endpoints = require('./src/endpoints/endpoints');
const endpointGroups = require('./src/endpoints/endpoint_groups');
const registries = require('./src/endpoints/registries');
const settings = require('./src/endpoints/settings');
const status = require('./src/endpoints/status');
const stacks = require('./src/endpoints/stacks');
const users = require('./src/endpoints/users');
const tags = require('./src/endpoints/tags');
const teams = require('./src/endpoints/teams');
const teamMemberships = require('./src/endpoints/team_memberships');
const templates = require('./src/endpoints/templates');

module.exports = {
    authenticate, endpoints, endpointGroups, registries, settings, status, stacks, users, tags, teams, teamMemberships, templates
}
