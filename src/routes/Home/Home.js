import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Home(props) {

    return (
        <div className="home">
            <el-container>
                <Header />
                <Main />
                <Footer />
            </el-container>
        </div>
    )
}

export default Home