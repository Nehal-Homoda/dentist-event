export const BASE_URL = "http://yousofsalah-001-site4.anytempurl.com/api";
// export const BASE_URL = "https://jsonplaceholder.typicode.com";
export const APP_API_HEADERS = (): HeadersInit => {
    const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

    return {
        Accept: "application/json",
        // "Client-Type": "web",
        // 'Content-Type': "multipart/form-data",
        // "Content-Type": "application/json",
        ...(token && { Authorization: `bearer ${token}` }),
    };
};

export const apiCall = {
    get: (path: string, init?: RequestInit) =>
        fetch(BASE_URL + decodeURIComponent(path), {
            method: "GET",
            body: init?.body,
            headers: {
                ...APP_API_HEADERS(),
                ...init?.headers,
            },
        }),
    post: (path: string, init?: RequestInit) =>
        fetch(BASE_URL + decodeURIComponent(path), {
            method: "POST",
            body: init?.body,
            headers: {
                ...APP_API_HEADERS(),
                ...init?.headers,
            },
        }),
};
