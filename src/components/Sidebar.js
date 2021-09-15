import React from 'react'

const Sidebar = ({menuHandling}) => {
    return (
        <div className='sidebar'>
            <span className='sidebar-closing' onClick={menuHandling}>X</span>
            <ul>
                <li><a href='#'>DENEME</a></li>
                <li><a href='#'>DENEME</a></li>
                <li><a href='#'>DENEME</a></li>
                <li><a href='#'>DENEME</a></li>
                <button  className='sidebar-btn'>Order Now</button>
            </ul>
        </div>)
}

export default Sidebar
