import React from 'react';
import styles from "../../../styles/layout.module.css"
import SubDrb from "./subDrb";
const Drb = ({subs}) => {
    return (
        <div className={styles.drb}>
           <div className={styles.drbContent}>
               <ul>
                   {subs.map((item,index)=>(
                       <li key={index}>{item.name}
                           {item.subs.length > 0 ? <SubDrb subs={item.subs}/> : null}
                       </li>
                   ))}
               </ul>
           </div>
        </div>
    );
};

export default Drb;