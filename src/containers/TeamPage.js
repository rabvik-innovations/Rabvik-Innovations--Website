import '../css/TeamPage.css'
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import Navbar from '../components/Navbar';

function TeamPage(props) {
  return (
    <div className="below-navbar">
      <Navbar />

      <section id="team" className="team">
        <div className="container-fluid p-0">

        <div className="team-section">
          <div className="section-title">
            <h2>Our Team</h2>

          </div>

          <div className="row">
            <TeamCard
              name="Dr. Neeladri Chatterjee"
              description="Founder| FMS Alumnus| University of Technology, Sydney Alumnus"
              linkedin="https://www.linkedin.com/in/dr-neeladri-chatterjee-9686b94/"
              image="images/team-1.jfif"
            />

            <TeamCard
              name="Pratik Mishra"
              description="Research Intern-IIT KGP| B.Tech(Mechanical)-JGEC| Entrepreneur(Co-Founder Quizzora)"
              linkedin="https://www.linkedin.com/in/pratik-mishra-707095114/"
              image="images/team-2.jpeg"
            />

            <TeamCard
              name="Deepak Kumar"
              description="Tech Advisor| SDE-Fintech| B.E(IT)-JU"
              linkedin="https://www.linkedin.com/in/deepak-kumar775300/"
              image="images/team-3.jfif"
            />

            <TeamCard
              name="Dr. Swapan Majumdar"
              description="Entrepreneur Head| Director-JK Laxshimpat University| Chairman, MD, Prof-IIM Shilong| KMIP"
              linkedin="https://www.linkedin.com/in/swapan-majumdar-434444a/"
              image="images/team-4.jpg"
            />

            <TeamCard
              name="Jyoti Sekhar Banerjee"
              description="Asst. Professor of ECE, Techno India| Technical Associate"
              linkedin="https://www.linkedin.com/in/dr-jyoti-sekhar-banerjee-6b052718b/"
              image="images/team-5.jfif"
            />

            <TeamCard
              name="Abhishek Biswas"
              description="M.Tech(Electronics), BIT Mesra|ex CTS|Mentor at the Pilot Project Sri Sri Academy"
              linkedin="https://www.linkedin.com/in/abhishek-biswas-405409144/"
              image="images/team-6.jpeg"
            />

            <TeamCard
              name="Palak Bansal"
              description="MBA-HRM| BA(HONS) ENG-LSR| HR and Social Media Lead"
              linkedin="https://www.linkedin.com/in/palak-bansalhrm/"
              image="images/team-7.jfif"
            />

            <TeamCard
              name="Pragya Goenka"
              description="CA| FMVA| BCom-St.Xavier's College| Sr Marketern Researcher"
              linkedin="https://www.linkedin.com/in/pragya-goenka-7174481a0/"
              image="images/team-8.jfif"
            />


          </div>
          </div>



          {/* ADVISORS */}

          <div className="advisor-section">
            <h2 className="text-white">Our Advisors</h2>
            <div className="row advisors">
              <TeamCard
                name="Anupam Sen"
                description="Chartered Accountant, Ex-PWC, Ex-IBM"
                linkedin="https://www.linkedin.com/in/anupam-sen-a16b7013/?originalSubdomain=in"
                image="images/advisor-1.png" />

              <TeamCard
                name="Tamal Pal"
                description="Corporate Strategy ,M&A ,New Business Incubation ,Industry 4.0 transformation ,Cement"
                linkedin="https://www.linkedin.com/in/tamal-kumar-pal-46095112/"
                image="images/advisor-2.jfif" />

              <TeamCard
                name="Uday Chatterjee"
                description="Angel Investor"
                linkedin="https://www.linkedin.com/in/uday-chatterjee-838b764/"
                image="images/advisor-6.jfif" />

            </div>
          </div>



          {/* INTERNS */}

          <div className="intern-section">
            <h2>Interns</h2>
            <div className="row interns">
              <TeamCard
                name="Saurav Singh"
                description="Web Development Intern"
                image="images/intern-saurav-singh.jfif"
                linkedin="https://www.linkedin.com/in/saurav-singh-691b551a2/"
              />

              <TeamCard
                name="Sauparna Gupta"
                description="Web Development Intern"
                image="images/intern-sauparna-gupta.jpg"
                linkedin="https://www.linkedin.com/in/sauparna-gupta/"
              />

              <TeamCard
                name="Vanshika Bhasin"
                description="Web Development Intern"
                image="images/intern-vanshika-bhasin.jpg"
                linkedin="https://www.linkedin.com/in/vanshika-bhasin-73b1aa17a/"
              />

              <TeamCard
                name="Vijeta Saini"
                description="Web Development Intern"
                image="images/intern-vijeta-saini.jpg"
                linkedin="https://www.linkedin.com/in/vijeta-saini-0211/"
              />

              <TeamCard
                name="Uma Negi"
                description="Web Development Intern"
                image="images/intern-uma-negi.jpg"
                linkedin="https://www.linkedin.com/in/uma-negi-543734186/"
              />

              <TeamCard
                name="Sahil Vengurlekar"
                description="Web Development Intern"
                image="images/intern-sahil-vengurlekar.jpg"
                linkedin="https://www.linkedin.com/in/sahil-vengurlekar-4b2558224/"
              />

              <TeamCard
                name="Sinchan Mandal"
                description="Web Development Intern"
                image="images/intern-sinchan-mandal.jfif"
                linkedin="https://www.linkedin.com/in/sinchan-mandal-1b57221a1/"
              />

              <TeamCard
                name="Nossam Venkata Yaswanth Reddy"
                description="Web Development Intern"
                image="images/intern-nossam.jpg"
                linkedin="https://www.linkedin.com/in/nossamyaswanth/"
              />

              <TeamCard
                name="Sharan Swaroop"
                description="Web Development Intern"
                image="images/intern-sharan-swaroop.jpg"
                linkedin="https://www.linkedin.com/in/sharan-swaroop/"
              />

              <TeamCard
                name="Anupam Saini"
                description="Web Development Intern"
                image="images/intern-anupam-saini.jfif"
                linkedin="https://www.linkedin.com/in/anupamsaini18/"
              />

              <TeamCard
                name="Sarvesh Prajapati"
                description="Web Development Intern"
                image="images/intern-sarvesh-prajapati.jfif"
                linkedin="https://www.linkedin.com/in/sarveshprajapati/"
              />

              <TeamCard
                name="Anushka Choudhary"
                description="Social Media Designer"
                image="images/intern-anushka-choudhary.jfif"
                linkedin="https://www.linkedin.com/in/anushka-choudhary-ba6418193/"
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