import {Conversation, User, Message, MessageType} from "./ApplicationModel";


export var USERS:User[] = [
    new User(1, 'Matthieu', 'Matthieu', 'Lemonnier', 'public/img/Matthieu.jpg'),
    new User(2, 'Angelin', 'Angelin', 'Versini', 'public/img/Angelin.jpg')
];

export var CONVERSATIONS = {
    1: new Conversation([
        new Message(MessageType.received, "coucou"),
        new Message(MessageType.sent, "hello ! ça va ?"),
        new Message(MessageType.received, "Yep, je m'amuse sur Angular2 !"),
        new Message(MessageType.sent, "Ah oui ? c'est vrai que c'est assez cool !"),
        new Message(MessageType.sent, "Tu as pensé au design ?"),
        new Message(MessageType.received, "J'y ai pensé, mais la librairie angular/material2 n'est disponible qu'en alpha"),
        new Message(MessageType.received, "Du coup j'ai regardé Materialize, mais la compatibilité est assez limitée!"),
        new Message(MessageType.sent, "Ah oui Materialize, c'est vraiment top !"),
        new Message(MessageType.sent, "Oui, le design, c'est pas encore ça sur Angular2, mais ça viendra!")
    ]),
    2: new Conversation([new Message(MessageType.received, "Hello there!")])
};


export var MOCKUP = {
    1: {
        current: 0,
        messages: ["C'est sûr!", "tu regardes le match ce soir ?", "pareil! Bon j'y vais ! A+"]
    },
    2: {
        current: 0,
        messages: ["Tu sais si", "non, j'ai rien dit en fait", "merci quand même !!"]
    }
}