import React from 'react'
import { Navbar } from '../components'
import '../Styles/product.css'
import Banner from '../components/Banner'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import CustomNavbar from '../components/CustomNavbar'
import VideoBanner from '../components/VideoBanner'
import Catalouge from '../components/Catalouge'
import Testimonials from '../components/Testimonials'

const product = () => {
  return (
    <div>
    <div className='product_container'>
        <Navbar/>
        <Banner/>
        <Catalouge/>
        <VideoBanner/>
        <Testimonials/>
    </div>
    </div>
  )
}

export default product