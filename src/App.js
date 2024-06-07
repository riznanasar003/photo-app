import logo from './logo.svg';
import './App.css';
import AddPhoto from './Components/AddPhoto';
import Search from './Components/Search';
import Delete from './Components/Delete';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AddPhoto/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/viewAll' element={<ViewAll/>}/>
          
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
