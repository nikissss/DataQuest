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
                Healthy Choice
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
            <div className="formgroup">
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
                
                <input type="text"
                name="address" id="address"
                class="formcontrol"
                placeholder="Enter your address" required />
            </div>
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
              <p id="quest">How did you come to know about Healthy Choices?</p>  
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
                    <input type="checkbox"
                    name="prefer"
                    value="back-end-dev"
                    class="checkbox"
                    check />Consultation
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="front-end-dev"
                    class="checkbox"
                    check />Therapy
                  </label>
                  <label for="">
                    <input type="checkbox"
                    name="prefer"
                    value="app-dev"
                    class="checkbox"
                    check />Medication
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