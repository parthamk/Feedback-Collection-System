import thankyou from "../assets/thankyou.jpg";

const ThankYou = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen w-[900px] p-8 m-8">
      <img src={thankyou} alt="thankyouLogo" />
      {/* <p>

        Hi ${fromData.name} , Thankyou For your Valuable Feedback. We will get
        back to you.
      </p> */}
    </div>
  );
};

export default ThankYou;
