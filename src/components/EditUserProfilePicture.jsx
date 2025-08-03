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

  const role = watch("role");

  const genderOptions = ["male", "female"];
  const roleOptions = ["student", "staff", "Admin"];

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("phoneNo", data.phoneNo);
      formData.append("gender", data.gender);

      if (data.profilePicture?.[0]) {
        formData.append("profilePicture", data.profilePicture[0]);
      }

      await axios.put(`https://fubk-library-backend-server.onrender.com/api/users/${userId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("User profile updated successfully");
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
        const res = await axios.get(
          `https://fubk-library-backend-server.onrender.com/api/users/${userId}`
        );
        const user = res.data.user;

        for (let key in user) {
          if (key !== "profilePicture") setValue(key, user[key]);
        }

        if (user.profilePicture?.url) {
          setPreview(user.profilePicture.url);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [userId, setValue]);

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
              <Input {...register("fullName")} disabled />
            </div>

            <div>
              <Label>Email</Label>
              <Input type="email" {...register("email")} disabled />
            </div>

            <div>
              <Label>Phone Number</Label>
              <Input {...register("phoneNo", { required: true })} />
              {errors.phoneNo && (
                <p className="text-red-500 text-sm">Phone number is required</p>
              )}
            </div>

            <div>
              <Label>Password</Label>
              <Input type="password" {...register("password")} disabled />
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

            {/* Role - Disabled */}
            <div>
              <Label>Role</Label>
              <Controller
                control={control}
                name="role"
                render={({ field }) => (
                  <Select disabled value={field.value}>
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
            </div>

            {role === "staff" && (
              <>
                <div>
                  <Label>Staff Number</Label>
                  <Input {...register("staffNo")} disabled />
                </div>
                <div>
                  <Label>Department</Label>
                  <Input {...register("department")} disabled />
                </div>
              </>
            )}

            {role === "student" && (
              <>
                <div>
                  <Label>Admission Number</Label>
                  <Input {...register("admissionNo")} disabled />
                </div>
                <div>
                  <Label>Course of Study</Label>
                  <Input {...register("courseOfStudy")} disabled />
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
            Update Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

EditUserForm.propTypes = {
  userId: PropTypes.string.isRequired,
};
