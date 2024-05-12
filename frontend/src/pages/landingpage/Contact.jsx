import HeroImg from "./images/Illustration.png"

const Contact = () => {
    return (
        <div id="contact-us" className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-200 to-red-400">
            {/* <div className="container mx-auto px-10 py-10"> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-fit mx-12 md:mx-10 mt-5 mb-5 bg-gradient-to-r from-yellow-100 to-yellow-300 p-6  rounded-lg">
                <div className="space-y-4 ">
                    <h2 className="text-2xl text-gray-600 font-bold">Contact Us</h2>
                    <a className="text-sm text-gray-500">if you need some help or anyother questions, feel free to ask.</a>

                    <input type="name" name="name" id="name" placeholder='Your name' className='p-1 mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' />
                    <input type="email" name="email" id="email" placeholder='jhondoe@example.com' className='p-1 mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block' />
                    <textarea name='message' id="message" placeholder='Your message' className=" p-1 mt-1 w-full outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-90 block"></textarea>

                    <button className="text-white bg-gradient-to-r from-blue-400 to-red-600 hover:from-red-600 hover:to-blue-400 p-2 rounded-md mt-5 font-bold ">Submit</button>
                </div>

                <div className="hidden lg:block lg:mt-10">
                    <img src={HeroImg} alt="Image" className="rounded-lg w-2/3 ml-20" />
                </div>
            </div>

        </div>
    )
}

export default Contact