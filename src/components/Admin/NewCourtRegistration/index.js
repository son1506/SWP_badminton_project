import React, { useState } from "react";

const NewCourtRegistration = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [courts, setCourts] = useState(1);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleAddCourt = (e) => {
    e.preventDefault();
    // Handle court registration
    console.log("Name:", name);
    console.log("Location:", location);
    console.log("Number of Courts:", courts);
    console.log("Price:", price);
    console.log("Image URL:", image);
    console.log("Available Times:", availableTimes);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Đăng ký thông tin sân mới</h2>
      <form onSubmit={handleAddCourt}>
        <div className="mb-4">
          <label className="block mb-2">Tên sân</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Khu vực</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Số sân</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={courts}
            onChange={(e) => setCourts(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Giá</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">URL Hình ảnh</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Thời gian có sẵn</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={availableTimes}
            onChange={(e) => setAvailableTimes(e.target.value.split(","))}
            placeholder="Nhập các thời gian, cách nhau bằng dấu phẩy"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default NewCourtRegistration;
