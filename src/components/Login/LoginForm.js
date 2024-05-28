import React, { useState } from 'react';
import './LoginForm.scss';
import { NavLink } from "react-router-dom";
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đăng nhập tại đây
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="text-center">Sân Cầu Lông</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email hoặc Số điện thoại"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
                    <div className="text-center mt-3">
                        <a href="/" className="forgot-password">Quên mật khẩu?</a>
                    </div>
                    <hr />
                    <div className="text-center">
                        <button type="button" className="btn btn-success">
                            <NavLink to="/register">Đăng ký</NavLink>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;