import React from "react";
import style from "./TeamDiary.module.css";
import Line from "../../components/shared/Line/Line";

const TeamDiary = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.head} flex items-center justify-center`}>
        <h1>Team Diary</h1>
      </div>
      <div className={`${style.panel} flex`}>
        <div className={`${style.icons}`}>
          <i className="fa-brands fa-facebook fa-xl"></i>
          <i className="fa-brands fa-twitter fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
          <i className="fa-brands fa-pinterest fa-xl"></i>
        </div>
        <div className={style.face}>
          <img src="images/gaba.png" alt="" />
        </div>
        <div className={style.text}>
          <h4>Suryansh Kumar Kushwaha</h4>
          <h5>Founder ◆ Design</h5>

          <h6>suryanshkushwaaha@gmail.com</h6>
          <p>
            Suryansh is the guide of the company . he is also the android
            developer and GUI designer of apna helper . he is always full of
            creative ideas which help the company at achieve sucess
          </p>
        </div>
      </div>
      <div className={style.line}>
        <Line width="1267px" height="1px" />
      </div>
      <div className={`${style.panel2} flex`}>
        <div className={style.text2}>
          <h4>ramanuj Asati</h4>
          <h5>Founder ◆ Backend</h5>
          <h6>Ramanujasati90@gmail.com</h6>
          <p>
            Ramanuj provides technical direction with backend support. He has 2
            years of experience in the web development field and is fully packed
            with the knowledge required to run Apna helper
          </p>
        </div>

        <div className={style.face}>
          <img src="images/ketan.png" alt="" />
        </div>

        <div className={style.icons}>
          <i className="fa-brands fa-facebook fa-xl"></i>
          <i className="fa-brands fa-twitter fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
          <i className="fa-brands fa-pinterest fa-xl"></i>
        </div>
      </div>
      <div className={style.line}>
        <Line width="1267px" height="1px" />
      </div>
      <div className={`${style.panel} flex`}>
        <div className={style.icons}>
          <i className="fa-brands fa-facebook fa-xl"></i>
          <i className="fa-brands fa-twitter fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
          <i className="fa-brands fa-pinterest fa-xl"></i>
        </div>
        <div className={style.face}>
          <img src="images/ketan.png" alt="" />
        </div>
        <div className={style.text}>
          <h4>Ketan Sarna</h4>
          <h5>Founder ◆ Frontend</h5>

          <h6>ketansarna123@gmail.com</h6>
          <p>
            Ketan is the front-end head and fast learner of the crew. He has a 1
            experience in front end web development. and also he is the best
            team player due to his vast knowledge.
          </p>
        </div>
      </div>
      <div className={style.line}>
        <Line width="1267px" height="1px" />
      </div>
      <div className={`${style.panel2} flex`}>
        <div className={style.text2}>
          <h4>Lavish</h4>
          <h5>Tech Team</h5>
          <h6>sainilavish398@gmail.com</h6>
          <p>
            Ramanuj provides technical direction with backend support. He has 2
            years of experience in the web development field and is fully packed
            with the knowledge required to run Apna helper.
          </p>
        </div>
        <div className={style.face}>
          <img src="images/lavish.png" alt="" />
        </div>
        <div className={style.icons}>
          <i className="fa-brands fa-facebook fa-xl"></i>
          <i className="fa-brands fa-twitter fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
          <i className="fa-brands fa-pinterest fa-xl"></i>
        </div>
      </div>
      <div className={style.line}>
        <Line width="1267px" height="1px" />
      </div>
      <div className={`${style.panel} flex`}>
        <div className={style.icons}>
          <i className="fa-brands fa-facebook fa-xl"></i>
          <i className="fa-brands fa-twitter fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
          <i className="fa-brands fa-pinterest fa-xl"></i>
        </div>
        <div className={style.face}>
          <img src="images/gaba.png" alt="" />
        </div>
        <div className={style.text}>
          <h4>Krishna Gaba</h4>
          <h5>Tech Team</h5>
          <h6>krishnagaba01@gmail.com</h6>
          <p>
            Ramanuj provides technical direction with backend support. He has 2
            years of experience in the web development field and is fully packed
            with the knowledge required to run Apna helper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamDiary;
