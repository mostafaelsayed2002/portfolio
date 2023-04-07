import {  BsFillSendFill,BsFacebook ,BsGithub,BsLinkedin,BsTwitter} from 'react-icons/bs';
function Education() {
    return (
        <div id="Education" className=" flex  flex-col   mt-24">

              <div className="justify-center flex ">
                <h1 className="font-bold text-5xl text-gray-800 ">Education</h1>
              </div>
            <div className="flex flex-row justify-around">

                <div className="flex flex-col mt-32 gap-2 font-serif">

                    <p className="text-gray-500 text-2xl text-center ">I am a student at cairo University Faculty of Enineering Computer Department.</p>
                    <p className="text-gray-500 text-2xl text-center">In this Department I learn Everything about Computer either Software or Hardware</p>
                    <p className="text-gray-500 text-2xl text-center"></p>
                    <p className="text-gray-600 text-2xl text-center">Graduation Date: 2025 </p>


                </div>

                <div>
                <img src="https://i.imgur.com/DNWUj91.jpg" className="rounded-full max-h-80 mt-14"/>
               </div>


            </div>


        </div>
    );
}

export default Education;
