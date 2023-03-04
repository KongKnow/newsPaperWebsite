import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainNewsThunk } from './mainNewsSlice'
import './mainNews.scss'

const MainNews = () => {

    const news = useSelector(state => state.mainNews.mainNews)
    const country = useSelector(state => state.mainNews.country)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mainNewsThunk(country))
    }, [])

    const renderPosts = (arr) => {
        const posts = arr.map(post => {
            let text
            if (post.text.split(' ').length > 20) {
                text = post.text.split(' ').slice(0, 21).join(' ')
                text += '...'
            }
            return (
                <div className="main-news-post" key={post.id}>
                    <a href="#" className="main-news-img"><img src={post.image} alt="" /></a>
                    <div className="main-news-content">
                        <h4 className="main-news-title">{post.title}</h4>
                        <p className="main-news-description">{text}</p>
                    </div>
                </div>
            )
        })

        return posts
    }

    const renderedPosts = renderPosts(news)

    return (
        <div className="main-news">
            <div className="container">
                <div className="main-news-inner">
                    <div className="main-news-first">
                        {renderedPosts[0]}
                        {renderedPosts[1]}
                    </div>
                    <div className="main-news-rest">
                        {
                            renderedPosts.slice(2)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNews