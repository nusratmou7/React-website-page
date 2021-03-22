import React from 'react';
import {NavLink} from 'react-router-dom'
import web from "../src/img/2.svg"
import Common from './Common'
function Home() {
    return (
        <>
          <Common name='welcome to home' 
        imgsrc={web} 
        visit="/contact"
        btnname="Started now"/>
        </>
    );
}
export default Home