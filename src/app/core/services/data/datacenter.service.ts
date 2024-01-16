import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AboutDataCenter{

    weatherAppKey: BehaviorSubject<string> = new BehaviorSubject<string>('');
    contacts: BehaviorSubject<any> = new BehaviorSubject<any>({});
    team: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    editorialStatus: BehaviorSubject<string> = new BehaviorSubject<string>('');
    socialMedia: BehaviorSubject<any> = new BehaviorSubject<any>({});

    constructor() {}

}