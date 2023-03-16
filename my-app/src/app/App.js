import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from '../components/pages/MainPage'
import SingleNewsPage from '../components/pages/SingleNewsPage';
import ListNewsPage from '../components/pages/ListNewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/category/:category' element={<ListNewsPage/>}/>
        <Route path='/:id' element={<SingleNewsPage/>}/>
        <Route path='/'  element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
