import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ExpenseList from './expense/List.js';
import Receipts from './expense/Receipts.js';
import BasicButtons from '../Components/Common/Button.js';
import UploadReceipt from './expense/UploadReceipt.js';

export default function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    const handleAction = (id) => {
        if (id === 3) {
            navigate('/addexpense');
        }
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
            <p></p>
            <ExpenseList/>
            <BasicButtons
            title="Add Expense"
            handleAction={() => handleAction(3)} />
            <UploadReceipt/>
            <Receipts/>
        </div>
    )
}