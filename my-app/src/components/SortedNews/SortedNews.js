import Spinner from '../spinner/Spinner'
import Error from '../error/Error'
import './sortedNews.scss'

const SortedNews = (props) => {

    const renderPosts = (arr) => {
        const posts = arr.map(post => {
            let text
            if (post.text.length > 113) {
                text = post.text.slice(0, 114)
                text += '...'
            }
            return (
                <div className="sorted-news-post" key={post.id}>
                    <a href="#" className="sorted-news-img"><img src={post.image} alt="" /></a>
                    <div className="sorted-news-content">
                        <a href="#" className="sorted-news-title">{post.title}</a>
                        <p className="sorted-news-description">{text}</p>
                        <a href="" className="sorted-news-link">Read more &gt;&gt;</a>
                    </div>
                </div>
            )
        })

        return posts
    }

    const renderedPosts = renderPosts(props.data)

    const loadingNews =  props.status === 'loading' ? <Spinner/> : null
    const fulfilledNews = props.status === 'success' ? renderedPosts : null
    const rejectedNews = props.status === 'error' ? <Error/> : null

    return (
        <div className="sorted-news-inner">
            <div className="sorted-news-name">{props.title}</div>
            {loadingNews}
            {fulfilledNews}
            {rejectedNews}
        </div>
    )
}

export default SortedNews

