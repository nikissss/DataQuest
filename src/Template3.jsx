import React, {useState }from "react";
import axios from "axios";
import "./Template.css";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";
const Template3 = () =>{

  const [formData, setFormData] = useState({
  name: "",
  email:"",
  role: "",
  interestedinCoding: "",
  preferablecodinglanguage: "",
  uptodateby: "",
  approachproblem: "",
  managingtime: "",
  LikeToSeeImproved: "",
  advice: "", 

});

const handleInputChange = (event) => {
  const { name, value, type } = event.target;

  if (type === 'select-one') {
    setFormData({
      ...formData,
      [name]: value,
    });
  } else if (type === 'radio') {
    setFormData({
      ...formData,
      [name]: value,
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};


const handleSubmit = (event) => {
  event.preventDefault();
  axios
    .post("http://localhost:5000/submit-form3", formData)
    .then((response) => {
      console.log(response.data);
      alert("Form Submitted");
    })
    .catch((error) => {
      console.log(error);
      alert("Form submission failed.");
    });
};

const shareUrl = window.location.href;

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
        <form onSubmit={handleSubmit} action="" id="surveyform">
           
            <div className="formgroup">
                <label for="name">Name</label>
                <input type="text"
                name="name" id="name"
                class="formcontrol"
                onChange={handleInputChange}
                placeholder="Enter your name" required />
            </div>
            <div className="formgroup">
                <label for="email">Email</label>
                <input type="email"
                name="email" id="email"
                class="formcontrol"
                onChange={handleInputChange}
                placeholder="Enter your email" required />
            </div>
            
            
            <div class="formgroup">
                <p id="quest">Which option best describe your current job?</p>
                <select name="role" id="dropdown" class="formcontrol" required onChange={handleInputChange}>
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
                name="interestedinCoding"
                value="school"
                class="inputRadio"
                onChange={handleInputChange}
                check required />Through a school or university course
              </label>
              <label for="">
                <input type="radio"
                name="interestedinCoding"
                value="friend"
                class="inputRadio"
                onChange={handleInputChange}
                check />Through a friend or family member who codes
              </label>
              <label for="">
                <input type="radio"
                name="interestedinCoding"
                value="online"
                class="inputRadio"
                onChange={handleInputChange}
                check />Through an online tutorial or coding platform
              </label>
              <label for="">
                <input type="radio"
                name="interestedinCoding"
                value="self"
                class="inputRadio"
                onChange={handleInputChange}
                check />Through self-exploration and curiosity
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">Which coding language do you prefer to work with?</p>  
              <label for="">
                <input type="radio"
                name="preferablecodinglanguage"
                value="python"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Python
              </label>
              <label for="">
                <input type="radio"
                name="preferablecodinglanguage"
                value="java"
                class="inputRadio"
                onChange={handleInputChange}
                check />Java
              </label>
              <label for="">
                <input type="radio"
                name="preferablecodinglanguage"
                value="javascript"
                class="inputRadio"
                onChange={handleInputChange}
                check />Javascript
              </label>
              <label for="">
                <input type="radio"
                name="preferablecodinglanguage"
                value="other"
                class="inputRadio"
                onChange={handleInputChange}
                check />Other
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">How do you stay up-to-date with the latest coding trends and technologies?</p>  
              <label for="">
                <input type="radio"
                name="uptodateby"
                value="attend"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Attend conferences or meetups
              </label>
              <label for="">
                <input type="radio"
                name="uptodateby"
                value="read"
                class="inputRadio"
                onChange={handleInputChange}
                check /> Read technical blogs or articles
              </label>
              <label for="">
                <input type="radio"
                name="uptodateby"
                value="follow"
                class="inputRadio"
                onChange={handleInputChange}
                check />Follow industry leaders on social media
              </label>
              <label for="">
                <input type="radio"
                name="uptodateby"
                value="experiment"
                class="inputRadio"
                onChange={handleInputChange}
                check />Experiment with new technologies on personal projects
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">How do you approach problem-solving when coding?</p>  
              <label for="">
                <input type="radio"
                name="approachproblem"
                value="break"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Break the problem down into smaller parts and tackle each one separately
              </label>
              <label for="">
                <input type="radio"
                name="approachproblem"
                value="search"
                class="inputRadio"
                onChange={handleInputChange}
                check /> Search for solutions online or in coding forums
              </label>
              <label for="">
                <input type="radio"
                name="approachproblem"
                value="collab"
                class="inputRadio"
                onChange={handleInputChange}
                check /> Collaborate with other developers or colleagues for input
              </label>
              <label for="">
                <input type="radio"
                name="approachproblem"
                value="try"
                class="inputRadio"
                onChange={handleInputChange}
                check />Try different approaches until a solution is found
              </label>
            </div>

            <div className="formgroup">
              <p id="quest">How do you manage your time when working on a coding project?</p>  
              <label for="">
                <input type="radio"
                name="managingtime"
                value="strict"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Set strict deadlines for each task and stick to them
              </label>
              <label for="">
                <input type="radio"
                name="managingtime"
                value="tasks"
                class="inputRadio"
                onChange={handleInputChange}
                check />Work on tasks as they come up, without a strict schedule

              </label>
              <label for="">
                <input type="radio"
                name="managingtime"
                value="imp"
                class="inputRadio"
                onChange={handleInputChange}
                check />Prioritize tasks based on importance and urgency
              </label>
              <label for="">
                <input type="radio"
                name="managingtime"
                value="break"
                class="inputRadio"
                onChange={handleInputChange}
                check />Break up work into manageable chunks and take breaks as needed
              </label>
            </div>



            <div class="formgroup">
                <p id="quest">What would you like to see improved in the Computer field?</p>
                <label for="">
                    <input type="radio"
                    name="LikeToSeeImproved"
                    value="back-end-dev"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required />Back-End-Development
                  </label>
                  <label for="">
                    <input type="radio"
                    name="LikeToSeeImproved"
                    value="front-end-dev"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check/>Front-End-Development
                  </label>
                  <label for="">
                    <input type="radio"
                    name="LikeToSeeImproved"
                    value="app-dev"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Android-App Developer
                  </label>
                  <label for="">
                    <input type="radio"
                    name="LikeToSeeImproved"
                    value="software-engineering"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Software Engineering
                  </label>
                  <label for="">
                    <input type="radio"
                    name="LikeToSeeImproved"
                    value="other"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Other
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">What advice would you give to someone just starting out in coding?</p>
                <label for="">
                    <input type="radio"
                    name="advice"
                    value="basic"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>Start with a basic coding language, like Python or HTML/CSS
                  </label>
                  <label for="">
                    <input type="radio"
                    name="advice"
                    value="join"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check/>Join a coding community or forum for support and advice
                  </label>
                  <label for="">
                    <input type="radio"
                    name="advice"
                    value="question"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Don't be afraid to ask questions or make mistakes
                  </label>
                  <label for="">
                    <input type="radio"
                    name="advice"
                    value="experiment"
                    class="inputRadio"
                    onChange={handleInputChange}
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
        <div className="shareBtns">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <FacebookMessengerShareButton url={shareUrl}>
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>
    </div>
        </>
    );

};
export default Template3;