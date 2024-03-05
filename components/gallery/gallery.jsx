import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/gallery.module.css"
import Image from "next/image";
const Gallery = () => {
    const [galleries, setGalleries] = useState([
        {id: 1, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 2, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 3, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 4, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 5, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 6, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 7, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 8, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 9, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
        {id: 10, image: "https://eua.am/storage/images/IecuS3iMb71ipOaUKAvPawPqbIaCNg9aDE8VvrEY.png"},
    ]);
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
            <h1>ԱԼԲՈՄ</h1>
            <Slider {...settings}>
                {galleries.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <Image width={200} height={200} src={item.image} alt=""/>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Gallery;