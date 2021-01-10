import { useEffect, useState } from 'react';
import styled from 'styled-components'

const Navbar = props => {
    
    const [ verticalScroll, setScroll ] = useState(0);
    useEffect (()=>{
        window.onscroll = () => {
            // for browse compatibility purposes
            var scrollvalue = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0)
            setScroll(scrollvalue);
        }
    }, [])
    const scrolled = verticalScroll > 200 ? true : false;

    const menu = props.menu
    function handleClick() {
        document.getElementById('toggle').checked=false
    }

    return (
    <WithStyle scrolled={scrolled}>
        <div className='brand'>
            <img src='/images/brand__menu-icon.png' alt="brand-icon" />
        </div>
        <input type="checkbox" id="toggle" value="true"/>
        <div className="menu__icon"></div>
        <ul>
            {menu.map(menuItem=>
                <li key={menuItem.txt+menuItem.url}><a href={menuItem.url} onClick={()=>{handleClick()}}>{menuItem.text}</a></li>
            )}
        </ul>
    </WithStyle>  
)}

export default Navbar

const WithStyle = styled.div`

    z-index: 1000;
    width: 100vw;
    height: ${props => props.scrolled ? "40px" : "64px"};
    background: ${props => props.scrolled ? "var(--blue)" : "var(--white)"};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: left; 
    box-shadow: 0px 1px 2px 1px #00000055;
    transition: all 200ms linear;

    @media(min-width:768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .brand {
        position: absolute;
        top: ${props=>props.scrolled ? "-8px" : "4px"};
        left: ${props=>props.scrolled ? "-16px" : "4px"};
        transition: all 200ms linear;
        
        @media(max-width:768px) {
            left: 50%;
            transform: translateX(-50%);
            top: ${props=>props.scrolled ? "8px" : "4px"};
        }
        
        img {             
            height: 56px;
            width: auto;
            background-color: var(--white);
            border-radius: 9999px;
            box-shadow: 0px 0px 0px 2px var(--white);            
        }
    }

    #toggle {
        position: absolute;
        top: 4px;
        left: 8px;
        width: 40px;
        height: 40px;
        border: 1px solid red;
        z-index: 1001;
        display: block;
        opacity: 0;
        @media (min-width: 768px) {
            display: none;
        }
    }
    #toggle ~ ul {
        display: none;
        flex-direction: column;
        margin-top: 40px;
        padding: 0;
        list-style: none;
        background-color: #ffffff00;
        display: none;
        @media(min-width:768px) {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: 0;
        }

        li {
            margin: 8px 0px 8px 16px;
        }
        a {
            font-weight: var(--font-semibold);
            color: ${props => props.scrolled ? "var(--white)" : "var(--blue)"};
            transition: all 200ms ease;
            &:hover {
                color: ${props=>props.scrolled ? "navajowhite" : "var(--red)"};
                transition: all 200ms ease;
            }
        }
    }
    #toggle:checked ~ ul { 
        display: flex;
        background: ${props=>props.scrolled ? "var(--blue)" : "var(--white)"};
    };

    .menu__icon {
        --color: ${props => props.scrolled ? "var(--white)" : "var(--blue)"};
        --thickness: 4px;
        position: absolute;
        top: ${props=> props.scrolled ? "12px" : "22px"};
        left: 16px;
        width: 20px;
        height: 20px;
        border-top: var(--thickness) solid var(--color);
        border-bottom: var(--thickness) solid var(--color);
        &:after {
            position: absolute;
            content: '';
            width: 24px;
            height: var(--thickness);
            background-color: var(--color);
            top: 50%; transform: translateY(-50%); 
        }
        @media(min-width: 768px) {
            display: none;
        }
    }
` 