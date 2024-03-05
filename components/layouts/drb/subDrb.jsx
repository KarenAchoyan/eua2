import React from 'react';
import styles from "../../../styles/layout.module.css";

const SubDrb = ({subs}) => {
    return (
        <div className={styles.subDrb}>
            <div className={styles.subDrbContent}>
                <ul>
                    {subs.map((item,index)=>(
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SubDrb;