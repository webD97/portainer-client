import * as auth from '../endpoints/auth';
import * as settings from '../endpoints/settings';
import * as dockerhub from '../endpoints/dockerhub';
import * as endpointGroups from '../endpoints/endpoint_groups';
import * as endpoints from '../endpoints/endpoints';
import * as registries from '../endpoints/registries';
import * as stacks from '../endpoints/stacks';
import * as status from '../endpoints/status';
import * as tags from '../endpoints/tags';
import * as teamMemberships from '../endpoints/team_memberships';
import * as teams from '../endpoints/teams';
import * as templates from '../endpoints/templates';
import * as users from '../endpoints/users';

/**
 * A session retrieves a token upon creation and uses it for subsequent requests
 * against the Portainer API.
 */
export default class PortainerSession {
    private host: string;
    private token: string;

    /**
     * Instantiate with JWT token. For username+password auth, use PortainerSession.create()
     *
     * @param host Portainer URL (e.g. https://portainer.example.com)
     * @param token The JWT token received via authentication
     */
    private constructor(host: string, token: string) {
        this.host = (host.charAt(host.length - 1) !== '/') ? host + '/' : host;
        this.token = token;
    }

    /**
     * Instantiate a new Portainer Session with username+password.
     *
     * @param host Portainer URL (e.g. https://portainer.example.com)
     * @param username Username to use for authentication
     * @param password Password to use for authentication
     */
    public static async create(host: string, username: string, password: string) {
        const token = await auth.authenticate(host, username, password);

        return new PortainerSession(host, token);
    }

    //
    // Settings
    //

    public getSettings() {
        return settings.getAll(this.host, this.token);
    }

    public getPublicSettings() {
        return settings.getPublic(this.host);
    }

    public static getPublicSettings(host: string) {
        return settings.getPublic(host);
    }

    //
    // Dockerhub
    //

    public getDockerhubInfo() {
        return dockerhub.getDockerhubInfo(this.host, this.token);
    }

    //
    // Endpoint Groups
    //

    public getEndpointGroups() {
        return endpointGroups.getAll(this.host, this.token);
    }

    public getEndpointGroupById(id: string) {
        return endpointGroups.getById(this.host, this.token, id);
    }

    //
    // Endpoints
    //

    public getEndpoints() {
        return endpoints.getAll(this.host, this.token);
    }

    public getEndpointById(id: string) {
        return endpoints.getById(this.host, this.token, id);
    }

    //
    // Registries
    //

    public getRegistries() {
        return registries.getAll(this.host, this.token);
    }

    public getRegistryById(id: string) {
        return registries.getById(this.host, this.token, id);
    }

    //
    // Stacks
    //

    public getStacks() {
        return stacks.getAll(this.host, this.token);
    }

    public getStackById(id: string) {
        return stacks.getById(this.host, this.token, id);
    }

    public getStackDefinitionFile(id: string) {
        return stacks.getStackDefinitionFile(this.host, this.token, id);
    }

    //
    // Status
    //

    public getStatus() {
        return status.get(this.host);
    }

    public static getStatus(host: string) {
        return status.get(host);
    }

    //
    // Tags
    //

    public getTags() {
        return tags.getAll(this.host, this.token);
    }

    public getTagById(id: string) {
        return tags.getById(this.host, this.token, id)
    }

    //
    // Team memberships
    //

    public getTeamMemberships() {
        return teamMemberships.getAll(this.host, this.token);
    }

    //
    // Teams
    //

    public getTeams() {
        return teams.getAll(this.host, this.token);
    }

    public getTeamById(id: string) {
        return teams.getById(this.host, this.token, id);
    }

    public getTeamMembershipsByTeamId(id: string) {
        return teams.getTeamMemberships(this.host, this.token, id);
    }

    //
    // Templates
    //

    public getTemplates() {
        return templates.getAll(this.host, this.token);
    }

    public getTemplateById(id: string) {
        return templates.getById(this.host, this.token, id);
    }

    //
    // Users
    //

    public getUsers() {
        return users.getAll(this.host, this.token);
    }

    public getUserById(id: string) {
        return users.getById(this.host, this.token, id);
    }

    public getMembershipsByUserId(id: string) {
        return users.getUserMemberships(this.host, this.token, id);
    }
};
