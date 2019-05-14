import * as auth from './endpoints/auth';
import * as endpoints from './endpoints/endpoints';
import * as endpointGroups from './endpoints/endpoint_groups';
import * as registries from './endpoints/registries';
import * as settings from './endpoints/settings';
import * as status from './endpoints/status';
import * as stacks from './endpoints/stacks';
import * as users from './endpoints/users';
import * as tags from './endpoints/tags';
import * as teams from './endpoints/teams';
import * as teamMemberships from './endpoints/team_memberships';
import * as templates from './endpoints/templates';
import PortainerSession from './PortainerSession/PortainerSession';

export default PortainerSession;

export {
    auth, endpoints, endpointGroups, registries, settings, status, stacks, users, tags, teams, teamMemberships, templates
};
