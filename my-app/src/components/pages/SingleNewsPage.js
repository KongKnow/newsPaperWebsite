import Header from "../header/Header"
import Footer from "../footer/Footer"
import './singleNewsPage.scss'

const SingleNewsPage = () => {

    return (
        <>
            <Header/>
                <div className="single-post">
                    <div className="container">
                        <div className="single-post-inner">
                            <h2 className="single-post-title">{localStorage.getItem('singlePageTitle').toLocaleUpperCase()}</h2>
                            <span className="single-post-author">Author: {localStorage.getItem('singlePageAuthor')}</span>
                            <div className="single-post-img"><img src={localStorage.getItem('singlePageImage')} alt="" /></div>
                            <p className="single-post-description">{localStorage.getItem('singlePageDescr')}</p>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default SingleNewsPage