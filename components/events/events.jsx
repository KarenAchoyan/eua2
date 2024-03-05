import React, {useState} from 'react';
import styles from "../../styles/events.module.css"
import Item from "./item";
import Image from "next/image";
import Slider from "react-slick";
const Events = () => {
    const [events, setEvents] = useState([
        {id:1, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:2, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:3, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:4, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:5, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},
        {id:6, title:"Մշտադիտարկում՝ Հայաստանի եվրոպական համալսարանում"},

    ])
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        prevArrow: <Image width={20} height={20} alt='arrow' src={'/left-arrow.png'}/>,
        nextArrow: <Image  width={20} height={20} alt='arrow' src={'/right-arrow.png'}/>,
        responsive: [
            {
                breakpoint: 1720, // screens larger than 1024px
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1520, // screens larger than 1024px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1300, // screens larger than 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 900, // screens larger than 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500, // screens larger than 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows:2,
                    prevArrow: null,
                    nextArrow: null,
                },
            }
        ],
    };

    return (
        <div className={styles.container}>
            <h1>Իրադարձություններ</h1>
            <Slider {...settings}>
                {events.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </Slider>
        </div>
    );
};

export default Events;