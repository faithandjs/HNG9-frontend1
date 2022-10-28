import React from "react";

import I4g from "../assets/I4G.svg";
import zuri from "../assets/Zuri.Internship_Logo.svg";
import slack from "../assets/slack.svg";
import github from "../assets/Icon.svg";
import me from "../assets/me.jpg";
import mobile_share from "../assets/mobile_share.svg";
import web_share from "../assets/web_share.svg";

import "./style.scss";

export default function Index() {
  return (
    <div className='box'>
      {" "}
      <div id='sections'>
        <section id='profile'>
          <button className='share_btn'>
            <img src={mobile_share} alt='share button' className='mobile' />
            <img src={web_share} alt='share button' className='web' />
          </button>
          <div className='img-box'>
            <img src={me} alt='' />
          </div>
          <p>Okogbo Faith</p>
        </section>
        <section id='links'>
          <button>
            <a href=' https://twitter.com/hotgirldeba' target='_blank'>
              Twitter Link
            </a>
          </button>
          <button>
            <a href='https://training.zuri.team/ '>Zuri Team</a>
          </button>
          <button>
            <a href='http://books.zuri.team/ '>Zuri Books</a>
          </button>
          <button>
            <a href=' https://books.zuri.team/'>Python Books</a>
          </button>
          <button>
            <a href='https://background.zuri.team/ '>
              Background Check for Coders
            </a>
          </button>
          <button>
            <a href='https://books.zuri.team/design-rules '>Design Books</a>
          </button>
          <div className='logos'>
            <img src={slack} alt='Slack logo' />
            <img src={github} alt='Github logo' />
          </div>
        </section>{" "}
      </div>
      <footer>
        <img src={zuri} alt='Zuri Internship logo' />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4g} alt='Ingressive for Good logo' />
      </footer>
    </div>
  );
}
