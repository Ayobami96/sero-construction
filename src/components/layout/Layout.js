import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Navbar />
        <main>{props.children}</main>
        <Footer />
    </div>
  )
}

export default Layout
