import React, { useState, useCallback } from 'react'
import web_style from '../pages/assets/css/webdesign.module.css'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./JsonPictureFiles/WebImages";

function WebPortfolio() {
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
    <section className={`${web_style.webPortfolioSection}`}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className={`${web_style.webPortfolioMainBox}`}>
                        <div className={`${web_style.webPortfolioHeadBox}`}>
                            <h5>Our Recent Projects</h5>
                            <p>Looking for design inspiration? Browse our portfolio to see our creative grind.</p>
                        </div>

                        <div className={`${web_style.webPortfolioImagesBox}`}>
                            <Gallery photos={photos} onClick={openLightbox} />
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel
                                            currentIndex={currentImage}
                                            views={photos.map(x => ({
                                                ...x,
                                                srcset: x.srcSet,
                                                // caption: x.title
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WebPortfolio