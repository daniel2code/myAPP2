import React from 'react';
import './Styles/Header.css'
import logo from './Images/omni.png'

class Header extends React.Component{
    render(){
        return(
            <div className='parent'>

            <div className='nav' >

            <div className='logo'>
            <img src={logo} alt='logo' />
            </div>

            <div className='link'>
            
            <a href='www.go'>FOOD DELIVERIES</a>
            <a href='www.go'>HOW IT WORKS</a>
            <a href='www.go'>OUR CITIES</a>
            <a href='www.go'>SIGN UP</a>
            
            </div>
            
            </div>

            <div className='body-text'>
            <p>GOODBYE JUNK FOOD</p>
            <p>HELLO SUPER HEALTHY MEALS</p>
            
            </div>

            <div className='button'>
            <button className='btn1'>Am hungry</button>
            <button className='btn2'>Show me more</button>
            </div>
            
            </div>
        )
    }
}export default Header;