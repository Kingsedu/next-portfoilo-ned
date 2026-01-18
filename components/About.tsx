"use client";
import React from "react";
import { Progress } from "@/components/ui/progress";
import project1 from "../public/asset/proj5.png";
import project2 from "../public/asset/proj6.png";
import Image from "next/image";
const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "AWS",
  ];
  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-gray-300">Me</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl mb-2 font-bold">01. Background</h3>
          <p className="text-white/50 mb-6">
            I’m a full-stack JavaScript developer with hands-on experience
            building modern web applications using React, Next.js, Node.js,
            TypeScript, and SQL/NoSQL databases. I focus on writing clean,
            maintainable code and understanding systems from the ground up—how
            data flows, how APIs scale, and how frontends stay fast and
            reliable. I’ve worked on real projects involving authentication,
            dashboards, caching, and UI state management, and I’m continuously
            expanding into cloud deployment (AWS), system design, and
            data-driven features. I value fundamentals, consistency, and
            learning things the right way—not shortcuts.
          </p>
          <div className="rounded-lg p-4 mb-4 border-white/20 ">
            <code className="text-purple-200/50">
              const skills = [
              <br />
              {skills.map((skill, index) => (
                <span key={index}>
                  &apos;{skill}&apos;,
                  <br />
                </span>
              ))}
              ]
            </code>
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50">
            I specialize in building full-stack web applications with JavaScript
            and TypeScript, working confidently across both frontend and
            backend. On the frontend, I build responsive, accessible interfaces
            using React and Next.js, with a strong grasp of state management,
            component architecture, and modern styling workflows like Tailwind
            CSS. On the backend, I design and implement RESTful APIs with
            Node.js and Express, handle authentication and authorization, and
            work with databases such as SQL and MongoDB using ORMs like
            Sequelize and Mongoose. I’m comfortable reasoning about performance,
            caching (Redis), and application structure, and I’m actively
            expanding into cloud deployment and infrastructure on AWS. I value
            fundamentals, clarity, and maintainable systems over shortcuts, and
            I approach problems with a mindset shaped by how reliable software
            has traditionally been built.
          </p>
          <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-55 overflow-hidden">
            <Image
              src={project1}
              alt="project-1"
              layout="fill"
              className="rounded-lg"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-6">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I have strong hands-on skills in JavaScript and TypeScript, building
            modern web applications with React and Next.js on the frontend and
            Node.js on the backend. I work comfortably with SQL and MongoDB,
            understand API design and authentication flows, and use Tailwind CSS
            to build responsive, maintainable UIs. I also have practical
            experience with caching, application structure, and version control,
            and I’m steadily growing my skills in cloud deployment and system
            design.
          </p>
          {/* start here */}
          <div className="grid gap-4 ">
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">FrontEnd</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>React</li>
                <li>React Native</li>
                <li>Typescript</li>
                <li>Tailwind css</li>
                <li>Framer-Motion</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-purple-300 font-medium mb-2">Backend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Node.js</li>
                <li>python</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
          {/* finish here */}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Front-End
              </label>
              <Progress
                value={90}
                className="bg-purple-300/20 [&>div]:bg-purple-100/80"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Back-End</label>
              <Progress
                value={85}
                className="bg-purple-300/20 [&>div]:bg-purple-100/80"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">DevOps</label>
              <Progress
                value={75}
                className="bg-purple-300/20 [&>div]:bg-purple-100/80"
              />
            </div>
          </div>
          <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
          <p className="text-white/50">
            I believe in writing clean, maintainable code and folleing best
            practices. My approach involves understanding client needs, planning
            thorougly, and delivering high-quality solution on time
          </p>
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <div className="h-50 overflow-hidden p-4 border-white/20 relative">
            <Image
              src={project2}
              alt="project 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">06. Goals</h3>
            <p className="text-white/50">
              My goal is to grow into a well-rounded engineer who builds
              intelligent, scalable systems. I’m intentionally expanding my
              skill set into machine learning and AI to better understand
              data-driven decision-making, predictive models, and how modern AI
              systems are designed and deployed. I approach this learning the
              same way I approach software development—by mastering fundamentals
              first, then applying them to real, practical problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
