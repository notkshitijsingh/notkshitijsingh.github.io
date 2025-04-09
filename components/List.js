import { useState } from "react";
import ListItem from "./ListItem";

import Image from "next/image";
import Doggo from "@/app/assets/doggo.png";

const projects = [
  { name: "the pretty pomodoro", technology: "Web Development • JavaScript, React.js", year: "2025", link: "https://the-pretty-pomodoro.vercel.app" },
  { name: "GenAI Market Insights Generator", technology: "Artificial Intelligence • Python, Streamlit", year: "2024", link: "https://github.com/notkshitijsingh" },
  { name: "Snake.js", technology: "Singleplayer Web Game • JavaScript, CSS", year: "2024", link: "https://snake-on-js.vercel.app/" },
  { name: "Tilting Maze", technology: "Singleplayer Web Game • JavaScript, CSS", year: "2024", link: "https://tilting-maze.vercel.app/" },
  { name: "Ethereum Deposit Tracker", technology: "Web3 • Python, Alchemy", year: "2024", link: "https://github.com/notkshitijsingh" },
  { name: "PlayChess Online", technology: "Multiplayer Web Game • JavaScript, sockets.io, Node.js", year: "2024", link: "https://playchess-online.vercel.app/" },
  { name: "Chat App", technology: "Online Chatroom • JavaScript, sockets.io, Node.js", year: "2024", link: "https://chat-app-8x11.onrender.com/" },
  { name: "Document Retrieval System for LLMs", technology: "Backend System • Python, Docker, REST", year: "2024", link: "https://github.com/notkshitijsingh" },
  { name: "Omdena Water Quality Monitoring", technology: "Data Analytics • Python, Scikit-Learn", year: "2023", link: "https://github.com/notkshitijsingh" },
  { name: "VanGogh Image Colorisation", technology: "Artificial Intelligence • Python, PyTorch", year: "2023", link: "https://github.com/notkshitijsingh" },
  { name: "Flappy Bird AI Bot", technology: "AI Agent • Python, NEST, PyGame", year: "2023", link: "NA" },
  { name: "Flappy Bird Clone", technology: "Game Clone • Python, PyGame", year: "2023", link: "NA" },
  { name: "The Purrfect Plate", technology: "Web Development • JavaScript, React.js", year: "2023", link: "https://jade-khapse-998b4f.netlify.app/" },
  { name: "Shakespearean Sonnet Generator", technology: "Natural Language Processing • Python", year: "2023", link: "https://github.com/notkshitijsingh" },
  { name: "Weather App", technology: "Web Development • JavaScript, CSS", year: "2022", link: "https://fancy-lily-1e0bf1.netlify.app/" },
];

export default function List() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="list">
      {projects.map((project, index) => (
        <ListItem
          key={index}
          {...project}
          onHover={setHoveredProject}
          isHovered={hoveredProject === project.link}
        />
      ))}

      {hoveredProject && (
        <div className="preview-container">
          {hoveredProject === "https://github.com/notkshitijsingh" ? (
            <div className="preview-message">
              <Image
                src={Doggo}
                height={200} width={200}
                style={{marginBottom: "2rem"}}
                alt="This is sad"/>
              <h2><strong>This project cannot be previewed! 🚫</strong></h2>
              <p>The repository will be available on Github</p>
            </div>
          ) : (
            <iframe src={hoveredProject} className="preview-frame"></iframe>
          )}
        </div>
      )}
    </div>
  );
}
