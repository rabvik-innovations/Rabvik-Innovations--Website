import Footer from './components/Footer';
import TeamCard from '../components/TeamCard';

function TeamPage(props){
    return(
        <div className="container">
        
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
            image="images/team-2.png"
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
            image="images/team-5.png"
          />

          <TeamCard
            name="Uday Chatterjee"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-6.png"
          />

          <TeamCard
            name="Siddhartha Mukherjee"
            designation="Lorem ipsum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
            image="images/team-7.png"
          />



        </div>

      </div>
    </section>

    <Footer />

    </div>
    

    );
}

export default TeamPage