import React, { Profiler } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Furniture from './components/Profile/Furniture';
import Basket from './components/Dialogs/Basket';
import { Route, BrowserRouter } from 'react-router-dom';
import Add from './components/Music/Add';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';





const App = (props) => {



  return (
    <BrowserRouter>
      <div >

     

         
          <Navbar />
        



         <div  >
            
          <Route path='/furniture' render={() => <Furniture />} />
          <Route path='/add' render={() => <Add />} /> 
          <Route path='/basket' render={() => <Basket />} />
          <Route path='/header' render={() => <Header /> } />
          
          
           
          <Route path='/news' render={() => <News />} />

          <Route path='/settings' render={() => <Settings />} />

          

        </div> 

      </div>
    </BrowserRouter>
  );
}

export default App;

