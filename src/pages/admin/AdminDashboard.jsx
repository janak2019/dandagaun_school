import { useNavigate } from "react-router-dom";
import NoticesCMS from "./NoticeCMS";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  return (
    <>  
      
    <div className="min-h-screen bg-gray-100">
      
      {/* HEADER */}
      <div className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">
          विद्यालय एडमिन ड्यासबोर्ड
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm"
        >
          लगआउट
        </button>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6 mt-6">

        {/* CARD 1 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-green-900">
            सूचनाहरू
          </h2>
          <p className="text-gray-600 mt-2">
            कुल सूचना व्यवस्थापन
          </p>
           <NoticesCMS />
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-blue-900">
            कार्यक्रमहरू
          </h2>
          <p className="text-gray-600 mt-2">
            विद्यालय कार्यक्रम व्यवस्थापन
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-purple-900">
            शिक्षकहरू
          </h2>
          <p className="text-gray-600 mt-2">
            शिक्षक विवरण व्यवस्थापन
          </p>
        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        © विद्यालय प्रशासन प्रणाली
      </div>
    </div>
    </>

  );
}