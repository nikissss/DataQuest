import React from "react";
import "./Template.css";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";
const Template2 =() =>{
  const shareUrl="http://youtube.com";
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
        <form action=" " id="surveyform">
           
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
                name="email"s id="email"
                class="formcontrol"
                placeholder="Enter your email" required />
            </div>
            {/* <div className="formgroup">
                <label for="number">Phone Number</label>
                <input type="number"
                name="phone" id="phone"
                class="formcontrol"
                placeholder="Enter your phone number" 
                 required />
            </div>
            <div className="formgroup">
                <label for="address" >Address</label>
                    {/* <span className="clue" >(optional)</span> */}
                
                {/* <input type="text"
                name="address" id="address"
                class="formcontrol"
                placeholder="Enter your address" required />
            </div>  */}
            <div class="formgroup">
                <p id="quest">Which of these do you experience most?</p>
                <select name="role" id="dropdown" class="formcontrol" required >
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
                check />friends
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="tv-ads"
                class="inputRadio"
                check />Tv-ads
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="socialmedia"
                class="inputRadio"
                check />Social media
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="newspapers"
                class="inputRadio"
                check />Newspapers
              </label>
              <label for="">
                <input type="radio"
                name="source"
                value="other"
                class="inputRadio"
                check />Other
              </label>
            </div>


            <div class="formgroup">
                <p id="quest">Which treatment do you think would be the most comfortable and preferable?</p>
                <label for="">
                    <input type="radio"
                    name="prefer"
                    value="back-end-dev"
                    class="inputRadio"
                    check />Consultation
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="front-end-dev"
                    class="inputRadio"
                    check />Therapy
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Medication
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="other"
                    class="inputRadio"
                    check />Other
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">How often have you experienced feelings of sadness or hopelessness in the past month?</p>
                <label for="">
                    <input type="radio"
                    name="prefer"
                    value="back-end-dev"
                    class="inputRadio"
                    check />Not at all
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="front-end-dev"
                    class="inputRadio"
                    check />Rarely
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Occasionally
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Frequently
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="other"
                    class="inputRadio"
                    check />Almost constantly
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Have you experienced any changes in appetite or sleep patterns recently?</p>
                <label for="">
                    <input type="radio"
                    name="prefer"
                    value="back-end-dev"
                    class="inputRadio"
                    check />No changes
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="front-end-dev"
                    class="inputRadio"
                    check />Slight changes
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Moderate changes
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Significant Changes
                  </label>
            </div>
            
            <div class="formgroup">
                <p id="quest">Have you ever had an panic attack or felt overwhelmed by anxiety?</p>
                <label for="">
                    <input type="radio"
                    name="prefer"
                    value="back-end-dev"
                    class="inputRadio"
                    check />No, never
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="front-end-dev"
                    class="inputRadio"
                    check />Yes, but only once
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Yes, a few times
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Yes, frequently
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Have you ever had suicidal thoughts or made attempts to harm yourself?</p>
                <label for="">
                    <input type="radio"
                    name="prefer"
                    value="back-end-dev"
                    class="inputRadio"
                    check />No, never
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="front-end-dev"
                    class="inputRadio"
                    check />Yes, but only once
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Yes, a few times
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Yes, frequently
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Do you have a support system of family or friends that you feel comfortable talking to about your mental health?</p>
                <label for="">
                    <input type="radio"
                    name="prefer"
                    value="back-end-dev"
                    class="inputRadio"
                    check />No, I don't have a support system
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="front-end-dev"
                    class="inputRadio"
                    check />Yes, but I don't feel comfortable talking to them
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Yes, and I feel somewhat comfortable talking to them
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Yes, and I feel very comfortable talking to them
                  </label>
            </div>

            <div class="formgroup">
                <p id="quest">Have you ever sought professional help for mental health concerns?</p>
                <label for="">
                    <input type="radio"
                    name="prefer"
                    value="back-end-dev"
                    class="inputRadio"
                    check />Not at all
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="front-end-dev"
                    class="inputRadio"
                    check />Rarely
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Occasionally
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="app-dev"
                    class="inputRadio"
                    check />Frequently
                  </label>
                  <label for="">
                    <input type="radio"
                    name="prefer"
                    value="other"
                    class="inputRadio"
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
export default Template2;