import React from 'react';
import './Footer.css'

const icons = [
    { name: "fab fa-facebook-f" },
    { name: "fab fa-twitter" },
    { name: "fab fa-google-plus-g" },
    { name: "fab fa-linkedin-in" }
]

const list = [
    { name: "Newsletter" },
    { name: "Kontakt" },
    { name: "FAQ" }
]

const Footer = () => {
    const socialMedia = icons.map(icon =>
        <li className="list-inline-item" key={icon.name}>
            <a className="btn-floating" href="#!">
                <i className={icon.name}> </i>
            </a>
        </li>
    )

    const elem = list.map(item =>
        <div className="col footer-item" key={item.name} >
            <a href="#!" >{item.name}</a>
        </div >
    )

    return (
        <div id="contact" className="container-fluid">
            <div className="row">
                {elem}
            </div>
            <ul className="list-unstyled list-inline text-center">
                {socialMedia}
            </ul>


        </div >
    )
}

export default Footer;