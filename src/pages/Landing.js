import { Alert, Badge, Col, Container, ListGroup, ProgressBar, Row, Stack } from 'react-bootstrap'

function Landing() {
  return (
    <Container>
      <Row>
        <Col className="p-3" xs="8">
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-start align-items-center">
              <img className="me-3" src={`${process.env.PUBLIC_URL}/fcj.png`} />
              <h1 className="text-uppercase">Shaun Delaney</h1>
            </ListGroup.Item>
            <hr className="bg" />
            <ListGroup.Item>
              <h3 className="text-uppercase">Professional Summary</h3>
              <p>
                Progressive software development team member skilled at optimizing development based on current and expected demands. Works effectively in
                high-pressure environments to meet challenging development standards and schedule targets. Expert in full stack broadcast software development.
              </p>
            </ListGroup.Item>
            <hr className="bg" />
            <ListGroup.Item>
              <h3 className="text-uppercase">Experience</h3>
              <ListGroup>
                <ListGroup.Item>
                  <h4>
                    Waveform Entertainment Inc{' '}
                    <a href="http://waveform.gg" target="_waveform">
                      <i className="fa-solid fa-up-right-from-square" />
                    </a>
                  </h4>
                  <h5 className="mb-3">
                    <i>Toronto, Ontario</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">February, 2021 - September, 2023</h6>
                  <h6>Full Stack Developer</h6>
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
                <hr />
                <ListGroup.Item>
                  <h4>3PT Operating, LLC</h4>
                  <h5 className="mb-3">
                    <i>United States</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">September, 2017 - February 2021</h6>
                  <h6>CEO</h6>
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
                <hr />
                <ListGroup.Item>
                  <h4>
                    MOBAFire{' '}
                    <a href="http://mobafire.com" target="_mobafire">
                      <i className="fa-solid fa-up-right-from-square" />
                    </a>
                  </h4>
                  <h5 className="mb-3">
                    <i>Canada</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">July, 2013 - August, 2016</h6>
                  <h6>Web Developer</h6>
                  <p>
                    Primarily Tools and Feature development with debugging managed by a ticketing system. I developed tools and systems for gamers to use to
                    pair with their gaming experience on multiple sites. Some key responsibilities included:
                  </p>
                  <ul>
                    <li>Tested and validated programs to enhance applications and improve performance.</li>
                    <li>Tracked changes and merged codes from different features to manage updated versions.</li>
                    <li>Executed programming projects adhering to coding standards, design styles and project management methodologies.</li>
                  </ul>
                  <Alert variant="secondary">
                    Spotlight -{' '}
                    <a href="http://heroesfire.com/hots/talent-calculator" target="heroesfire_calc">
                      HeroesFire Talent Calculator
                    </a>
                    ,{' '}
                    <a href="http://heroesfire.com/hots/concepts" target="heroesfire_concepts">
                      Concepts Generator
                    </a>{' '}
                    and{' '}
                    <a href="http://owfire.com/overwatch/counters" target="owfire_counters">
                      Overwatch Counters
                    </a>
                  </Alert>
                </ListGroup.Item>
                <hr />
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
                <hr />
                <ListGroup.Item>
                  <h4>
                    Team Solo Mid{' '}
                    <a href="http://tsm.gg" target="_tsm">
                      <i className="fa-solid fa-up-right-from-square" />
                    </a>
                  </h4>
                  <h5 className="mb-3">
                    <i>United States</i>{' '}
                    <Badge className="h6 text-uppercase" bg="primary">
                      Remote
                    </Badge>
                  </h5>
                  <h6 className="mb-0">March, 2012 - March, 2013</h6>
                  <h6>Web Developer</h6>
                  <p>
                    Created W3C valid html/css for new site skins & layouts. Created multiple plugins for the site (ie - Rune Calculators, Mastery Trees, etc)
                    as well as the back-end interactions to save the data.
                  </p>
                  <Alert variant="secondary">
                    Spotlight -{' '}
                    <a href="http://www.probuilds.net" target="tsm_probuilds">
                      Pro Builds
                    </a>
                  </Alert>
                </ListGroup.Item>
                <hr />
                <ListGroup.Item>
                  <h4>
                    York Unviersity English Language Institute{' '}
                    <a href="http://yueli.yorku.ca" target="_yueli">
                      <i className="fa-solid fa-up-right-from-square" />
                    </a>
                  </h4>
                  <h5 className="mb-3">
                    <i>Toronto, Ontario</i>{' '}
                    <Badge className="h6 text-uppercase" bg="success">
                      Office
                    </Badge>
                  </h5>
                  <h6 className="mb-0">February, 2008 - February, 2012</h6>
                  <h6>Technical Services Assistant</h6>
                  <p>
                    A Jack of all trades position - web developer, debugging software, assisting students in hardware localisation, database administrator and
                    custom service rep.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="bg-resume p-3" xs="4">
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
          <ul className="list-unstyled">
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
          <h3>
            <i className="fa-solid fa-graduation-cap me-2" />
            Education
          </h3>
          <p className="mb-0">Bachelor's of Science - Computer Science</p>
          <p>January, 2007</p>
          <div className="d-flex justify-content-start align-items-center mb-3">
            <img className="border border-black me-2" src={`${process.env.PUBLIC_URL}/york-university.webp`} />
            <div className="h5">
              <p className="mb-0">York University</p>
              <p className="mb-0">Toronto, Ontario</p>
            </div>
          </div>
          <h3>
            <i className="fa-solid fa-code me-2" />
            Skills
          </h3>
          <Row className="mb-3">
            <Col>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <h6>HTML/CSS</h6>
                  <div>
                    <ProgressBar className="w-100" variant="success" striped now={100} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Javascript</h6>
                  <div>
                    <ProgressBar className="w-100" variant="success" striped now={100} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Node.js</h6>
                  <div>
                    <ProgressBar className="w-100" variant="success" striped now={100} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Express.js</h6>
                  <div>
                    <ProgressBar className="w-100" variant="info" striped now={90} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>MongoDB</h6>
                  <div>
                    <ProgressBar className="w-100" variant="info" striped now={90} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Github</h6>
                  <div>
                    <ProgressBar className="w-100" variant="primary" striped now={80} />
                  </div>
                </li>
                <li>
                  <h6>React</h6>
                  <div>
                    <ProgressBar className="w-100" variant="primary" striped now={80} />
                  </div>
                </li>
              </ul>
            </Col>
            <Col>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <h6>Redux</h6>
                  <div>
                    <ProgressBar className="w-100" variant="primary" striped now={80} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>API Integrations</h6>
                  <div>
                    <ProgressBar className="w-100" variant="primary" striped now={80} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Linux</h6>
                  <div>
                    <ProgressBar className="w-100" variant="warning" striped now={50} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Docker</h6>
                  <div>
                    <ProgressBar className="w-100" variant="warning" striped now={50} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Bash</h6>
                  <div>
                    <ProgressBar className="w-100" variant="danger" striped now={40} />
                  </div>
                </li>
                <li className="mb-2">
                  <h6>Jira</h6>
                  <div>
                    <ProgressBar className="w-100" variant="danger" striped now={40} />
                  </div>
                </li>
                <li>
                  <h6>Zoho</h6>
                  <div>
                    <ProgressBar className="w-100" variant="danger" striped now={40} />
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
          <h3>
            <i className="fa-solid fa-calendar-day me-2" /> Notable Broadcasts
          </h3>
          <Row>
            <Col>
              <Stack gap={2}>
                <span>Dead by Daylight: Into the Fog</span>
                <span>Twitch Canada Rocket League</span>
                <span>EVO 2023</span>
                <span>GOML 2023</span>
                <span>Genesis 9</span>
                <span>Sony PS Open</span>
                <span>Dreamhack Dallas 2023</span>
                <span>Dead by Daylight: Into the Rainbow</span>
                <span>Call of Duty League Major 5</span>
              </Stack>
            </Col>
            <Col>
              <Stack gap={2}>
                <span>WoW: Race to World First 10.1</span>
                <span>Call of Duty League Major 3</span>
                <span>WoW: Race to World First 10.0</span>
                <span>Ludwig Scuffed World Tour</span>
                <span>Red Bull Campus Clutch</span>
                <span>Chess.com Finals 2022</span>
                <span>The Big House 10</span>
                <span>Riptide 2022</span>
                <span>Team StarCraft League 9</span>
              </Stack>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
