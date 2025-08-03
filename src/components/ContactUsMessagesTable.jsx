import { useEffect, useState } from "react";

const ContactMessagesTable = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 5;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("https://fubk-library-backend-server.onrender.com/api/contact/messages");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleView = (message) => {
    setSelectedMessage(message);
    setModalOpen(true);
  };

  const handleCloseModal = async () => {
    if (!selectedMessage?.isRead) {
      try {
        const res = await fetch(
          `https://fubk-library-backend-server.onrender.com/api/contact/markMessageAsRead/${selectedMessage._id}/read`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.ok) {
          const updated = await res.json();
          const updatedMessages = messages.map((msg) =>
            msg._id === selectedMessage._id ? updated.data : msg
          );
          setMessages(updatedMessages);
          alert("Message marked as read");
        } else {
          console.error("Failed to mark message as read");
        }
      } catch (error) {
        console.error("Error marking message as read:", error);
      }
    }

    setModalOpen(false);
    setSelectedMessage(null);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await fetch(
        `https://fubk-library-backend-server.onrender.com/api/contact/deleteMessages/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        const updatedMessages = messages.filter((msg) => msg._id !== id);
        setMessages(updatedMessages);

        const totalPages = Math.ceil(updatedMessages.length / messagesPerPage);
        if (currentPage > totalPages) {
          setCurrentPage(totalPages);
        }
      } else {
        alert("Failed to delete message");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  return (
    <div className="max-w-7xl mt-40 mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        Contact Us Messages
      </h2>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-blue-800 uppercase">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-blue-800 uppercase">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-blue-800 uppercase">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-blue-800 uppercase">
                    Message
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-blue-800 uppercase">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-blue-800 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentMessages.length > 0 ? (
                  currentMessages.map((msg, index) => (
                    <tr key={msg._id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm">
                        {indexOfFirstMessage + index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm">{msg.name}</td>
                      <td className="px-4 py-3 text-sm">{msg.email}</td>
                      <td className="px-4 py-3 text-sm">
                        <button
                          onClick={() => handleView(msg)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                        >
                          View
                        </button>
                        {msg.isRead ? (
                          <span className="ml-2 text-green-600 text-xs font-semibold">
                            Read
                          </span>
                        ) : (
                          <span className="ml-2 text-yellow-600 text-xs font-semibold">
                            Unread
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleDelete(msg._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {modalOpen && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Message from {selectedMessage.name}
            </h3>
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">
              {selectedMessage.message}
            </p>
            <div className="text-sm text-gray-500 mb-4">
              Sent on: {new Date(selectedMessage.createdAt).toLocaleString()}
            </div>
            <button
              onClick={handleCloseModal}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactMessagesTable;
