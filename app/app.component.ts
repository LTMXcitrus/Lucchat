import {Component, OnInit} from '@angular/core';
import {User} from "./ApplicationModel";
import {MessengerComponent} from "../app/messenger/messenger.component";
import {MessagingService} from "./messaging.service";
@Component({
    selector: 'my-app',
    templateUrl: '../app/app.html',
    directives: [MessengerComponent],
    providers: [MessagingService]
})
export class AppComponent implements OnInit {
    selectedUser:User;
    users:User[];

    constructor(private messagingService:MessagingService) {
    }

    ngOnInit() {
        this.users = this.messagingService.getUsers();
    }

    home(){
        this.selectedUser=null;
    }

    onSelect(user) {
        this.selectedUser = user;
    }
}
