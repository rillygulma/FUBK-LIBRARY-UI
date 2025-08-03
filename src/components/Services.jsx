const Services = () => {
  return (
    <div className="bg-gray-100 mt-20 min-h-screen py-10">
      <div className="text-center mt-10 px-4 lg:px-24">
        <button
          disabled
          className="mb-8 text-white text-7xl font-bold text-custom border-b-2 rounded bg-blue-700"
        >
          Our Services
        </button>

        {/* Working Hours */}
        <div className="flex flex-col items-center text-custom mb-20">
          <button
            disabled
            className="mb-4 text-white text-2xl font-bold border-b-2 rounded bg-blue-700"
          >
            Working Hours
          </button>
          <p className="mb-5 text-2xl font-semibold">
            We are open for consultation and work on the following schedule:
          </p>
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
            <ul className="text-lg font-semibold space-y-4">
              <li className="flex justify-between">
                <span className="bg-blue-600 text-custom px-2 rounded">
                  Monday
                </span>
                <span className="bg-green-600 text-custom px-2 rounded">
                  8:00AM - 10:00PM
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Tuesday</span>
                <span className="text-custom">8:00AM - 10:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Wednesday</span>
                <span className="text-custom">8:00AM - 10:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Thursday</span>
                <span className="text-custom">8:00AM - 10:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Friday</span>
                <span className="text-custom">8:00AM - 1:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Re-Open</span>
                <span className="text-custom">4:00PM - 10:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Saturday</span>
                <span className="text-custom">9:00AM - 6:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="italic text-custom">
                  Sunday/Public Holiday
                </span>
                <span className="text-white font-bold italic bg-red-800 px-2 py-1 rounded">
                  Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Vacation Schedule */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mt-10">
            <h3 className="text-xl font-bold text-blue-800 mb-4 border-b pb-2">
              During Vacation
            </h3>
            <ul className="text-lg font-semibold space-y-4">
              <li className="flex justify-between">
                <span className="text-custom">Monday – Thursday</span>
                <span className="text-custom">9:00AM – 4:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Friday</span>
                <span className="text-custom">9:00AM – 1:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-custom">Saturday</span>
                <span className="text-custom">9:00AM – 2:00PM</span>
              </li>
              <li className="flex justify-between">
                <span className="italic text-custom">
                  Sunday/Public Holiday
                </span>
                <span className="text-white font-bold italic bg-red-800 px-2 py-1 rounded">
                  Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reference Services */}
        <div className="mt-20">
          <button
            disabled
            className="mb-8 text-white text-5xl font-bold border-b-2 rounded bg-blue-700"
          >
            REFERENCE SERVICE
          </button>
          <p className="text-2xl">
            Our library provides in-person and e-reference services through
            Chat-A-Librarian live chat; Email and Zoom virtual meetings. To
            schedule a Zoom virtual meeting, please contact the Reference
            Librarian.
          </p>
        </div>

        {/* Accessibility Support */}
        <div className="mt-20">
          <button
            disabled
            className="mb-8 text-white text-5xl font-bold border-b-2 rounded bg-blue-700"
          >
            Support for Users with Disabilities
          </button>
          <p className="mb-5 text-3xl font-semibold">
            The University Library renders inclusive library services to users
            with disabilities. Our service offering includes:
          </p>
          <ol className="flex flex-col text-2xl items-start list-decimal space-y-3 mb-5">
            <li>Provision of assistive tools on students’ personal devices</li>
            <li>Scan and convert course materials to braille or audio</li>
            <li>
              Transcription and conversion of resources to accessible format
            </li>
            <li>
              Research Assistance – students are expected to book an appointment
              with the Librarians.
            </li>
            <li>
              Continuous library orientation and information literacy programme
            </li>
            <li>Extended loan periods</li>
            <li>Provision of ramps for users on wheelchairs.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Services;
