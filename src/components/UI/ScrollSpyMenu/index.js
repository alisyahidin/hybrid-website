import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import Scrollspy from 'react-scrollspy'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import { DrawerContext } from '../../../contexts/DrawerContext'

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
    const { dispatch } = useContext(DrawerContext)
    const scrollItems = []
    menuItems.forEach(item => {
        scrollItems.push(item.path.slice(1))
    })
    const addAllClasses = ['scrollspy__menu']

    if (className) {
        addAllClasses.push(className)
    }

    const toggleDrawer = () => {
        dispatch({
            type: 'TOGGLE',
        })
    }
    console.log(props)

    return (
        <Scrollspy
            items={scrollItems}
            className={addAllClasses.join(' ')}
            drawerClose={drawerClose}
            {...props}
        >
            {menuItems.map((menu, index) =>
                menu.staticLink ? (
                    <Link href={menu.path} key={index}>
                        <a>
                            <em>{index + 1}</em>
                            <i> · </i>
                            <span>{menu.label}</span>
                        </a>
                    </Link>
                ) : drawerClose ? (
                    <AnchorLink
                        key={index}
                        href={menu.path}
                        offset={menu.offset}
                        onClick={toggleDrawer}
                    >
                        <span className="scrollspy__menu__ticker">
                            <em>{index + 1}</em>
                            <i> · </i>
                            <span>{menu.label}</span>
                        </span>
                    </AnchorLink>
                ) : (
                    <AnchorLink key={index} href={menu.path} offset={menu.offset} className="test">
                        <span className="scrollspy__menu__ticker">
                            <em>{index + 1}</em>
                            <i> · </i>
                            <span>{menu.label}</span>
                        </span>
                    </AnchorLink>
                ),
            )}
        </Scrollspy>
    )
}

ScrollSpyMenu.propTypes = {
    /** className of the ScrollSpyMenu. */
    className: PropTypes.string,

    /** menuItems is an array of object prop which contain your menu
     * data.
     */
    menuItems: PropTypes.array.isRequired,

    /** Class name that apply to the navigation element paired with the content element in viewport. */
    currentClassName: PropTypes.string,

    /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
    scrolledPastClassName: PropTypes.string,

    /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
    componentTag: PropTypes.string,

    /** Style attribute to be passed to the generated <ul/> element [optional]. */
    style: PropTypes.object,

    /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
    offset: PropTypes.number,

    /** Name of the element of scrollable container that can be used with querySelector [optional]. */
    rootEl: PropTypes.string,

    /**
     * Function to be executed when the active item has been updated [optional].
     */
    onUpdate: PropTypes.func,
}

ScrollSpyMenu.defaultProps = {
    componentTag: 'div',
    currentClassName: 'is-active',
}

export default ScrollSpyMenu
