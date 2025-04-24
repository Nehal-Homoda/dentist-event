import { useAppFetch } from "@/composables/apiService"
const { getSetting } = useAppFetch()

export const fetchFooterSetting = async() => {
    const response = await getSetting()
    if (!response.ok) {
        throw new Error('cannot fetch master classes')
    }
    return  response.json()

}