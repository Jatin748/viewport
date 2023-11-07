import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-4xl py-6 px-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-bold text-xs">Viewport</span>
          <div>
            <span className="text-xs text-[#7f8087]">
              Remake By{" "}
              <span className="font-bold text-[#4d4dff] underline">Jatin</span>
            </span>
          </div>
        </div>
        <div>
          <span className="text-xs">
            Hosted on{" "}
            <a
              href="https://www.netlify.com/"
              className="font-bold underline text-[#4d4dff]"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
