import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate = useNavigate()

    return (
        <>
            <div>Order Confirmed!</div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </>

    )
}

export default OrderSummary