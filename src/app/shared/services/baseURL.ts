import { HttpClient, HttpHeaders } from "@angular/common/http";

export class BaseURL {
    protected loginsUrl = 'api/logins';
    protected infoUrl = 'api/userInfos';
    
    protected httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}