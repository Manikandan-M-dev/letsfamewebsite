import React from "react";
import "../Assets/videohomestyle.css";
import CreativeSkillimg from "../Home/CreativeSkillimg";
import { CardProvider } from '../Home/CardContext';
import Carousel from '../Home/Carousel';
import NeverBeen from "../Home/NeverBeen";
import CardBlog from "../Home/CardBlog";
import Insta from "../Home/Insta";
import VideoHome from "../Home/VideoHome";

export default function HomePage() {
    return (
        <>
            <CardProvider>
                <section>
                    <VideoHome/>
                </section>
                <section>
                    <CreativeSkillimg />
                </section>
                    <Carousel />
                <section>
                    <NeverBeen />
                </section>
                <section>
                    <CardBlog />
                </section>
                <section>
                    <Insta />
                </section>
            </CardProvider>
        </>
    );
}
