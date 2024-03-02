import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Timeline from './pages/Timeline';
import Inventory from './pages/Inventory';
import Patients from './pages/Patients';

import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* SideNav */}
      <SideNav />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/timeline' element={<Timeline />}/>
          <Route path='/inventory' element={<Inventory />}/>
          <Route path='/patients' element={<Patients />}/>

        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App;