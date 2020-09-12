import React from 'react'

const ButtonSession = ({title, event}) => {
    const handleEvent = () => {
        event()
    }
    return <>
        <div className="flex items-center justify-between">
            <button onClick={event} className="bg-teal-dark bg-indigo-600 text-white font-bold py-2 px-4 rounded">
                {title}
            </button>
        </div>
    </>
}

export default ButtonSession