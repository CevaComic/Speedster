import {useState, useEffect} from 'react'

const usePosition = () => {
    const [position, setPosition] = useState({})
    const [error, setError] = useState(null)

    const onChange = ({coords}) => {
        setPosition({lat: coords.latitude, lng: coords.longitude})
    };
    const onError = (error) => {
        setError(error.message)
    };
    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
            setError('Geolocation is not supported')
            return
        }
        const watcher = geo.watchPosition(onChange, onError)
        return () => geo.clearWatch(watcher)
    }, [])
    return {
        ...position,
        error
    }
}

export default usePosition
