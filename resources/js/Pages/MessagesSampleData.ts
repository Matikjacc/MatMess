import {LoremIpsum} from "lorem-ipsum";
import {ChatMessageType} from "../Types/types";

export class MessagesSampleData {
    lorem_ipsum: LoremIpsum;

    constructor() {
        this.lorem_ipsum = new LoremIpsum({
            sentencesPerParagraph: {
                max: 10,
                min: 4
            },
            wordsPerSentence: {
                max: 10,
                min: 5
            }
        });
    }


    generate_messages(amount : number) : ChatMessageType[] {
        let messages : ChatMessageType[] = []
        for(let i=0; i<amount; i++){
            let message = this.lorem_ipsum.generateSentences(10);
            messages.push({
                message: message,
                sent_ago: "1 min ago",
                sender : "Andrzej Kowalski",
                sender_pic_url : "https://media.istockphoto.com/id/1446934118/pl/zdj%C4%99cie/szcz%C4%99%C5%9Bliwy-biznesmen-s%C5%82uchaj%C4%85cy-dyskusji-w-biurze.jpg?s=2048x2048&w=is&k=20&c=ykkDojzA18-nEzbYUZLMSJvXj5GtqldT3q7wertEt10=",
            });
        }
        return messages
    }
}
