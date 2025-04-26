import { errorHandler } from "@/utils/shared";
import { apiCall } from "./apiCall"
import { AppMasterClass, AppSettingData } from "@/types/shared";




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
        
        console.log(errorHandler(error))
        
        
        throw new Error(errorHandler(error));
    }

}
export const getMasterClasses = async () => {


    try {
        const response = await apiCall.get(`/Data/GetMasterClasses`);

        if (!response.ok) {
            // Try to read the error message if available
            const errorData = await response.json();
            throw new Error(errorData?.message || "Failed to fetch master classes.");
        }
        const data = (await response.json()) as AppMasterClass[];
        return data;
    } catch (error: any) {
        
        console.log(errorHandler(error))
        
        
        throw new Error(errorHandler(error));
    }

}