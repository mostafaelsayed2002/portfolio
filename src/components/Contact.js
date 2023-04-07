import {BsFacebook, BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

function Contact() {
    return (
        <div id="Contact" className="flex flex-col justify-center items-center mt-20 bg-gray-700  h-[200px]">

            <h1 className="font-bold text-white text-center text-3xl mb-3">Contact Me</h1>

            <div className="flex flex-row gap-4  mt-4">
                <a href="https://www.facebook.com/mostafa.elsayed.2002" >
                    <BsFacebook  size={30}  color="white"/>
                </a>
                <a href="https://github.com/mostafaelsayed2002">
                    <BsGithub  size={30}  color="white" hoverColor=""/>
                </a>
                <a href="https://www.linkedin.com/in/mostafa-elsayed-19a610214/">
                    <BsLinkedin  size={30}  color="white" hoverColor=""/>
                </a>

                <a href="">
                    <BsTwitter  size={30}  color="white"/>
                </a>

            </div>



        </div>
    );
}

export default Contact;
