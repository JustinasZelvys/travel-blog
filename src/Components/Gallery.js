import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./Gallery.css";

Modal.setAppElement("#root");

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        const posts = response.data;
        const imageUrls = posts.map((post) => post.imageUrl);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchImages();
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div className="gallery-hero">
        <div className="overlay">
          <h1>Gallery</h1>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((url, index) => (
            <div
              key={index}
              className="image-item"
              onClick={() => openModal(index)}
            >
              <img src={url} alt={`Post ${index + 1}`} />
            </div>
          ))}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <button className="prev-button" onClick={goToPreviousImage}>
            &#8249;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Full size ${currentImageIndex + 1}`}
            className="modal-image"
          />
          <button className="next-button" onClick={goToNextImage}>
            &#8250;
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Gallery;
