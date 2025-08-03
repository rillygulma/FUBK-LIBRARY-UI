import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 👈 Added for navigation

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://fubk-library-backend-server.onrender.com/api/users/allUsers");
      setUsers(res.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`https://fubk-library-backend-server.onrender.com/api/users/deleteUser/${id}`);
        setUsers((prev) => prev.filter((user) => user._id !== id));
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edituser?id=${id}`); // 👈 Updated navigation
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole =
      roleFilter === "all" || user.role.toLowerCase() === roleFilter;

    return matchesSearch && matchesRole;
  });

  if (loading)
    return <p className="text-center mt-8 text-gray-500">Loading users...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Registered Users</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full md:w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="w-full md:w-48 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="staff">Staff</option>
          <option value="student">Student</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Gender</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Details</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition duration-200">
                  <td className="px-4 py-3">{user.fullName}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.phoneNo}</td>
                  <td className="px-4 py-3 capitalize">{user.role}</td>
                  <td className="px-4 py-3 capitalize">{user.gender}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {user.role === "staff" ? (
                      <>
                        <div>Staff No: {user.staffNo}</div>
                        <div>Dept: {user.department}</div>
                      </>
                    ) : (
                      <>
                        <div>Adm No: {user.admissionNo}</div>
                        <div>Course: {user.courseOfStudy}</div>
                      </>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center space-x-2">
                    <button
                      onClick={() => handleEdit(user._id)}
                      className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
