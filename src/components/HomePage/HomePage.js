import React, { useEffect} from 'react';


const HomePage = () => {
    useEffect(() =>{
        console.log(fetch('http://localhost:3001/wishlists', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }))
    })
    return <></>
}

export default HomePage;