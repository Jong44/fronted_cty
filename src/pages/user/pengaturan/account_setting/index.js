import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import RootLayout from "@/components/global/layout/RootLayout";
import { UserApi, updateUser, getUserByUid } from "@/services/user";

const AccountSetting = () => {
  const router = useRouter();
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  const [uid, setUid] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getUserByUid, updateUser  } = UserApi();
  
  useEffect(() => {
    const uid = localStorage.getItem('uid');
    setUid(uid)
    if (!uid) return; // Avoid fetching if UID is not yet available
    const fetchUserData = async () => {
      try {
        const data = await getUserByUid(uid);
        setUserData(data || {
          name: "",
          email: "",
          address: "",
          phoneNumber: "",
        });
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error(err);
      }
    };
    fetchUserData();
  }, [uid, getUserByUid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await updateUser (uid, userData);
      alert("User  information updated successfully!");
    } catch (err) {
      setError("Failed to update user information.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Account Settings</title>
      </Head>
      <RootLayout>
        <div className="flex flex-1">
          <main className="flex-1 bg-gray-100 p-6">
            <h4 className="text-left mb-6 font-bold text-lg">Personal Information</h4>
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-2 gap-6">
              {Object.keys(userData).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-semibold mb-1">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    name={key}
                    value={userData[key]}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleUpdate}
                disabled={isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
              <button className="px-4 py-2 bg-red-500 text-black-700 rounded-md text-sm hover:bg-red-600">
                Cancel
              </button>
            </div>
          </main>
        </div>
      </RootLayout>
    </>
  );
};

export default AccountSetting;