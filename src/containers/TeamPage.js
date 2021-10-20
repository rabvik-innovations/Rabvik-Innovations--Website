import '../css/TeamPage.css'
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import Navbar from '../components/Navbar';

function TeamPage(props) {
  return (
    <div className="below-navbar">
      <Navbar />

      <section id="team" className="team">
        <div className="container">

          <div className="section-title">
            <h2>Our Team</h2>

          </div>

          <div className="row">
            <TeamCard
              name="Dr. Neeladri Chatterjee"
              description="Founder| FMS Alumnus| University of Technology, Sydney Alumnus"
              image="images/team-1.jfif"
            />

            <TeamCard
              name="Pratik Mishra"
              description="Research Intern-IIT KGP| B.Tech(Mechanical)-JGEC| Entrepreneur(Co-Founder Quizzora)"
              image="images/team-2.png"
            />

            <TeamCard
              name="Deepak Kumar"
              description="Tech Advisor| SDE-Fintech| B.E(IT)-JU"
              image="images/wwd4.png"
            />

            <TeamCard
              name="Dr. Swapan Majumdar"
              description="Entrepreneur Head| Director-JK Laxshimpat University| Chairman, MD, Prof-IIM Shilong| KMIP"
              image="images/team-4.jfif"
            />

            <TeamCard
              name="Jyoti Sekhar Banerjee"
              description="Asst. Professor of ECE, Techno India| Technical Associate"
              image="images/team-5.jfif"
            />

            <TeamCard
              name="Abhishek Biswas"
              description="M.Tech(Electronics), BIT Mesra|ex CTS|Mentor at the Pilot Project Sri Sri Academy"
              image="images/wwd4.png"
            />

            <TeamCard
              name="Palak Bansal"
              description="MBA-HRM| BA(HONS) ENG-LSR| HR and Social Media Lead"
              image="images/team-7.jfif"
            />

            <TeamCard
              name="Pragya Goenka"
              description="CA| FMVA| BCom-St.Xavier's College| Sr Marketern Researcher"
              image="images/team-8.jfif"
            />



          </div>
          <div className="section-title">
            <h2>Interns</h2>
            <div className="row interns">
              <TeamCard
                name="Vanshika Bhasin"
                description="Web Development Intern"
                image="images/wwd4.png"
                linkedin="https://www.linkedin.com/in/vanshika-bhasin-73b1aa17a/"
              />

              <TeamCard
                name="Vijeta Saini"
                description="Web Development Intern"
                image="images/wwd4.png"
                linkedin="https://www.linkedin.com/in/vijeta-saini-0211/"
              />

              <TeamCard
                name="Uma Negi"
                description="Web Development Intern"
                image="images/wwd4.png"
                linkedin="https://www.linkedin.com/in/uma-negi-543734186/"
              />

              <TeamCard
                name="Intern name"
                description="Lorem ipsum dolor sit amet"
                image="images/wwd4.png"
              />

              <TeamCard
                name="Intern name"
                description="Lorem ipsum dolor sit amet"
                image="images/wwd4.png"
              />

              <TeamCard
                name="Intern name"
                description="Lorem ipsum dolor sit amet"
                image="images/wwd4.png"
              />

              <TeamCard
                name="Intern name"
                description="Lorem ipsum dolor sit amet"
                image="images/wwd4.png"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>


  );
}

export default TeamPage;