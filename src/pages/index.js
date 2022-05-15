import * as React from "react"
import { CgShapeZigzag } from 'react-icons/cg'

import photo from '../images/njeri.jpg'
import About from '../components/About'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import '../styles/components/home.css'
import FloatingIcons from '../components/FloatingIcons'

export default function Home() {
  return (
    <div className="container">
      <head className="header">
        <title>Margret Njeri</title>
        <meta name="Margret Njeri" content="Njeri portfolio website" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <Layout>
        <div className="homeContainer">
          <div className="homeContent">
            <div className="content">
              <h1 className="title">Margret Njeri</h1>
              <div className="photoContainer">
                <img
                  src={photo}
                  alt="The author"
                  className="author"
                />
              </div><br /><br />
              <p className="intro">I am a Software Engineer based in Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <About />
        <Experience />
        <Testimonials />
        <Contact />
      </Layout>
      <FloatingIcons />
    </div>
  )
}