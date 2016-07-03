export class User {
    id:number;
    surname:string
    firstname:string;
    lastname:string;
    image:string;

    constructor(id, surname, firstname, lastname, image) {
        this.id = id;
        this.surname = surname;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
    }
}

export class Conversation {
    messages:Message[];
    unread:number=0;

    addMessage(message:Message) {
        this.messages.push(message)
        if(message.messageType === MessageType.received) this.unread++;
    }

    constructor(messages:Message[]) {
        this.messages = messages;
    }

    resetUnread(){
        this.unread = 0;
    }
}

export class Message {
    date:Date;
    messageType:MessageType;
    content:string;

    constructor(messageType:MessageType, content:string) {
        this.messageType = messageType;
        this.content = content;
        this.date = new Date();
    }

    getMessageType():string{
        if(this.messageType === MessageType.received) return "received";
        else return "sent";
    }
}

export enum MessageType{
    received, sent
}