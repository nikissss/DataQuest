import React, {useState }from "react";
import axios from "axios";
import "./Template.css";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";
const Template2 =() =>{

  const [formData, setFormData] = useState({
      name: "",
      email: "",
      role: "",
      source: "",
      preferabletreatment: "",
      feelingsofsadness: "",
      changesinappetite: "",
      panicAttack: "",
      suicidalthoughts: "",
      supportSystem: "", 
      professionalHelp: "",

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
      .post("http://localhost:5000/submit-form2", formData)
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
  // const shareMessage = "Check out this survey form for Economic Condition!";


    return(
        <>
 
         <div className="container">
        <header class="header">
            <h1 id="title">
                Survey form for 
            </h1>
            <p id="description">
                Mental Health
            </p>
        </header>
        <form onSubmit={handleSubmit} action=" " id="surveyform">
           
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
                name="email"s id="email"
                class="formcontrol"
                onChange={handleInputChange}
                placeholder="Enter your email" required />
            </div>
            
            <div class="formgroup">
                <p id="quest">Which of these do you experience most?</p>
                <select name="role" id="dropdown" class="formcontrol" required onChange={handleInputChange}>
                <option value="" disabled selected>Select current condition</option>
                <option value="student">Anxiety</option>
                <option value="teacher">Depression</option>
                <option value="job">Mood Swings</option>
                <option value="othert">Other</option>
                </select>
            </div>


            <div className="formgroup">
              <p id="quest">How did you come to know about Mental Health Choices?</p>  
              <label for="">
                <input type="radio"
                name="source"
                value="friends"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>friends
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                onChange={handleInputChange}
                check />Tv-ads
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                onChange={handleInputChange}
                check />Social media
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                onChange={handleInputChange}
                check />Newspapers
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="other"
                class="inputRadio"
                onChange={handleInputChange}
                check />Other
              </label>
              
            </div>


            <div class="formgroup">
                <p id="quest">Which treatment do you think would be the most comfortable and preferable?</p>
                <label for="">
                    <input type="radio"
                    name="preferabletreatment"
                    value="consultation"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>Consultation
                  </label>
                  <label for="">
                    <input type="radio"
                    name="preferabletreatment"
                    value="therapy"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Therapy
                  </label>
                  <label for="">
                    <input type="radio"
                    name="preferabletreatment"
                    value="medication"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Medication
                  </label>
                  <label for="">
                    <input type="radio"
                    name="preferabletreatment"
                    value="other"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Other
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">How often have you experienced feelings of sadness or hopelessness in the past month?</p>
                <label for="">
                    <input type="radio"
                    name="feelingsofsadness"
                    value="null"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>Not at all
                  </label>
                  <label for="">
                    <input type="radio"
                    name="feelingsofsadness"
                    value="rarely"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Rarely
                  </label>
                  <label for="">
                    <input type="radio"
                    name="feelingsofsadness"
                    value="occasionally"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Occasionally
                  </label>
                  <label for="">
                    <input type="radio"
                    name="feelingsofsadness"
                    value="frequently"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Frequently
                  </label>
                  <label for="">
                    <input type="radio"
                    name="feelingsofsadness"
                    value="almost"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Almost constantly
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Have you experienced any change in appetite or sleep patterns recently?</p>
                <label for="">
                    <input type="radio"
                    name="changesinappetite"
                    value="no"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>No changes
                  </label>
                  <label for="">
                    <input type="radio"
                    name="changesinappetite"
                    value="alikati"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Slight changes
                  </label>
                  <label for="">
                    <input type="radio"
                    name="changesinappetite"
                    value="halka"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Moderate changes
                  </label>
                  <label for="">
                    <input type="radio"
                    name="changesinappetite"
                    value="derai"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Significant Changes
                  </label>
            </div>
            
            <div class="formgroup">
                <p id="quest">Have you ever had an panic attack or felt overwhelmed by anxiety?</p>
                <label for="">
                    <input type="radio"
                    name="panicAttack"
                    value="chaina"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>No, never
                  </label>
                  <label for="">
                    <input type="radio"
                    name="panicAttack"
                    value="ekchati"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, but only once
                  </label>
                  <label for="">
                    <input type="radio"
                    name="panicAttack"
                    value="kailekai"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, a few times
                  </label>
                  <label for="">
                    <input type="radio"
                    name="panicAttack"
                    value="derai"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, frequently
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Have you ever had suicidal thoughts or made attempts to harm yourself?</p>
                <label for="">
                    <input type="radio"
                    name="suicidalthoughts"
                    value="no"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>No, never
                  </label>
                  <label for="">
                    <input type="radio"
                    name="suicidalthoughts"
                    value="ekchati"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, but only once
                  </label>
                  <label for="">
                    <input type="radio"
                    name="suicidalthoughts"
                    value="kailekai"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, a few times
                  </label>
                  <label for="">
                    <input type="radio"
                    name="suicidalthoughts"
                    value="derai"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, frequently
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Do you have a support system of family or friends that you feel comfortable talking to about your mental health?</p>
                <label for="">
                    <input type="radio"
                    name="supportSystem"
                    value="no"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>No, I don't have a support system
                  </label>
                  <label for="">
                    <input type="radio"
                    name="supportSystem"
                    value="yesnocomfy"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, but I don't feel comfortable talking to them
                  </label>
                  <label for="">
                    <input type="radio"
                    name="supportSystem"
                    value="yesalilcomfy"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, and I feel somewhat comfortable talking to them
                  </label>
                  <label for="">
                    <input type="radio"
                    name="supportSystem"
                    value="yescomfy"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Yes, and I feel very comfortable talking to them
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Have you ever sought professional help for mental health concerns?</p>
                <label for="">
                    <input type="radio"
                    name="professionalHelp"
                    value="no"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check required/>Not at all
                  </label>
                  <label for="">
                    <input type="radio"
                    name="professionalHelp"
                    value="rarely"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Rarely
                  </label>
                  <label for="">
                    <input type="radio"
                    name="professionalHelp"
                    value="occasionally"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Occasionally
                  </label>
                  <label for="">
                    <input type="radio"
                    name="professionalHelp"
                    value="frequently"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Frequently
                  </label>
                  <label for="">
                    <input type="radio"
                    name="professionalHelp"
                    value="constant"
                    class="inputRadio"
                    onChange={handleInputChange}
                    check />Almost constantly
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
        <div className="share">
        <h3>Share this form with others</h3>
        <div className="shareBtns">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <FacebookMessengerShareButton url={shareUrl}>
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>
      </div>
    </div>
        </>
    );

};
export default Template2;