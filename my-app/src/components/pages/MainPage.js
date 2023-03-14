import Header from "../header/Header"
import HeaderNav from "../header/HeaderNav"
import MainNews from "../mainNews/MainNews"
import SectionWrapper from "../sectionWrapper/SectionWrapper"
import SliderNews from "../sliderNews/SliderNews"
import Footer from "../footer/Footer"

const MainPage = () => {
    return (
      <>
        <Header>
          <HeaderNav/>
        </Header>
        <MainNews/>
        <SectionWrapper/>
        <SliderNews/>
        <Footer/>
      </>
    );
  }
  
  export default MainPage;
  