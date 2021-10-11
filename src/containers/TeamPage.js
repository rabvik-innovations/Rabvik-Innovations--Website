import '../css/TeamPage.css'
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import Navbar from '../components/Navbar';

function TeamPage(props){
    return(
        <div className="below-navbar">
          <Navbar />
        
      <section id="team" className="team">
      <div className="container">

        <div className="section-title">
          <h2>Our Team</h2>

        </div>

        <div className="row">
          <TeamCard
            name="Anupam Sen"
            position="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-1.png"
          />

          <TeamCard
            name="Tamal Pal"
            position="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-2.jfif"
          />

          <TeamCard
            name="Shivaji Gupta Roy"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-3.png"
          />

          <TeamCard
            name="Pratik Mishra"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-4.png"
          />

          <TeamCard
            name="S.K. Shahi"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-5.jfif"
          />

          <TeamCard
            name="Uday Chatterjee"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-6.jfif"
          />

          <TeamCard
            name="Siddhartha Mukherjee"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-7.png"
          />



        </div>
        <div className="section-title">
          <h2>Interns</h2>
          <div className="row">
          <TeamCard
            name="Intern name"
            position="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/wwd4.png"
          />

          <TeamCard
            name="Intern name"
            position="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/wwd4.png"
          />

          <TeamCard
            name="Intern name"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/wwd4.png"
          />

          <TeamCard
            name="Intern name"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/wwd4.png"
          />

          <TeamCard
            name="Intern name"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/wwd4.png"
          />

          <TeamCard
            name="Intern name"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/wwd4.png"
          />

          <TeamCard
            name="Intern name"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
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