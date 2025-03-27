import React, { useState, useEffect, useRef } from 'react';

const Carousel2 = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImagePopup, setSelectedImagePopup] = useState(null);
  const imageCount = images.length;
  const carouselRef = useRef(null);

  const visibleImages = images.slice(startIndex, startIndex + 4); // Display only 4 images at a time

  // Handle Next and Prev buttons
  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? imageCount - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex === imageCount - 4 ? 0 : prevIndex + 1));
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Adjust the interval as per your preference

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8">
      <div className="flex space-x-4 overflow-hidden" ref={carouselRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(100 * startIndex) / imageCount}%)` }}
        >
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="relative shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 overflow-hidden mr-2 cursor-pointer"
              onClick={() => setSelectedImagePopup(""+index)}
            >
              <img
                src={image.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0">
        <button
          onClick={handlePrev}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0">
        <button
          onClick={handleNext}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Popup Modal */}
      {selectedImagePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-black text-lg"
              onClick={() => setSelectedImagePopup(null)}
            >
              &times;
            </button>
            <p>{selectedImagePopup}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel2;
