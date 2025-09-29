import React from "react";
import Title from "../../components/Title";

export default function Dashboard() {
  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard
      "
        subTitle="Monitor your room listings, track bokings and analyze revenue-all in one place.
      Stay update with real-time insights to ensure smooth operations."
      />

      <div className="flex gap-4 my-8">

        {/* total booking */}

        <div>

        </div>

        {/* total revenue */}
        <div>
            
        </div>
      </div>
    </div>
  );
}
