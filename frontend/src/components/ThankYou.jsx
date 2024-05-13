import { useLocation } from "react-router-dom";
import thankyou from "../assets/thankyou.jpg";

const ThankYou = () => {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b to-blue-100 md:p-8">
      <div className="max-w-[900px] w-full md:flex md:flex-row md:rounded-[20px] md:shadow-2xl">
        <div className=" md:w-1/2 md:rounded-[20px]">
          <div className="rounded-[10px] p-4">
            <img src={thankyou} alt="thankyouLogo" />
          </div>
        </div>
        <div className="p-12 md:w-1/2 md:flex md:justify-center md:items-center">
          <p className="text-xl md:text-2xl mb-4 md:mb-8 text-center">
            Hi <span className="font-semibold text-blue-600">{name}</span>,
            Thank you for your valuable feedback. We will get back to you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
