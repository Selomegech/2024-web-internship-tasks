"use client";
import path from "path";
import fs from "fs";

import React, { useEffect, useState } from "react";
import jobData from "./jobs.json";
import { FaMapMarkerAlt, FaPlusCircle } from "react-icons/fa";
import { FaFireFlameCurved, FaRegCalendarCheck } from "react-icons/fa6";
import { TiLocationOutline } from "react-icons/ti";
import { LuCalendarClock } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
interface JobPostProp {
  params: { id?: string };
}

interface Job {
  id?: string;
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  about: {
    posted_on: "Jul 1, 2023";
    deadline: "Jul 31, 2023";
    location: "Addis Ababa";
    start_date: "Aug 02, 2023";
    end_date: "Sep 02, 2023";
    categories: ["Marketing", "Design"];
    required_skills: ["Social Media Marketing", "English", "Copywriting"];
  };
}

const JobPost = ({ params }: JobPostProp) => {
  const [job, setJob] = useState<Job | null>(null);
  let age = {
    "18-24": "young",
    "26-35": "adult",
    "36-45": "middle-aged",
    "46-55": "senior",
    "any": "any",
  }
  useEffect(() => {
    const currJobs: Job[] = jobData.job_postings;
    const foundJob = currJobs.find((job) => job.id === params.id);
    setJob(foundJob || null);
  }, [params.id]);

  if (!job) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="h-full flex flex-row  gap-32
     p-16 font-Poppins"
    >
      <div className="h-3/4  w-[60%] font-Poppins text-left ">
        <div className="py-6">
          {" "}
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            {" "}
            Description{" "}
          </h1>
          <p>{job.description}</p>
        </div>
        <div className="py-6">
          {" "}
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            {" "}
            Responsibilities{" "}
          </h1>
          <ul>
            <div className="py-6">
              {job.responsibilities.map((responsibility, index) => (
                <>
                  <div className="flex gap-4">
                    <div className="w-[34px] h-[34px] px-2.5 gap-2.5 rounded-full border-t border-0 ">
                      <GoDotFill className="text-xl" color="#90ee90" />
                    </div>
                    <li key={index}>{responsibility}</li>{" "}
                  </div>{" "}
                </>
              ))}{" "}
            </div>
          </ul>
        </div>
        <div className="py-6">
          {" "}
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            {" "}
            ideal candidate we want{" "}
          </h1>
          <ul className="py-6">
            <li className="flex py-4">
              <div className="w-[34px] h-[34px] px-2.5 gap-2.5 rounded-full border-t border-0 ">
                <GoDotFill className="text-l" />
              </div>
              <b>
                {age[job.ideal_candidate.age]}({job.ideal_candidate.age}) {job.ideal_candidate.gender}{" "}
                {job.title}
              </b>
            </li>
            {job.ideal_candidate.traits?.map((trait, index) => (
              <li key={index} className="flex py-4">
                <div className="w-[34px] h-[34px] px-2.5 gap-2.5 rounded-full border-t border-0 ">
                  <GoDotFill className="text-l" />
                </div>
                {trait}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-6">
          {" "}
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            {" "}
            when and where
          </h1>
          <div className="flex gap-4">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2  ">
              <FaMapMarkerAlt className="text-xl" color="#26A4FF" />
            </div>

            <p>{job.when_where}</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            About
          </h1>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2 ">
              <FaPlusCircle className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Posted On</p>
              <p>
                <b>{job.about.posted_on}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2  ">
              <FaFireFlameCurved className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Deadline</p>
              <p>
                <b>{job.about.deadline}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2 ">
              <TiLocationOutline className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Location</p>
              <p>
                <b>{job.about.location}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2 ">
              <LuCalendarClock className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>Start Date</p>
              <p>
                <b>{job.about.start_date}</b>
              </p>
            </div>
          </div>
          <div className="flex gap-4 my-6">
            <div className="w-[44px] h-[44px] p-2.5 gap-2.5 rounded-full border-t border-2">
              <FaRegCalendarCheck className="text-xl" color="#26A4FF" />
            </div>
            <div>
              <p>End Date</p>
              <p>
                <b>{job.about.end_date}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="w-80 h-[1px] bg-gray-300 my-10"></div>
        <div className="my-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            Categories
          </h1>
          <div className="flex flex-row space-x-4 my-8">
            <div className="bg-green-100 h-10 border-0 border-green-600 text-green-600 rounded-full px-3 py-1 flex justify-center items-center text-sm">
              {job.about.categories[0]}
            </div>
            <div className="bg-orange-50 h-10 border-0 border-yellow-400 text-yellow-600 rounded-full px-3 py-1 flex justify-center items-center text-sm">
              {job.about.categories[1]}
            </div>
          </div>
        </div>
        <div className="w-80 h-[1px] bg-gray-300 my-10"></div>
        <div className="my-6">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            Required Skills
          </h1>
          <div className="flex flex-row space-x-4 my-8">
            <div className="bg-gray-100 h-10 border-1 text-blue-600 px-3 py-1 flex justify-center items-center text-sm">
              {job.about.required_skills[0]}
            </div>
            <div className="bg-gray-100 h-10 border-1 text-blue-600  px-3 py-1 flex justify-center items-center text-sm">
              {job.about.required_skills[1]}
            </div>
            <div className="bg-gray-100 h-10 border-1 text-blue-600  px-3 py-1 flex justify-center items-center text-sm">
              {job.about.required_skills[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
