import { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AuthContext } from "../authentication/AuthProvider";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user)
    return (
      <div className="min-h-screen pt-36 px-4 flex justify-center items-start bg-gray-50">
        <Card className="w-full max-w-md shadow-md border border-red-300 bg-white px-4 py-6 sm:px-6">
          <CardHeader className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-red-600">
              Access Denied
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              User not logged in. Please log in to view your profile.
            </p>
          </CardContent>
        </Card>
      </div>
    );

  return (
    <div className="min-h-screen pt-36 px-4 flex justify-center items-start bg-gray-50">
      <Card className="w-full max-w-md shadow-xl border border-blue-300 bg-white px-4 py-6 sm:px-6">
        <CardHeader className="flex flex-col items-center justify-center gap-4">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-blue-400 shadow-md"
          />
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">
              {user.fullName}
            </h2>
            <p className="text-sm sm:text-base text-gray-600">{user.email}</p>
            <Badge className="mt-2 capitalize">{user.role}</Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-2 text-center text-sm sm:text-base">
            {user?.staffNo && (
              <p>
                <strong>Staff No:</strong> {user.staffNo}
              </p>
            )}
            {user?.admissionNo && (
              <p>
                <strong>Admission No:</strong> {user.admissionNo}
              </p>
            )}
            {user?.department && (
              <p>
                <strong>Department:</strong> {user.department}
              </p>
            )}
            {user?.faculty && (
              <p>
                <strong>Faculty:</strong> {user.faculty}
              </p>
            )}
            {user?.phoneNo && (
              <p>
                <strong>Phone:</strong> {user.phoneNo}
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button
            variant="destructive"
            onClick={logout}
            className="w-full sm:w-auto"
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserProfile;
