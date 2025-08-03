import PropTypes from 'prop-types';
import { useState } from 'react';

const StaffCard = (props) => {
  const { imgSrc, name, position, bio } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-blue-400 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={imgSrc}
          alt="Profile"
        />
        <h5 className="mb-1 text-xl font-medium text-black text-custom dark:text-white">{name}</h5>
        <span className="text-sm text-black text-custom font-style: italic font-semibold">{position}</span>
        <div className="flex mt-4 md:mt-6">
          <button 
            onClick={openModal}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-blue-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 ms-3"
          >
            View Profile
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-gray-300 rounded-lg mt-40 p-6 z-10 max-w-md max-h-[80vh] overflow-auto">
            <h2 className="text-xl font-bold text-custom">{name}</h2>
            <img className="w-32 h-32 mb-2 rounded-full" src={imgSrc} alt={name} />
            <p className="text-sm text-custom mt-10">{bio}</p>
            <button 
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-custom text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

StaffCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default StaffCard;
