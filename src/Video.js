import React from "react";
import "./Video.css";

export default function Video() {
  return (
    <div className="Video">
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        poster="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/041/011/original/Screenshot_2022-07-19_at_19.13.02.png?1658247271"
      >
        <source
          src="https://stream.mux.com/fun7gkKzn3b01WbzonRL2TshvRjVG3vRX/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NjI1NzMzOTksImF1ZCI6InYiLCJzdWIiOiJmdW43Z2tLem4zYjAxV2J6b25STDJUc2h2UmpWRzN2UlgifQ.UR0v6jdRK6pO6yyhGE-fgHTbh_6lrIZC-53FlzKOHRbJUm_yuswNy7Ck3FkaE5x7DPAQf0KBPWckU86IaKkVgHggwFFTu82hBH1MKsGLJeKwusU0QdQcQ4MRC80lfBLg_nI1oFKChrNIrjxI6KIntokovOwfNKWITdj4s7PSnljgwNemvPNeZw4h6qFFmXHVnND9rbRm4_JpVsJZa0GyUIwdhGIvaqVGEJdiM4e45hQskBuKgeIOI4fga8aSJs7PKbBSuOpduOfqdFo5EoYwe2losUQImHvTvoWMnbowZTwcnccSrVSKPkcRMbmeu2ZW9Sn7k63B5x3VHdN86u2LCQ"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
