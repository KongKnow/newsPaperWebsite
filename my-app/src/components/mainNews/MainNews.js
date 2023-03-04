import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { mainNewsThunk } from './mainNewsSlice'
import './mainNews.scss'

const MainNews = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mainNewsThunk())
    })

    return (
        <div className="main-news">
            <div className="container">
                <div className="main-news-inner">
                    <div className="main-news-first">
                        <div className="main-news-post">
                            <a href="#" className="main-news-img"><img src="" alt="" /></a>
                            <div className="main-news-content">
                                <h4 className="main-news-title">Cursus penati saccum ut curabitur nulla.</h4>
                                <p className="main-news-description">maurisque eros molest nunc anteget sed vel lacus mus semper. Anterdumnullam interdum eros dui urna consequam ac nisl nullam ligula vestassa. Condimentumfelis et amet tellent quisquet a leo lacus nec augue accumsan. Sagittislaorem dolor sum at urna et pharetium malesuada nis cons ectus.</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-news-rest">
                        <div className="main-news-post">
                            <div>
                                <a href="#"             className="main-news-img"><img src="" alt=""/></a> 
                            </div>
                            <div className="main-news-content">
                                <h4 className="main-news-title">Cursus penati saccum curabi</h4>
                                <p className="main-news-description">Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur.</p>
                            </div>
                        </div>
                        <div className="main-news-post">
                            <div>
                                <a href="#"             className="main-news-img"><img src="" alt=""/></a> 
                            </div>
                            <div className="main-news-content">
                                <h4 className="main-news-title">Cursus penati saccum curabi</h4>
                                <p className="main-news-description">Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur.</p>
                            </div>
                        </div>
                        <div className="main-news-post">
                            <div>
                                <a href="#"             className="main-news-img"><img src="" alt=""/></a> 
                            </div>
                            <div className="main-news-content">
                                <h4 className="main-news-title">Cursus penati saccum curabi</h4>
                                <p className="main-news-description">Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur.</p>
                            </div>
                        </div>
                        <div className="main-news-post">
                            <div>
                                <a href="#"             className="main-news-img"><img src="" alt=""/></a> 
                            </div>
                            <div className="main-news-content">
                                <h4 className="main-news-title">Cursus penati saccum curabi</h4>
                                <p className="main-news-description">Cursuspenatisaccum ut curabitur nulla tellus tor ames a in curabitur pede. Idet mollisi eros dis orci congue elis et curabitur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainNews