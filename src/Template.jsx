import React from "react";
 import "./Template.css";
 import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";

const Template = () => {
  const shareUrl="http://youtube.com";
  return (
    <>

      <div className="container">
        <header class="header">
          <h1 id="title">
            Survey form for
          </h1>
          <p id="description">
            Economic Condition
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
            <label for="number">Number of family members</label>
            <input type="number"
              name="family" id="family"
              class="formcontrol"
              placeholder="enter  number"
              required />
          </div>
          <div className="formgroup">
            <label for="text">Source of income</label>
            <input type="text"
              name="income" id="source"
              class="formcontrol"
              placeholder="enter your income source" required />
          </div>
          
          <div class="formgroup">
            <p id="quest">Which option best describes your current condition?</p>
            <select name="role" id="dropdown" class="formcontrol" required>
              <option value="" disabled selected>Select current condition</option>
              <option value="true">Well-off</option>
              <option value="false">Disadvantaged</option>

            </select>
          </div>


          <div className="formgroup">
            <p id="quest">What is your current employment status?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Employed full-time
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Employed part-time
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Self Employed
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Unemployed, actively looking for work
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Unemployed, not currently looking for work
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">What is your current monthly income?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Less than Rs. 20,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Rs. 20,000 - Rs 40,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Rs. 40,000 - Rs. 60,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Rs. 60,000 - Rs. 80,000
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Rs. 80,000 or more
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">Have you experienced any changes in your income or financial situation in the past year</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Slight improvement
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Significant improvement
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Slight decline
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Moderate decline
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Significant decline
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">Have you had to make any significant financial sacrifices in the past year?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />No, I have not had to make any significant financial sacrifices
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Yes, I have had to cut back on discretionary spending
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="wood"
                class="inputRadio"
                check/>Yes, I have had to postpone major purchases or investments
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="induction"
                class="inputRadio"
                check />Moderate decline
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Yes, I have had to dip into savings or take on debt to make ends meet
            </label>
          </div>

          <div className="formgroup">
            <p id="quest">How confident do you feel about your financial future?</p>
            <label for="">
              <input type="radio"
                name="prefer"
                value="natural"
                class="inputRadio"
                check />Very confident
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="lpg-gas"
                class="inputRadio"
                check />Somewhat confident
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
                check />Somewhat uncertain
            </label>
            <label for="">
              <input type="radio"
                name="prefer"
                value="other"
                class="inputRadio"
                check />Very Uncertain
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
export default Template;