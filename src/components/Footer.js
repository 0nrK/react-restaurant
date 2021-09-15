import React from 'react'
import {TiSocialFacebookCircular, TiSocialInstagramCircular,TiSocialTwitterCircular} from 'react-icons/ti'
const Footer = () => {
    return (
        <div className='socials'>
            <ul>
                <li><a href='#'><TiSocialFacebookCircular/><span>Facebook</span></a></li>
                <li><a href='#'><TiSocialTwitterCircular/><span>Twitter</span></a></li>
                <li><a href='#'><TiSocialInstagramCircular/><span>Instagram</span></a></li>
            </ul>
        </div>
    )
}

export default Footer
