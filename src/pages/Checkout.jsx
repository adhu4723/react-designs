import React from 'react'
import BillingForm from '../components/BillingForm'
import BreadcrumbHeader from '../components/Breadcrumb'
import OrderSummary from '../components/OrderSummary'

function Checkout() {
    return (
        <div>
            <BreadcrumbHeader />
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <BillingForm />
                <OrderSummary />
            </div>
        </div>
    )
}

export default Checkout
