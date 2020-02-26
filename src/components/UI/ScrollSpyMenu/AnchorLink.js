import React from 'react'

const AnchorLink = ({ href, offset, onClick, ...props }) => {
    const smoothScroll = e => {
        e.preventDefault()
        let _offset = () => 0
        if (typeof offset !== 'undefined') {
            if (!!(offset && offset.constructor && offset.apply)) {
                _offset = offset
            } else {
                _offset = () => parseInt(offset)
            }
        }
        const anchor = document.querySelector(href)
        const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset
        window.scroll({
            top: offsetTop - _offset(),
            behavior: 'smooth',
        })
        onClick && onClick(e)
    }
    return <a {...props} href={href} onClick={e => smoothScroll(e)} />
}

export default AnchorLink
