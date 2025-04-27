import { errorHandler } from "@/utils/shared";
// import { apiCall } from "./apiCall"
import {
    AppMasterClass,
    AppSettingData,
    RegistrationData,
} from "@/types/shared";
import { apiCall, APP_API_HEADERS } from "./apiCall";

export const getSetting = async () => {
    try {
        const response = await apiCall.get(`/Data/GetSetting`);

        if (!response.ok) {
            // Try to read the error message if available
            const errorData = await response.json();
            throw new Error(errorData?.message || "Failed to fetch settings.");
        }
        const data = (await response.json()) as AppSettingData;
        return data;
    } catch (error: any) {
        console.log(errorHandler(error));

        throw new Error(errorHandler(error));
    }
};
export const getMasterClasses = async () => {
    try {
        const response = await apiCall.get(`/Data/GetMasterClasses`);

        if (!response.ok) {
            // Try to read the error message if available
            const errorData = await response.json();
            throw new Error(
                errorData?.message || "Failed to fetch master classes."
            );
        }
        const data = (await response.json()) as AppMasterClass[];
        return data;
    } catch (error: any) {
        console.log(errorHandler(error));

        throw new Error(errorHandler(error));
    }
};

export const register = async (fd: any) => {
    try {
        const response = await apiCall.post(`/Data/Registration`, {
            body: fd,
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                errorData?.message || "Failed to fetch master classes."
            );
        }
        const data = (await response.json()) as RegistrationData[];
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
export const registerFiles = async (file: any) => {
    try {
        const response = await apiCall.post(`/Data/Upload`, {
            body: file,
            // headers: { "Content-Type": "multipart/form-data" },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                errorData?.message || "Failed to fetch master classes."
            );
        }
        const data = (await response.json()) as RegistrationData[];
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
