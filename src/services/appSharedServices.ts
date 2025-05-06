import { errorHandler, responseErrorServiceHandler } from "@/utils/shared";
// import { apiCall } from "./apiCall"
import {
    AppMasterClass,
    AppSettingData,
} from "@/types/shared";
import { apiCall } from "./apiCall";

export const getSettingService = async () => {
    try {
        const response = await apiCall.get(`/Data/GetSetting`);

        if (!response.ok) {
            await responseErrorServiceHandler(response, 'get settings')
        }
        const data = (await response.json()) as AppSettingData;
        return data;
    } catch (error: any) {
        console.log(errorHandler(error));

        throw new Error(errorHandler(error));
    }
};
export const getMasterClassesService = async () => {
    try {
        const response = await apiCall.get(`/Data/GetMasterClasses`);

        if (!response.ok) {
            await responseErrorServiceHandler(response, 'get master classes')
        }
        const data = (await response.json()) as AppMasterClass[];
        return data;
    } catch (error: any) {
        console.log(errorHandler(error));

        throw new Error(errorHandler(error));
    }
};
export const getSponsorsService = async () => {
    try {
        const response = await apiCall.get(`/Data/GetSponsors`)
        if (!response.ok) {
            await responseErrorServiceHandler(response, 'get sponsors')
        }
        const data = (await response.json());
        return data;

    }
    catch (error) {
        throw new Error(errorHandler(error))
    }
}
export const getAccomedationService = async () => {
    try {
        const response = await apiCall.get(`/Data/GetAccommodations`)
        if (!response.ok) {
            await responseErrorServiceHandler(response, 'get accomedation')
            
        }
        const data = (await response.json());
        return data;

    }
    catch (error) {
        throw new Error(errorHandler(error))
    }
}

