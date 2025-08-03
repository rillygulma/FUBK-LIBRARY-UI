import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect } from "react";

const announcementSchema = z.object({
  title: z.string().min(3, "Title is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  createdBy: z.string().optional().default("University Librarian"),
});

export default function AnnouncementForm() {
  const [serverResponse, setServerResponse] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(announcementSchema),
    defaultValues: {
      createdBy: "University Librarian",
    },
  });

  // ========== Fetch all announcements ==========
  const fetchAnnouncements = async () => {
    try {
      const res = await fetch(
        "https://fubk-library-backend-server.onrender.com/api/announcements/allAnnouncement"
      );
      const data = await res.json();
      setAnnouncements(data);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // ========== Create or Update ==========
  const onSubmit = async (data) => {
    try {
      const endpoint = editingId
        ? `https://fubk-library-backend-server.onrender.com/api/announcements/editAnnouncement/${editingId}`
        : "https://fubk-library-backend-server.onrender.com/api/announcements/addAnnouncement";

      const method = editingId ? "PUT" : "POST";

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setServerResponse(
        editingId ? "Announcement updated!" : "Announcement posted!"
      );
      reset();
      setEditingId(null);
      fetchAnnouncements();
    } catch (error) {
      setServerResponse("Failed to post/update announcement.");
      console.error(error);
    }
  };

  // ========== Edit Handler ==========
  const handleEdit = (announcement) => {
    setEditingId(announcement._id);
    setValue("title", announcement.title);
    setValue("message", announcement.message);
    setValue("createdBy", announcement.createdBy);
  };

  // ========== Delete Handler ==========
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    try {
      const res = await fetch(
        `https://fubk-library-backend-server.onrender.com/api/announcements/deleteAnnouncement/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      fetchAnnouncements();
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {editingId ? "Edit Announcement" : "Post New Announcement"}
      </h2>

      {serverResponse && (
        <p className="mb-4 text-sm text-center text-green-600">
          {serverResponse}
        </p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Enter title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Write announcement message"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <input type="hidden" {...register("createdBy")} />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {editingId ? "Update Announcement" : "Post Announcement"}
        </button>
      </form>

      {/* Announcement List */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          All Announcements
        </h3>
        {announcements.length === 0 ? (
          <p className="text-sm text-gray-500">No announcements yet.</p>
        ) : (
          <ul className="space-y-4">
            {announcements.map((announcement) => (
              <li
                key={announcement._id}
                className="p-4 bg-gray-50 border rounded-md shadow-sm"
              >
                <h4 className="text-lg font-semibold">{announcement.title}</h4>
                <p className="text-sm text-gray-700 mt-1">
                  {announcement.message}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-400">
                    By: {announcement.createdBy}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(announcement)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(announcement._id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
