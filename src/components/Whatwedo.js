import React from "react";
import '../css/Whatwedo.css';
import {FaTwitter} from "react-icons/fa";

function WhatWeDo(){
    return(
        <div>
        <h2 class="what-we-do-heading">What we do?</h2>
            <section class="container main-container whatwedostyle">
                    
                <div class="choices">
                    <div class="left-top">
                        <div class="left-top-circle">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAADr6+tPT09HR0dra2sLCwv7+/v39/f09PQFBQUUFBQyMjJXV1ciIiI1NTUqKio/Pz+xsbFhYWHExMTk5OQWFhbS0tK+vr6Kioo8PDyqqqpTU1MkJCTKyspwcHCcnJza2tqBgYF2dnaSkpKioqJkZGSNjY3qYzU8AAAF0ElEQVR4nO2d63qiMBCGiygoB+uhaldb66nu/d/h1liXGRIkBJMMPvP+rFrnkyRzIBleXhiGYRiGcUM8m0/SaByeer4tacdsHPwSHYa+jTEnPgeAbOHbHmPyADHuqpI/QYl17NskIxZJWUiw822TEV+SjmDcxUsSp7KQ4N23VQasFDqCg2+rDNiohOS+rTJgpxLS922VAd8qIR++rTLgTSXk6NsqA4aRQsjMt1Um5LKOtJOB4/Y5Vt8fBmUd45Fvk8wYvWId0cq3Rab01miCvPm2x5z4UETAYVezkSuLQyZmx3nr25L2DPf7jlceGIZ5ft6OYX+w6WKpAbGfXn3gZxdrDYDV//pJsvFtSxtG4yK+Sva+rWkBqpSGvq1pwQQKSbobnYxwEtLd+b7AQro73Z/mijzNHMGrVhdLizdGn6De0GU/8jSe/WfhusVaHa6b/LI9huFg1vnol2Eewmbeb86c3HrWK1WqtVnT8vlxZqgjCDJSi5ry3q0mO9/GQ/othJC6Vz2pt7eSiW/jIet6eyuZ+jYecmghhNSt0d7SWMeS1vq7Ve1m0iGldg9r8TWJBGDDXFSmeCm5/mFypHU9IPPC2rKRveKlgRfbGsFCqMFCqMFCqPE0QnIWQgwWQg0WQo2nEfLBQojBQqgRshBisBBqsBBq9FkIMVgINVgINVgINaYshBgshBpPI2TNQojBQqjxNEJeWQgxWAg1WAg1MhZCDBZCjAXYSlpudgROi9JvhARus0fSi1F3LsmsMFWx6R1uoae2cRkD2woEJ+lleOx1QuoATBnY7zOSp0EPNqQjtbm/xBY2YP2reAO8JIQbQaCTVq+17yB1cASBfm91gzZ0zXZOrdNnD2dAVU9JOItSokcV4Imxz6pWjGhdo9mcFXUtre7xAD0NyRaa6HTS/M4bYStNipEK2IF9f/D34Ckmeu1Z3+GI+b77VniMNKEWqQxBq4ras56gYE/sqC4+iFjbc2NfFwD4YwVN+1P7diSbVCtNGJ9rDJYYnu2ldOj4BGe6zvRFDabvLw0ugelt8KX1EdgEmM4hV7BDVtfFjXTdp0uMgg7UGJ9G0yoUBuq3bQJbBqtDTKfA4d5gLV3oBP0uQV3Idw0+CJe6ijTMJSh5XTf6KHQ+ysTYKRrpbRUoHJBrR27ZSwWeVX+8PuhNlaPZ7LICTG8nl7Xnml8luU6tB4XMfptrovRWNDa75X/JQMNfoyTGZz8klOydL38BzjHVGPYwrVx6THuRHZcrgCKPIKuNH9Ev4a9AL4+M8gMhznXjSx6bHpDTW/nxL+mpJjtBq4WntFdaPYeqXkif9yexvH47ZyVl3hUdhDJlRDzcHIT/9F+gh83aRHq7l5/qdhszu9KKNNrk0e9l9F6gRzGfWJ7u9aaK8s1t3i9mx/WvZOEEPRfo5fS2tn3beJrnYYaeoiQGHSrQO49UYF4k0tueST8n4QS9Fujl9FbxmCcNBup/5gzkwXPJmAagAO2C2wI99OCi9I6GRxOEE0TDUq+e9Bjk9PYYmCKcIFoo3BXoUcVTLP2rShdSy9UJ+inQHyQ7TDuZXhC/xL5ZFfwxoC8VI+NUNq4Ru/KP46oXOBwGYq4uVI8K1EesFh4K9HIK8RG0Q6zfzgv0d9NbQ4QThE+odrGVQEqzjV1IgXCCjgv0cnpr7kIKhBN0WqAfwp9fROEtXEjBNQ9AgajlAr1cHGzTs7ggk1Y/uwV6FJuIulXpgSnGiHVKTtZsIRfQHyXkWs2DEYLNAj28ILfS+2a6TNrTvwbvaMJZLHPBGWJnDMNvsBjPg5FlaVWBRT+LYwu4LFvrPPBTqaWveIFbwu39WsV8l7ekP4wizEr6oR2AW1raE9Imf2pOs1urjfiq//YHYtG3K58abw2bt0vMn87RnMyiDhzEW8ZuIC89bN0alut08WOi9npC28Wt+FxvxAMYOCjSzdo8NUWPiaOS/PsgSx8QuqtJswGNDXUMwzAMw/jkH8oVURRv0sB2AAAAAElFTkSuQmCC" alt="image1" />
                            
                        </div>

                        <div class="left-top-text">
                            <h3>Research and Incubation Hub</h3>
                            <p>Rabvik® innovations objective is to "serve" as a "promoter" of world class innovation hubs.</p>
                        </div>
                    </div>

                    <div class="right-top">
                        <div class="right-top-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHUfGJDk0bovcEW4ejNe1unr08WoBUIrtsg&usqp=CAU" alt="image2" />
                        </div>

                        <div class="right-top-text">
                            <h3>Research and Incubation Hub</h3>
                            <p>Rabvik® innovations objective is to "serve" as a "promoter" of world class innovation hubs.</p>
                        </div>
                    </div>

                    <div class="right-bottom">
                        <div class="right-bottom-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAK2Wn2CwQo4Dy7vV8jvNV866Wmf1UeVXaOQ&usqp=CAU"   
                             alt="image3" />
                        </div>

                        <div class="right-bottom-text">
                            <h3>School Partnership Program</h3>
                            <p>Rabvik® provides end-to-end solutions to enable schools to set up Rabvik® Innovation Labs. to train students to excel in design thinking, problem solving and technology and help them become innovators and scientists from a tender age</p>
                        </div>
                    </div>

                    <div class="left-bottom">
                        <div class="left-bottom-circle">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzj3naCbbHCJn0dk2vfGcTMIu4YYUoXLsQQ&usqp=CAU" alt="image4" />
                        </div>

                        <div class="left-bottom-text">
                            <h3>Incubation & Entrepreneurship Development</h3>
                            <p>Rabvik® Innovations objective is to serve as a platform for promotion of world-class Innovation Hubs, Grand Challenges, Start-up businesses

</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WhatWeDo;