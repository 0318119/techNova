import React,  { useState, useCallback } from 'react'
import NavBar from '../components/NavBar'
import work from '../components/css/ourWork.module.css'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../pages/Photos";

function OurWork() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <>
      <div style={{ background: "linear-gradient(120deg, #5828fa 0, #7119f1 20%, #8e06e6 100%)" }}>
        <NavBar />
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${work.sliderBox}`}>
                <h4>Customers Speak For Ourselves</h4>
                <p>
                    Allowing is a small list of our extensive range of services that we have provided to our esteemed clients. Remember customer satisfaction is our top priority. Get the perfect design - or any design in over 90 categories! Whatever your business need or budget, we’ll help get it done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="row">
            <ul>
              <button>Website Design</button>
              <button>logo design</button>
              <button>Motions graphics</button>
              <button>stationery & branding</button>
            </ul>
          </div>
          <div className="row">
            <div className="col-12">

            </div>
          </div>
        </div>
      </section>
      <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
    </>
  )
}

export default OurWork