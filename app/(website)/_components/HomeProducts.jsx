import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomeProducts = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-[#5f3a27] text-center text-5xl font-black">
          Quality Beyond Everything
        </h1>
        <div className="grid grid-cols-3 justify-center items-center   lg:p-16 ">
          <div className="p-2 flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center">
              <Image
                className=" h-[300px] w-[300px] rounded-xl transform transition duration-300 hover:-translate-y-5"
                src={
                  "/images/reznie-krovati-iz-massiva-dereva-15-1400x1080.jpg"
                }
                alt=".."
                width={300}
                height={300}
              />
              <div>
                {" "}
                <Link
                  className="flex justify-center gap-2 items-center mt-5 text-xl font-bold underline underline-offset-8"
                  href={"#"}
                >
                  Bed Room
                  <MoveRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center">
              <Image
                className=" h-[300px] w-[300px] rounded-xl transform transition duration-300 hover:-translate-y-5"
                src={"/images/generated-mnl9GZPW45upNaz9.jpg"}
                alt=".."
                width={300}
                height={300}
              />
              <div>
                {" "}
                <Link
                  className="flex justify-center gap-2 items-center mt-5 text-xl font-bold underline underline-offset-8"
                  href={"#"}
                >
                  Dining Room
                  <MoveRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="p-2 flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center">
              <Image
                className=" h-[300px] w-[300px] rounded-xl transform transition duration-300 hover:-translate-y-5"
                src={
                  "/images/Classic-interior-moodboard-melodia-living-room.webp"
                }
                alt=".."
                width={300}
                height={300}
              />
              <div>
                {" "}
                <Link
                  className="flex justify-center gap-2 items-center mt-5 text-xl font-bold underline underline-offset-8"
                  href={"#"}
                >
                  Living Room
                  <MoveRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
