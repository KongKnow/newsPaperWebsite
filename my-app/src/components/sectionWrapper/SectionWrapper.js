import './sectionWrapper.scss'
import SortedNews from '../SortedNews/SortedNews'

const SectionWrapper = () => {
    return (
        <div className="section-wrapper">
            <div className="container">
                <div className="section-wrapper-inner">
                    <div className="news">
                        <div className="sorted-news">
                            <SortedNews title={'LATEST NEWS'}/>
                            <SortedNews title={'POPULAR NEWS'}/>
                        </div>
                        <div className="categoried-news"></div>
                    </div>
                    <div className="advertisement"></div>
                    <div className="filters"></div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper