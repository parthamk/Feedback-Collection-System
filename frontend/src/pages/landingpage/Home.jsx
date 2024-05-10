import ContactImg from "./images/contact.png"


const Home = () => {
  return (
   
    <div className="flex flex-col items-center justify-center min-h-80 bg-gradient-to-r from-orange-200 to-cyan-200  px-10 py-10">
        {/* <div className="container mx-auto px-10 py-10"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-fit mx-12 md:mx-10 ">

                <div className="space-y-4  ">
                    <h2 className=" text-6xl text-gray-600 font-bold  dark:text-gray-600">
                    FeedBacks and Insights
                    </h2>
                    <h2 className=" text-6xl text-gray-600 font-bold  dark:text-gray-600">
                    from 5 years
                    </h2>
                    <h4 className='text-sm text-gray-600 dark:text-gray-600'>
                    Empowering Voices, Amplifying Impact: Transforming Feedback into Actionable Insights
                    </h4>
                    <button className="text-white  p-2 rounded-md mt-5 bg-gradient-to-r from-cyan-400 to-orange-600 ">Register</button>
                </div>

                <div className="hidden lg:block lg:mt-10">
                    <img src={ContactImg} alt="Image" className="rounded-lg w-2/3 ml-20" />
                </div>

            </div>
        {/* </div> */}

    </div>
)
}

export default Home

{/* <div className="mt-1">
<div className="flex flex-row justify-between items-stretch bg-blue-50">
  <div className="flex flex-col justify-center items-start w-3/5">
    <h1 className="text-6xl text-gray-600 font-bold ml-20">FeedBacks and Insights</h1>
    <h1 className="text-5xl text-blue-500 font-bold mt-3 ml-20">from 5 years</h1>
    <a className="text-gray-500 mt-3 ml-20">Empowering Voices, Amplifying Impact: Transforming Feedback into Actionable Insights</a>
    <button className="text-white bg-blue-500 p-2 rounded-md mt-5 ml-20">Register</button>
  </div>
  <div className="flex justify-center items-center w-2/5">
    <img src={HeroImg} alt="heroImg" className="w-full h-auto p-2 mt-10 mb-10" />
  </div>
</div>
</div> */}



















// {/* <div className="mt-10">
//       <div className="flex flex-col justify-center items-center">
//         <h1 className="font-bold text-xl text-gray-600">Our Clients</h1>
//         <a className="text-gray-700">We have been working with some Fortune 500+ clients</a>
//       </div>
//       <div>
//         {/* add image */}
//         <svg xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UWWd_ePOHqHYbEneYKcpzbRFh_lx0Y1O9SoQHXbbQf6tHfbR" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-800">
//           <path d="M5 12l5 5L19 7" />
//         </svg>
//         <img src="https://static.vecteezy.com/system/resources/previews/002/426/880/original/vector-letter-a-logo-design-template-letter-a-icon-letter-a-symbol-letter-a-vector-free-vector.jpg" alt="Letter A Logo" className="w-8 h-8"/>
//       </div>
//     </div> */}