import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import group from './SVG/group.svg';
import vector from './SVG/vector.svg';
import your from './SVG/your.png';
import interior from './SVG/interior.png';

const Navbar = () => {
    return (
        <nav   >
            <div className={s.nav}>
                
            <NavLink to="/header" className={s.your}><img  src={your} alt='logo'/></NavLink>

                
            <NavLink to="/header" className={s.interior}><img  src={interior} alt='interior'/></NavLink>
            
            <div className={s.item} >
                <NavLink to="/furniture" className={s.furniture}>Furniture</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="lighting" className={s.lighting}>Lighting</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="decor" className={s.decor}>Decor</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="tablwer" className={s.tablewear}>Tablewear</NavLink>
            </div>
           
              <div className={s.item}>
                <NavLink to="basket" className={s.group}><img src={group} alt='group' /></NavLink>
              </div>
              <div className={s.item}>
                <NavLink to="users" className={s.vector}><img src={vector} alt='vector' /></NavLink>
              
            </div>
            </div>
        </nav>
        
        
    );

}

export default Navbar;