export interface ChatMessageType {
    message : string,
    sent_ago : string,
    sender : string,
    sender_pic_url : string
}

export type ChatType = {
    chat_id : number,
    name : string,
    last_message : string,
    last_seen : string,
    user_img_url : string
}
