import React from 'react';
import styles from "../../styles/discover.module.css";
import Image from "next/image";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <Image width={150} height={50} src={item.image} alt=""/>
            <div className={styles.overline}>
                <h5>{item.title}</h5>
            </div>
        </div>
    );
};

export default Item;