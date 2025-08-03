import { FaPlus } from "react-icons/fa6";
import { GoTriangleUp } from "react-icons/go";
import { useState } from "react";
import FAQ from "../assets/faq.png";

const faqData = [
  {
    question: "How can I gain access to use the Library?",
    answer:
      "Students and staff of the Federal University Birnin Kebbi can gain access with their university identification cards.",
  },
  {
    question: "How can I find materials in the Library?",
    answer:
      "Use the Traditional Card Catalogue or the Online Public Access Catalogue (OPAC). They contain all materials held by the Library.",
  },
  {
    question: "How can I obtain my Library Card?",
    answer:
      "Visit the Circulation Desk at the Main Library, Takeoff Library, or College of Health Science Library.",
  },
  {
    question:
      "Can I ask someone else to check out a book with my Library Card?",
    answer:
      "No. Library cards are non-transferable. Misuse will result in confiscation.",
  },
  {
    question: "How many items can I borrow?",
    answer:
      "Undergraduates – 4 items\nPostgraduates – 10 items\nStaff – 10 items",
  },
  {
    question: "What is the loan duration for items checked out?",
    answer:
      "Undergraduates: 2 weeks (renewable twice). Staff/Postgraduates: 1 month (renewable twice).",
  },
  {
    question: "How do I locate a book using the catalogue?",
    answer: `1. Identify the author, title or subject.\n2. Check the Catalogue alphabetically.\n3. Note the class mark on the card.\n4. Use the class mark to find the book on the shelves.\n5. Ask library staff if you need help.`,
  },
  {
    question: "What are the procedures for borrowing books?",
    answer: `• Borrow from the Loan Counter using Library tickets.\n• Present your Library ID and ticket.\n• Sign the book card.\n• Book will be stamped with return date.\n• Ensure return and ticket recovery.\n• Late returns attract fines.`,
  },
  {
    question: "Can I borrow books during vacation?",
    answer:
      "Yes. With HOD’s request and Librarian approval. Must return within the first week of resumption.",
  },
  {
    question: "What are the library fines and penalties?",
    answer: `Overdue: ₦50/day (UG), ₦100/day (PG), ₦200/day (Staff)\nDamage: Repair cost\nLoss: Cost + ₦5,000 surcharge\nLoss of ID/Ticket: Only replaced on special grounds\nBook Recall: Return within 3 days`,
  },
  {
    question: "What are the Library rules and regulations?",
    answer: `• No noise, eating or sleeping\n• Return books before sessions end\n• Mobile phones must be off\n• Bags kept at owner's risk\n• Theft attracts EXPULSION\n• Comply with all library staff\n• Do not tamper with electronics`,
  },
  {
    question: "What is the Inter-library loan & referral service?",
    answer:
      "You can request materials from other Nigerian libraries via inter-library cooperation. Referral to those libraries is also possible.",
  },
  {
    question: "What if I lose my Library ID Card or Borrowing Tickets?",
    answer: `Once issued, there is no replacement of any borrowing tickets lost by users, except in special cases like fire, flood, accident, or other natural disasters.\nHowever, the University Librarian may approve a replacement of the Library ID Card upon submission of:\n• A valid police report\n• A sworn court affidavit\n• Payment of ₦500.00`,
  },
  {
    question: "What if I damage or lose other Library materials?",
    answer:
      "Loss or damage of any other library items or materials will attract an appropriate fine or penalty as determined by the University Librarian.",
  },
];


const Help = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

  return (
    <div className="mt-10 px-4 lg:px-24 bg-gray-100 min-h-screen pb-10">
      <div className="flex justify-center items-center mb-10">
        <img src={FAQ} alt="FAQ" className="w-full max-w-sm" />
      </div>
      <h2 className="text-3xl text-center font-bold text-sky-800 mb-8">
        Library Help & FAQ
      </h2>

      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleExpansion(index)}
              className={`w-full flex justify-between items-center px-5 py-4 text-left bg-white border rounded-md shadow-md font-medium text-lg hover:bg-sky-50 transition ${
                expandedIndex === index ? "text-sky-700" : "text-gray-800"
              }`}
            >
              {item.question}
              {expandedIndex === index ? (
                <GoTriangleUp className="text-sky-700 text-xl" />
              ) : (
                <FaPlus className="text-gray-600 text-sm" />
              )}
            </button>
            {expandedIndex === index && (
              <div className="mt-3 bg-white rounded-md p-5 text-gray-700 text-base whitespace-pre-line shadow-inner border border-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
