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
                  name="prefer"
                  value="natural"
                  class="inputRadio"
                  check />High School
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="lpg-gas"
                  class="inputRadio"
                  check />Bachelor's Degree
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="wood"
                  class="inputRadio"
                  check/>Master's Degree
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="induction"
                  class="inputRadio"
                  check />Higher
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">What did you study?</p>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="natural"
                  class="inputRadio"
                  check />Science
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="lpg-gas"
                  class="inputRadio"
                  check />Engineering
  
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="wood"
                  class="inputRadio"
                  check/>Arts
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="induction"
                  class="inputRadio"
                  check />Business
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">Did you attend a public or private institution?</p>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="natural"
                  class="inputRadio"
                  check />Public
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="lpg-gas"
                  class="inputRadio"
                  check />Private
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="wood"
                  class="inputRadio"
                  check/>Both
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="induction"
                  class="inputRadio"
                  check />Neither
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">Did you receive any financial aid or scholarships?</p>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="natural"
                  class="inputRadio"
                  check />Yes
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="lpg-gas"
                  class="inputRadio"
                  check />No
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="wood"
                  class="inputRadio"
                  check/>Unsure
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">How much did you pay for you education</p>
              <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Less than Rs. 200,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Rs. 200,000 - Rs 400,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Rs. 400,000 - Rs. 600,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Rs. 600,000 - Rs. 800,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Rs. 800,000 or more
            </label>
          </div>

  
  
            <div className="formgroup">
              <p id="quest">How long did it take you to complete your education?</p>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="natural"
                  class="inputRadio"
                  check />2 years or less
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
                  value="lpg-gas"
                  class="inputRadio"
                  check />2-4 years
  
              </label>
              <label for="">
                <input type="radio"
                  name="prefer"
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