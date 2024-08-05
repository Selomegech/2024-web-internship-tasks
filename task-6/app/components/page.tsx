`use client`;
import React from "react";
import Structure from "./Structure";

import fs, { link } from 'fs';
import path from 'path';
import { Job } from "@/types/jobs";
import Link from "next/link";


interface JobPosting {
    title: string;
    description: string;
    
  }
  
  interface LayoutProps {
    data: { job_postings: JobPosting[] };
  }
  

const getJobs = async (): Promise<Job[] | undefined> => {
  const filePath = path.join(process.cwd(), "public", "jobs.json");
  const jsonData = await fs.promises.readFile(filePath, "utf-8");
  const jobs = JSON.parse(jsonData);
  const currJobs: Job[] = jobs.job_postings;
  return currJobs;
};
  const JobPosts = async () => {
    const data = await getJobs()
    console.log(data)
    return (
      <div className="">
      
      <div
        className="py-5 w-3/4 mx-auto flex gap-96"
        
      >
    <div className=" py-6 ">
    <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            Opportunities
          </h1>
          <p>showing {data?.length} results</p>
        </div>
        <div className="flex py-8">
          <p>Sort by:  </p> 
          <p className="px-4"> Most relevant</p>
        </div>
      </div>

     { data?.map(d => (
      <Link href={`/components/${d.id}` }><Structure title={d.title} description={d.description} numOfJobs={data.length} categoryone={d.about.categories[0]} categorytwo={d.about.categories[1]}/></Link>
        

      ))}
      
      </div>
      
    );
  };
  
  export default JobPosts;