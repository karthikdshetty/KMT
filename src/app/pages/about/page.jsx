"use client";

import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import Photo from "../../Assets/photo.png";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import BlurFade from "@/components/magicui/blur-fade";
import toast, { Toaster } from "react-hot-toast";

export default function About() {
  const resumeUrl =
    "https://drive.google.com/file/d/1wsJ7JetWX7LDA0wN-WAHgFg7K_9GPduj/view?usp=sharing";

  const handleDownloadClick = () => {
    // Create a link element and trigger a download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf"; // Provide a default name for the downloaded file
    document.body.appendChild(link); // Append the link to the body
    link.click();
    document.body.removeChild(link); // Remove the link from the body

    toast.success("Download started!");
  };

  const handleViewClick = () => {
    // Open the resume URL in a new tab
    window.open(resumeUrl, "_blank");
  };

  return (
    <>
      <div className="w-full text-4xl sm:text-5xl font-extrabold text-left px-10 sm:px-24 font-righteous">
        About Me
      </div>
      <BlurFade className="flex flex-col gap-10 sm:flex-row items-start justify-start px-10 sm:px-24 overflow-hidden">
        <div className="w-full flex flex-col sm:flex-col gap-4 justify-start items-start mt-6">
          <div className="w-full text-sm sm:text-base text-left dark:text-zinc-400 text-zinc-600 leading-relaxed">
            Hi, I&apos;m Karthik D Shetty
          </div>
          <div className="text-sm sm:text-base text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;m a results-driven Software Engineer with ten months of
            frontend development experience, actively seeking full-time
            opportunities in Full Stack Development. With a background in
            Computer Science and Engineering, I specialize in React.js,
            JavaScript, HTML, CSS, and TypeScript, alongside backend
            technologies like Node.js, Express.js, and MongoDB. <br />
            <br />
            In my current role at Ordrio Technologies Private Limited, I
            collaborate with a cross-functional team to develop and maintain web
            applications. I handle the full software development lifecycle &
            focus on creating responsive, user-friendly UI components. My key
            projects include Ordrio Saas Panel, Cree8 Construction, and Aura.
            <br />
            <br />
            Beyond my technical skills, I have strong leadership experience,
            having led a team to a national-level paper presentation award.
            Fluent in English, Hindi, Kannada, and Tulu, I am known for my
            punctuality, honesty, and efficiency. I’m excited to bring my skills
            to a dynamic full stack development role.e backend technologies like
            Node.js, Express.js, and MongoDB. With a strong foundation in
            frontend development and a growing proficiency in full stack
            technologies, I bring a hands-on approach to solving complex
            problems and delivering high-quality web solutions.
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-10">
          <div className="w-96 h-96">
            <Image src={Photo} alt="Karthik's Photo" className="rounded-lg" />
          </div>
          <div className="w-full border p-4 rounded-md flex-row flex justify-between">
            <div className="flex justify-between gap-2 items-center">
              View Resume <FaExternalLinkSquareAlt onClick={handleViewClick} />
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleDownloadClick}
            >
              <FaDownload />
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}
