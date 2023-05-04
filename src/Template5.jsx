import React from "react";
 import "./Template.css";
 import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";

const Template5 = () => {
    const shareUrl="http://youtube.com";
    return (
      <>
  
        <div className="container">
          <header class="header">
            <h1 id="title">
              Survey form for
            </h1>
            <p id="description">
              Education
            </p>
          </header>
          <form action="" id="surveyform">
  
            <div className="formgroup">
              <label for="name">Name</label>
              <input type="text"
                name="name" id="name"
                class="formcontrol"
                placeholder="enter your name" required />
            </div>
  
            <div className="formgroup">
                  <label for="email">Email</label>
                  <input type="email"
                  name="email"s id="email"
                  class="formcontrol"
                  placeholder="Enter your email" required />
              </div>
  
            <div className="formgroup">
              <p id="quest"> What is your highest level of education?</p>
              <label for="">
                <input type="radio"
                  name="education"
                  value="natural"
                  class="inputRadio"
                  check required/>High School
              </label>
              <label for="">
                <input type="radio"
                  name="education"
                  value="lpg-gas"
                  class="inputRadio"
                  check />Bachelor's Degree
              </label>
              <label for="">
                <input type="radio"
                  name="education"
                  value="wood"
                  class="inputRadio"
                  check/>Master's Degree
              </label>
              <label for="">
                <input type="radio"
                  name="education"
                  value="induction"
                  class="inputRadio"
                  check />Higher
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">What did you study?</p>
              <label for="">
                <input type="radio"
                  name="study"
                  value="natural"
                  class="inputRadio"
                  check required/>Science
              </label>
              <label for="">
                <input type="radio"
                  name="study"
                  value="lpg-gas"
                  class="inputRadio"
                  check />Engineering
  
              </label>
              <label for="">
                <input type="radio"
                  name="study"
                  value="wood"
                  class="inputRadio"
                  check/>Arts
              </label>
              <label for="">
                <input type="radio"
                  name="study"
                  value="induction"
                  class="inputRadio"
                  check />Business
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">Did you attend a public or private institution?</p>
              <label for="">
                <input type="radio"
                  name="attend"
                  value="natural"
                  class="inputRadio"
                  check required/>Public
              </label>
              <label for="">
                <input type="radio"
                  name="attend"
                  value="lpg-gas"
                  class="inputRadio"
                  check />Private
              </label>
              <label for="">
                <input type="radio"
                  name="attend"
                  value="wood"
                  class="inputRadio"
                  check/>Both
              </label>
              <label for="">
                <input type="radio"
                  name="attend"
                  value="induction"
                  class="inputRadio"
                  check />Neither
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">Did you receive any financial aid or scholarships?</p>
              <label for="">
                <input type="radio"
                  name="receive"
                  value="natural"
                  class="inputRadio"
                  check required/>Yes
              </label>
              <label for="">
                <input type="radio"
                  name="receive"
                  value="lpg-gas"
                  class="inputRadio"
                  check />No
              </label>
              <label for="">
                <input type="radio"
                  name="receive"
                  value="wood"
                  class="inputRadio"
                  check/>Unsure
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">How much did you pay for you education</p>
              <label for="">
              <input type="radio"
                name="pay"
                value="natural"
                class="inputRadio"
                check required />Less than Rs. 200,000
            </label>
            <label for="">
              <input type="radio"
                name="pay"
                value="lpg-gas"
                class="inputRadio"
                check />Rs. 200,000 - Rs 400,000
            </label>
            <label for="">
              <input type="radio"
                name="pay"
                value="wood"
                class="inputRadio"
                check/>Rs. 400,000 - Rs. 600,000
            </label>
            <label for="">
              <input type="radio"
                name="pay"
                value="induction"
                class="inputRadio"
                check />Rs. 600,000 - Rs. 800,000
            </label>
            <label for="">
              <input type="radio"
                name="pay"
                value="other"
                class="inputRadio"
                check />Rs. 800,000 or more
            </label>
          </div>

  
  
            <div className="formgroup">
              <p id="quest">How long did it take you to complete your education?</p>
              <label for="">
                <input type="radio"
                  name="time"
                  value="natural"
                  class="inputRadio"
                  check required/>2 years or less
              </label>
              <label for="">
                <input type="radio"
                  name="time"
                  value="lpg-gas"
                  class="inputRadio"
                  check />2-4 years
  
              </label>
              <label for="">
                <input type="radio"
                  name="time"
                  value="wood"
                  class="inputRadio"
                  check/>4-6 years
              </label>
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
export default Template5;