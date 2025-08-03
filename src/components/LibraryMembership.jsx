const LibraryMembership = () => {
  return (
    <div className="bg-gray-100 mt-20 min-h-screen py-16 px-4 md:px-20">
      
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl mt-10 font-bold text-center text-blue-900 mb-16">
        FUBK Library Information
      </h1>
      {/* Membership Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4 border-b pb-2">
          Library Membership
        </h2>
        <p className="mb-4 text-gray-700">
          The following categories are bonafide members of the FUBK Library
          eligible for services and borrowing:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-800">
          <li>Members of the University Governing Council</li>
          <li>Academic / Research Staff</li>
          <li>Senior Non-Teaching / Technical Staff</li>
          <li>Full-Time Students of the University</li>
          <li>Part-Time Students</li>
          <li>
            Visiting Researchers or Others (based on application and approval of
            the University Librarian)
          </li>
        </ul>
      </section>
      {/* Registration Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4 border-b pb-2">
          Library Registration
        </h2>
        <p className="mb-4 text-gray-700">
          Registration is mandatory for all staff and students. Only registered
          individuals may use library resources.
        </p>
        <p className="mb-4 text-gray-700">
          University Staff should present a letter of introduction and
          appointment letter. Fresh students must register before matriculation
          to avoid a ₦200 late registration fine. Valid forms and ID cards are
          required.
        </p>
        <p className="font-semibold text-gray-800 mb-2">Ticket Allocation:</p>
        <ul className="list-disc ml-6 space-y-1 text-gray-800">
          <li>Senior Staff – 10 tickets</li>
          <li>Undergraduate Students – 4 tickets</li>
          <li>Postgraduate Students – 6 tickets</li>
        </ul>
      </section>
      {/* Material Organization */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4 border-b pb-2">
          System of Organizing Library Materials
        </h2>
        <p className="text-gray-700">
          Materials are classified and shelved using the Library of Congress
          Classification Scheme. Each book has a unique class mark indicating
          subject and shelf location. This mark is found on catalogue cards and
          book spines.
        </p>
      </section>
      {/* Library of Congress Classification */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6 border-b pb-2">
          Library of Congress Classification Scheme
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm md:text-base">
          {[
            ["A", "Reference Books and Generalia"],
            ["B-BF", "Philosophy and Psychology"],
            ["BJ", "Ethics and Religion"],
            ["BL-BX", "Religion and Theology"],
            ["C-F", "History"],
            ["CB", "Civilization"],
            ["DA-DR", "Europe"],
            ["DS", "Asia"],
            ["DT", "Africa"],
            ["EF", "America"],
            ["G", "Geography and Anthropology"],
            ["H", "Social Science and Economics"],
            ["J", "Political Science"],
            ["K", "Law"],
            ["L", "Education"],
            ["M", "Music"],
            ["N", "Fine Arts"],
            ["P", "Language and Literature"],
            ["PA", "Classics"],
            ["PE", "English Language"],
            ["PJ", "Oriental Language"],
            ["PL", "African Language"],
            ["PQ", "French Literature"],
            ["PR", "English Literature"],
            ["PS", "American Literature"],
            ["Q", "Science"],
            ["QA", "Mathematics"],
            ["QB", "Astronomy"],
            ["QC", "Physics"],
            ["QD", "Chemistry"],
            ["QE", "Geology"],
            ["QH", "Biological Sciences"],
            ["QK", "Botany"],
            ["QL", "Zoology"],
            ["QP", "Biochemistry, Physiology"],
            ["QR", "Microbiology"],
            ["R", "Medicine"],
            ["S", "Agriculture"],
            ["T", "Technology"],
            ["U", "Military Science"],
            ["V", "Naval Science"],
            ["Z", "Bibliography, Library Science"],
          ].map(([code, title]) => (
            <div
              key={code}
              className="bg-white p-4 shadow-sm rounded-lg border"
            >
              <p className="font-bold text-blue-700">{code}</p>
              <p className="text-gray-700">{title}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Card Catalogue */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4 border-b pb-2">
          Use of Card Catalogue
        </h2>
        <p className="mb-4 text-gray-700">
          To locate a book, start with the Public Catalogue. It provides
          information such as author, title, and subject.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-800">
          <li>Find if a book is available</li>
          <li>Browse by author or title (Author/Title Catalogue)</li>
          <li>Browse by subject (Subject Catalogue)</li>
          <li>Retrieve needed books efficiently</li>
        </ul>
        <p className="mt-4 text-gray-700">
          FUBK uses a physical Card Catalogue arranged alphabetically. OPAC
          (Online Public Access Catalogue) is being developed.
        </p>
      </section>
      {/* Catalogue Card Sample */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4 border-b pb-2">
          Sample Catalogue Card
        </h2>
        <p className="mb-4 text-gray-700">
          The Class Mark (e.g., <code>QA 40S.855</code>) is the key to locating
          a book on the shelf. Students may consult library staff for help.
        </p>
        <div className="bg-white p-5 rounded-lg shadow border text-sm md:text-base text-gray-800">
          <strong>KEY:</strong>
          <ul className="list-decimal ml-6 space-y-1 mt-2">
            <li>Class mark</li>
            <li>Author</li>
            <li>Title</li>
            <li>Editor</li>
            <li>Edition</li>
            <li>Place of publication</li>
            <li>Publisher</li>
            <li>Year of publication</li>
            <li>Accession number</li>
            <li>Pages and size</li>
            <li>Illustrations</li>
            <li>ISBN</li>
            <li>Additional entries</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LibraryMembership;
