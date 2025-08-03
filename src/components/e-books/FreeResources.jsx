
const AccessDatabasesTable = () => {
  const databaseInfo = [
    {
      id: 1,
      database: "AGRIS: Agricultural database",
      disciplines: "Agriculture",
      description:
        "Covers agriculture, forestry, animal husbandry, aquatic sciences and fisheries, human nutrition, extension literature from over 100 participating countries. Material includes unique grey literature such as unpublished scientific and technical reports, theses, conference papers, government publications, and more",
      access: "Open Access",
      url: "https://agris.fao.org/",
    },
    {
      id: 2,
      database: "Analytical sciences digital library",
      disciplines: "Analytical Chemistry",
      description: "Journal Articles on analytical chemistry",
      access: "Open source",
      url: "https://www.asdlib.org/",
    },
    {
      id: 3,
      database: "Arachne",
      disciplines: "Archaeology, Art History",
      description: "Journal Articles on Archaeology, Art History",
      access: "Open Access",
      url: "https://arachne.uni-koeln.de/",
    },
    {
      id: 4,
      database: "arXiv",
      disciplines:
        "Mathematics, Physics, Astronomy, Computer Science, Quantitative Biology, Statistics, Quantitative Finance",
      description:
        "Repository of electronic pre-prints of papers in various fields",
      access: "Open Access",
      url: "https://arxiv.org/",
    },
    {
      id: 5,
      database: "Astrophysics Data System",
      disciplines: "Astrophysics, Geophysics, Physics",
      description: "Journal articles on astrophysics, geophysics, and physics",
      access: "Open Access",
      url: "https://ui.adsabs.harvard.edu/",
    },
    {
      id: 6,
      database:
        "AULIMP: Air University Library's Index to Military Periodicals",
      disciplines: "Military Science",
      description: "Journal article",
      access: "Open Access",
      url: "https://www.afit.edu/",
    },
    {
      id: 7,
      database: "BASE: Bielefeld Academic Search Engine",
      disciplines: "Multidisciplinary",
      description: "Journal article",
      access: "Open Access",
      url: "https://www.base-search.net/",
    },
    {
      id: 8,
      database: "BIO-ONE",
      disciplines: "Biology, Bioinformatics",
      description: "Biological science and related disciplines",
      access: "Open source",
      url: "https://bioone.org/",
    },
    {
      id: 9,
      database: "BIO Med Central",
      disciplines: "Biomedical Research",
      description:
        "Contained peer-reviewed journals focusing on biomedical research",
      access: "Open Access",
      url: "https://www.biomedcentral.com/",
    },
    {
      id: 10,
      database: "CHBD: Circumpolar Health Bibliographic Database",
      disciplines: "Medicine",
      description: "Medicine",
      access: "Open Access",
      url: "https://www.circumpolarhealth.org/",
    },
    {
      id: 11,
      database: "ChemXSeer",
      disciplines: "Chemistry",
      description: "Journal article",
      access: "Open Access",
      url: "http://chemxseer.com/",
    },
    {
      id: 12,
      database: "Citebase Search",
      disciplines: "Mathematics, Computer Science, Physics",
      description: "Semi-autonomous citation index of free online research",
      access: "Open Access",
      url: "http://www.citebase.org/",
    },
    {
      id: 13,
      database: "CiteSeerX",
      disciplines: "Computer science, Statistics, Mathematics",
      description:
        "Citation and research papers in computer science, statistics, and mathematics",
      access: "Open Access",
      url: "https://citeseerx.ist.psu.edu/",
    },
    {
      id: 14,
      database: "DOAJ",
      disciplines: "Multidisciplinary",
      description: "Multidisciplinary",
      access: "Open Access",
      url: "https://www.doaj.org/",
    },
    {
      id: 15,
      database: "EconBiz",
      disciplines: "Economics",
      description:
        "Supports research in and teaching of economics with direct access to full texts",
      access: "Open Access",
      url: "https://www.econbiz.de/",
    },
    {
      id: 16,
      database: "E-Journals.org",
      disciplines: "Multidisciplinary",
      description:
        "Access to a variety of important discoveries in Science, Humanities, and Arts",
      access: "Open Access",
      url: "http://www.e-journals.org/",
    },
    {
      id: 17,
      database: "ERIC: Educational Resource Information Center",
      disciplines: "Education",
      description: "Access to over 1.3 million records dating back to 1966",
      access: "Open Access",
      url: "https://eric.ed.gov/",
    },
    {
      id: 18,
      database: "Law Library Online",
      disciplines: "Law",
      description:
        "Contains the world's largest collection of law books and legal resources",
      access: "Open Access",
      url: "https://www.loc.gov/law/",
    },
    {
      id: 19,
      database: "British Library for Development Studies E-journals",
      disciplines: "Project Gutenberg",
      description: "Provides free plain text versions of books",
      access: "Open Access",
      url: "https://www.bl.uk/",
    },
    {
      id: 20,
      database: "GoPubMed",
      disciplines: "Medicine",
      description: "First knowledge-based search engine for life sciences",
      access: "Open Access",
      url: "https://www.gopubmed.org/",
    },
    {
      id: 21,
      database: "British Library for Development Studies E-journals",
      disciplines: "Sciences",
      description: "Largest archive of free full-text science articles",
      access: "Open Access",
      url: "https://www.hightwire.org/",
    },
    {
      id: 22,
      database: "HubMed",
      disciplines: "Medicine",
      description: "Alternative interface to PubMed medical literature",
      access: "Open Access",
      url: "http://www.hubmed.org/",
    },
    {
      id: 23,
      database: "Information Bridge: DOE Scientific and Technical Information",
      disciplines: "Multidisciplinary science",
      description: "Provides access to over 266,000 DOE research documents",
      access: "Open Access",
      url: "https://www.osti.gov/",
    },
    {
      id: 24,
      database: "MEDLINE",
      disciplines: "Life Sciences Biomedical Information",
      description:
        "Bibliographic database of life sciences and biomedical information",
      access: "Open Access",
      url: "https://pubmed.ncbi.nlm.nih.gov/",
    },
    {
      id: 25,
      database: "National Criminal Justice Reference Service",
      disciplines: "Criminology, Sociology",
      description: "Abstracts of scholarly journal articles and reports",
      access: "Open Access",
      url: "https://www.ncjrs.gov/",
    },
    {
      id: 26,
      database: "NBER: National Bureau of Economic Research",
      disciplines: "Economics",
      description: "Research and publications in economics",
      access: "Open Access",
      url: "https://www.nber.org/",
    },
    {
      id: 27,
      database: "POPLINE",
      disciplines: "Population, Family Planning, Reproductive Health",
      description:
        "Comprehensive collection of population and reproductive health literature",
      access: "Open Access",
      url: "https://www.popline.org/",
    },
    {
      id: 28,
      database: "REPEc: Research Papers in Economics",
      disciplines: "Economics",
      description:
        "A collaborative effort to enhance dissemination of research in Economics",
      access: "Open Access",
      url: "https://repec.org/",
    },
    {
      id: 29,
      database: "VET-Bib",
      disciplines: "Social Science Education",
      description: "European vocational education and training literature",
      access: "Open Access",
      url: "https://vetbib.eu/",
    },
    {
      id: 30,
      database: "World Wide Science",
      disciplines: "Multidisciplinary",
      description:
        "Global science gateway providing access to scientific databases and portals",
      access: "Open Access",
      url: "https://www.worldwidescience.org/",
    },
    {
      id: 31,
      database: "IEEEE Advanced Technology",
      disciplines: "Engineering and related areas",
      description: "Research articles in engineering and related fields",
      access: "Open Access",
      url: "https://ieeexplore.ieee.org/",
    },
    {
      id: 32,
      database: "Lippincott Home: Int'l Anaesthesia Research Society",
      disciplines: "Health Related",
      description: "Medical, nursing, and allied health research",
      access: "Open Access",
      url: "https://www.lww.com/",
    },
    {
      id: 33,
      database: "Merck Manual for the Professional",
      disciplines: "Health Related",
      description:
        "Comprehensive medical resource for professionals and consumers",
      access: "Open Access",
      url: "https://www.merckmanuals.com/",
    },
    {
      id: 34,
      database: "MSD Manuals: The Trusted Provider of Medical Information",
      disciplines: "Health / Medical Information",
      description:
        "Comprehensive medical source offered for free to the public and healthcare professionals",
      access: "Open Access",
      url: "https://www.msdmanuals.com/",
    },
    {
      id: 35,
      database: "DART-Europe",
      disciplines: "Global access to European research theses",
      description:
        "Access to 1,376,186 open access research theses from 584 universities in 29 European countries",
      access: "Open Access",
      url: "https://www.dart-europe.eu/",
    },
    {
      id: 36,
      database: "CORE",
      disciplines: "General / Open Access Research Papers",
      description: "World's largest collection of open access research papers",
      access: "Open Access",
      url: "https://core.ac.uk/",
    },
    {
      id: 37,
      database: "ResearchGate",
      disciplines: "Academic Papers",
      description:
        "Social networking site for scientists to share papers, ask and answer questions, and find collaborators",
      access: "Open Access",
      url: "https://www.researchgate.net/",
    },
    {
      id: 38,
      database: "Khan Academy",
      disciplines: "Multidisciplinary",
      description:
        "Free educational platform offering video lessons and practice exercises",
      access: "Open Access",
      url: "https://www.khanacademy.org/",
    },
    {
      id: 39,
      database: "Academic Earth",
      disciplines: "Various",
      description:
        "Free online courses and lectures from top universities around the world",
      access: "Open Access",
      url: "https://www.academicearths.org/",
    },
    {
      id: 40,
      database: "Coursera",
      disciplines: "Various",
      description:
        "Offers online courses and degrees from top universities and organizations",
      access: "Free/Paid",
      url: "https://www.coursera.org/",
    },
    {
      id: 41,
      database: "edX",
      disciplines: "Various",
      description:
        "Free online courses from universities and organizations worldwide",
      access: "Free/Paid",
      url: "https://www.edx.org/",
    },
    {
      id: 42,
      database: "Open2Study",
      disciplines: "Various",
      description: "Free online courses provided by Australian universities",
      access: "Free",
      url: "https://www.open2study.online/",
    },
    {
      id: 43,
      database: "Codecademy",
      disciplines: "Programming, Web Development",
      description:
        "Interactive coding lessons to learn programming languages and web development skills",
      access: "Free/Paid",
      url: "https://www.codecademy.com/",
    },
    {
      id: 44,
      database: "YouTube",
      disciplines: "Various",
      description: "Video sharing platform with educational content",
      access: "Open Access",
      url: "https://www.youtube.com/",
    },
    {
      id: 45,
      database: "BookBoon",
      disciplines: "Various",
      description: "Free textbooks and eBooks for students and professionals",
      access: "Open Access",
      url: "https://www.bookboon.com/",
    },
    {
      id: 46,
      database: "Ebookee",
      disciplines: "Various",
      description: "Free eBook download site",
      access: "Open Access",
      url: "https://ebookee.org.usitestat.com/",
    },
    {
      id: 47,
      database: "ShareFreeBook",
      disciplines: "Various",
      description: "Free eBooks for download",
      access: "Open Access",
      url: "http://www.sharefreebook.com/",
    },
    {
      id: 48,
      database: "Free Ebooks",
      disciplines: "Various",
      description: "Free downloadable eBooks for various subjects",
      access: "Open Access",
      url: "https://www.free-ebooks.net/",
    },
    {
      id: 49,
      database: "Obooko",
      disciplines: "Various",
      description: "Free eBooks for download",
      access: "Open Access",
      url: "https://www.obooko.com/",
    },
    {
      id: 50,
      database: "ManyBooks",
      disciplines: "Various",
      description: "Free eBooks from a variety of genres",
      access: "Open Access",
      url: "https://manybooks.net/",
    },
    {
      id: 51,
      database: "JunkyBooks",
      disciplines: "Various",
      description: "Free eBooks and novels for download",
      access: "Open Access",
      url: "https://www.junkybooks.com/",
    },
    {
      id: 52,
      database: "Free Computer Books",
      disciplines: "Computer Science",
      description: "Free computer science books available for download",
      access: "Open Access",
      url: "https://freecomputerbooks.com/",
    },
    {
      id: 53,
      database: "Essays.se",
      disciplines: "Various",
      description: "Free essays and academic papers for students",
      access: "Open Access",
      url: "https://www.essays.se/",
    },
  ];

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-24 py-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
        Services | Open Access Databases
      </h2>
      <hr className="my-4 border-gray-400" />

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base text-left bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2 font-semibold whitespace-nowrap">S/N</th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Database
              </th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Disciplines
              </th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Description/Specialization
              </th>
              <th className="px-4 py-2 font-semibold whitespace-nowrap">
                Access
              </th>
            </tr>
          </thead>
          <tbody>
            {databaseInfo.map((entry, index) => (
              <tr
                key={entry.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 border-t border-gray-300">
                  {entry.id}
                </td>
                <td className="px-4 py-2 border-t border-gray-300 text-blue-600">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {entry.database}
                  </a>
                </td>
                <td className="px-4 py-2 border-t border-gray-300">
                  {entry.disciplines}
                </td>
                <td className="px-4 py-2 border-t border-gray-300">
                  {entry.description}
                </td>
                <td className="px-4 py-2 border-t border-gray-300">
                  {entry.access}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessDatabasesTable;