import React from 'react';
import "../../Utils/style.css"

class Headers extends React.Component {


    render() {
        return (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                    <title>:: Welcome ::</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
                    <link rel="stylesheet" type="text/css" href="css/menu.css" />
                    <link href="css/bootstrap.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="css/owl.carousel.css" />
                    <link href="../../Utils/style.css" rel="stylesheet" />


                </head>
                <body>
                    <header class="bannermn">
                        <div class="top">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="logo">
                                            <a href="index.html"> <img src="../../Images/logo.png" /> </a>
                                        </div>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="row">
                                            <div class="menumain">
                                                <div id="cssmenu">
                                                    <ul>
                                                        <li><a class="active" href="index.html">How it Works</a></li>
                                                        <li><a href="#">Pricing </a></li>
                                                        <li><a href="#">Find a Gym </a>
                                                            <ul>
                                                                <li><a href="#">Sample1</a></li>
                                                                <li><a href="#">Sample2</a></li>
                                                                <li><a href="#">Sample3</a></li>
                                                                <li><a href="#">Sample4</a></li>
                                                                <li><a href="#">Sample5</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Locations </a></li>
                                                        <li><a href="#">Gym Owners</a></li>
                                                        <li><a href="#">Blog</a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="row">
                                    <div class="bannertxt">
                                        <h2>Visitors. <br />Business Travellers.<br /> Tourists.<br /> Expats.</h2>
                                        <h3>Access gyms anywhere in <br /> the world.</h3>

                                    </div>
                                    <div class="googleapp">
                                        <a href="#"><img src="../../Images/googleplay.png" /></a>
                                        <a href="#"><img src="images/appstore.png" /></a>
                                    </div>
                                    <h4>Let’s get training! </h4>
                                </div> */}
                            </div>
                        </div>
                    </header>
                </body>
            </html>
        )
    }
}

export default Headers;