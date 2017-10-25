import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class APP_SETTINGS {
    private static GITHUB_ORG_NAME: string = 'USGS-WiM';
    private static GITHUB_API_ENDPOINT: string = 'https://api.github.com';
    
    public static get ORG_REPOS_URL(): string { return this.GITHUB_API_ENDPOINT + '/orgs/' + this.GITHUB_ORG_NAME + '/repos'; }
    
    

    // public static get MIN_JSON_HEADERS() { return new Headers({ 'Accept': 'application/json' })}
    // public static get JSON_HEADERS() { return new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) };

    // public static get AUTH_HEADERS() { return new Headers({ 'Authorization': 'Basic ' + btoa(this.API_USERNAME + ':' + this.API_PASSWORD) }); };
    // public static get MIN_AUTH_JSON_HEADERS() {
    //     return new Headers({
    //         'Authorization': 'Basic ' + btoa(this.API_USERNAME + ':' + this.API_PASSWORD),
    //         'Accept': 'application/vnd.github.v3+json'
    //     }
    //     );
    // };
    // public static get AUTH_JSON_HEADERS() {
    //     return new Headers({
    //         'Authorization': 'Basic ' + btoa(this.API_USERNAME + ':' + this.API_PASSWORD),
    //         'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json'
    //     }
    //     );
    // };

}