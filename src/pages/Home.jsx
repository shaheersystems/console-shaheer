import React from "react";
import Profile from "../components/Profile";
import Banner from "../components/Banner";
import GotoLink from "../components/GotoLink";
import Heading from "../components/Heading";
import GotoBar from "../components/GotoBar";
import Vscode from "../icons/Vscode";
import Figma from "../icons/Figma";
import Vercel from "../icons/Vercel";
function Home() {
  const projects = [
    {
      id: 1,
      name: "Quran web app",
      link: "/",
      description: "A web app to read Quran",
      action: "Web development",
      date: "2021",
    },
  ];
  return (
    <div className='Home'>
      <Profile />
      <Banner />
      <div className='space-y-6'>
        <div className='w-full'>
          <div className='py-2'>
            <Heading text='Social' />
          </div>
          <GotoLink
            name='Instagram'
            link='https://www.instagram.com/shaheerforreal/'
          />
          <GotoLink name='Twitter' link='https://twitter.com/shaheerdevr' />
        </div>
        <div className='py-2'>
          <GotoBar name='Projects' link={"projects"} />
          {projects.map((project) => {
            return (
              <GotoLink
                name={project.name}
                link={project.link}
                action={project.action + ", " + project.date}
              />
            );
          })}
        </div>
        <div className='py-2'>
          <GotoBar name='Stack' link={"stack"} />
          <div className='flex items-center gap-4 flex-wrap py-5'>
            <Vscode />
            <Figma />
            <Vercel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
