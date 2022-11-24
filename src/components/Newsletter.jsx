import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="py-20 px-5 bg-gradient-to-r from-indigo-600 to-slate-800 dark:bg-gradient-to-r dark:from-indigo-900 dark:backdrop:to-slate-900">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-2 md:gap-16 md:place-items-center">
          <article>
            <h2 className="text-white text-3xl mb-4 lg:text-4xl">
              Sign up to the newsletter
            </h2>
            <p className="text-slate-100">
              Receive the latest updates. No spam, unsubscribe anytime!
            </p>
          </article>
          <article>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                required
                className="w-full py-2 px-4 rounded shadow mb-4 bg-transparent border border-slate-200 placeholder-slate-300 text-slate-300 focus:outline-none tracking-wide"
              />
              <button type="submit" className="secondary">
                Subscribe
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
