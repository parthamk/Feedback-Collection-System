import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import rate from "../assets/rate.png";
import reasonLogo from "../assets/reasonLogo.jpg";
import welcome from "../assets/welcome.jpg";
import { useNavigate } from "react-router-dom";
// import ThankYou from "./ThankYou";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  // const [wordCount, setWordCount] = useState(0);
  // const [reason, setReason] = useState("");

  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    rating: 0,
    reason: "",
  });
  console.log(fromData);

  const handleNextStep = () => {
    if (step == 1 && (!fromData.name || !fromData.email)) {
      toast.error("All fields are Mandatory");
      return;
    }
    if (step == 2 && fromData.rating == 0) {
      toast.error("Please give the rating");
      return;
    }

    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleClick = (value) => {
    setFromData({ ...fromData, rating: value }); //1,2,3,4,5
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step == 3 && !fromData.reason) {
      toast.error("Please fill the reason");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/submit",
        fromData
      );
      // console.log(response);
      // console.log("Axios",fromData);

      toast.success(response.data.message, { duration: 4000 });

      navigate("/ThankYou");

      setFromData({
        name: "",
        email: "",
        rating: 0,
        reason: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      //checking from server if the email already exist
      if (error.response && error.response.data) {
        toast.error(error.response.data.message); //custom error
      } else {
        toast.error(error.response.data.message); //server error
      }
    }

    // return (
    //   <div>
    //     {/* thankyou image should be here */}
    //     Hi ${fromData.name} , Thankyou For your Valuable Feedback. We will get
    //     back to you.
    //   </div>
    // );
  };

  const handleChange = (identifier, value) => {
    setFromData({ ...fromData, [identifier]: value });
    console.log("Reason", fromData);
  };

  // const handleWordCount = (event) => {
  //   setReason(event.target.value);
  //   setWordCount(event.target.value.length);
  // };

  let content;

  if (step === 3) {
    content = <img src={reasonLogo} alt="reasonLogo" />;
  } else if (step === 2) {
    content = <img src={rate} alt="ratingLogo" />;
  } else {
    content = <img src={welcome} alt="welcomeLogo" />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-blue-100 ">
      <Toaster />
      <div className="w-[900px] h-[500px] bg-white rounded-[20px] flex shadow-2xl  ">
        <div className="w-[50%] h-[500px] flex justify-center items-center rounded-[10px]">
          {content}
        </div>

        <div className="w-[50%] h-[600px] flex justify-evenly items-center rounded-[10px]">
          <form
            onSubmit={handleSubmit}
            className="w-[100%] h-[500px] flex flex-col"
          >
            <h1 className="text-[30px] font-semibold text-blue-600 text-center">
              Feedback
            </h1>
            {/* <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="border"
              onChange={handleChange}
            /> */}
            {step === 1 && (
              <div className="flex flex-col p-8 mt-8 justify-center">
                {/* <h2 className="text-2xl font-bold mb-4">
                  Step 1: Name & Email
                </h2> */}
                <label htmlFor="" className="text-xl font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={fromData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter Your Name"
                  className="w-full border outline-none border-gray-300 p-2 rounded-md mb-4"
                />
                <label htmlFor="" className="text-xl font-semibold mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={fromData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full border  outline-none border-gray-300 p-2 rounded-md mb-4"
                />
                <div className="flex  justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-blue-500  text-white px-6 py-2 rounded-md"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col p-12 justify-center">
                <h2 className="text-2xl font-semibold mb-4 ">
                  {" "}
                  What is the rating can you provide us?
                </h2>
                <div className="flex flex-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleClick(star)}
                      className={`text-3xl ${
                        star <= fromData.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md mr-4"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col p-12 justify-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Can you please give us the reason?
                </h2>
                <textarea
                  value={fromData.reason}
                  onChange={(e) => handleChange("reason", e.target.value)}
                  placeholder="Share your feedback (Max 500 words)"
                  className="w-full border border-gray-300 p-2 rounded-md mb-4"
                  rows={5}
                />
                {/* <p className="text-sm text-right">{wordCount}/500 words</p> */}
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md mr-4"
                  >
                    Previous
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
