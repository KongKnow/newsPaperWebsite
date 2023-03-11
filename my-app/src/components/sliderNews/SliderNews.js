import { useEffect } from 'react'
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'
import { sliderNewsThunk } from './sliderNewsSlice'
import './sliderNews.scss'

const SliderNews = () => {

    const news = useSelector(state => state.sliderNews.sliderNews)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sliderNewsThunk())
    }, [])

    const renderPosts = (arr) => {
        const posts = arr.map(post => {
            let text
            if (post.text.split(' ').length > 20) {
                text = post.text.split(' ').slice(0, 21).join(' ')
                text += '...'
            }
            return (
                <div className="slider-news-post" key={post.id}>
                    <time className="slider-news-author">{post.author}</time>
                    <a href='#' className="slider-news-title">{post.title}</a>
                </div>
            )
        })

        return posts
    }

    const renderedPosts = renderPosts(news)

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      }
    return (
        <div className="slider-news">
            <div className="container">
                <div className="slider-news-inner">
                    <Slider {...settings}>
                        {renderedPosts}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderNews