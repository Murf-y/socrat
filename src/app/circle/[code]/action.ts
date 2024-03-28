'use server'
import { StreamChat } from "stream-chat";

export async function generateTokenAction(userId: string) {
    const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY ?? '';
    const api_secret = process.env.GET_STREAM_API_SECRET;

    if (!api_secret || !api_key) {
        throw new Error('Missing Stream API Key or Secret');
    }

    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const token = serverClient.createToken(userId);
    return token;

}