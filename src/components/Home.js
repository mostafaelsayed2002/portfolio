import {  BsFillSendFill,BsFacebook ,BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs';
function Home() {
    return (
        <div id="Home" className="flex flex-row justify-around mt-20">


            <div className="flex flex-col mt-20 gap-3">

                <h1 className="text-6xl text-gray-800 font-bold">Hi,</h1>
                <h1 className="text-6xl text-gray-800 font-bold">I'm Mostafa Elsayed</h1>
                <p className="text-4xl text-gray-800 font-bold"> Web <span className="text-gray-600">Developer</span> </p>

                <button type="button"
                        className="text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-fit">
                    <div className="flex gap-3 "> Contact Me <BsFillSendFill className="mt-1"/>  </div>
                </button>

                <div className="flex flex-row gap-4 ">
                   <a href="https://www.facebook.com/mostafa.elsayed.2002" >
                       <BsFacebook  size={30}  color="#4B5563"/>
                   </a>
                    <a href="https://github.com/mostafaelsayed2002">
                        <BsGithub  size={30}  color="#4B5563" hoverColor=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/mostafa-elsayed-19a610214/">
                        <BsLinkedin  size={30}  color="#4B5563" hoverColor=""/>
                    </a>

                    <a href="">
                        <BsTwitter  size={30}  color="#4B5563"/>
                    </a>

                </div>



            </div>


            <div className="flex flex-col mt-12">

            <img src="https://i.imgur.com/ilrF0hw.jpg"  className=" max-h-96  border-gray-300 border-8 rounded-full  "/>

            </div>






        </div>
    );
}

export default Home;
