import React from "react";

import slack from "../assets/slack.svg";
import github from "../assets/Icon.svg";
import me from "../assets/me.jpeg";
import mobile_share from "../assets/mobile_share.svg";
import web_share from "../assets/web_share.svg";
import { Link } from "react-router-dom";
import "../styles/style.scss";

export default function Index() {
  return (
    <div id='box'>
      <div id='sections'>
        <section id='profile'>
          <button id='share_btn'>
            <img src={mobile_share} alt='share button' id='mobile' />
            <img src={web_share} alt='share button' id='web' />
          </button>
          <div id='img-box'>
            <img src={me} alt='' id='profile__img' />
          </div>
          <p id='slack'>faithandjs</p>
        </section>
        <section id='links'>
          <button>
            <a
              href=' https://twitter.com/hotgirldeba'
              target='_blank'
              rel='noreferrer'
              id='twitter'>
              Twitter Link
            </a>
          </button>
          <button>
            <a
              href='https://training.zuri.team/ '
              target='_blank'
              rel='noreferrer'
              id='btn__zuri'>
              Zuri Team
            </a>
          </button>
          <button>
            <a
              href='http://books.zuri.team/ '
              target='_blank'
              rel='noreferrer'
              id='books'
              title='Zuri Books has always been my go-to for books on design. They never fail!'>
              Zuri Books
            </a>
          </button>
          <button>
            <a
              href=' https://books.zuri.team/python-for-beginners?ref_id=faithandjs'
              target='_blank'
              rel='noreferrer'
              id='book__python'>
              Python Books
            </a>
          </button>
          <button>
            <a
              href='https://background.zuri.team/ '
              target='_blank'
              rel='noreferrer'
              id='pitch'>
              Background Check for Coders
            </a>
          </button>
          <button>
            <a
              href='https://books.zuri.team/design-rules '
              target='_blank'
              rel='noreferrer'
              id='book__design'>
              Design Books
            </a>
          </button>
          <button>
            <Link to='contact' id='contact' >Contact</Link>
          </button>
          <div id='logos'>
            <img src={slack} alt='Slack logo' />
            <img src={github} alt='Github logo' />
          </div>
        </section>{" "}
      </div>
    </div>
  );
}
