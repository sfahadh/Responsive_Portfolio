import React from 'react';
import './AboutMe.css'

function Summary() {
    return (
        <div className="about-me-page">
            <div className="skills-experiences">
                <div className="skills-education">
                    <div className="skills">
                        <h1>Skills</h1>
                        <hr/>
                        <div id="list-of-skills">
                            <div id="skills-left">
                                <p>JavaScript</p>
                                <p>Ruby</p>
                                <p>Java</p>
                                <p>HTML5</p>
                                <p>CSS3</p>
                            </div>
                            <div id="skills-middle">
                                <p>React</p>
                                <p>Canvas</p>
                                <p>Bootstrap</p>
                                <p>Sass</p>
                            </div>
                            <div id="skills-right">
                                <p>Express</p>
                                <p>Ruby on Rails</p>
                                <p>SQL</p>
                                <p>Sequelize</p>
                                <p>RESTful APIs</p>
                            </div>
                        </div>
                    </div>
                    <div className="education">
                        <h1>Education</h1>
                        <hr/>
                        <p className="align-left-title education-type top-education">Per Scholas/General Assembly</p>
                        <h6>Certification of Completion, Software Engineering Immersive</h6>
                        <br/>
                        
                        <p className="align-left-title education-type">City University of New York (CUNY) Lehman College</p>
                        <h6>Bachelor's Degree in Exercise Science</h6>
                        <h6><em>Cum Laude Honors</em> with 3.8 Cumulative GPA</h6>
                        <br/>

                        <p className="align-left-title education-type">National Strength & Conditioning Association</p>
                        <h6>Certified Strength & Conditioning Specialist</h6>
                    </div>
                </div>
                
                <div className="about-me-info experiences">
                    <h1>Experiences</h1>
                    <hr/>

                    <p className="align-left-title">Personal Trainer | New York Sports Club</p>
                    <ul>
                        <li>Interacted with members to promote training services by quickly establishing rapport and setting up fitness assessments</li>
                        <li>Performed assessments on clients and evaluated the results to then determine a training package that best fits their goals</li>
                        <li>Educated/trained over 300 clients and potential clients on proper movement mechanics and nutrition fundamentals</li>
                        <li>Encouraged clients to live a healthier lifestyle such as engaging in group classes offered at the gym and eating out less</li>
                        <li>Improved the health and wellbeing of clients of all ages ranging from 16 to 80 years old as well as clients of all fitness levels</li>
                    </ul>

                    <p className="align-left-title">Research Assistant | Lehman College</p>
                    <ul>
                        <li>Engaged with students on campus and convinced them to participate as subjects to a 3x a week, 8-week study</li>
                        <li>Motivated subjects to remain in the study and follow the protocols such as reaching 10 reps to failure in each set</li>
                        <li>Ensured safety of the subjects when engaging in resistance training and/or cardio by following up with questions of they feel</li>
                        <li>Taught subjects on proper exercise techniques, VO2 max, 1RM, and submaximal testing.</li>
                    </ul>

                    <p className="align-left-title">Volunteer | Sports Therapy And Rehabilitation</p>
                    <ul>
                        <li>Educated and motivated patients by properly demonstrating the correct way to perform the prescribed exercises</li>
                        <li>Looked through scientific journals and research papers on certain rehabilitation modalities, gait pattern, and health conditions</li>
                        <li>Studied the work of Physical Therapists, the quality of service provided, and the healthcare space needed to run this business</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Summary