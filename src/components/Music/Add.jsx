import React  from 'react';
import s from './Add.module.css';
import group34 from './SVG/group34.png';

const Add = (props) => {
    return (
        <div className={s.addedtocard}>
            
            <img className={s.group34} src={group34} alt='group34'/>

            <input type="text" className={s.cardnumber} name="cardnumber" placeholder="0123-4567-8901-2345"></input>

            <input type="text" className={s.expdate} name="expdate" placeholder="12/21"></input>

            <input type="text" className={s.cvc} name="cvc" placeholder="1234"></input>

            <input type="text" className={s.name} name="name" placeholder="Tom Thompson"></input>

            

        </div>
    )

}

export default Add;