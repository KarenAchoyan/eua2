import React from 'react';
import styles from "../../styles/events.module.css";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
           <div className={styles.itemContent}>
               <h3>04</h3>
               <h4>DECEMBER 2023</h4>
               <h2>4TH INTERNATIONAL BIENNALE OF ART PRINTING - YERE</h2>
           </div>
        </div>
    );
};

export default Item;