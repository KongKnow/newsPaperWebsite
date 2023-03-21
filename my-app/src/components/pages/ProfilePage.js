import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from "./formSlice"
import {useAuth} from '../../hooks/useAuth'
import Header from "../header/Header"
import Footer from "../footer/Footer"
import './profilePage.scss'

const ProfilePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth} = useAuth()

    useEffect(() => {
        console.log(isAuth)
        if(!isAuth) {
            return navigate("/login");
        }
    }, [])

    return (
        <>
            <Header/>
                <div className="profile-section" style={{height: '53vh'}}>
                    <div className="container">
                        <div className="profile-section-inner">
                            Welcome to your profile
                        </div>

                        <div onClick={() => {
                            dispatch(removeUser())

                            return navigate("/login");
                        }} className="logout-btn">Log Out</div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export  default ProfilePage