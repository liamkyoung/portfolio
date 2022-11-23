import React from "react";
import Link from "next/link";
import Image from "next/image";

function Project({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className="bg-portfolio max-w-5xl rounded-3xl flex flex-col xl:flex-row border-white border-2 align-center my-5 min-w-min items-center">
      <div className="px-6 text-center lg:text-left">
        <h1 className="text-4xl font-paytone pt-8 pb-4">{title}</h1>
        <h2 className="text-xl font-secular hover:text-portfolio-red text-portfolio-orange">
          {frameworks}
        </h2>
        <p className="text-lg font-reem py-6">{desc}</p>
        <div className="flex justify-center pb-5">
          <Link href={code} passHref>
            <h1 className="button">{"<code>"}</h1>
          </Link>
          <Link href={site} passHref>
            <h1 className="button">{"<site>"}</h1>
          </Link>
          <Link href={video} passHref prefetch={false}>
            <button className="button" disabled={video === ""}>
              {"<video>"}
            </button>
          </Link>
        </div>
      </div>
      <div className="xl:flex cursor-pointer m-4 flex-end">
        <Link href={site} passHref target="_blank">
          <div className="rounded-2xl p-2 xl:p-0 w-full">
            <Image
              src={image}
              alt="project-image"
              objectFit="contain"
              height="800px"
              width="1200px"
              className="rounded-2xl min-w-full"
              priority
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Project;
