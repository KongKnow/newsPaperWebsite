import './sectionWrapper.scss'
import SortedNews from '../sortedNews/SortedNews'
import CategoriedNews from '../categoriedNews/CategoriedNews'
import Advertisement from '../advertisement/Advertisement'
import Categories from '../categories/Categories'

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
                        <div className="categoried-news">
                            <CategoriedNews/>
                        </div>
                    </div>
                    <div className="advertisement">
                        <Advertisement/>
                    </div>
                    <div className="categories">
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionWrapper