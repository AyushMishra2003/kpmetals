import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import gallery1 from '../assets/galler1.jpg';
import gallery3 from '../assets/galler3.jpg';
import gallery5 from '../assets/heroo.webp';
import gallery6 from '../assets/heroo2.webp';
import gallery7 from '../assets/heroo3.webp';
import video1 from '../assets/herov.mp4';
import video2 from '../assets/video.mp4';

const images = [
    gallery1,
    gallery3,
    gallery5,
    gallery6,
];

const videos = [
    video2,
];

Modal.setAppElement('#root');

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage('');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container py-8 mx-auto p-2">
            <h1 className="mb-6 text-3xl font-bold text-center">Image and Video Gallery</h1>

            <h2 className="mb-4 text-2xl font-semibold">Image Gallery</h2>
            <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer fade-in-up" onClick={() => openModal(src)}>
                        <img src={src} alt={`Gallery Image ${index + 1}`} className="object-cover w-full h-auto" />
                    </div>
                ))}
            </div>

            <h2 className="mb-4 text-2xl font-semibold">Video Gallery</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {videos.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <video autoPlay loop muted className="w-full h-auto">
                            <source src={src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="max-h-full p-4 overflow-auto bg-white rounded-lg shadow-lg">
                    <img src={selectedImage} alt="Enlarged" className="object-cover w-full h-auto" />
                    <button onClick={closeModal} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">Close</button>
                </div>
            </Modal>
        </div>
    );
};

export default Gallery;
