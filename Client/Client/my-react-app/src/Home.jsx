import React from "react";
import BgIcon from './assets/bg_1.png';
import artistsIcon from "./assets/Diwas_Gurung.jpg"
import LandscapeIcon from "./assets/Cov1.jpg"
import SquareIcon from "./assets/Song_Cover.jpg"
import prevIcon from "./assets/prev.png"
import nextIcon from "./assets/next.png"
import merchIcon from "./assets/white_tote_ltd.jpg"



function Home(){
    return(

       
    
    <div id="MainBody">
            <div className="first_bg">
                <img src={BgIcon} />
            </div>

            {/* <!-- ARTISTS SECTION --> */}
            <section className="artists">
                <div className="artistsimg">
                <img src={artistsIcon} alt="" />
                </div>
                <div className="button1">
                    <button className="artistsbtn" onclick="loadContent('artists.html')">
                        View All Artists
                    </button>
                </div>

            </section>

            {/* <!-- Albums section --> */}
            
            <section className="albums">
                <div className="newrelease">
                                                                HOT RELEASES                                                

                </div>
                <div className="albuminfo">
                    <div className="landscape">
                        <a href="#"><img src={LandscapeIcon} alt="" /></a>
                    
                    </div>
                    <div className="square">
                        <a href="#"><img src={SquareIcon}alt="" /></a>
                            <div className="scrollbtn">
                                <button className="prev">
                                    <a href="#"><img src={prevIcon} alt="" /></a>
                                </button>
                                <button className="next">
                                    <a href="#"> <img src={nextIcon} alt="" /></a>
                                </button>
                            </div>
                    </div>
                </div>
            </section>

            <section className="spacing">

            </section>

            <section className="merches">
                <div className="merchtext">

                    MERCHES
                    
                </div>


                <div className="catalogue">
                    <p className="vertical-text">
                        MUSIC
                    </p>

                    <p className="horizontal-text">
                        FRESH PICKS
                    </p>
                
                    <div className="merchscroll">
                        
                            <li><a href="#"><img src={merchIcon} alt="" /></a></li>
                            <li><a href="#"><img src={merchIcon} alt="" /></a></li>
                            <li><a href="#"><img src={merchIcon} alt="" /></a></li>
                    </div>
                </div>
                <div className="button1">
                    <button className ="artistsbtn">
                        View All
                    </button>
                </div>
            </section>
    </div>
    

    );
}


export default Home