
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EpisodesRow from "../components/EpisodesRow";
import Footer from "../components/Footer";
import { episodeData } from "../data/episodes";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero 
        title="Creator Enji"
        description="Dive into my professional journey through this Netflix-style portfolio experience. Browse through episodes showcasing my education, experience, projects, and skills."
        imageUrl="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop"
      />
      
      <div className="px-6 py-12 max-w-screen-xl mx-auto">
        <EpisodesRow 
          title="My Portfolio Episodes" 
          episodes={episodeData}
        />
        
        <EpisodesRow 
          title="Latest Episodes" 
          episodes={episodeData.slice().reverse()} 
          limit={3}
        />
        
        <div className="bg-secondary rounded-lg p-6 my-12">
          <h2 className="text-2xl font-bold text-white mb-4">About Creator Enji</h2>
          <p className="text-gray-300 mb-6">
            I'm a passionate web developer with expertise in creating immersive digital experiences. 
            Through the episodes of my portfolio, you'll discover my journey, skills, and achievements 
            in the world of web development.
          </p>
          <div className="flex justify-center">
            <a href="#" className="netflix-button">
              Connect with me
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;

