import React from "react";
import { Link } from "react-router-dom";
import WelcomeNav from "./Nav/WecomeNav";

function Welcome() {
  return (
    <>
      <WelcomeNav />
      <div className="bbg">
        <div className="flex items-center justify-center min-h-screen bg-center bg-cover">
          <div>
            <h1 className="text-6xl font-bold text-center text-white">
              Unlimited movies, <br /> TV shows, and more
            </h1>
            <p className="mt-8 text-2xl font-semibold text-center text-white">
              Starts at USD 2.99. Cancel anytime.
            </p>
            <p className="mt-6 text-center text-white">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex items-center justify-center mt-5">
              <button className="w-48 p-3 text-white bg-red-700 rounded-md text-[1.2rem]">
                <Link to="/login">Get Started{" > "}</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
