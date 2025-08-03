const Departments = () => {
  return (
    <div className="px-6 py-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Departments and Units</h2>
      <p className="text-gray-600 mb-6">
        The University Library is presently structured into the following five Departments:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-gray-800">Office of the University Librarian</li>
        <li className="text-gray-800">Technical Services Department</li>
        <li className="text-gray-800">Readers’ Services Department</li>
      </ul>
    </div>
  );
};

export default Departments;
