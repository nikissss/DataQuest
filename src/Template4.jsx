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
                name="satisfied"
                value="very"
                class="inputRadio"
                check required/>Very satisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="mid"
                class="inputRadio"
                check />Satisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="neutral"
                class="inputRadio"
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="diss"
                class="inputRadio"
                check />Dissatisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="noo"
                class="inputRadio"
                check />Very Dissatisfied
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How likely are you to recommend our product/service to others?</p>
            <label for="">
              <input type="radio"
                name="recommend"
                value="very"
                class="inputRadio"
                check required/>Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="likely"
                class="inputRadio"
                check />Likely

            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="neutral"
                class="inputRadio"
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="unlikely"
                class="inputRadio"
                check />Unlikely
            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="veryun"
                class="inputRadio"
                check />Very unlikely
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the quality of our product/service?</p>
            <label for="">
              <input type="radio"
                name="rate1"
                value="exce"
                class="inputRadio"
                check required />Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rate1"
                value="good"
                class="inputRadio"
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rate1"
                value="avg"
                class="inputRadio"
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rate1"
                value="poor"
                class="inputRadio"
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rate1"
                value="very"
                class="inputRadio"
                check />Very poor
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the value for money of our product/service?</p>
            <label for="">
              <input type="radio"
                name="rate2"
                value="exce"
                class="inputRadio"
                check required/>Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rate2"
                value="good"
                class="inputRadio"
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rate2"
                value="avg"
                class="inputRadio"
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rate2"
                value="poor"
                class="inputRadio"
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rate2"
                value="very"
                class="inputRadio"
                check />Very poor
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the overall customer service exxperience?</p>
            <label for="">
              <input type="radio"
                name="rate3"
                value="exce"
                class="inputRadio"
                check required/>Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rate3"
                value="good"
                class="inputRadio"
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rate3"
                value="avg"
                class="inputRadio"
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rate3"
                value="poor"
                class="inputRadio"
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rate3"
                value="very"
                class="inputRadio"
                check />Very poor
            </label>
          </div>


          <div className="formgroup">
            <p id="quest">How likely are you to purchase from us again?</p>
            <label for="">
              <input type="radio"
                name="likely"
                value="very"
                class="inputRadio"
                check required/>Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="likely"
                value="mid"
                class="inputRadio"
                check />Likely

            </label>
            <label for="">
              <input type="radio"
                name="likely"
                value="neutral"
                class="inputRadio"
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="likely"
                value="unlikely"
                class="inputRadio"
                check />Unlikely
            </label>
            <label for="">
              <input type="radio"
                name="likely"
                value="veryun"
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