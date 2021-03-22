import React from 'react';
import {NavLink} from 'react-router-dom'
import web from "../src/img/h.svg"
import Common from './Common'

const About=()=>{
    return (
        <>
        
        <Common name='welcome to about' 
        imgsrc={web} 
        visit="/contact"
        btnname="contact now"
         />
        </>
    );
}
export default About