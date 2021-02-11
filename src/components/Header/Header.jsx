import React from 'react';
import s from './Header.module.css';
import rectangle1 from './SVG/rectangle1.png';
import createyourcomfortzone from './SVG/createyourcomfortzone.svg';
import rectangle2 from './SVG/rectangle2.svg';
import mainblock1 from './SVG/mainblock1.jpg';
import bestsellers from './SVG/bestsellers.png';
import arrow2 from './SVG/arrow2.png';
import bestsellerstext from './SVG/bestsellerstext.svg';
import b1 from './SVG/b1.png';
import b2 from './SVG/b2.png';
import b3 from './SVG/b3.png';
import b4 from './SVG/b4.png';

const Header = () => {
    return (
        <div className={s.home}>

            


                <img className={s.rectangle1} src={rectangle1} alt='rectangle1' />


                <img className={s.createyourcomfortzone} src={createyourcomfortzone} alt='createyourcomfortzone' />
                
                <img className={s.arrow2} src={arrow2} alt='arrow2' />

                

                   

                

                <div className={s.group1}>
                    <div>
                        <img className={s.rectangle2} src={rectangle2} alt='rectangle2' />
                        <a className={s.shopnow}>Shop now</a>
                    </div>

                </div>
            
            
             <img className={s.mainblock1} src={mainblock1} alt='mainblock1' />
                
             {/* <img className={s.bestsellers} src={bestsellers} alt='bestsellers' /> */}

             <img className={s.bestsellerstext} src={bestsellerstext} alt='bestsellerstext' />

             <img className={s.b1} src={b1} alt='b1'/>
             <img className={s.b2} src={b2} alt='b2'/>
             <img className={s.b3} src={b3} alt='b3'/>
             <img className={s.b4} src={b4} alt='b4'/>

            

            <div className={s.footer}></div>
           
                <div className={s.footertext}>
                <p className={s.p1}>About Us</p>
                <p className={s.p2}>Student Discount</p>
                <p className={s.p3}>Coupons</p>
                <p className={s.p4}>Contact Us</p>
                <p className={s.p5}>Customer Service</p>
                <p className={s.p6}>FAQ</p>
                <p className={s.p7}>Order Status</p>
                <p className={s.p8}>Call Us: +123 456789</p>
                <p className={s.p9}>Hours: Monday-Friday 10:00-21:00</p>
                </div>
                
                


            

        </div>



    );

}

export default Header;