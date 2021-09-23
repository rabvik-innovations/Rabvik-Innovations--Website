import './App.css';
import SocialCard from './components/SocialCard';
import TeamCard from './components/TeamCard';

function App() {
  return (
    <div className="App">
      



      {/* Team Section  */}
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
      {/* End Team Section  */}



      {/* Social Cards  Section */}
      <section id="social-item" className="social-item">
        <div className="container">

          <div className="section-title">
            <h2>Want to know more about us?</h2>

          </div>

          <div className="row">
            <SocialCard
              socialIcon="instagram"
              text="Team's daily lives. Photos, jokes and the office atmosphere!"
            />

            <SocialCard
              socialIcon="facebook"
              text="Stories, tips, popular, add-ons, and other important info."
            />

            <SocialCard
              socialIcon="twitter"
              text="Here we share Tech and Development insights."
            />

            <SocialCard
              socialIcon="linkedin"
              text="Tech and Development insights."
            />


          </div>

        </div>
      </section>
      {/* End Social Cards Section  */}





    </div>
  );
}

export default App;
