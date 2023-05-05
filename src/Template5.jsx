import React, {useState }from "react";
import axios from "axios";
 import "./Template.css";
 import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookIcon
} from "react-share";

const Template5 = () => {

  const [formData, setFormData] = useState({
    name: "",
    email:"",
    education: "",
    faculty: "",
    institute: "",
    receiveFinancialaid: "",
    totalpay: "",
    timetakentoComplete: "",

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
    .post("http://localhost:5000/submit-form5", formData)
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
              Education
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
              <p id="quest"> What is your highest level of education?</p>
              <label for="">
                <input type="radio"
                  name="education"
                  value="natural"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check required/>High School
              </label>
              <label for="">
                <input type="radio"
                  name="education"
                  value="lpg-gas"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />Bachelor's Degree
              </label>
              <label for="">
                <input type="radio"
                  name="education"
                  value="wood"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check/>Master's Degree
              </label>
              <label for="">
                <input type="radio"
                  name="education"
                  value="induction"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />Higher
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">What did you study?</p>
              <label for="">
                <input type="radio"
                  name="faculty"
                  value="natural"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check required/>Science
              </label>
              <label for="">
                <input type="radio"
                  name="faculty"
                  value="lpg-gas"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />Engineering
  
              </label>
              <label for="">
                <input type="radio"
                  name="faculty"
                  value="wood"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check/>Arts
              </label>
              <label for="">
                <input type="radio"
                  name="faculty"
                  value="induction"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />Business
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">Did you attend a public or private institution?</p>
              <label for="">
                <input type="radio"
                  name="institute"
                  value="natural"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check required/>Public
              </label>
              <label for="">
                <input type="radio"
                  name="institute"
                  value="lpg-gas"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />Private
              </label>
              <label for="">
                <input type="radio"
                  name="institute"
                  value="wood"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check/>Both
              </label>
              <label for="">
                <input type="radio"
                  name="institute"
                  value="induction"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />Neither
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">Did you receive any financial aid or scholarships?</p>
              <label for="">
                <input type="radio"
                  name="receiveFinancialaid"
                  value="natural"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check required/>Yes
              </label>
              <label for="">
                <input type="radio"
                  name="receiveFinancialaid"
                  value="lpg-gas"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />No
              </label>
              <label for="">
                <input type="radio"
                  name="receiveFinancialaid"
                  value="wood"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check/>Unsure
              </label>
            </div>
  
            <div className="formgroup">
              <p id="quest">How much did you pay for you education</p>
              <label for="">
              <input type="radio"
                name="totalpay"
                value="natural"
                class="inputRadio"
                onChange={handleInputChange}
                check required />Less than Rs. 200,000
            </label>
            <label for="">
              <input type="radio"
                name="totalpay"
                value="lpg-gas"
                class="inputRadio"
                onChange={handleInputChange}
                check />Rs. 200,000 - Rs 400,000
            </label>
            <label for="">
              <input type="radio"
                name="totalpay"
                value="wood"
                class="inputRadio"
                onChange={handleInputChange}
                check/>Rs. 400,000 - Rs. 600,000
            </label>
            <label for="">
              <input type="radio"
                name="totalpay"
                value="induction"
                class="inputRadio"
                onChange={handleInputChange}
                check />Rs. 600,000 - Rs. 800,000
            </label>
            <label for="">
              <input type="radio"
                name="totalpay"
                value="other"
                class="inputRadio"
                onChange={handleInputChange}
                check />Rs. 800,000 or more
            </label>
          </div>

  
  
            <div className="formgroup">
              <p id="quest">How long did it take you to complete your education?</p>
              <label for="">
                <input type="radio"
                  name="timetakentoComplete"
                  value="natural"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check required/>2 years or less
              </label>
              <label for="">
                <input type="radio"
                  name="timetakentoComplete"
                  value="lpg-gas"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check />2-4 years
  
              </label>
              <label for="">
                <input type="radio"
                  name="timetakentoComplete"
                  value="wood"
                  class="inputRadio"
                  onChange={handleInputChange}
                  check/>4-6 years
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
export default Template5;