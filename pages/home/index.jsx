import React from 'react';
import App from "../../components/layouts/app";
import Banner from "../../components/banner/banner";
import Discover from "../../components/discover/discover";
import News from "../../components/news/news";
import Gallery from "../../components/gallery/gallery";
import Events from "../../components/events/events";

const Index = () => {
    return (
        <>
            <App>
                <Banner/>
                <Discover/>
                <News/>
                <Gallery/>
                <Events/>
            </App>
        </>
    );
};

export default Index;