import { errorHandler, responseErrorServiceHandler } from "@/utils/shared";
import { apiCall } from "./apiCall";
import { RegistrationData, User } from "@/types/shared";

export const loginService = async (form: string) => {
    try {
        const response = await apiCall.post(`/Data/Login`, {
            body: form,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            
            await responseErrorServiceHandler(response, 'login')
        }
        const data = (await response.json()) as User;
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
export const changePasswordService = async (form: string) => {
    try {
        const response = await apiCall.post(`/Data/ChangePassword`, {
            body: form,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            await responseErrorServiceHandler(response, 'change password')
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
            await responseErrorServiceHandler(response, 'edit profile')
            
        }
        const data = await response.json();
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
export const registerService = async (fd: any) => {
    try {
        const response = await apiCall.post(`/Data/Registration`, {
            body: fd,
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            await responseErrorServiceHandler(response, 'register')
        }
        const data = (await response.json()) as RegistrationData[];
        console.log("response data =>>>>", data);
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};
export const uploadFilesService = async (file: any) => {
    try {
        const response = await apiCall.post(`/Data/Upload`, {
            body: file,
            // headers: { "Content-Type": "multipart/form-data" },
        });
        if (!response.ok) {
            await responseErrorServiceHandler(response, 'upload files')
            
        }
        const data = (await response.json()) as RegistrationData[];
        return data;
    } catch (error: any) {
        throw new Error(errorHandler(error));
    }
};


