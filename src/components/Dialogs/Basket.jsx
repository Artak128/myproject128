import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Basket.module.css';
import group31 from './SVG/group31.png';
import group30 from './SVG/group30.png';
import rectangle19 from './SVG/rectangle19.png';
import rectangle14 from './SVG/rectangle14.png';
import group27 from './SVG/group27.png';
import group26 from './SVG/group26.png';





const Basket = (props) => {

    

    return (
        <div className={s.basket} >
            
            <div className={s.zindex}>
            <NavLink to="/add" className={s.group31}><img  src={group31} alt='group31' /></NavLink>
            </div>
            
            <div className={s.zindex2}>
            <img className={s.group30} src={group30} alt='group30' />
            </div>

            <img className={s.rectangle19} src={rectangle19} alt='rectangle19' />
            
            <div className={s.zindex3}>
            <img    />
            <NavLink to="/add" className={s.group27}><img  src={group27} alt='group27' /></NavLink>
            </div>
             
            <div className={s.zindex4}>
            <img className={s.group26} src={group26} alt='group26' />
            </div>

            <img className={s.rectangle14} src={rectangle14} alt='rectangle14' />
        
        </div>
    )

}

export default Basket;
