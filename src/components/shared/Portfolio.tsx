import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UrlObject } from 'url';
import { FiLink as LinkIcon, FiGithub } from 'react-icons/fi';

type Props = {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  skills: string[];
  githubLink: string;
  href: string | UrlObject;
};

const Portfolio = ({ imageUrl, category, title, description, skills, githubLink, href }: Props) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-700 transition hover:shadow-xl">
      {/* Thumbnail */}
      <Image
        src={imageUrl}
        height={240}
        width={400}
        layout="responsive"
        alt={title}
        className="object-cover"
      />

      {/* Content */}
      <div className="p-5">
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{category}</p>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-200 mb-4">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Link button */}
        <div className="flex items-center gap-4">
          <Link href={href}>
            <a className="inline-flex items-center text-primary-500 hover:underline">
              <LinkIcon className="h-4 w-4 mr-1" /> View Project
            </a>
          </Link>
          {/* <Link href={githubLink}>
            <a className="inline-flex items-center text-red-500 hover:text-red-600 transform hover:scale-110 transition duration-300">
              <FiGithub size={22} />
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
