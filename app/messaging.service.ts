import {Injectable} from "@angular/core";
import {User, Conversation, Message, MessageType} from "./ApplicationModel";
import {USERS, CONVERSATIONS, MOCKUP} from "./fakeData";


@Injectable()
export class MessagingService {

    getUsers() {
        return USERS;
    }

    getConversations() {
        return CONVERSATIONS;
    }

    getConversation(userId) {
        return CONVERSATIONS[userId];
    }

    send(message, id) {
        CONVERSATIONS[id].addMessage(new Message(MessageType.sent, message.value));
        this.receiveMockup(1, 2000);
        this.receiveMockup(2, 4000);
    }

    receiveMockup(id, time){
        let mockup1 = MOCKUP[id];
        setTimeout(() => {
            CONVERSATIONS[id].addMessage(new Message(MessageType.received, mockup1.messages[mockup1.current]));
            mockup1.current++;
            if (mockup1.current === mockup1.messages.length) mockup1.current = 0;
        }, time);
    }
}