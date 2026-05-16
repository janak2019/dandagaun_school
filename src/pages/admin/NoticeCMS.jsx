import { useEffect, useState } from "react";

export default function NoticesCMS() {
  const [notices, setNotices] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notices")) || [];
    setNotices(saved);
  }, []);

  // Save helper
  const saveToStorage = (data) => {
    localStorage.setItem("notices", JSON.stringify(data));
    setNotices(data);
  };

  // ADD
  const handleAdd = () => {
    if (!text.trim()) return;

    const newNotice = {
      id: Date.now(),
      text,
    };

    const updated = [newNotice, ...notices];
    saveToStorage(updated);
    setText("");
  };

  // DELETE
  const handleDelete = (id) => {
    const updated = notices.filter((n) => n.id !== id);
    saveToStorage(updated);
  };

  // EDIT START
  const handleEdit = (notice) => {
    setEditId(notice.id);
    setText(notice.text);
  };

  // UPDATE
  const handleUpdate = () => {
    const updated = notices.map((n) =>
      n.id === editId ? { ...n, text } : n
    );

    saveToStorage(updated);
    setEditId(null);
    setText("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">
        सूचना व्यवस्थापन (CMS)
      </h1>

      {/* INPUT BOX */}
      <div className="flex gap-2 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="नयाँ सूचना लेख्नुहोस्..."
          className="flex-1 border p-2 rounded-lg"
        />

        {editId ? (
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-white px-4 rounded-lg"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-green-700 text-white px-4 rounded-lg"
          >
            Add
          </button>
        )}
      </div>

      {/* LIST */}
      <div className="space-y-3">
        {notices.length === 0 && (
          <p className="text-gray-500">कुनै सूचना छैन</p>
        )}

        {notices.map((notice) => (
          <div
            key={notice.id}
            className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
          >
            <p className="text-gray-800">{notice.text}</p>

            <div className="flex gap-2">
              
              {/* EDIT */}
              <button
                onClick={() => handleEdit(notice)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                onClick={() => handleDelete(notice.id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}