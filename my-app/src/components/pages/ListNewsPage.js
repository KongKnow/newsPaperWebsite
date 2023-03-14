import Header from "../header/Header"
import Footer from "../footer/Footer"

const ListNewsPage = () => {
    return (
        <>
            <Header/>
                <div className="list-news">
                    <div className="container">
                        <div className="list-news-inner"></div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default ListNewsPage