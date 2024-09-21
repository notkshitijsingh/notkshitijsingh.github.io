import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"
          }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
                } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">B. Tech- CSE with Spec. in AIML at Vellore Insititute of Technology, Bhopal</h2>
                  <h3 className="text-sm opacity-75">
                    Sep 2021 - Aug 2025 | CGPA: 8.27
                  </h3>
                  <p style={{color: '#7c7d7d', fontSize: 'smaller'}}>
                    Noteworthy Courses: OOP in C++, Python, Data Structures and Algorithms, Data Science, Artificial Intelligence, Database Management Systems.
                  </p>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg">Higher Secondary School at Jodhamal Public School, Jammu</h2>
                  <h3 className="text-sm opacity-75">
                    May 2021 | Percentage: 90.5%
                  </h3>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg">Secondary School at Jodhamal Public School, Jammu</h2>
                  <h3 className="text-sm opacity-75">
                    May 2019 | Percentage: 93.8%
                  </h3>
                </div>
                <br></br>
                <h1 className="text-2xl font-bold">Courses and Certificates</h1>
                <div className="mt-2">
                  <h2 className="text-lg">High Performance Coding in DSA</h2>
                  <h3 className="text-sm opacity-75">
                    iamneo | Jan 2024
                  </h3>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg">Data Analytis Professional Certificate</h2>
                  <h3 className="text-sm opacity-75">
                    Google | Mar 2023
                  </h3>
                </div>
                <div className="mt-2">
                  <h2 className="text-lg">Applied Machine Learning in Python</h2>
                  <h3 className="text-sm opacity-75">
                    University of Michigan | Jan 2023
                  </h3>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Technologies</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Databases</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
