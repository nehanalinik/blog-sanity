import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-slate-400 max-w-7xl mx-auto py-10 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl">Share on social media</h3>
        <ul className="text-sm text-slate-600 dark:text-slate-400 mt-4 flex items-center justify-center flex-wrap gap-4">
          <li>
            <a
              href="https://github.com/nehanalinik"
              rel="noopener noreferrer"
              target="_blank"
              className="text-slate-600 dark:text-slate-400 transition-all hover:text-slate-900 dark:hover:text-slate-300"
            >
              Github
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.frontendmentor.io/profile/nehanalinik"
              rel="noopener noreferrer"
              target="_blank"
              className="text-slate-600 dark:text-slate-400 transition-all hover:text-slate-900 dark:hover:text-slate-300"
            >
              Frontend Mentor
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://twitter.com/KennedyNalini"
              rel="noopener noreferrer"
              target="_blank"
              className="text-slate-600 dark:text-slate-400 transition-all hover:text-slate-900 dark:hover:text-slate-300"
            >
              Twitter
            </a>{" "}
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
