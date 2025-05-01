import { errorHandler } from "@/utils/shared";
import { apiCall } from "./apiCall";
import { User } from "@/types/shared";

export const loginService = async (form: string) => {
    try {
        const response = await apiCall.post(`/Data/Login`, {
            body: form,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            if (
                errorData &&
                errorData.errors &&
                typeof errorData.errors === "object"
            ) {
                const messages = [...Object.values(errorData.errors)].join(", ");
                throw new Error(messages);
            }
            throw new Error("Failed to login!");
        }
        const data = (await response.json()) as User;
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
export const changePassword = async (form: string) => {
    try {
        const response = await apiCall.post(`/Data/ChangePassword`, {
            body: form,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            if (
                errorData &&
                errorData.errors &&
                typeof errorData.errors === "object"
            ) {
                const messages = [...Object.values(errorData.errors)].join(", ");
                throw new Error(messages);
            }
            throw new Error("Failed to change password!");
        }
        const data = await response.json();
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
export const updateProfileService = async (form: string) => {
    try {
        const response = await apiCall.post(`/Data/EditProfile`, {
            body: form,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            if (
                errorData &&
                errorData.errors &&
                typeof errorData.errors === "object"
            ) {
                const messages = [...Object.values(errorData.errors)].join(", ");

                throw new Error(messages);
            }
            throw new Error("Failed to edit profile!");
        }
        const data = await response.json();
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
