"use client";

import Image from "next/image";
import Heading from "./Heading";
import Link from "next/link";
import { useState } from "react";
import { MoveRight } from "lucide-react";

export default () => {
  // Initialize the data directly
  const [data] = useState([
    {
      _id: "1",
      name: "Living Room",
      image: "/images/Classic-interior-moodboard-melodia-living-room.webp",
    },
    {
      _id: "2",
      name: "Dining Room",
      image: "/images/Classic-interior-moodboard-melodia-living-room.webp",
    },
    {
      _id: "3",
      name: "Bed Room",
      image: "/images/Classic-interior-moodboard-melodia-living-room.webp",
    },
  ]);

  return (
    <div className="space-y-6 p-4  xl:p-0">
      <Heading heading={"Products"} subheading={"WE OFFER BEST PRODUCTS"} />
      <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-3  gap-10 lg:px-[100px] ">
        {data.map((category) => (
          <div
            key={category._id}
            className="flex flex-col border p-4 rounded-lg border-gray-200 transition transform transition-duration:500 hover:-translate-y-8 shadow-lg min-h-[300px] overflow-hidden"
          >
            <div className="flex flex-col items-center mt-5">
              <Image
                className="object-contain w-full h-[200px] "
                width={200}
                height={200}
                alt={category.name}
                src={category.image}
              />
              <Link
                href={"/"}
                className="text-center flex justify-center items-center  underline text-xl font-bold mt-4"
              >
                {category.name}
                <MoveRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
