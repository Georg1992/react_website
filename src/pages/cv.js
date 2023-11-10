import React from "react";
import profilepic from '../images/profilepic.jpg'
import { Row, Col, Container, Image } from "react-bootstrap";

const CV = () => {
    return (

        <div>
            <Container fluid className="p-3 ">
                <Row>
                    <Col className="text-center justify-content-center align-items-center d-flex flex-column    " xs="12" md="4">
                        <div>
                            <Image
                                rounded
                                src={profilepic}
                                className="img-fluid"
                                style={{ maxWidth: '50%', minWidth: '100px'}}
                                
                                

                            />
                            <h2> <b>Georg Vassilev</b></h2>
                            <div id="TextContainer">
                                <p >

                                    
                                    
                                        Kajenkuja 8 23D 00500 Helsinki <br />
                                        040 825 3839  <br />
                                        selftitled1@gmail.com <br />
                                   



                                </p>
                            </div>
                        </div>

                        <div className="">
                        <p>
                                    <h5><b>Links:</b></h5>
                                    <a href="https://github.com/Georg1992" ><b>GitHub</b></a> <br />
                                    <a href="https://www.codewars.com/users/Georg1992"><b>Codewars</b></a> <br />
                                    Ask for more if needed!
                                </p>
                        </div>

                    </Col>
                    <Col xs="12" md="4">
                        <div >
                            <h2><b>Overview</b></h2>
                            <p >

                                I am an Information Technology specialist with a background in audio and video production, focusing on multimedia and software engineering.
                                My professional competencies lie in mobile programming, sound processing, and game design. With a creative yet analytical mindset, I excel at staying focused and solving problems
                                under any circumstances. Wide knowledge of technology stack, attention to the details as well as my passion to create and to learn new things make me a great candidate for any modern company.


                            </p>

                            <h2><b>Software / System Skills</b></h2>
                            <p>

                                <b>Operating Systems:</b> Mac OSX, Linux, Windows <br />
                                <b>Software/Applications:</b> Unity 3D + Visual Studio Code, Android Studio, Logic Pro X, Steinberg Cubase, Adobe Package <br />
                                <b>Scripting and Programming Languages:</b> C#, Kotlin, Javascript (Node.js, React.js), C++, Swift, Bash <br />
                                <b>Frameworks and other tools:</b> GIT, Jira, Cooper, Grafana, Azure AD
                            </p>

                            <h2><b>Education</b></h2>
                            <p>
                                Metropolia UAS (Espoo, Finland) <br />
                                Information Technology bachelor degree <br />
                                <i>2019-2023</i> <br />
                            </p>
                            <p>
                                Metropolia UAS (Espoo, Finland) <br />
                                Media Engineering bachelor degree <br />
                                108 ECTS <br />
                                <i>2010-2014 </i> <br />
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <div >

                            <h2>
                                <b>Work History</b>
                            </h2>




                            <p>
                                <i>12.2021-present</i><br />
                                Company: RELEX Solutions <br />
                                Position: Application Support Analyst <br />

                            </p>

                            <p>
                                <i>05.2021-09.2021</i> <br />
                                Company: Big Ear <br />
                                Position: Game Developer/Sound Engineer <br />
                            </p>


                            <p>
                                <i>2010-present</i> <br />
                                Various multimedia jobs and freelancing. <br />
                                Sound production, video production. <br />
                            </p>


                            <h2><b>Main Interests</b></h2>
                            <p>
                                Audio production <br />
                                Experimental Art <br />
                                Video Games <br />
                                Science and Technology <br />
                            </p>


                            <h2><b>Language Skills</b></h2>
                            <p>
                                English (fluent) <br />
                                Russian (mother tongue) <br />
                                Finnish (upper intermediate) <br />
                                German (basic) <br />
                            </p>



                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );

};
export default CV;




















































