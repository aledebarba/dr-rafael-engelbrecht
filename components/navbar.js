import styled from 'styled-components'

const Navbar = props => {
    
    const menu = props.menu
    
    function handleClick() {
        document.getElementById('toggle').checked=false
    }

    return (
    <WithStyle>
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
    height: 64px;
    background-color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: left; 
    box-shadow: 0px 1px 2px 0px #00000033;

    @media(min-width:768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .brand {
        position: absolute;
        top: 4px;
        left: 4px;
        @media(max-width:768px) {
            left: 50%;
            transform: translateX(-50%);
        }
        img {             
            height: 48px;
            width: auto;
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
        background-color: var(--white);
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
            color: var(--blue);
            transition: border-bottom 500ms ease;
            border-bottom: 1px solid #ffffff00;
            &:hover {
                color: var(--red);
                border-bottom: 1px solid var(--red);
                transition: border-bottom 500ms ease;
            }
        }
    }
    #toggle:checked ~ ul { display: flex };

    .menu__icon {
        --color: var(--blue);
        --thickness: 4px;
        position: absolute;
        top: 16px;
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