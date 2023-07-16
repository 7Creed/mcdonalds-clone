import React from "react";

const logo = "/img/logo.jpg";
export default function FooterBottomII() {
  return (
    <div className="flex items-center justify-center justify-items-center text-center">
      <div>
        {/* <ul className="lg:flex lg:flex-wrap p-10 justify-center items-center text-center">
          <li className="inline lg:flex-shrink-0 lg:flex-1 justify-center">
            <span className="privacy-text">Privacy (Updated)</span>
          </li>
          <ul className="flex flex-wrap gap-x-3 justify-center ">
            <li>California Privacy Notice</li>
            <li>Terms &amp; Conditions</li>
            <li>Accessibility</li>
            <li>Do Not Sell or Share My Personal Information</li>
            <li>Cookies Settings</li>
            <li>© 2017 - 2023&nbsp;McDonald's. All Rights Reserved</li>
          </ul>
        </ul> */}

        <div className="lg:flex justify-center text-[0.83rem] py-3 px-5 w-[100%] space-y-5">
          <div className="left flex flex-wrap justify-center gap-5 lg:justify-start lg:w-[65%]">
            <div className="block w-full lg:w-auto">Privacy (Updated)</div>
            <div>California Privacy Notice</div>
            <div>Terms &amp; Conditions</div>
            <div>Accessibility</div>
            <div>Do Not Sell or Share My Personal Information</div>
            <div>Cookies Settings</div>
          </div>
          <div className="right flex justify-center items-start lg:justify-end lg:w-[35%]">
            <img src={logo} alt="logo" className="w-8 inline-bloc" />
            <div className="lg:text-right">
              © 2017 - 2023&nbsp;McDonald's. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
