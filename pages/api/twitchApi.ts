
let clientId = "fbsy5mte5jmisgc4ikpxb802sjan7u";
let clientSecret = "1tphywwb7rlyb3ypjd6w58yuyr1mpj";

function getTwitchAuthorization() {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

    return fetch(url, {
    method: "POST",
    })
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
}

export async function getStreams() {
    const endpoint = "https://api.twitch.tv/helix/streams";

    let authorizationObject = await getTwitchAuthorization();
    let { access_token, token_type } = authorizationObject;

    //token_type first letter must be uppercase    
    token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

    let authorization = `${token_type} ${access_token}`;

    let headers = {
    authorization,
    "Client-Id": clientId,
    };

    return fetch(endpoint, {
    headers,
    })
    .then((res) => res.json())
    .then((data) => renderStreams(data));
}

export function renderStreams(data: any) {
    return data
}