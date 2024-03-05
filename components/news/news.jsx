import React, {useState} from 'react';
import styles from "../../styles/news.module.css";
import Item from "./item";
const News = () => {
    const [news, setNews] = useState([
        {id:1, title:"Այց Ա. Թամանյանի անվան Ճարտարապետության ազգային թանգարան-ինստիտուտ", image:"https://eua.am/storage/images/X1KnLxpomajZsqjLO5Ryhf0WeSRWY9WjR9UJpf16.png"},
        {id:2, title:"Այց Ա. Թամանյանի անվան Ճարտարապետության ազգային թանգարան-ինստիտուտ", image:"https://eua.am/storage/images/3vUuc8Ij2jkTsGrO3RGY54EPnUjidwhqoSV9u9cN.png"},
        {id:3, title:"Այց Ա. Թամանյանի անվան Ճարտարապետության ազգային թանգարան-ինստիտուտ", image:"https://eua.am/storage/images/X1KnLxpomajZsqjLO5Ryhf0WeSRWY9WjR9UJpf16.png"},
        {id:4, title:"Այց Ա. Թամանյանի անվան Ճարտարապետության ազգային թանգարան-ինստիտուտ", image:"https://eua.am/storage/images/X1KnLxpomajZsqjLO5Ryhf0WeSRWY9WjR9UJpf16.png"},
        {id:5, title:"Այց Ա. Թամանյանի անվան Ճարտարապետության ազգային թանգարան-ինստիտուտ", image:"https://eua.am/storage/images/X1KnLxpomajZsqjLO5Ryhf0WeSRWY9WjR9UJpf16.png"},
        {id:6, title:"Այց Ա. Թամանյանի անվան Ճարտարապետության ազգային թանգարան-ինստիտուտ", image:"https://eua.am/storage/images/X1KnLxpomajZsqjLO5Ryhf0WeSRWY9WjR9UJpf16.png"},
    ])
    return (
        <div className={styles.container}>
            <h1>Նորություններ</h1>
            <div className={styles.row}>
                {news.map((item)=>(
                    <Item key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default News;