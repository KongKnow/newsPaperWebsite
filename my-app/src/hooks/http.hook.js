export const useHttps = () => {
    // const [status, setStatus] = useState('waiting')

    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        // setStatus('loading')

        try {
            const response = await fetch(url, {method, body, headers})

            if(!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }

            const data = response.json()
            return data
        } catch(e) {
            // setStatus('error')
            console.log(e)
            throw e
        }
    }

    // const clearError = useCallback(() => {
    //     setStatus('waiting')
    // }, [])


    return {
        request,
        // status,
        // setStatus,
        // clearError
    }
}