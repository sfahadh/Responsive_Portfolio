import React from 'react';
import './Projects.css'

function Project() {
    return (
        <div className="project-background">
            <div className="projects-header">
                <h1>Matrix into my Project World</h1>
            </div>
            <div id="projects">
                <div className="projects-card project-1">
                    <img alt="me" src={require("../../Images/breaking-bricks-home.png")}/>
                    <div className="projects-info">
                        <h1 id="breaking-bricks-header">Breaking Bricks</h1>
                        <hr/>
                        <p>A classic arcade game with a twist. With the combination of the Breaking Bad theme and Mario theme, I present to you the recreation of "Brick Breakers" into, "Breaking Bricks." </p>
                        <div className="app-links">
                            <h5 className="app-link"><strong>Github Link:</strong></h5><a href="https://github.com/sfahadh/Breaking-Brick" target="_blank" rel="noopener noreferrer">See the code</a>
                            <br/>
                            <h5 className="app-link"><strong>Game Link:</strong></h5><a href="http://fahad-breaking-bricks.surge.sh/" target="_blank" rel="noopener noreferrer">Play Now</a>
                        </div>
                        <p id="side-note"><em>* This game will immediately start when the start button is clicked. Move the left and right arrow key to move the paddle. To play again, refresh the page.</em></p>
                    </div>
                </div>

                <div className="projects-header in-between"></div>

                <div className="projects-card project-2">
                    <img alt="me" src={require("../../Images/lifters-paradise.png")}/>
                    <div className="projects-info">
                        <h1 id="lifters-paradise-header">Lifters Paradise</h1>
                        <hr/>
                        <p>A workout logger in which users can login and/or register for an acoount to track the exercises they are doing with the number of weights, sets, repetitions, and rate of perceived exertion the user is doing.</p>
                        <div className="app-links">
                            <h5 className="app-link"><strong>Github Link:</strong></h5><a href="https://github.com/sfahadh/Lifters-Paradise" target="_blank" rel="noopener noreferrer">See the code</a>
                            <br/>
                            <h5 className="app-link"><strong>Website Link:</strong></h5><a href="https://lifters-paradise.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Now</a>
                        </div>
                        <p id="side-note"><em>* When adding or updating an exercises, click outside the pop-up window or modal to exit it.</em></p>
                    </div>
                </div>

                <div className="projects-header in-between"></div>
                
                <div className="projects-card project-3">
                    <img alt="me" src={require("../../Images/nutri-gainz.png")}/>
                    <div className="projects-info">
                        <h1 id="nutri-gainz-header">Nutri Gainz</h1>
                        <hr/>
                        <p>A nutrition tracker website that allows user to look for a food and it's nutrient contents, which includes the number of calories, protein, carbs, and fats. </p>
                        <div className="app-links">
                            <h5 className="app-link"><strong>Github Link:</strong></h5><a href="https://github.com/sfahadh/Food-Content-App" target="_blank" rel="noopener noreferrer">See the code</a>
                            <br/>
                            <h5 className="app-link"><strong>Website Link:</strong></h5><a href="https://food-database-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Now</a>
                        </div>
                        <p id="side-note"><em>* You can only select a limited amount of food to check it's nutrient contents. And you must wait for the data to finish loading before looking for food</em></p>
                    </div>
                </div>

                <div className="projects-header in-between"></div>

                <div className="projects-card project-4">
                    <img alt="me" src={require("../../Images/leisurely-slackers.png")}/>
                    <div className="projects-info">
                        <h1 id="leisurely-slackers-header">Leisurely Slacking</h1>
                        <hr/>
                        <p>A travelling website in which users can view different destinations around the world, add or delete a review of the hotels the user has been to, and update any bars the user has been to as well.</p>
                        <div className="app-links">
                            <h5 className="app-link"><strong>Github Link:</strong></h5><a href="https://github.com/sfahadh/Leisurely-Slacking" target="_blank" rel="noopener noreferrer">See the code</a>
                            <br/>
                            <h5 className="app-link"><strong>Website Link:</strong></h5><a href="fh-slackers.surge.sh" target="_blank" rel="noopener noreferrer">View Now</a>
                        </div>
                        <p id="side-note"><em>* There is a map in the bars page and to avoid continuously zooming into the map, you would have to quickly drag your mouse over it to see the rest of the page</em></p>
                    </div>
                </div>

                <div className="projects-header in-between"></div>

                <div className="projects-card project-5">
                    <img alt="me" src={require("../../Images/fitness-blog-home.png")}/>
                    <div className="projects-info">
                        <h1 id="fitness-blog">Fitness Blog</h1>
                        <hr/>
                        <p>A fitness blog that showcases my research papers that I've written, my personal training/coaching services, and an online Total Daily Energy Expenditure calculator.</p>
                        <div className="app-links">
                            <h5 className="app-link"><strong>Github Link:</strong></h5><a href="https://github.com/sfahadh/My-Fitness-Blog" target="_blank" rel="noopener noreferrer">See the code</a>
                            <br/>
                            <h5 className="app-link"><strong>Website Link:</strong></h5><a href="https://fahadhussain-fitnessblog.netlify.com/index.html" target="_blank" rel="noopener noreferrer">View Now</a>
                        </div>
                        <p id="side-note"><em>* This is more like a basic structure of my fitness blog and this will soon be recreated into a more professional web page</em></p>
                    </div>
                </div>

            <div className="projects-header in-between"></div>

                <div className="projects-card project-6">
                    <img alt="me" src={require("../../Images/mortal-tic-tac-toe.png")}/>
                    <div className="projects-info">
                        <h1 id="tic-tac-toe">Mortal Tic-Tac-Toe</h1>
                        <hr/>
                        <p>A brutal tic-tac-toe game where a video displays of a fatality win for when Scorpion wins and for when Sub-Zero wins</p>
                        <div className="app-links">
                            <h5 className="app-link"><strong>Github Link:</strong></h5><a href="https://github.com/sfahadh/Tic-tac-toe" target="_blank" rel="noopener noreferrer">See the code</a>
                            <br/>
                            <h5 className="app-link"><strong>Website Link:</strong></h5><a href="https://fahadhussain-tictactoe.netlify.com/" target="_blank" rel="noopener noreferrer">View Now</a>
                        </div>
                        <p id="side-note"><em>* After the video is displayed when a winner is decided, you must manually refresh the page to play the game over again</em></p>
                    </div>
                </div>

                <div className="projects-header in-between"></div>

                <div className="projects-card project-7">
                    <img alt="me" src={require("../../Images/high-card-wins.png")}/>
                    <div className="projects-info">
                        <h1 id="high-card-wins">High Card Wins</h1>
                        <hr/>
                        <p>A card game in which the user duels against an AI. The winner is officially decided when either the player or the AI wins 5 times.</p>
                        <div className="app-links">
                            <h5 className="app-link"><strong>Github Link:</strong></h5><a href="https://github.com/sfahadh/High-card-wins" target="_blank" rel="noopener noreferrer">See the code</a>
                            <br/>
                            <h5 className="app-link"><strong>Website Link:</strong></h5><a href="https://fahadhussain-highcardwins.netlify.com/" target="_blank" rel="noopener noreferrer">View Now</a>
                        </div>
                        <p id="side-note"><em>* The game will immediately start at the start of the page and a point will be awarded to either player 1 or player 2</em></p>
                    </div>
                </div>

                <div className="projects-header in-between"></div>
            </div>
        </div>
    )
}

export default Project