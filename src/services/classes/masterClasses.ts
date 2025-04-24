import { useAppFetch } from "@/composables/apiService"
const { masterClasses } = useAppFetch()

export const fetchMasterClasses = async() => {
    const response = await masterClasses()
    if (!response.ok) {
        throw new Error('cannot fetch master classes')
    }
    return  response.json()

}