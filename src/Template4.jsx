import React from "react";
import "./Template.css";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";

const Template4 = () => {
  const shareUrl="http://youtube.com";
  return (
    <>

      <div className="container">
        <header class="header">
          <h1 id="title">
            Survey form for
          </h1>
          <p id="description">
            Customer Satisfaction
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
            <p id="quest">How satisfied are you with our product/service?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Very satisfied
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Satisfied
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Dissatisfied
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Very Dissatisfied
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How likely are you to recommend our product/service to others?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Likely

            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Unlikely
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Very unlikely
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the quality of our product/service?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Excellent
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Very poor
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the value for money of our product/service?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Excellent
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Very poor
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the overall customer service exxperience?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Excellent
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Very poor
            </label>
          </div>


          <div className="formgroup">
            <p id="quest">How likely are you to purchase from us again?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Likely

            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Unlikely
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Very unlikely
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
export default Template4;