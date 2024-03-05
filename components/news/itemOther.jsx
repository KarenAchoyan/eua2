import React from 'react';
import Image from "next/image";
import styles from "../../styles/news.module.css"
const ItemOther = ({item}) => {
    return (
        <div className={styles.itemOther}>
            <Image src={item.image} width={100} height={100} alt={item.title} />
            <h2>{item.title}</h2>
        </div>
    );
};

export default ItemOther;