import React from 'react';
import styles from "../../styles/news.module.css";
import Image from "next/image";
import Link from "next/link";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <Link href={"/news/"+item.title}>
                <Image width={300} height={200} src={item.image} alt=""/>
            </Link>
            <h2>{item.title}</h2>
        </div>
    );
};

export default Item;