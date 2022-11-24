import React, { useState, useEffect } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc) `
      )
      .then((data) => {
        setStories(data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.title = "Neha Nalini's Blog";
  }, []);
  return (
    <>
      {stories[0] && (
        <section className="max-w-7xl mx-auto my-20 px-5">
          <article className="relative">
            {stories[0].mainImage && (
              <img
                src={stories[0].mainImage.asset.url}
                alt={stories[0].alt}
                className="h-96 w-full object-cover rounded-2xl shadow-xl"
              />
            )}
            <div className="absolute bottom-8 left-8">
              <h1 className="text-4xl lg:text-5xl mb-8 text-white capitalize">
                {stories[0].title}
              </h1>
              <p className="text-slate-100 mb-8 pr-4 md:w-3/4">
                {`${stories[0]?.body[0]?.children[0]?.text.substring(
                  0,
                  200
                )}...`}
              </p>
              <Link to={`/blog/${stories[0].slug.current}`}>
                <button className="primary">Read More</button>
              </Link>
            </div>
          </article>
        </section>
      )}

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5 mb-10">
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
            <article className="border border-slate-400 dark:border-slate-800 rounded-lg overflow-hidden hover:bg-slate-200 dark:hover:bg-slate-800 transition-all duration-200">
              {story.mainImage && (
                <img
                  src={story.mainImage.asset.url}
                  alt={story.mainImage.alt}
                  loading="lazy"
                  className="md:h-64 w-full object-cover"
                />
              )}
              <div className="p-4">
                <p className="text-sm">
                  {story.name} &middot;{" "}
                  {format(new Date(story.publishedAt), "dd MMMM yyyy")}
                </p>
                <h2 className="text-xl mb-2 my-2">{story.title}</h2>
                <p className="text-sm">
                  {`${story?.body[0]?.children[0]?.text.substring(0, 200)}...`}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Read All blogs Btn */}
      <div className="max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end">
        <Link
          to="/blog"
          className="primary border border-slate-200 dark:border-slate-600"
        >
          Read All Blog Posts
        </Link>
      </div>
    </>
  );
};

export default Home;
