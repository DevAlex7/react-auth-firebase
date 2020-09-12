import React from 'react'


const SocialMediaButton = ({image, event, className}) => {
    return <>
        <button onClick={()=>event()} className={`bg-teal-dark mt-3 bg-white shadow-md text-white font-bold py-2 px-4 rounded ${className}`}>
            <img className="h-5" src={image} alt={image}/>  
        </button>
    </>
}

export default SocialMediaButton