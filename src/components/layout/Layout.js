import Head from 'next/head'
import React, {Fragment} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <Fragment>
        <Head>
            <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <Navbar />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout
