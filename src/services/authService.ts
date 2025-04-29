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
            throw new Error(
                errorData?.message || "Failed to fetch master classes."
            );
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
            throw new Error(
                errorData?.message || "Failed to fetch master classes."
            );
        }
        const data = await response.json();
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
export const updateForm = async (form: string) => {
    try {
        const response = await apiCall.post(`/Data/EditProfile`, {
            body: form,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                errorData?.message || "Failed to fetch master classes."
            );
        }
        const data = await response.json();
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
