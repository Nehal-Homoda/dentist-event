export const BASE_URL = "http://yousofsalah-001-site4.anytempurl.com/api";
export const headers: HeadersInit = {
    Accept: "application/json",
    // "Client-Type": "web",
    // 'Content-Type': "multipart/form-data",
    // Authorization: `bearer xE8CZ8XetMLofwGbn_qIt_KG-mJrg8uANJVnJV7Tlpq01hl50It2x03pnubv6eFEhXnfkwKMJOSZGinL92KukzB5javXi9NmXj9WRe_5KNT6GNh9S2lSvRh_coEoDYXEM3Z_kievBHknwm2lQvne2v8Lq8HwgXjBoLjl6gUJBFBGdrphHSZLel2qLfkHbaPP5Wh0WE3vGuwAts-fYA3OzFBy0I3-4GJ23y4QNv9yR5e5vOgB_WyUsi1co8zmXrhocmkrre5aPhPU0APDSDcQ1VUrjd-1UJnmj6k1HvJWptxPcTf-Ag_CFII6Acozjtse-MLIdJZ-WI60znlBo6XyXTijbjbDHs8u7PHBbHccRI1fq3djjiAlUGLXW16UiXK46X20pvxvt1M09rVnCkzJRRQasKjgkyJoVWY6YfFZuFKvfhRpkvPthgFcWhOidpgYPdPawYppC3hm98BmvnGnoCKFExjiQm8-xol_OvKHqjRALdhErimU8n_6VVjcJIMurD_SidiVapN7MVOBos0LN069-Ci2HsAeJ_k_YlmeFryerP5I_sz8Ho-Ao_BkIySn`,
};

export const apiCall = {
    get: (path: string, init?: RequestInit) =>
        fetch(BASE_URL + decodeURIComponent(path), {
            method: "GET",
            body: init?.body,
            headers: {
                ...headers,
                ...init?.headers,
            },
        }),
    post: (path: string, init?: RequestInit) =>
        fetch(BASE_URL + decodeURIComponent(path), {
            method: "POST",
            body: init?.body,
            headers: {
                ...headers,
                ...init?.headers
            },
        }),
}