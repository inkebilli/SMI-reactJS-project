//import { useState,useMemo } from 'react' 
import {Route,Routes} from 'react-router-dom'  
import Dashboard from './components/dashboard' 
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar';
import TopBar from './components/topBar';
import {Influencer, InfluencerList,Statistics,LogOut} from './components/' 
function App() { 

  return (
    <div className="">
      <SideBar />
      <TopBar />
      <div className='content'> 
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/influencers'>
            <Route index element={<InfluencerList />} />
            <Route path=':requestedId' element={<Influencer />}></Route>
          </Route>
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='*' element={<Dashboard />} />
           
        </Routes>
      </div>
    </div>
  )
}

export default App
