import React from 'react'
import styled from 'styled-components'
import ScrollSpyMenu from '../../../UI/ScrollSpyMenu'
export const MENU_ITEMS = [
    {
        label: 'FIRST',
        path: '#first',
        offset: '0',
    },
    {
        label: 'SECOND',
        path: '#second',
        offset: '0',
    },
    {
        label: 'THIRD',
        path: '#third',
        offset: '0',
    },
    {
        label: 'FOURTH',
        path: '#fourth',
        offset: '0',
    },
]

const NavbarWrapper = styled.nav`
    position: fixed;
    top: 50vh;
    right: 0;
    transform: translateY(-50%);
    z-index: 1000;
    width: 40px;
    pointer-events: none;
    &::before {
        content: '.';
        display: block;
        height: 0;
        overflow: hidden;
    }
    &::after {
        content: '.';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
    }
    .scrollspy__menu {
        float: right;
        a {
            position: relative;
            display: block;
            transform: translateX(calc(100% - 40px));
            line-height: 40px;
            padding: 0 1.0625em;
            white-space: nowrap;
            font-size: 1em;
            pointer-events: auto;
            transition: background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                color 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                -webkit-transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
            transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                color 0.4s cubic-bezier(0.77, 0, 0.175, 1);
            transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                background 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                color 0.4s cubic-bezier(0.77, 0, 0.175, 1),
                -webkit-transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
            text-decoration: none;
            color: white;
            box-sizing: border-box;

            &.is-active,
            :hover {
                color: #000;
                background: #fff;
                transform: translateX(0);
                transition-duration: 0.7s;
                transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                .scrollspy__menu__ticker {
                    span,
                    i {
                        opacity: 1;
                        transition-duration: 0.7s;
                        transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
                    }
                }
            }
            .scrollspy__menu__ticker {
                span,
                i {
                    opacity: 0;
                    transition: opacity 0.4s cubic-bezier(0.42, 0, 1, 1);
                    font-size: 0.875em;
                    line-height: 2.8571428571em;
                    letter-spacing: 2px;
                }
            }
        }
    }
`

const Navbar = () => {
    return (
        <NavbarWrapper>
            <ScrollSpyMenu menuItems={MENU_ITEMS} offset={-70} />
        </NavbarWrapper>
    )
}

export default Navbar
