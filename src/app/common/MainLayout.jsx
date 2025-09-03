import React from 'react'
import Header from './Header'
import FooterNew from './FooterNew'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <FooterNew />
        </>
    )
}
