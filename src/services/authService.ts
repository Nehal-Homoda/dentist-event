import { errorHandler } from "@/utils/shared";
import { apiCall } from "./apiCall";

export const loginService =async (fd: FormData) => {
       try {
            const response = await apiCall.post(`/Data/Login`, {
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
            const data = (await response.json()) ;
            console.log("response data =>>>>", data);
            return data;
        } catch (error: any) {
            throw new Error(errorHandler(error));
        }

}