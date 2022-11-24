import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto my-20 grid grid-cols-1 md:gap-8 w-80 md:w-auto bg-white dark:bg-slate-800 md:grid-cols-2 rounded shadow-lg md:place-items-center overflow-hidden">
        <article>
          <img
            src="https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Neha K"
            className="md:h-64 md:object-cover"
          />
        </article>
        <article className="grid gap-4 p-4 md:p-0 md:pr-4">
          <h3 className="text-2xl mb-2">Neha K</h3>
          <p>
            I am a Frontend Web designer & developer in Figma and ReactJS, based
            in Hyderabad, India.
          </p>

          <ul className="flex items-center justify-start gap-4 mb-4 md:mb-0">
            <li>
              <a
                href="https://github.com/nehanalinik"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GrGithub
                  size={24}
                  className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-all"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/KennedyNalini"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter
                  size={24}
                  className="text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-all"
                />
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default ProfileCard;
