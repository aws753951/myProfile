import React from "react";

const Home = () => {
  return (
    <div>
      <div class="container-fluid p-0">
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              MarcZhu
              <span class="text-primary">朱鴻埕</span>
            </h1>
            <div class="mb-5">
              Shulin Dist., New Taipei City 23859, Taiwan (R.O.C.) 0983204766 ·
              <a href="mailto:name@email.com"> a0983204766@email.com</a>
            </div>
            <p class="lead mb-5">
              I am exprienced in banking industry for about 2 years and 9 months
              for providing investing, insurance and tax suggestion to
              customers.
            </p>
            <p class="lead mb-5">
              However, I find my interests not in banking industry. And I want
              to do something more chanllenging when I am still young.
            </p>
            <p class="lead mb-5">
              Hence, I give myself a chance to follow my will. I want to be a
              soft-engineer which requiring lots of cutting edge imformation and
              hard skills.
            </p>
            <p class="lead mb-5">
              Now, I have studied programming languages on my own since I quited
              last job in on 2/28. Hope someone who may concern may check my
              side-project and have interest to contact me.
            </p>
            <div class="social-icons">
              <a
                class="social-icon"
                target="_blank"
                href="https://www.linkedin.com/in/hongcheng-zhu-2900a6175/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                class="social-icon"
                target="_blank"
                href="https://github.com/aws753951"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                class="social-icon"
                target="_blank"
                href="https://pda.104.com.tw/profile/share/dgf5OvDAGZPfJD3lN0xOdXgF9EodbQOP"
              >
                <img
                  width={"23px"}
                  height={"23px"}
                  src={require("../photos/104-Logo.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Experience--> */}
        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Work Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Executive Officer</h3>
                <div class="subheading mb-3">
                  CTBC Bank Co., Ltd-Financial Planner Dept.
                </div>
                <ul>
                  <li>
                    Analyzed the financial market, including monetary policy,
                    country industry and capital proposals.
                  </li>
                  <li>
                    Produced the suggestion of personal related tax, like
                    personal income tax, gift tax and estate tax.
                  </li>
                  <li>
                    Organized comprehensive consideration between client needs,
                    market and financial products to make a deal.
                  </li>
                  <li>
                    Administered company YouTube channel to appeal potential
                    clients.
                  </li>
                </ul>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2019 - Feb. 2022</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Intern</h3>
                <div class="subheading mb-3">Bank of China</div>
                <ul>
                  <li>
                    Analyzed the investment report of Shaaxi Nonferrous Metals;
                    Assisted the supervisor in financing lending.
                  </li>
                  <li>
                    Inspected China Local Government Platform; Evaluated the
                    feasibility of guarantee China Government would secure.
                  </li>
                </ul>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2018 - Aug. 2018</span>
              </div>
            </div>

            <h2 class="mb-5">Club Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Planner</h3>
                <div class="subheading mb-3">TMBA</div>
                <ul>
                  <li>
                    Initiated market research on the Styrene supply chain for
                    the overview of industry; Completed analyses on supply and
                    demand of ingredients and end products; diagnosed competitor
                    and policy impacts.
                  </li>
                  <li>
                    Inspected market expansion potential for GPPC on the plastic
                    industry in China and Taiwan, evaluated contribution margin
                    extended due to oversupply of Vinyl, summarized conclusions
                    and interpreted price range.
                  </li>
                </ul>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">June 2017 - Dec. 2017</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Education--> */}
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">University of National Cheng-Chi</h3>
                <div class="subheading mb-3">Master of Finance</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.95/4.3</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">September 2017 - Jun. 2019</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">National Taiwan University</h3>
                <div class="subheading mb-3">Bachelor of Economics</div>
                <p>GPA: 3.1/4.3</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">September 2012 - June 2016</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />
        {/* <!-- Skills--> */}
        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-python"></i>
              </li>
              <li class="list-inline-item">
                <span class="iconify" data-icon="simple-icons:mongodb"></span>
              </li>
              <li class="list-inline-item">
                <span class="iconify" data-icon="cib:mysql"></span>
              </li>
              <li class="list-inline-item">
                <span class="iconify" data-icon="simple-icons:selenium"></span>
              </li>
              <li class="list-inline-item">
                <span class="iconify" data-icon="simple-icons:pandas"></span>
              </li>
              <li class="list-inline-item">
                <span class="iconify" data-icon="file-icons:numpy"></span>
              </li>
              <li class="list-inline-item">
                <span class="iconify" data-icon="bxl:heroku"></span>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-git"></i>
              </li>
            </ul>
            <div class="subheading mb-3">Side-Project</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                <a target="_blank" href="https://classplatform.herokuapp.com/">
                  ClassPlatform
                </a>
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                <a
                  target="_blank"
                  href="https://github.com/aws753951/line-robot-market"
                >
                  LineRobot
                </a>
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                <a
                  target="_blank"
                  href="https://github.com/aws753951/yt-concat"
                >
                  YoutubeConcate
                </a>
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        {/* <!-- Certifications --> */}
        <section class="resume-section" id="certificate">
          <div class="resume-section-content">
            <h2 class="mb-5">Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fa-solid fa-certificate"></i>
                </span>
                TOEIC:855 (2019)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa-solid fa-certificate"></i>
                </span>
                Senior Securities Specialist (證券商高級業務員)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa-solid fa-certificate"></i>
                </span>
                Certification Test for Financial Derivatives Sales Personnel
                (衍生性金融商品銷售人員)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa-solid fa-certificate"></i>
                </span>
                Proficiency Test for Trust Operations Personnel(信託業業務人員)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa-solid fa-certificate"></i>
                </span>
                Property insurance representative (產物保險業務員)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa-solid fa-certificate"></i>
                </span>
                Investment-orientated insurance product representative
                (投資型保險商品業務員)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fa-solid fa-certificate"></i>
                </span>
                Personal insurance representative (人身保險業務員)
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
