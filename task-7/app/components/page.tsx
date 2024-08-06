"use client";
import React, { useState, useEffect } from "react";
import Structure from "./Structure";
import Link from "next/link";

interface JobPosting {
  id: string;
  title: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  postedOn: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string | null;
  perksAndBenefits: string | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  averageRating: number;
  totalReviews: number;
}

export default function JobPosts() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<JobPosting[]>([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const response = await fetch("https://akil-backend.onrender.com/opportunities/search");
        const data = await response.json();
        setData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }

    fetchDataFromAPI();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No jobs available.</div>;
  }

  return (
    <div className="">
      <div className="py-5 w-3/4 mx-auto flex gap-96">
        <div className=" py-6 ">
          <h1 className="font-black text-[24px] leading-[28.8px] my-2 text-gray-700">
            Opportunities
          </h1>
          <p>showing {data.length} results</p>
        </div>
        <div className="flex py-8">
          <p>Sort by: </p>
          <p className="px-4"> Most relevant</p>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {data.map((job) => (
          <Link key={job.id} href={`/components/${job.id}`}>
            <Structure
              title={job.title}
              description={job.description}
              numOfJobs={data.length}
              categoryone={job.categories[0]}
              categorytwo={job.categories[1]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}