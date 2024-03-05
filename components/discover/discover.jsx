import React, {useState} from 'react';
import styles from "../../styles/discover.module.css"
import Item from "./item";
const Discover = () => {
    const [discovers, setDiscovers] = useState([
        {id:1, image:"https://eua.am/storage/images/aEiKa78nh8fq4fqGiKShAsEH732tTdqqNfM3MFLG.jpg", title:"Բագալավր"},
        {id:2, image:"https://eua.am/storage/images/aEiKa78nh8fq4fqGiKShAsEH732tTdqqNfM3MFLG.jpg", title:"Բագալավր"},
        {id:3, image:"https://eua.am/storage/images/aEiKa78nh8fq4fqGiKShAsEH732tTdqqNfM3MFLG.jpg", title:"Բագալավր"},
        {id:4, image:"https://eua.am/storage/images/aEiKa78nh8fq4fqGiKShAsEH732tTdqqNfM3MFLG.jpg", title:"Բագալավր"},
    ])

    return (
        <div className={styles.container}>
            <h1>Իմանալ ավելին</h1>
            <div className={styles.row}>
                {discovers.map((item)=>(
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default Discover;