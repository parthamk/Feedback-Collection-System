import Image2 from './images/Image2.png'
import Google from './images/google.png'
import About1 from './images/about1.png'
import About2 from './images/about2.png'
import About3 from './images/about3.png'

const About = () => {
  return (
            <div className='bg-gray-50' id='about-us'>
                <div className="flex flex-col items-center justify-center min-h-80 bg-gray-100  dark:bg-gray-500">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-fit mx-12 md:mx-10">
                            <div className="space-y-4">
                                <h2 className="text-lg text-white  font-bold">About</h2>
                                <h2 className="text-4xl text-white dark:text-white">
                                    We make your form creation simple and few clicks away
                                </h2>
                                <h4 className='text-sm text-gray-200 dark:text-gray-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consectetur cumque, suscipit earum officia beatae, sed voluptatibus ratione ad commodi atque id fugiat corrupti voluptatum aut quam. Cumque, autem laborum.
                                </h4>
                                <div className="flex flex-col justify-between">
                                    <div className="bg-white dark:bg-slate-600 w-full p-6 rounded-lg m-2 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300">
                                        <div className="flex flex-wrap relative justify-between items-center sm:space-x-4">
                                            <div className='lg:max-w-[320px]'>
                                                <p className="text-teal-400 font-medium text-2xl">Easy to create</p>
                                                <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, sed.</p>
                                            </div>
                                            <img src={About1} alt="Profile 1" className="sm:w-20 sm:h-30 rounded mt-4 sm:mt-0 " />
                                        </div>
                                    </div>
                                    <div className="bg-black dark:bg-slate-200 w-full p-6 rounded-lg m-2 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300">
                                        <div className="flex flex-wrap justify-between items-center sm:space-x-4">
                                            <img src={About2} alt="Profile 1" className="sm:w-20 sm:h-30 rounded mb-4 sm:mb-0 -skew-y-6" />
                                            <div className='lg:max-w-[320px]'>
                                                <p className="text-teal-400 font-medium text-2xl">Easy to manage</p>
                                                <p className="text-gray-200 dark:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, similique?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-600 w-full p-6 rounded-lg m-2 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300">
                                        <div className="flex flex-wrap justify-between items-center sm:space-x-4">
                                            <div className='md:max-w-[400px] lg:max-w-[320px]'>
                                                <p className="text-teal-400 font-medium text-2xl">Get your data in one place</p>
                                                <p className="text-gray-300  dark:text-gray-300 text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, pariatur?</p>
                                            </div>
                                            <img src={About3} alt="Profile 1" className="sm:w-20 sm:h-30 rounded mt-4 sm:mt-0 skew-y-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block lg:mt-20">
                                <img src={Image2} alt="Image" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
    
                    <div className="container mx-auto px-4 py-8 bg-blue-50">
                        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-20 m-10">
                            <div className="flex bg-white dark:bg-slate-600 text-white p-4 shadow-lg rounded-full hover:animate-bounce">
                                <h1 className="text-4xl bg-gray-800 px-5 py-3 font-bold rounded-full">1</h1>
                                <p className="text-black dark:text-slate-200 p-5 font-bold">Motivation</p>
                            </div>
                            <div className="flex bg-white dark:bg-slate-600 text-white p-4 shadow-lg rounded-full hover:animate-bounce">
                                <h1 className="text-4xl bg-gray-800 px-5 py-3 font-bold rounded-full">2</h1>
                                <p className="text-black dark:text-slate-200 p-5 font-bold">Inspire</p>
                            </div>
                            <div className="flex bg-white dark:bg-slate-600 text-white p-4 shadow-lg rounded-full hover:animate-bounce">
                                <h1 className="text-4xl bg-gray-800 px-5 py-3 font-bold rounded-full">3</h1>
                                <p className="text-black dark:text-slate-200 p-5 font-bold">Discipline</p>
                            </div>
                            <div className="flex bg-white dark:bg-slate-600 text-white p-4 shadow-lg rounded-full hover:animate-bounce">
                                <div className="text-4xl bg-gray-800 p-3 font-bold rounded-full">
                                    <img src={Google} alt="Profile 1" className="w-10 h-10 rounded" />
                                </div>
                                <div className='flex flex-col leading-none'>
                                    <span className="text-black dark:text-slate-200 p-2 font-bold">Review on Google</span>
                                    <span className="p-1 text-white">⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    {/* <CardMarquee /> */}
    
                </div>
            </div>
  )
}

export default About

