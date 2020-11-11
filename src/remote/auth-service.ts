import { client } from "./client";

export async function authenticate(username: string, password: string) {
    let response = await client.post('/auth', {username, password});
    return await response.data;
}