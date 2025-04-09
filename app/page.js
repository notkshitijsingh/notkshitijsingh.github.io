"use client";

import Background from "@/components/Background";
import List from "@/components/List";

export default function Home() {
  return (
    <div className="container">
      <Background />
      <div className="showcase">
        <List />
      </div>
      <div className="information">
        <h1>Kshitij Singh,</h1>
        <h1>
          software engineer specialised in <span className="colorful-text">AI and ML</span>
        </h1>
        <div className="links">
          <a className="link" href="mailto:chaharkshitij@gmail.com">Email</a>
          <a className="link" target="blank" href="https://github.com/notkshitijsingh">Github</a>
          <a className="link" target="blank" href="https://www.linkedin.com/in/kshitijsingh-lnkdin/">LinkedIn</a>
          <a className="link" target="blank" href="https://drive.google.com/file/d/1ERyT-gVzzWor9DYtKTzITr_7LXNSBAB9/view?usp=sharing">Resume</a>
        </div>
      </div>
    </div>
  );
}
