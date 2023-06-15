import React,  { useState, useCallback } from 'react'
import NavBar from '../components/NavBar'
import work from '../components/assets/css/ourWork.module.css'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/JsonPictureFiles/Photos";
import RequestForm from '../components/RequestForm';

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
      
      <section className='portTabSection'>
        <div className="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="portTab" role="tabpanel">
                <ul class="nav nav-tabs" role="tablist">
                  <li role="presentation" class="active"><a href="#webDesingPort" aria-controls="home" role="tab" data-toggle="tab"><span>Website Design</span> </a></li>
                  <li role="presentation"><a href="#logoDesignPort" aria-controls="profile" role="tab" data-toggle="tab"><span>Logo Design</span></a></li>
                  <li role="presentation"><a href="#CMS" aria-controls="messages" role="tab" data-toggle="tab"><span>Motions graphics</span></a></li>
                  <li role="presentation"><a href="#DigitalMarketing" aria-controls="messages" role="tab" data-toggle="tab"><span>Digital Marketing</span></a></li>
                  <li role="presentation"><a href="#APIServices" aria-controls="messages" role="tab" data-toggle="tab"><span>stationery & branding</span></a></li>
                </ul>


                <div class="tab-content tabs">
                  <div role="tabpanel" class="tab-pane fade in active" id="webDesingPort">
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
                  </div>

                  <div role="tabpanel" class="tab-pane fade" id="logoDesignPort">
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RequestForm />
    </>
  )
}

export default OurWork