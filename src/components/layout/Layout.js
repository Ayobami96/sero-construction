import Head from 'next/head'
import React, {Fragment} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = (props) => {
  return (
    <Fragment>
        <Head>
            <link rel="icon" href="/assets/logo/seroogold.png" /> 
        </Head>
        <Navbar />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout


// const loadScript = (src, callBack = null) => {
//   var script = document.createElement('script');
//   script.onload = function () {
//       //do stuff with the script
//       if(callBack) {
//           callBack();
//       }
      
//   };
//   script.src = src;

//   document.head.appendChild(script); //or something of the likes
// }


// loadScript('https://cdn.jsdelivr.net/gh/dammyammy/mwb-whatsapp-widget/dist/index.js', () => {console.log('script loaded')})
