import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title } - Watch Pro`
    }, [title])
}
export default useTitle