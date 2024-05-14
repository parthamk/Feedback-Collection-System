import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import rate from "../assets/rate.png";
import reasonLogo from "../assets/reasonLogo.jpg";
import welcome from "../assets/welcome.jpg";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

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
    if (step == 1 && !fromData.email.includes("@")) {
      toast.error("Please enter a valid email");
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
        "https://feedback-collection-system.onrender.com/api/submit",
        fromData
      );
      // console.log(response);
      // console.log("Axios",fromData);

      toast.success(response.data.message);

      setTimeout(() => {
        navigate(`/thankYou?name=${fromData.name}`);
      }, 2000);

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
  };

  const handleChange = (identifier, value) => {
    setFromData({ ...fromData, [identifier]: value });
    console.log("Reason", fromData);
  };

  let content;

  if (step === 3) {
    content = <img src={reasonLogo} alt="reasonLogo" />;
  } else if (step === 2) {
    content = <img src={rate} alt="ratingLogo" />;
  } else {
    content = <img src={welcome} alt="welcomeLogo" />;
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-blue-100 md:px-8 ">
      <Toaster />
      <div className="w-full md:w-[900px] bg-white rounded-[20px] shadow-2xl ">
        <div className="flex flex-col justify-center items-center mt-8">
          <h1 className="text-3xl font-semibold text-blue-600 text-center mb-8 ">
            Feedback
          </h1>
        </div>
        <div className="md:flex">
          <div className="md:w-[50%] p-4">{content}</div>
          <div className="md:w-[50%] p-4 md:pt-8 ">
            <form onSubmit={handleSubmit} className="p-4">
              {step === 1 && (
                <div className="flex flex-col mb-4">
                  <label className="text-xl font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    value={fromData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Enter Your Name"
                    className="outline-none bg-transparent border-2 border-blue-400 shadow-2xl placeholder:text-blue-600 font-semibold p-2 mb-4 rounded-md"
                  />
                  <label className="text-xl font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={fromData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Enter Your Email"
                    className="outline-none bg-transparent border-2 border-blue-400 shadow-2xl placeholder:text-blue-600 font-semibold p-2 mb-4 rounded-md"
                  />
                </div>
              )}
              {step === 2 && (
                <div className="flex flex-col mb-4">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    What rating would you give us?
                  </h2>
                  <div className="flex justify-center">
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
                </div>
              )}
              {step === 3 && (
                <div className="flex flex-col mb-4">
                  <h2 className="text-2xl font-semibold mb-4 text-center">
                    Please provide your feedback
                  </h2>
                  <textarea
                    value={fromData.reason}
                    onChange={(e) => handleChange("reason", e.target.value)}
                    placeholder="Share your feedback (Max 500 words)"
                    className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-400"
                    rows={5}
                  />
                </div>
              )}
              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md"
                  >
                    Previous
                  </button>
                )}
                {step < 3 && (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
