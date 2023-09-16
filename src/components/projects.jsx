import React from "react";
import { FiLink2 } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import TWS from "../images/tws.svg";
import TMS from "../images/tms.webp";
import CP from "../images/cp.webp";
import DUSC from "../images/dusc.webp";
import TTT from "../images/ttt.webp";
import NP from "../images/np.webp";
import MCR from "../images/mcr.webp";
import PP from "../images/pp.webp";

function Projects() {
  return (
    <div className="row my-4" id="projects">
      <div className="row my-4">
        <div className="col" id="projectsHead">
          PROJECTS
        </div>
      </div>
      <div className="row" style={{ margin: "0 auto" }}>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img
                src={TWS}
                className="img-fluid rounded-start"
                alt="Try Web Soft"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">Try Web Soft</h5>
                <p className="card-text text-muted">
                  It is a static website based on ReactJS which provide services
                  like image compressing, video compressing and working with
                  archives. This project is in continuation and new features are
                  being added constantly. Also in this project we provide some
                  technical blogs.
                </p>
                <div className="cardlink">
                  <a
                    href="https://trywebsoft.com"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img
                src={CP}
                className="img-fluid rounded-start"
                alt="Canteen Project"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">Canteen Project</h5>
                <p className="card-text text-muted">
                  This is an academic project demonstrating a system online food
                  ordering from college canteen. This project uses Node.JS
                  Express libraries to power backend technology.
                </p>
                <div className="cardlink">
                  <a
                    href="https://kmv-canteen-project.onrender.com/"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink2 />
                  </a>
                  <a
                    href="https://github.com/KaranManral/Canteen_Project"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img
                src={TMS}
                className="img-fluid rounded-start"
                alt="Transaction Management System"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">
                  Transaction Management System
                </h5>
                <p className="card-text text-muted">
                  This is slso an academic project demonstrating a Transaction
                  Management System which is a module of Banking Management
                  System. It provides demonstration of features like
                  Deposit,Withdraw,Transfer money and see profile and
                  transactions of a user.
                </p>
                <div className="cardlink">
                  <a
                    href="https://github.com/KaranManral/Transaction_Management_System"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img src={DUSC} className="img-fluid rounded-start" alt="DUSC" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">DUSC Web Project</h5>
                <p className="card-text text-muted">
                  This is another academic project demonstrating an online all
                  member chatting system like discord along with giving
                  information about courses running in our University. This
                  project is based on basic HTML,CSS,JS,PHP and MYSQL. It has a
                  profile section, a settings section, a chat section and a
                  section for courses.
                </p>
                <div className="cardlink">
                  <a
                    href="https://dusccwp.000webhostapp.com/"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink2 />
                  </a>
                  <a
                    href="https://github.com/KaranManral/CollegeProject_Web-Development"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img
                src={TTT}
                className="img-fluid rounded-start"
                alt="Tic Tac Toe"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">Tic Tac Toe</h5>
                <p className="card-text text-muted">
                  This is a JAVA based project for android which replicates game
                  of Tic Tac Toe on your Android Device.
                </p>
                <div className="cardlink">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trywebsoft.tictactoe"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img
                src={NP}
                className="img-fluid rounded-start"
                alt="Puzzle 2D"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">Puzzle 2D</h5>
                <p className="card-text text-muted">
                  This is another JAVA based project for android which
                  replicates a game of 18th Century i.e. Number Puzzle on your
                  Android Device.
                </p>
                <div className="cardlink">
                  <a
                    href="https://galaxy.store/Puzz2D"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img
                src={MCR}
                className="img-fluid rounded-start"
                alt="Math Clash Royale"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">Math Clash Royale</h5>
                <p className="card-text text-muted">
                  This is another JAVA based project for android which
                  replicates a game based on simple Mathematics of Addition on
                  your Android Device.
                </p>
                <div className="cardlink">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trywebsoft.mathclashroyale"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 projImgContainer">
              <img
                src={PP}
                className="img-fluid rounded-start"
                alt="Pixel Pulse"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-muted">Pixel Pulse</h5>
                <p className="card-text text-muted">
                  Want a quick and efficient solution to compress and resize
                  your images without compromising quality? Look no further!
                  Pixel Pulse is here to streamline your image management
                  experience. Pixel Pulse is made on React Native Framework.
                </p>
                <div className="cardlink">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.trywebsoft.pixelpulse"
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
