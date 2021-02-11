import React from 'react';
import s from  './Furniture.module.css';
import a1 from './SVG/a1.png';
import a2 from './SVG/a2.png';
import a3 from './SVG/a3.png';
import a4 from './SVG/a4.png';
import a5 from './SVG/a5.png';
import a6 from './SVG/a6.png';

import b1 from './SVG/b1.png';
import b2 from './SVG/b2.png';
import b3 from './SVG/b3.png';
import b4 from './SVG/b4.png';





const Furniture = (props) => {
    
    return ( 
    <div className={s.productpage}>
       
       
       
       <img className={s.b1} src={b1} alt='b1'/>
       <img className={s.b2} src={b2} alt='b2'/>
       <img className={s.b3} src={b3} alt='b3'/>
       <img className={s.b4} src={b4} alt='b4'/>
      
        
        <div className={s.dropdown1}>
          <img src={a1} alt='a1'/>
            <div className={s.dropdowncontent} >
             <p>Sofas</p>
             <p>Tables</p>
             <p>Chairs</p>
             <p>Closets</p>
             </div>
        </div>

        
          <img className={s.dropdown2} src={a2} alt='a2'/>
          

          
          <img className={s.dropdown3} src={a3} alt='a3'/>
          

          
          <img className={s.dropdown4} src={a4} alt='a4'/>
          

          
          <img className={s.dropdown5} src={a5} alt='a5'/>
          

          
          <img className={s.dropdown6} src={a6} alt='a6'/>
          

       
    </div>
    )
}

export default Furniture;