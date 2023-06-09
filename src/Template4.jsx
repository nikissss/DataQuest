import React, {useState }from "react";
import axios from "axios";
import "./Template.css";
import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";

const Template4 = () => {

  const [formData, setFormData] = useState({
    name:"",
    email: "",
    satisfied:"",
    recommend:"",
    rateQuality:"",
    rateValueofMoney:"",
    rateOverallCustomerService:"",
    likelyToPurchaseAgain:"",

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
    .post("http://localhost:5000/submit-form4", formData)
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
        <form onSubmit={handleSubmit} action="" id="surveyform">

          <div className="formgroup">
            <label for="name">Name</label>
            <input type="text"
              name="name" id="name"
              class="formcontrol"
              onChange={handleInputChange}
              placeholder="enter your name" required />
          </div>

          <div className="formgroup">
                <label for="email">Email</label>
                <input type="email"
                name="email"s id="email"
                class="formcontrol"
                onChange={handleInputChange}
                placeholder="Enter your email" required />
            </div>

          <div className="formgroup">
            <p id="quest">How satisfied are you with our product/service?</p>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="Very satisfied"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Very satisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="Satisfied"
                class="inputRadio"
                onChange={handleInputChange}
                check />Satisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="Neutral"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="Dissatisfied"
                class="inputRadio"
                onChange={handleInputChange}
                check />Dissatisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="Very Dissatisfied"
                class="inputRadio"
                onChange={handleInputChange}
                check />Very Dissatisfied
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How likely are you to recommend our product/service to others?</p>
            <label for="">
              <input type="radio"
                name="recommend"
                value="Very Likely"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="Likely"
                class="inputRadio"
                onChange={handleInputChange}
                check />Likely

            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="neutral"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="unlikely"
                class="inputRadio"
                onChange={handleInputChange}
                check />Unlikely
            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="Very unlikely"
                class="inputRadio"
                onChange={handleInputChange}
                check />Very unlikely
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the quality of our product/service?</p>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="Excellent"
                class="inputRadio"
                onChange={handleInputChange}
                check required />Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="Good"
                class="inputRadio"
                onChange={handleInputChange}
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="Average"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="Poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="Very poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Very poor
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the value for money of our product/service?</p>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="Excellent"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="Good"
                class="inputRadio"
                onChange={handleInputChange}
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="Average"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="Poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="Very poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Very poor
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How would you rate the overall customer service exxperience?</p>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="Excellent"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="Good"
                class="inputRadio"
                onChange={handleInputChange}
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="Average"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="Poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="very poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Very poor
            </label>
          </div>


          <div className="formgroup">
            <p id="quest">How likely are you to purchase from us again?</p>
            <label for="">
              <input type="radio"
                name="likelyToPurchaseAgain"
                value="very likely"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="likelyToPurchaseAgain"
                value="likely"
                class="inputRadio"
                onChange={handleInputChange}
                check />Likely

            </label>
            <label for="">
              <input type="radio"
                name="likelyToPurchaseAgain"
                value="neutral"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="likelyToPurchaseAgain"
                value="unlikely"
                class="inputRadio"
                onChange={handleInputChange}
                check />Unlikely
            </label>
            <label for="">
              <input type="radio"
                name="likelyToPurchaseAgain"
                value="very unlikely"
                class="inputRadio"
                onChange={handleInputChange}
                check />Very unlikely
            </label>
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
          <div className="share">
             <NavLink to="/service" className="button">Back</NavLink>
          </div>
      </div>
      <br/>
      <br/>
      
      </div>
    </>
  );
};
export default Template4;