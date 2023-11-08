import { Alert, Badge, Col, Container, ListGroup, ProgressBar, Row } from 'react-bootstrap'
import classNames from 'classnames'

import { Tooltip } from 'components'
import notables from 'api/notables.json'
import shoutcasts from 'api/shoutcasts.json'
import skills from 'api/skills.json'

const skillColorScale = {
  100: 'success',
  90: 'info',
  80: 'primary',
  50: 'warning',
  40: 'danger',
  10: 'danger',
}

function Landing() {
  return (
    <Container>
      <Row>
        {/* Main Content */}
        <Col className="main p-3" xs="8">
          <ListGroup>
            {/* Header */}
            <ListGroup.Item className="d-flex justify-content-start align-items-center">
              <img className="me-3 d-print-none" src={`${process.env.PUBLIC_URL}/fcj.png`} />
              <h1 className="text-uppercase mb-0">Shaun "FourCourtJester" Delaney</h1>
            </ListGroup.Item>
            <hr className="bg my-3" />
            {/* Professional Summary */}
            <ListGroup.Item>
              <h3 className="text-uppercase">Professional Summary</h3>
              <p>
                Progressive software development team member skilled at optimizing development based on current and expected demands. Works effectively in
                high-pressure environments to meet challenging development standards and schedule targets. Expert in full stack broadcast software development.
              </p>
            </ListGroup.Item>
            <hr className="bg my-3" />
            <ListGroup.Item>
              <h3 className="text-uppercase">Experience</h3>
              {/* Experience/Jobs */}
              <ListGroup>
                <ListGroup.Item>
                  <h4>
                    Waveform Entertainment Inc{' '}
                    <Tooltip title="http://www.waveform.gg" placement="top">
                      <a className="d-print-none" href="//waveform.gg" target="_waveform">
                        <i className="fa-solid fa-up-right-from-square" />
                      </a>
                    </Tooltip>
                  </h4>
                  <h5 className="mb-3">
                    <i>Toronto, Ontario</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">February, 2021 - September, 2023</h6>
                  <h6 className="mb-3">Full Stack Developer</h6>
                  <p>
                    Creator of Icarus, a next gen deployable remote collaborative broadcast software tool for internal use. All company broadcasts from July
                    2022 used this tool to power all broadcast assets.
                  </p>
                  <p>
                    Modular projects were deployed with Icarus. Twitch OAuth users were managed by admins to operate the broadcasts via generated invites. Bash
                    scripts were created to ensure zero downtime on updating live projects. Some key responsibilities included:
                  </p>
                  <ul>
                    <li>Collaborated with designers and development teams to create high-quality interactive web experiences.</li>
                    <li>Designed and implemented core architecture and capabilities for software from prototype to operational applications.</li>
                    <li>Evaluated new software products and technologies and recommended changes to enhance existing systems or build new ones.</li>
                    <li>Provided professional development sessions for junior developers.</li>
                    <li>Wrote, organized and distributed technical documentation.</li>
                  </ul>
                </ListGroup.Item>
                <hr className="my-3" />
                <ListGroup.Item>
                  <h4>3PT Operating, LLC</h4>
                  <h5 className="mb-3">
                    <i>United States</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">September, 2017 - February 2021</h6>
                  <h6 className="mb-3">CEO</h6>
                  <p>
                    Pixel Perfect Production Tools (3PT) created Cartography, a system to allow Twitch OAuth users to create and manage broadcasts, leveraging
                    web APIs and a cascading event system to control and execute an overlay, either by the streamer or via remote operation.
                  </p>
                  <p>I was solely responsible for all business, marketing, sales and coding practices. Some key responsibilities included:</p>
                  <ul>
                    <li>Set initial vision for company and stayed involved in day-to-day operations.</li>
                    <li>Completed marketing and operations setup, determining branding and establishing workspace.</li>
                    <li>Designed and implemented core architecture and capabilities for software from prototype to operational applications.</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* Sidebar */}
        <Col className="sidebar bg-resume p-3 pb-0" xs="4">
          {/* Contact Information */}
          <div className="contact mb-3">
            <p className="mb-0">
              <i className="fa-solid fa-location-dot me-2" />
              Barrie, Ontario, L4N 0T3, Canada
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="fa-solid fa-phone me-2" />
                <a href="tel:12897167698">1-289-716-7698</a>
              </li>
              <li>
                <i className="fa-solid fa-at me-2" />
                <a href="mailto:dezaney@gmail.com">dezaney@gmail.com</a>
              </li>
            </ul>
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fa-brands fa-twitch me-2" />
                <a href="https://twitch.tv/fourcourtjester" target="_twitch">
                  FourCourtJester
                </a>
              </li>
              <li>
                <i className="fa-brands fa-youtube me-2" />
                <a href="https://youtube.com/fourcourtjester" target="_youtube">
                  FourCourtJester
                </a>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter me-2" />
                <a href="https://twitter.com/fourcourtjester" target="_twitter">
                  FourCourtJester
                </a>
              </li>
            </ul>
          </div>
          {/* Education */}
          <div className="education mb-3">
            <h3 className="text-uppercase">
              <i className="fa-solid fa-graduation-cap me-2 d-print-none" />
              Education
            </h3>
            <p className="mb-0">Bachelor's of Science - Computer Science</p>
            <p className="mb-print-2">January, 2007</p>
            <div className="d-flex justify-content-start align-items-center">
              <img className="border border-black me-2 d-print-none" src={`${process.env.PUBLIC_URL}/york-university.webp`} />
              <div className="h5">
                <p className="mb-0">
                  <a href="http://yorku.ca" target="_yorku">
                    York University
                  </a>
                </p>
                <p className="mb-0">Toronto, Ontario</p>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="skills-container mb-3">
            <h3 className="text-uppercase">
              <i className="fa-solid fa-code me-2 d-print-none" />
              Skills
            </h3>
            <Row>
              <Col>
                <ul className="skills list-unstyled mb-0">
                  {skills.map((skill, i) => (
                    <li key={i} className={classNames(i < skills.length - 1 ? 'mb-2' : false)}>
                      <h6 className="d-print-inline mb-print-0" style={skill.css} data-title={`${skill.proficiency}%`}>
                        {skill.name}
                      </h6>
                      <div className="d-print-none">
                        <ProgressBar className="w-100" variant={skillColorScale[skill.proficiency]} striped now={skill.proficiency} />
                      </div>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
          {/* Broadcasts */}
          <div className="notables-container">
            <h3 className="text-uppercase">
              <i className="fa-solid fa-calendar-day me-2 d-print-none" /> Notable Shows
            </h3>
            <Row>
              <Col>
                <ul className="notables list-unstyled mb-0">
                  {notables.map((notable, i) => (
                    <li key={i} className={classNames(i < notables.length - 1 ? 'mb-2' : false)}>
                      <h6 className="d-print-inline mb-print-0">{notable}</h6>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <span className="page-break d-none d-print-block" />
      <Row>
        {/* Main Content */}
        <Col className="main p-3 pt-0" xs="8">
          <ListGroup>
            {/* Header */}
            <ListGroup.Item className="d-none d-print-flex justify-content-start align-items-center">
              <img className="me-3 d-print-none" src={`${process.env.PUBLIC_URL}/fcj.png`} />
              <h1 className="text-uppercase mb-0">Shaun "FourCourtJester" Delaney</h1>
            </ListGroup.Item>
            <hr className="bg mt-0 my-print-3 mb-3" />
            {/* Professional Summary */}
            <ListGroup.Item>
              <h3 className="text-uppercase">About Me</h3>
              <p>
                After I graduated from University, I saw my first ever Esports broadcast, MLG Halo 3. I saw three nerds in suits talking really excitedly about
                the game. That was when I decided to start doing commentary, which ultimately led to me being interested in production and creating my own
                overlay systems!
              </p>
            </ListGroup.Item>
            <hr className="bg my-3" />
            <ListGroup.Item>
              <h3 className="text-uppercase">Experience</h3>
              {/* Experience/Jobs */}
              <ListGroup>
                <ListGroup.Item>
                  <h4>
                    MOBAFire{' '}
                    <Tooltip title="http://www.mobafire.com" placement="top">
                      <a className="d-print-none" href="//mobafire.com" target="_mobafire">
                        <i className="fa-solid fa-up-right-from-square" />
                      </a>
                    </Tooltip>
                  </h4>
                  <h5 className="mb-3">
                    <i>Canada</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">July, 2013 - August, 2016</h6>
                  <h6 className="mb-3">Web Developer</h6>
                  <p>
                    Primarily Tools and Feature development with debugging managed by a ticketing system. I developed tools and systems for gamers to use to
                    pair with their gaming experience on multiple sites. Some key responsibilities included:
                  </p>
                  <ul>
                    <li>Tested and validated programs to enhance applications and improve performance.</li>
                    <li>Tracked changes and merged codes from different features to manage updated versions.</li>
                    <li>Executed programming projects adhering to coding standards, design styles and project management methodologies.</li>
                  </ul>
                  <Alert className="d-print-none" variant="secondary">
                    Spotlight -{' '}
                    <Tooltip title="http://www.heroesfire.com/hots/talent-calculator" placement="top">
                      <a href="//heroesfire.com/hots/talent-calculator" target="heroesfire_calc">
                        HeroesFire Talent Calculator
                      </a>
                    </Tooltip>
                    ,{' '}
                    <Tooltip title="http://www.heroesfire.com/hots/concepts" placement="top">
                      <a href="//heroesfire.com/hots/concepts" target="heroesfire_concepts">
                        Concepts Generator
                      </a>
                    </Tooltip>{' '}
                    and{' '}
                    <Tooltip title="http://www.owfire.com/overwatch/counters" placement="top">
                      <a href="//owfire.com/overwatch/counters" target="owfire_counters">
                        Overwatch Counters
                      </a>
                    </Tooltip>
                  </Alert>
                </ListGroup.Item>
                <hr className="my-3" />
                <ListGroup.Item>
                  <h4>PlayIGL</h4>
                  <h5 className="mb-3">
                    <i>Canada</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">March, 2013 - June, 2013</h6>
                  <h6>Web Developer</h6>
                </ListGroup.Item>
                <hr className="my-3" />
                <ListGroup.Item>
                  <h4>
                    Team Solo Mid{' '}
                    <Tooltip title="http://www.tsm.gg" placement="top">
                      <a className="d-print-none" href="//tsm.gg" target="_tsm">
                        <i className="fa-solid fa-up-right-from-square" />
                      </a>
                    </Tooltip>
                  </h4>
                  <h5 className="mb-3">
                    <i>United States</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">March, 2012 - March, 2013</h6>
                  <h6 className="mb-3">Web Developer</h6>
                  <p>
                    Created W3C valid html/css for new site skins & layouts. Created multiple plugins for the site (ie - Rune Calculators, Mastery Trees, etc)
                    as well as the back-end interactions to save the data.
                  </p>
                  <Alert className="d-print-none" variant="secondary">
                    Spotlight -{' '}
                    <Tooltip title="http://www.probuilds.net" placement="top">
                      <a href="//www.probuilds.net" target="tsm_probuilds">
                        Pro Builds
                      </a>
                    </Tooltip>
                  </Alert>
                </ListGroup.Item>
                <hr className="my-3" />
                <ListGroup.Item>
                  <h4>
                    York Unviersity English Language Institute{' '}
                    <Tooltip title="http://yueli.yorku.ca" placement="top">
                      <a className="d-print-none" href="//yueli.yorku.ca" target="_yueli">
                        <i className="fa-solid fa-up-right-from-square" />
                      </a>
                    </Tooltip>
                  </h4>
                  <h5 className="mb-3">
                    <i>Toronto, Ontario</i>{' '}
                    <Badge className="h6 text-uppercase" bg="success">
                      Office
                    </Badge>
                  </h5>
                  <h6 className="mb-0">February, 2008 - February, 2012</h6>
                  <h6 className="mb-3">Technical Services Assistant</h6>
                  <p>
                    A Jack of all trades position - web developer, debugging software, assisting students in hardware localisation, database administrator and
                    custom service rep.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/* Sidebar */}
        <Col className="sidebar bg-resume p-3" xs="4">
          {/* Contact Information */}
          <div className="contact d-none d-print-block mb-3">
            <p className="mb-0">
              <i className="fa-solid fa-location-dot me-2" />
              Barrie, Ontario, L4N 0T3, Canada
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="fa-solid fa-phone me-2" />
                <a href="tel:12897167698">1-289-716-7698</a>
              </li>
              <li>
                <i className="fa-solid fa-at me-2" />
                <a href="mailto:dezaney@gmail.com">dezaney@gmail.com</a>
              </li>
            </ul>
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fa-brands fa-twitch me-2" />
                <a href="https://twitch.tv/fourcourtjester" target="_twitch">
                  FourCourtJester
                </a>
              </li>
              <li>
                <i className="fa-brands fa-youtube me-2" />
                <a href="https://youtube.com/fourcourtjester" target="_youtube">
                  FourCourtJester
                </a>
              </li>
              <li>
                <i className="fa-brands fa-x-twitter me-2" />
                <a href="https://twitter.com/fourcourtjester" target="_twitter">
                  FourCourtJester
                </a>
              </li>
            </ul>
          </div>
          {/* Video Games */}
          <div className="video-games-container mb-3">
            <h3 className="text-uppercase">
              <i className="fa-solid fa-gamepad me-2 d-print-none" /> Video Games
            </h3>
            <p className="mb-0">
              I have been playing video games since I can remember, and got involved with supporting them through coding and commentary since 2010, when I
              started my Youtube channel for RTS and MOBA games. I also play a lot of RPG, so let's party up!
            </p>
          </div>
          {/* Shoutcasts */}
          <div className="shoutcasts-container mb-3">
            <h3 className="text-uppercase">
              <i className="fa-solid fa-microphone me-2 d-print-none" /> Commentary
            </h3>
            <Row>
              <Col>
                <ul className="shoutcasts list-unstyled mb-0">
                  {shoutcasts.map((shoutcast, i) => (
                    <li key={i} className={classNames(i < shoutcasts.length - 1 ? 'mb-2' : false)}>
                      <h6 className="d-print-inline mb-print-0">{shoutcast}</h6>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
          <hr />
          {/* Footer */}
          <p>This resume was built with Create React App, Sass, Bootstrap and Fonts Awesome.</p>
          <p className="mb-0">
            The online experience can be found at <a href="//fourcourtjester.github.io/Resume">http://fourcourtjester.github.io/Resume</a>.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
