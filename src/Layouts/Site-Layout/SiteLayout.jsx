import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Site/Header/Header'
import Footer from '../../Components/Site/Footer/Footer'

export default function SiteLayout() {

    return <React.Fragment>

        <Header />

        <Outlet />

        <Footer />

    </React.Fragment>

}
