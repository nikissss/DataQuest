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
            Nepal Census
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
          <div className="formgroup">
            <label for="address">Address</label>
                 <span className="clue"></span>
            <input type="text"
              name="address" id="address"
              class="formcontrol"
              placeholder="enter your address" required />
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
            <p id="quest">Which one do you use for cooking?</p>
            <label for="">
              <input type="checkbox"
                name="prefer"
                value="natural"
                class="checkbox"
                check />Natural gas
            </label>
            <label for="">
              <input type="checkbox"
                name="prefer"
                value="lpg-gas"
                class="checkbox"
                check />LPG-gas
            </label>
            <label for="">
              <input type="checkbox"
                name="prefer"
                value="wood"
                class="checkbox"
                check/>Wood
            </label>
            <label for="">
              <input type="checkbox"
                name="prefer"
                value="induction"
                class="checkbox"
                check />Induction
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