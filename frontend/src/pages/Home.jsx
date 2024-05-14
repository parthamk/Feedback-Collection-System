import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import Notification from "../components/Notification";

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [totalForms, setTotalForms] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "https://feedback-collection-system.onrender.com/api/forms"
      );
      const { forms, totalForms, averageRating } = response.data;
      setUserData(forms);
      setTotalForms(totalForms);
      setAverageRating(averageRating);
    } catch (error) {
      console.error("Error fetching forms data", error);
    }
  };

  function handleShowNotification() {
    setShowNotification((prevState) => !prevState);
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="flex items-center justify-center flex-col h-full w-auto">
      <h2 className="font-bold mt-8 mb-8 text-3xl">
        <span>Admin </span>
        <span className="text-red-500">Dashboard</span>
      </h2>
      <div className="flex flex-row">
        <div className="bg-blue-100 shadow-md p-4 m-2 rounded-lg flex flex-col items-center justify-center border border-red-500">
          <h3 className="text-lg font-semibold">Total Number Of Responses</h3>
          <p className="text-lg font-semibold">{totalForms}</p>
        </div>

        <div className="bg-white shadow-md m-2 p-4 rounded-lg flex flex-col items-center justify-center border border-blue-400">
          <h3 className="text-lg font-semibold">Average Rating</h3>
          <p className="text-lg font-semibold">{averageRating.toFixed(2)}</p>
        </div>
        <button
          type="button"
          className="bg-white shadow-md m-2 p-4 rounded-lg flex flex-col items-center cursor-pointer justify-center border border-blue-400"
          onClick={handleShowNotification}
        >
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p className="text-lg font-semibold">{averageRating.toFixed(2)}</p>
        </button>
      </div>

      {showNotification ? (
        <div className="bg-white shadow rounded-lg  mt-8 p-6 flex flex-col items-center justify-center border border-blue-500 w-1/2">
          <h3 className="text-lg font-bold text-red-500">Notification</h3>

          <Notification />

          {/* <button className="text-white text-lg font-bold p-2 mt-8 bg-red-500 hover:bg-red-600 rounded-full bg-gradient-to-r from-blue-400 to-red-600">
          Upload To Excel
        </button> */}
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg mt-8 p-6 flex flex-col items-center justify-center border border-blue-500 w-1/2">
          <h3 className="text-lg font-bold text-red-500">User Data</h3>

          <div className="overflow-auto h-48 w-full">
            <table className="table-auto w-full">
              <thead className="sticky top-0 bg-white">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Rating</th>
                  <th className="px-4 py-2">Reason</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.rating}</td>
                    <td className="border px-4 py-2">{user.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <button className="text-white text-lg font-bold p-2 mt-8 bg-red-500 hover:bg-red-600 rounded-full bg-gradient-to-r from-blue-400 to-red-600">
          Upload To Excel
        </button> */}
        </div>
      )}
    </div>
  );
};

export default Home;
