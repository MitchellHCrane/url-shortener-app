"use client";

import { useState } from "react";

export default function Home() {
  // State
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [urlErr, setUrlErr] = useState<string>("");

  // -- Form Change Handler --/
  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortUrl("");
    resetErr();
    setUrl(e.target.value.toLocaleLowerCase());
  };

  // -- Reset Error --/
  const resetErr = () => {
    setUrlErr("");
  };

  // -- Function to handle form submission --/
  // Only handle https
  const handleUrlFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if the URL has https:// using regex expression
    if (!url) {
      setUrlErr("Please enter a URL");
    } else if (!url.match(/^https:\/\//)) {
      setUrlErr("Please enter a URL starting with https://");
    } else {
      // Generate a random 8 character string
      const randomString = Math.random().toString(36).substring(2, 10);

      // newly generated short URL
      const newShortUrl = `${window.location.origin}/${randomString}`;

      // Save the URL to local storage (key, value) and assign it to the random string
      localStorage.setItem(randomString, url);

      setShortUrl(newShortUrl);
    }
  };

  return (
    <main className="px-4">
      {/* Heading  */}
      <section className="flex justify-center mt-24 text-2xl">
        <h1 className="text-leland font-bold">URL Shortener</h1>
      </section>
      {/* Form  */}
      <section className="md:flex justify-center mt-8">
        <form onSubmit={handleUrlFormSubmit}>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:gap-x-2">
            <input
              value={url}
              onChange={formChangeHandler}
              type="url"
              placeholder="Enter URL"
              className="w-full md:w-96 border-2 border-leland text-black rounded-md py-1 px-2"
            />
            <button
              className="bg-leland w-fit rounded-md px-2 py-1"
              type="submit"
            >
              Shorten URL
            </button>
          </div>
          <div>
            <p className="text-red-600">{urlErr}</p>
          </div>
        </form>
      </section>
      {/* Short URL Output */}
      {shortUrl && (
        <section className="flex justify-center items-center mt-8">
          <p>
            Here is your shortened URL:{" "}
            <a
              className="text-leland underline"
              href={shortUrl}
              target="_blank"
            >
              {shortUrl}
            </a>
          </p>
        </section>
      )}
    </main>
  );
}
