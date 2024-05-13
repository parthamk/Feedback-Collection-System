import ContactImg from "./images/contact.png"
import { Link } from "react-router-dom"


const Home = () => {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-200 to-cyan-200  px-10 py-10">
      {/* <div className="container mx-auto px-10 py-10"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-fit mx-12 md:mx-10 ">

        <div className="space-y-4 mt-8">
          <h2 className=" text-8xl text-gray-600 font-bold  dark:text-gray-600">
            FeedBacks and Insights
          </h2>
          <h2 className=" text-6xl text-gray-600 font-light  dark:text-gray-600">
            from 5 years
          </h2>
          <h4 className='text-xl text-gray-600 dark:text-gray-600'>
            Empowering Voices, Amplifying Impact: Transforming Feedback into Actionable Insights
          </h4>
          <Link to="/register" className="flex">
            <button className="flex justify-between items-center text-white font-bold text-xl p-2 rounded-md mt-5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-blue-600 hover:to-cyan-400">
              Let's get started 
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Link>
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