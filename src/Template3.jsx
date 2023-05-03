// import Navbar from "./Navbar";
import React from "react";
import "./Template.css";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";
const Template3 = () =>{
  const shareUrl="http://youtube.com";
    return(
        <>
 
         <div className="container">
        <header class="header">
            <h1 id="title">
                Survey form for 
            </h1>
            <p id="description">
               Preference for Coding
            </p>
        </header>
        <form action="" id="surveyform">
           
            <div className="formgroup">
                <label for="name">Name</label>
                <input type="text"
                name="name" id="name"
                class="formcontrol"
                placeholder="Enter your name" required />
            </div>
            <div className="formgroup">
                <label for="email">Email</label>
                <input type="email"
                name="email" id="email"
                class="formcontrol"
                placeholder="Enter your email" required />
            </div>
            
            
            <div class="formgroup">
                <p id="quest">Which option best describe your current job?</p>
                <select name="role" id="dropdown" class="formcontrol" required >
                <option value="" disabled selected>Select current role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="job">Freelancer</option>
                <option value="other">Other occupations</option>
                </select>
            </div>
            
            <div className="formgroup">
              <p id="quest">How did you get interested in coding?</p>  
              <label for="">
                <input type="radio"
                name="source"
                value="friends"
                class="inputRadio"
                check />Through a school or university course
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                check />Through a friend or family member who codes
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                check />Through an online tutorial or coding platform
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                check />Through self-exploration and curiosity
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">Which coding language do you prefer to work with?</p>  
              <label for="">
                <input type="radio"
                name="source"
                value="friends"
                class="inputRadio"
                check />Python
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                check />Java
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                check />Javascript
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                check />Other
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">How do you stay up-to-date with the latest coding trends and technologies?</p>  
              <label for="">
                <input type="radio"
                name="source"
                value="friends"
                class="inputRadio"
                check />Attend conferences or meetups
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                check /> Read technical blogs or articles
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                check />Follow industry leaders on social media
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                check />Experiment with new technologies on personal projects
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">How do you approach problem-solving when coding?</p>  
              <label for="">
                <input type="radio"
                name="source"
                value="friends"
                class="inputRadio"
                check />Break the problem down into smaller parts and tackle each one separately
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                check /> Search for solutions online or in coding forums
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                check /> Collaborate with other developers or colleagues for input
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                check />Try different approaches until a solution is found
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">How do you manage your time when working on a coding project?</p>  
              <label for="">
                <input type="radio"
                name="source"
                value="friends"
                class="inputRadio"
                check />Set strict deadlines for each task and stick to them
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                check />Work on tasks as they come up, without a strict schedule

              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                check />Prioritize tasks based on importance and urgency
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                check />Break up work into manageable chunks and take breaks as needed
              </label>
            </div>



            <div class="formgroup">
                <p id="quest">What would you like to see improved in the Computer field?</p>
                <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="back-end-dev"
                    class="checkbox"
                    check />Back-End-Development
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="front-end-dev"
                    class="checkbox"
                    check/>Front-End-Development
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="app-dev"
                    class="checkbox"
                    check />Android-App Developer
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="software-engineering"
                    class="checkbox"
                    check />Software Engineering
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="other"
                    class="checkbox"
                    check />Other
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">What advice would you give to someone just starting out in coding?</p>
                <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="back-end-dev"
                    class="checkbox"
                    check />Start with a basic coding language, like Python or HTML/CSS
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="front-end-dev"
                    class="checkbox"
                    check/>Join a coding community or forum for support and advice
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="app-dev"
                    class="checkbox"
                    check />Don't be afraid to ask questions or make mistakes
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="software-engineering"
                    class="checkbox"
                    check />Experiment with personal projects to explore your interests and learn new skills.
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Give us your feedback</p>
                <textarea name="feedback" id="feedback" cols="30" rows="5" placeholder="Any feedback is appreciated!"></textarea>
            </div>
            <div class="formgroup">
                <button type="submit" id="submit" class="btn">Submit</button>

            </div>
        </form>
        <FacebookShareButton url={shareUrl} quote={"Title"}>
          <FacebookIcon size={40}/>
        </FacebookShareButton>
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon size={40}/>
        </FacebookMessengerShareButton>
    </div>
        </>
    );

};
export default Template3;