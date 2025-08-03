import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function EditUserForm({ userId }) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  const role = watch("role");

  const genderOptions = ["male", "female"];
  const roleOptions = ["student", "staff", "Admin"];

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      for (let key in data) {
        if (key !== "profilePicture") {
          formData.append(key, data[key]);
        }
      }

      if (data.profilePicture?.[0]) {
        formData.append("profilePicture", data.profilePicture[0]);
      }

      await axios.put(`https://fubk-library-backend-server.onrender.com/api/users/${userId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("User updated successfully");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Something went wrong");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://fubk-library-backend-server.onrender.com/api/users/${userId}`);
        const user = res.data.user;

        // Populate form fields
        Object.entries(user).forEach(([key, value]) => {
          if (key !== "profilePicture") {
            setValue(key, value || ""); // ensure fallback to empty string
          }
        });

        if (user.profilePicture?.url) {
          setPreview(user.profilePicture.url);
        }
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId, setValue]);

  if (loading) {
    return <p className="text-center mt-6 text-gray-500">Loading user data...</p>;
  }

  return (
    <Card className="max-w-3xl mx-auto my-8 p-4 shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl">Edit User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label>Full Name</Label>
              <Input {...register("fullName", { required: true })} />
              {errors.fullName && (
                <p className="text-red-500 text-sm">Full name is required</p>
              )}
            </div>

            <div>
              <Label>Email</Label>
              <Input type="email" {...register("email", { required: true })} />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input {...register("phoneNo", { required: true })} />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                {...register("password", { required: true })}
              />
            </div>

            {/* Gender Select */}
            <div>
              <Label>Gender</Label>
              <Controller
                control={control}
                name="gender"
                rules={{ required: true }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      {genderOptions.map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && (
                <p className="text-red-500 text-sm">Gender is required</p>
              )}
            </div>

            {/* Role Select */}
            <div>
              <Label>Role</Label>
              <Controller
                control={control}
                name="role"
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setValue("staffNo", "");
                      setValue("department", "");
                      setValue("admissionNo", "");
                      setValue("courseOfStudy", "");
                    }}
                    value={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roleOptions.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.role && (
                <p className="text-red-500 text-sm">Role is required</p>
              )}
            </div>

            {/* Staff Fields */}
            {role === "staff" && (
              <>
                <div>
                  <Label>Staff Number</Label>
                  <Input
                    {...register("staffNo", { required: true })}
                    placeholder="Enter staff number"
                  />
                </div>
                <div>
                  <Label>Department</Label>
                  <Input
                    {...register("department", { required: true })}
                    placeholder="Enter department"
                  />
                </div>
              </>
            )}

            {/* Student Fields */}
            {role === "student" && (
              <>
                <div>
                  <Label>Admission Number</Label>
                  <Input
                    {...register("admissionNo", { required: true })}
                    placeholder="Enter admission number"
                  />
                </div>
                <div>
                  <Label>Course of Study</Label>
                  <Input
                    {...register("courseOfStudy", { required: true })}
                    placeholder="Enter course of study"
                  />
                </div>
              </>
            )}

            <div className="md:col-span-2">
              <Label>Profile Picture</Label>
              <Input
                type="file"
                {...register("profilePicture")}
                accept="image/*"
                onChange={handleFileChange}
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 w-24 h-24 rounded-full object-cover"
                />
              )}
            </div>
          </div>

          <Button type="submit" className="w-full">
            Update User
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

EditUserForm.propTypes = {
  userId: PropTypes.string.isRequired,
};
