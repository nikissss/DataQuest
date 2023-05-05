import React, {useState }from "react";
import axios from "axios";
import "./Template.css";
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
                value="very"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Very satisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="mid"
                class="inputRadio"
                onChange={handleInputChange}
                check />Satisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="neutral"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Neutral
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="diss"
                class="inputRadio"
                onChange={handleInputChange}
                check />Dissatisfied
            </label>
            <label for="">
              <input type="radio"
                name="satisfied"
                value="noo"
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
                value="very"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="recommend"
                value="likely"
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
                value="veryun"
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
                value="exce"
                class="inputRadio"
                onChange={handleInputChange}
                check required />Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="good"
                class="inputRadio"
                onChange={handleInputChange}
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="avg"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rateQuality"
                value="very"
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
                value="exce"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="good"
                class="inputRadio"
                onChange={handleInputChange}
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="avg"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rateValueofMoney"
                value="very"
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
                value="exce"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Excellent
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="good"
                class="inputRadio"
                onChange={handleInputChange}
                check />Good
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="avg"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Average
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="poor"
                class="inputRadio"
                onChange={handleInputChange}
                check />Poor
            </label>
            <label for="">
              <input type="radio"
                name="rateOverallCustomerService"
                value="very"
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
                value="very"
                class="inputRadio"
                onChange={handleInputChange}
                check required/>Very Likely
            </label>
            <label for="">
              <input type="radio"
                name="likelyToPurchaseAgain"
                value="mid"
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
                value="veryun"
                class="inputRadio"
                onChange={handleInputChange}
                check />Very unlikely
            </label>
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
export default Template4;