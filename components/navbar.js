import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useScroll from '../components/useScroll'

const Navbar = (props) => {
    // get defaul values from defaultProps 
    const scrollby = props.scrollby;
    const menuItems = props.menuItems;
    const settings = props.settings;

    const handleClick = () => { 
        document.getElementById('navbar__toggle').checked=false;
    }

    const [ scrollOptions, setScrollOptions ] = useState(settings.default);
    useEffect (()=>{
        window.onscroll = () => {
            // the next line composing value is for browse compatibility purposes
            var scrollValue = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0)
            if (scrollValue < scrollby) {
                setScrollOptions (settings.default)
            } else {
                setScrollOptions (settings.scrolled)
            }
            handleClick();
        }
    },[])

    useEffect(()=>useScroll());

    return (
    <>
    <WithStyle settings={scrollOptions}>
        <div className='brand'></div>
        <input type="checkbox" id="navbar__toggle" value="true"/>
        <div className="menu__icon"></div>
        <ul onClick={()=>handleClick()}>
            {menuItems.map( (item, k)=>
                <li key={item.text+k}><a href={item.href} className="useScroll" onClick={()=>{handleClick()}} >{item.text}</a></li>
            )}
        </ul>
    </WithStyle>  
    </>
)}

Navbar.propTypes = {
    scrollby: PropTypes.number,
    settings: PropTypes.object,
    menuItems: PropTypes.array
}
Navbar.defaultProps = {
    scrollby: 200,
    settings: {
        default: {
            height: '120px', bgColor: 'white', linkColor: 'black', linkHover: 'indigo',
            menuIconColor:'#000000', shadow: '0px 1px 3px 0px #00000055', 
            brand: {url: '', width: '52px', height: '52px'},
            mobile: {bgcolor: 'white', height: '60px', brand: {url: '', width: '52px', height: '52px'}}
        },
        scrolled: {
            height: '60px', bgColor: 'black', linkColor: 'white', linkHover: 'yellow',
            menuIconColor: 'white', shadow: '0px 3px 6px 0px #00000055', 
            brand: {url: '', width: '112px', height: '52px'},
            mobile: {bgcolor: 'darkgray', height: '60px', brand: {url: '', width: '52px', height: '52px'}}
        }
    },
    menuItems: [{
        text:"Home", href:"#top"
    }]
}
export default Navbar

const WithStyle = styled.div`
    z-index: 1000;
    width: 100vw;
    height: ${props => props.settings.mobile.height};
    background: ${props => props.settings.bgColor};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: left; 
    box-shadow:${props => props.settings.shadow};

    transition: all 150ms linear;

    @media(min-width:767px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: ${props => props.settings.height};
    }

    .brand {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 150ms linear;

        width: ${props => props.settings.mobile.brand.width};
        height: ${props => props.settings.mobile.brand.height};
        overflow: hidden;
        background-image: ${props => "url("+props.settings.mobile.brand.url+")"};
        background-repeat: no-repeat;
        background-size: contain;
        
        @media(min-width:768px) {
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            background-image: ${props => "url("+props.settings.brand.url+")"};
        }
    }

    #navbar__toggle {
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
    #navbar__toggle ~ ul {
        --color: ${props => props.settings.bgColor};
        background: var(--color);
        background-color: var(--color);
        display: block;
        flex-direction: column;
        list-style: none;
        margin-top: 40px;
        padding: 0;
        transform: scaleY(0);
        transform-origin: 0 0;
        transition: all 150ms linear;
        z-index: -1;

        @media(min-width:768px) {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 0;
            transform: scaleY(1);
        }

        li {
            margin: 8px 0px 16px 16px;
            opacity: 0;
            transition: all 0s linear;
            @media(min-width:768px) { 
                margin: 0px 8px;
                opacity: 1;
            }
        }

        a {
            color: ${props => props.settings.linkColor};
            font-weight: var(--font-semibold);
            transition: all 200ms ease;
            font-size: 0.825rem;
            text-transform: uppercase;
            &:hover {
                color: ${props => props.settings.linkHover};
                transition: all 200ms ease;
            }
        }
    }

    #navbar__toggle:checked ~ ul { 
        padding-top: 8px;
        padding-bottom: 8px;
        transform: scaleY(1);
        transition: transform 150ms linear;

        li {
           opacity: 1;
           transition: all 150ms linear;
        }
    }

    .menu__icon {
        position: absolute;
        top: 20px;
        left: 16px;
        width: 20px;
        height: 20px;
        border-top-style: solid;
        border-top-width: 4px;
        border-top-color: ${ (props) => props.settings.menuIconColor };
        border-bottom-style: solid;
        border-bottom-width: 4px;
        border-bottom-color: ${ (props) => props.settings.menuIconColor };
        
        &:after {
            content: '';
            position: absolute;
            width: 24px;
            height: 4px;
            background-color: ${ (props) => props.settings.menuIconColor };
            top: 50%; transform: translateY(-50%); 
        }
        @media(min-width: 768px) {
            display: none;
        }
    }

` 