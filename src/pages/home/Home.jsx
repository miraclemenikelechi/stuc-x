import React from 'react';
import "./style.css";

const Home = () => {
    return (
        <>
            <div class="header">
                <div class="logo">
                    <h1><a href="/">STUC-X</a></h1>
                </div>
                <nav class="navigation">
                    <ul>
                        <li><a href="/">Discover</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Carts</a></li>
                    </ul>
                </nav>
                <div class="menu">
                    <a href="/">Menu</a>
                    <img src={require(`../../assets/images/mouse.png`)} alt="" />
                </div>
            </div>

            {/* END OF HEADER */}

            <div className="main">
                <div className="main-body">
                    <div class="lefttext">
                        <img src={require(`../../assets/images/Group-5.png`)} alt="" />
                        <p>One time stop for your <span>beauty</span> products, skincare, cosmetics...
                        </p>
                    </div>

                    <div class="middle">
                        <div class="mid-imgs">
                            <img class="img2" src={require(`../../assets/images/img2.png`)} alt="" />
                            <img class="retan" src={require(`../../assets/images/Rectan.png`)} alt="" />
                            <img class="img3" src={require(`../../assets/images/img3.png`)} alt="" />
                        </div>
                    </div>

                    <div class="right">
                        <img src={require(`../../assets/images/Right-Small-Circles.png`)} alt="" />
                    </div>
                </div>

                <div className="login-text">
                    <div class="login">
                        <p><a href="https://stuc-x-tx67.vercel.app/">Login</a></p>
                        <img src={require(`../../assets/images/login.png`)} alt="" />
                    </div>

                    <div class="downtext">
                        <h1>We indulge in everything Beauty shopping</h1>
                        <p>At our beauty shopping website, we believe that shopping for beauty products should be a
                            fun <br />and enjoyable experience. That's why we offer special promotionsand discounts throughout the year.
                        </p>
                    </div>

                    <div class="explore login">
                        <p><a href="https://stuc-x-tx67.vercel.app/cam">Explore</a></p>
                        <img src={require(`../../assets/images/arrow-right.png`)} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;