import React from 'react';
import App from "../../components/layouts/app";
import Banner from "../../components/banner/banner";
import Discover from "../../components/discover/discover";
import News from "../../components/news/news";
import Gallery from "../../components/gallery/gallery";
import Events from "../../components/events/events";
import styles from "../../styles/Home.module.css"
const Index = () => {
    return (
        <>
            <App>
                <Banner/>
                <Discover/>
                <News/>

                <div className={styles.row}>
                    <Gallery/>
                    <Events/>
                </div>
            </App>
        </>
    );
};

export default Index;