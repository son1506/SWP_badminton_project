// src/RegisterForm.js
import React, { useState } from 'react';
import './RegisterForm.scss'; // Đảm bảo đường dẫn đúng với file CSS

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthdate: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Thực hiện xử lý đăng ký ở đây (gửi dữ liệu tới API)
    };

    return (
        <div className="container">
            <h1>Đăng ký</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Họ</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Tên</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="birthdate">Ngày sinh</label>
                    <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Giới tính</label>
                    <div className="gender-group">
                        <input type="radio" id="male" name="gender" value="male" onChange={handleChange} required />
                        <label htmlFor="male">Nam</label>
                        <input type="radio" id="female" name="gender" value="female" onChange={handleChange} required />
                        <label htmlFor="female">Nữ</label>
                    </div>
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
}

export default RegisterForm;
