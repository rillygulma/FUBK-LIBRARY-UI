const SubscriptionDatabases = () => {
  const databaseInfo = [
    {
      link: "https://ajls.ng/",
      title: "Click To AJLS.NG",
      userId: "fubk-library@tetfund.gov.ng",
      password: "Password@1",
    },
    {
      link: "https://search.ebscohost.com/",
      title: "Click To Ebscohost.com",
      userId: "fubk",
      password: "@ccess2023",
    },
    {
      link: "https://research4life.org/",
      title: "Click To Research4life.org",
      userId: "NGAR4L222",
      password: "Ppear38",
    },
  ];

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-24 py-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
        Services | Subscription Databases
      </h2>
      <hr className="my-4 border-gray-400" />

      <div className="overflow-x-auto w-full">
        <table className="min-w-full text-sm sm:text-base text-left bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 font-semibold whitespace-nowrap">S/N</th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Link
              </th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Title
              </th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                User ID
              </th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Password
              </th>
            </tr>
          </thead>
          <tbody>
            {databaseInfo.map((entry, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 border-t border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 text-blue-600">
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-all"
                  >
                    {entry.link}
                  </a>
                </td>
                <td className="px-4 py-2 border-t border-gray-300">
                  {entry.title}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 break-words">
                  {entry.userId}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 break-words">
                  {entry.password}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionDatabases;
