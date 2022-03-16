import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
/* <!-- Author Ashokchakravarthi, Archana 
    Typical use of Logout button, once logged out, the user will be redirected to /login page. --> */

export default function Logout() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
             <button className="button" onClick={handleLogout}>Log out</button>
        </div>
    )
}