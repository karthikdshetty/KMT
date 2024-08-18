"use client";

import InlineAnimatedSVG from "@/components/animatedIcon";
import BlurFade from "@/components/magicui/blur-fade";

import {
  Mail,
  Instagram,
  Facebook,
  Github,
  Linkedin,
  Phone,
  Twitter,
} from "lucide-react";

export default function LandingPage() {
  const socialLinks = [
    {
      href: "https://github.com/karthikdshetty",
      icon: Github,
      label: "Github",
    },
    { href: "https://x.com/thugwiser", icon: Twitter, label: "Twitter" },
    {
      href: "https://www.linkedin.com/in/karthik-d-shetty-b85570244/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:shettydineshkarthik@gmail.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://www.instagram.com/k3rthik/",
      icon: Instagram,
      label: "Instagram",
    },
    { href: "tel:+7026800874", icon: Phone, label: "Phone" },
    {
      href: "https://m.facebook.com/profile.php?id=100022119961398&name=xhp_nt__fb__action__open_user",
      icon: Facebook,
      label: "FaceBook",
    },
  ];
  return (
    <BlurFade className="gap-12 flex flex-col sm:flex-row items-center justify-center px-10 sm:px-24 ">
      <div className=" items-left flex flex-col sm:flex-col justify-center gap-10 items-center">
        <div className="opacity-100 transform-none">
          <h1 className=" font-righteous font-semibold text-wrap tracking-wide text-4xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
            Software Engineer, Frontend Enthusiast, Avid Learner, Optimist
          </h1>
          <p className="text-justify dark:text-zinc-400 text-zinc-600 leading-relaxed">
            I&apos;m Karthik Shetty, an experienced frontend developer
            passionate about learning and building open-source software that is
            beneficial to developers and the world at large.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm inline-flex items-center gap-3 p-2 rounded-md border dark:border-zinc-200 border-gray-800"
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      </div>
      <div className=" w-full sm:7/12 justify-center items-center">
        <InlineAnimatedSVG />
      </div>
    </BlurFade>
  );
}
