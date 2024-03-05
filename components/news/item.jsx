import React from 'react';
import styles from "../../styles/news.module.css";
import Image from "next/image";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <Image width={300} height={200} src={item.image} alt=""/>
            <h2>{item.title}</h2>
        </div>
    );
};

export default Item;