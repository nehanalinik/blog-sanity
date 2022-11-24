import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../lib/client";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";

const Blogpost = () => {
  const [blogpost, setBlogpost] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
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
      }`
      )
      .then((data) => {
        setBlogpost(data[0]);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${blogpost.title}`;
  }, [blogpost.title]);
  return (
    <>
      {blogpost && (
        <section className="py-20 px-5 max-w-3xl mx-auto">
          {blogpost.mainImage && (
            <img
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt}
              className="h-2/3 w-full object-cover rounded-2xl shadow"
            />
          )}
          <h1 className="text-4xl my-8 xl:text-6xl">{blogpost.title}</h1>
          <p className="font-bold text-sm mb-8">
            {blogpost.name}{" "}
            {blogpost.publishedAt && (
              <>
                &middot;{" "}
                {format(new Date(blogpost.publishedAt), "dd MMMM yyyy")}
              </>
            )}
          </p>
          <div className="leading-relaxed">
            <PortableText value={blogpost.body} />
          </div>
          <div className="max-w-7xl mx-auto px-5 mb-20 mt-20 flex items-end justify-end">
            <Link
              to="/blog"
              className="primary border border-slate-200 dark:border-slate-600"
            >
              Read More Blog posts
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Blogpost;
