import React, { useState, useEffect } from "react";

const CourtManagement = () => {
  const [courts, setCourts] = useState([]);

  useEffect(() => {
    // Fake data for courts
    const fakeCourts = [
      {
        id: 1,
        name: "Sân Cầu Lông A",
        location: "Quận 1, TP.HCM",
        courts: 5,
        price: "200,000 VND/giờ",
        image: "https://via.placeholder.com/150",
        availableTimes: ["08:00", "10:00", "12:00", "14:00", "16:00"],
      },
      {
        id: 2,
        name: "Sân Cầu Lông B",
        location: "Quận 3, TP.HCM",
        courts: 3,
        price: "180,000 VND/giờ",
        image: "https://via.placeholder.com/150",
        availableTimes: ["09:00", "11:00", "13:00", "15:00", "17:00"],
      },
      {
        id: 3,
        name: "Sân Cầu Lông C",
        location: "Quận 5, TP.HCM",
        courts: 4,
        price: "150,000 VND/giờ",
        image: "https://via.placeholder.com/150",
        availableTimes: ["08:30", "10:30", "12:30", "14:30", "16:30"],
      },
      {
        id: 4,
        name: "Sân Cầu Lông D",
        location: "Quận 7, TP.HCM",
        courts: 6,
        price: "220,000 VND/giờ",
        image: "https://via.placeholder.com/150",
        availableTimes: ["09:30", "11:30", "13:30", "15:30", "17:30"],
      },
      {
        id: 5,
        name: "Sân Cầu Lông E",
        location: "Quận 9, TP.HCM",
        courts: 2,
        price: "170,000 VND/giờ",
        image: "https://via.placeholder.com/150",
        availableTimes: ["08:00", "10:00", "12:00", "14:00", "16:00"],
      },
    ];
    setCourts(fakeCourts);
  }, []);

  return (
    <div className=" bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">
        Quản lý thông tin Sân cầu lông
      </h2>
      <table className="ml-2 min-w-full">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Tên sân</th>
            <th className="py-2">Khu vực</th>
            <th className="py-2">Số sân</th>
            <th className="py-2">Giá</th>
            <th className="py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {courts.map((court) => (
            <tr key={court.id}>
              <td className="py-2">{court.id}</td>
              <td className="py-2">{court.name}</td>
              <td className="py-2">{court.location}</td>
              <td className="py-2">{court.courts}</td>
              <td className="py-2">{court.price}</td>
              <td className="py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Chỉnh sửa
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourtManagement;
