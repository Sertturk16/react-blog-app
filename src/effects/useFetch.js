import { useEffect, useState } from "react"
const useFetch  = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const AbortCont = new AbortController()
        setTimeout(() => {
            fetch('http://localhost:8000' + url, {signal: AbortCont.signal})
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    setIsPending(false)
                    throw Error('failed to fetch')
                }
            })
            .then((data) => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    console.log(err.message)
                    setError(err.message)
                }
            })
        }, 500)
        return () => AbortCont.abort()
    }, [url])
    return {data, isPending, error}
}

export default useFetch