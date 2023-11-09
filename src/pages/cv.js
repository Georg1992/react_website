import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import profilepic from '../profilepic.jpg'
import {Text, StyleSheet} from 'react-native';
 
const CV = () => {  
    return (
        
        <div class="container-fluid">
        <div class="row">
            <div align="center" class="col-lg-4">
                <div class="idCard">

                    <div id="PicContainer">
                        <img src={profilepic} alt="pic" class="col-lg-4" />
                    </div>

                    <h2><b> Georg Vassilev</b> </h2>

                    <div id="BasicInfo">
                    <p>
                        <Text>
                        <b>
                    
                        Kaenkuja 8 23D 00500 Helsinki
                        Mob: 0408243839
                        selftitled1@gmail.com
                        
                        
                
                            
                        
                        </b>
                        </Text>
                        
                    </p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">


                <h2><b>Overview</b></h2>
                <p>
                    Currently a student at Metropolia UAS, IT department, with a background in video and audio
                    production. Aiming to find a way in the IT industry and to become a part of it, as a developer in
                    the first place, but with the artistic approach and attitude. With a focus on game mechanics, new
                    technology implementation and audiovisual production, searching for possibility to join a team of
                    like-minded people for creative cooperation.
                </p>


                <h2><b>Software / System Skills</b></h2>
                <b>Operating Systems:</b> Mac OSX, Linux, Windows 
                <b>Software/Programs:</b> Unity 3D + Visual Studio Code, Android Studio, Logic Pro X, Adobe Package
                <b>Scripting and Programming Languages:</b> C#, Kotlin, Javascript(Node, React), Swift

                <h2><b>Education</b></h2>
                
                    -Metropolia UAS (Espoo, Finland) 2018-present
                    Information Technology bachelor degree
               
                    -Metropolia UAS (Espoo, Finland) 2010-2014
                    108 ECTS
                    Media Engineering bachelor
                


                    -School No307 (St.Petersburg, Russia) 1999-2009
                



                



            </div>

            <div class="col-lg-4">
                <h2>
                    <b>Work History</b>
                </h2>
                
                    <i>2010-now</i>
                    Multimedia jobs and freelancing. Sound production, video production.
         
                
                    <i>05.2021-09.2021</i>
					Company: Big Ear
                    Position: Game Developer/Sound Engineer
         
            


                
                <h2><b>Interests and Skills</b></h2>
                -Music Composing 
                -Mixing/mastering 
                -Synth Programing 
                -Cinematography 
                -Photography
                -Art
                -Video Games
                -Science and Technology
                -Literature

                
                <h2><b>Language Skills</b></h2>
                -English (fluent)
                -Russian (mother tongue) 
                -Finnish (upper intermediate) 
                -German (basic)

               
                <h2><b>Porfolio Links:</b></h2>
                <a href="https://github.com/Georg1992" target="_blank"><b>GitHub</b></a>
                <a href="https://www.codewars.com/users/Georg1992" target="_blank"><b>Codewars</b></a>
                Ask for more if needed!

            </div>
        </div>
        </div>
    );
    
};
export default CV;