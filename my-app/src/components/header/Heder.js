import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import google from '../../assets/google.svg'
import instagram from '../../assets/instagram.svg'

import './header.scss'

const Header = () => {

    const onCountry = (e) => {
        e.target.parentElement.childNodes.forEach(button => {
            button.classList.remove('active')
        })
        e.target.classList.add('active')
    }

    return (
        <header className="header">
            <div className="header-linkbar">
                <div className="container">
                    <div className="header-linkbar-inner">
                        <div className="functional-links">
                            <a href="#" className="functional-link">Sign up</a>
                            | 
                            <a href="#" className="functional-link">Login</a>
                            | 
                            <a href="#" className="functional-link">Archived News</a>
                        </div>
                        <div className="socialmedia-links">
                            <a href="https://www.facebook.com/" target='__blank' className="socialmedia-link">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://twitter.com/" target='__blank' className="socialmedia-link">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="https://www.google.com/" target='__blank' className="socialmedia-link">
                                <img src={google} alt="" />
                            </a>
                            <a href="https://www.instagram.com/" target='__blank' className="socialmedia-link">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                    </div>        
                </div>       
            </div>
            <div className="header-titles">
                <div className="container">
                    <h1 className="header-titles-title">MAG MAGAZINE</h1>
                    <h3 className="header-titles-subtitle">ALL THE LATEST NEWS & INFORMATION IN THE WORLD</h3>
                </div>
            </div>
            <nav className="header-nav">
                <div className="container">
                    <div className="header-nav-inner">
                        <button onClick={(e) => onCountry(e)} className="header-nav-link active">world</button>
                        <button onClick={(e) => onCountry(e)} className="header-nav-link">usa</button>
                        <button onClick={(e) => onCountry(e)} className="header-nav-link">england</button>
                        <button onClick={(e) => onCountry(e)} className="header-nav-link">germany</button>
                    </div>
                </div>                
            </nav>
        </header>
    )
}

export default Header