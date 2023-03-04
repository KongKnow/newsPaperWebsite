import Slider from 'react-slick'
import './sliderNews.scss'

const SliderNews = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      }
    return (
        <div className="slider-news">
            <div className="container">
                <div className="slider-news-inner">
                    <Slider {...settings}>
                        <div className="slider-news-post">
                            <time className="slider-news-date">2023-02-17</time>
                            <a href='#' className="slider-news-description">Lorem ipsum dolorSuspendisse in nequePraesent et erosLorem ipsum dolorSuspendisse in nequePraesent et eros</a>
                        </div>
                        <div className="slider-news-post">
                            <time className="slider-news-date">2023-02-17</time>
                            <a href='#' className="slider-news-description">Lorem ipsum dolorSuspendisse in nequePraesent et erosLorem ipsum dolorSuspendisse in nequePraesent et eros</a>
                        </div>
                        <div className="slider-news-post">
                            <time className="slider-news-date">2023-02-17</time>
                            <a href='#' className="slider-news-description">Lorem ipsum dolorSuspendisse in nequePraesent et erosLorem ipsum dolorSuspendisse in nequePraesent et eros</a>
                        </div>
                        <div className="slider-news-post">
                            <time className="slider-news-date">2023-02-17</time>
                            <a href='#' className="slider-news-description">Lorem ipsum dolorSuspendisse in nequePraesent et erosLorem ipsum dolorSuspendisse in nequePraesent et eros</a>
                        </div>
                        <div className="slider-news-post">
                            <time className="slider-news-date">2023-02-17</time>
                            <a href='#' className="slider-news-description">Lorem ipsum dolorSuspendisse in nequePraesent et erosLorem ipsum dolorSuspendisse in nequePraesent et eros</a>
                        </div>
                        <div className="slider-news-post">
                            <time className="slider-news-date">2023-02-17</time>
                            <a href='#' className="slider-news-description">Lorem ipsum dolorSuspendisse in nequePraesent et erosLorem ipsum dolorSuspendisse in nequePraesent et eros</a>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderNews