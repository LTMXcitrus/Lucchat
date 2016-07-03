import {Component, Input} from "@angular/core";
import {User, Conversation, MessageType} from "../ApplicationModel";
import {MessagingService} from "../messaging.service";


@Component({
    selector: 'messaging',
    templateUrl: '../app/messenger/messenger.html',
    providers: [MessagingService]
})
export class MessengerComponent {
    @Input()
    user:User;
    @Input()
    conversation:Conversation;

    constructor(private messagingService:MessagingService) {
    }

    send(message) {
        this.messagingService.send(message, this.user.id);
        message.value = "";
        this.messageRead();
    }

    getBubbleColor(message){
        if(message.messageType === MessageType.sent) return '#64b5f6';
        else return "";
    }

    messageRead(){
        this.messagingService.getConversation(this.user.id).resetUnread()
    }
}