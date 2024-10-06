import {ChatType} from "../../../Types/types";

export function ChatGenerator(number_of_entries : number = 10) : ChatType[]{
    let chat_data: ChatType[] = []

    for(let i=0; i < number_of_entries ; i++){
        chat_data.push({
            chat_id : i+1,
            name : "Andrzej Kowalski",
            last_message : "cześć",
            last_seen : "1min ago",
            user_img_url : "https://media.istockphoto.com/id/1446934118/pl/zdj%C4%99cie/szcz%C4%99%C5%9Bliwy-biznesmen-s%C5%82uchaj%C4%85cy-dyskusji-w-biurze.jpg?s=2048x2048&w=is&k=20&c=ykkDojzA18-nEzbYUZLMSJvXj5GtqldT3q7wertEt10="
        })
    }

    return chat_data
}
