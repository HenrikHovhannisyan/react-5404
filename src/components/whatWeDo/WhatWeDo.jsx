import React from "react";
import "./whatWeDo.css";
import Item from "./Item";

const data = [
  {
    title: "Shop",
    description:
      "Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.",
  },
  {
    title: "Research",
    description:
      "View side-by-side comparisons, payment calculators, video reviews, and consumer reviews.",
  },
  {
    title: "News",
    description:
      "Our very own Cars.com experts offer unbiased coverage of today's automotive landscape. Yes, there will be dad jokes.",
  },
  {
    title: "Sell",
    description:
      "Check out our free, secure methods for selling your car. You can either sell directly to a private-party shopper or get an Instant Offer from a dealership.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="whatWeDo">
      <div className="container-fluid max_width">
        <h2 className="section_title mt-5">what we do</h2>

        <div className="whatWeDo_container">
          <div className="row">
            {data.map((e) => {
              return (
                <div key={e.title} className="col-12 col-xxl-3 col-md-6">
                  <Item title={e.title} description={e.description} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
