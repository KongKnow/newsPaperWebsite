import './sortedNews.scss'

const SortedNews = (props) => {
    return (
        <div className="sorted-news-inner">
            <div className="sorted-news-name">{props.title}</div>
            <div className="sorted-news-post">
                <a href="#" className="sorted-news-img"><img src="" alt="" /></a>
                <div className="sorted-news-content">
                    <a href="#" className="sorted-news-title">Indonectetus facilis</a>
                    <p className="sorted-news-description">maurisque eros molest nunc anteget sed vel lacus mus semper. Anterd umnullam interdum eros dui urna</p>
                    <a href="" className="sorted-news-link">Read more &gt;&gt;</a>
                </div>
            </div>
            <div className="sorted-news-post">
                <a href="#" className="sorted-news-img"><img src="" alt="" /></a>
                <div className="sorted-news-content">
                    <a href="#" className="sorted-news-title">Indonectetus facilis</a>
                    <p className="sorted-news-description">maurisque eros molest nunc anteget sed vel lacus mus semper. Anterd umnullam interdum eros dui urna</p>
                    <a href="" className="sorted-news-link">Read more &gt;&gt;</a>
                </div>
            </div>
            <div className="sorted-news-post">
                <a href="#" className="sorted-news-img"><img src="" alt="" /></a>
                <div className="sorted-news-content">
                    <a href="#" className="sorted-news-title">Indonectetus facilis</a>
                    <p className="sorted-news-description">maurisque eros molest nunc anteget sed vel lacus mus semper. Anterd umnullam interdum eros dui urna</p>
                    <a href="" className="sorted-news-link">Read more &gt;&gt;</a>
                </div>
            </div>
        </div>
    )
}

export default SortedNews