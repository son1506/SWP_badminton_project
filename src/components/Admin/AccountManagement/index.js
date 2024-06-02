import React, { useState, useEffect } from "react";

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fake data for accounts
    const fakeAccounts = [
      { id: 1, name: "Nguyen Van A", email: "nguyenvana@example.com" },
      { id: 2, name: "Tran Thi B", email: "tranthib@example.com" },
      { id: 3, name: "Le Van C", email: "levanc@example.com" },
      { id: 4, name: "Pham Thi D", email: "phamthid@example.com" },
      { id: 5, name: "Hoang Van E", email: "hoangvane@example.com" },
    ];
    setAccounts(fakeAccounts);
  }, []);

  return (
    <div className=" bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Quản lý thông tin tài khoản</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Tên</th>
            <th className="py-2">Email</th>
            <th className="py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td className="py-2">{account.id}</td>
              <td className="py-2">{account.name}</td>
              <td className="py-2">{account.email}</td>
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

export default AccountManagement;
