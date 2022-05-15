import * as React from "react"

import Header from './Header';
import Footer from './Footer';
import '../styles/components/layout.css';

const Layout = ({ children }) => (
    <div className="layout">
        <Header />
        <div className="content">
            {children}
        </div>
        <Footer />
    </div>
)

export default Layout;