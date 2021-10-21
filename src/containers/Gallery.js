import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryCard from "../components/GalleryCard";
import PhotoGallery from "../components/PhotoGallery";


function Gallery() {
    return (
        <div className="below-navbar">
            <Navbar />

            {/* {Gallery Section} */}
            <section id="gallery-section" className="gallery-item">
                <div className="container">
                    <div className="gallery-title text-center">
                        <h2>Gallery</h2>
                        <br />
                    </div>

                    <div className="row photo-section">
                        {/* <GalleryCard
               image="./public/images/" /> */}
                        {PhotoGallery.map((photo) => {
                            return <GalleryCard key={photo.id} image={photo.image} />;
                        })}
                    </div>
                    
                </div>
            </section>
            {/* {End of gallery section} */}

            <Footer />
        </div >
    );
}

export default Gallery;