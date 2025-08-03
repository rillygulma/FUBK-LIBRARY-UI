import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema
const signUpSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phoneNo: z.string().min(1, "Phone number is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    gender: z.enum(["male", "female"], {
      required_error: "Gender is required",
    }),
    role: z.enum(["staff", "student", "admin"], {
      required_error: "Role is required",
    }),
    staffNo: z.string().optional(),
    admissionNo: z.string().optional(),
    department: z.string().optional(),
    courseOfStudy: z.string().optional(),
    profilePicture: z.any().optional(),
  })
  .refine((data) => data.role !== "staff" || !!data.department, {
    path: ["department"],
    message: "Department is required for staff",
  })
  .refine((data) => data.role !== "student" || !!data.courseOfStudy, {
    path: ["courseOfStudy"],
    message: "Course of Study is required for students",
  });

const SignUp = () => {
  const [role, setRole] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    setValue("role", selectedRole);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("profilePicture", file);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (value) formData.append(key, value);
    }

    try {
      const res = await fetch(
        "https://fubk-library-backend-server.onrender.com/api/users/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const contentType = res.headers.get("content-type");

      if (!res.ok) {
        let errorMessage = "Registration failed.";
        if (contentType && contentType.includes("application/json")) {
          const errorData = await res.json();
          errorMessage = errorData.error || errorData.message || errorMessage;
        } else {
          console.error("Unexpected HTML response:", await res.text());
          errorMessage = "Unexpected server response.";
        }

        alert(errorMessage);
        return;
      }

      alert("Sign up Successful ✅");
    } catch (err) {
      console.error("Network error:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 pt-28 sm:pt-20 bg-white shadow-lg sm:rounded-3xl">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-blue-700 text-center mb-4">
              FUBK Library E-Registration
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 text-gray-700"
              encType="multipart/form-data"
            >
              <input
                {...register("fullName")}
                type="text"
                placeholder="Full Name"
                className="w-full border-b-2 p-2 outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}

              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full border-b-2 p-2 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <input
                {...register("phoneNo")}
                type="tel"
                placeholder="Phone Number"
                className="w-full border-b-2 p-2 outline-none"
              />
              {errors.phoneNo && (
                <p className="text-red-500 text-sm">{errors.phoneNo.message}</p>
              )}

              <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="w-full border-b-2 p-2 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <select
                {...register("gender")}
                className="w-full border-b-2 p-2 outline-none"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}

              <select
                {...register("role")}
                onChange={handleRoleChange}
                className="w-full border-b-2 p-2 outline-none"
              >
                <option value="">Select Role</option>
                <option value="staff">Staff</option>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role.message}</p>
              )}

              {role === "staff" && (
                <>
                  <input
                    {...register("staffNo")}
                    type="text"
                    placeholder="Staff Number"
                    className="w-full border-b-2 p-2 outline-none"
                  />
                  <input
                    {...register("department")}
                    type="text"
                    placeholder="Department"
                    className="w-full border-b-2 p-2 outline-none"
                  />
                  {errors.department && (
                    <p className="text-red-500 text-sm">
                      {errors.department.message}
                    </p>
                  )}
                </>
              )}

              {role === "student" && (
                <>
                  <input
                    {...register("admissionNo")}
                    type="text"
                    placeholder="Admission Number"
                    className="w-full border-b-2 p-2 outline-none"
                  />
                  <input
                    {...register("courseOfStudy")}
                    type="text"
                    placeholder="Course of Study"
                    className="w-full border-b-2 p-2 outline-none"
                  />
                  {errors.courseOfStudy && (
                    <p className="text-red-500 text-sm">
                      {errors.courseOfStudy.message}
                    </p>
                  )}
                </>
              )}

              <div>
                <label className="block mb-1">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 w-20 h-20 rounded-full object-cover"
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
