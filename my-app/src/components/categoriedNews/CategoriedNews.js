import './categoriedNews.scss'

const CategoriedNews = () => {
    return (
        <div className="categoried-news-inner">
            <div className="categoried-news-categories">
                <button className="categoried-news-category">FINANCIAL WORLD</button>
                <button className="categoried-news-category">SPORTS WORLD</button>
                <button className="categoried-news-category">PROMI WORLD</button>
                <button className="categoried-news-category">MUSIC & ARTS WORLD</button>
            </div>
            <div className="categoried-news-list">
                <div className="categoried-news-post">
                    <a href="#" className="categoried-news-title">Sed vel lacus mus semper.</a>
                    <a href="#" className="categoried-news-img"><img src="" alt="" /></a>
                    <p className="categoried-news-description">Maurisque eros molest nunc anteget sed vel lacus mus semper. Anterd umnullam interdum eros duiur.</p>                    
                </div>
                <div className="categoried-news-post">
                    <a href="#" className="categoried-news-title">Sed vel lacus mus semper.</a>
                    <a href="#" className="categoried-news-img"><img src="" alt="" /></a>
                    <p className="categoried-news-description">Maurisque eros molest nunc anteget sed vel lacus mus semper. Anterd umnullam interdum eros duiur.</p>
                </div>
                <div className="categoried-news-post">
                    <a href="#" className="categoried-news-title">Sed vel lacus mus semper.</a>
                    <a href="#" className="categoried-news-img"><img src="" alt="" /></a>
                    <p className="categoried-news-description">Maurisque eros molest nunc anteget sed vel lacus mus semper. Anterd umnullam interdum eros duiur.</p>
                </div>
                <div className="categoried-news-post">
                    <a href="#" className="categoried-news-title">Sed vel lacus mus semper.</a>
                    <a href="#" className="categoried-news-img"><img src="" alt="" /></a>
                    <p className="categoried-news-description">Maurisque eros molest nunc anteget sed vel lacus mus semper. Anterd umnullam interdum eros duiur.</p>
                </div>
            </div>
        </div>
    )
}

export default CategoriedNews