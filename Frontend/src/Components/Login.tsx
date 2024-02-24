import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/authService";
import LoginAfterMessage from "./LoginAfterMessage";
import { useAuth } from "../hooks/AuthContext";
import "../Styles/Login.css";

interface FormErrors {
    email?: string;
    password?: string;
}



function Login(): JSX.Element {
    const { setUser, loginUser } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const { email, password } = formData;
        const newErrors: FormErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const res = await loginUser(formData.email, formData.password);
                console.log("Form data submitted:", res);
                setUser(res.user);
            } catch (error) {
                console.error("Login failed:", error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <LoginAfterMessage>
            <div className="login-page">
                <h2>Login</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <span className="error">{errors.password}</span>
                        )}
                    </div>

                    <button type="submit">Login</button>
                    <p className="message">
                        Not registered?{" "}
                        <Link className="signup_btn" to="/signup">
                            SIGN UP
                        </Link>
                    </p>
                </form>
            </div>
        </LoginAfterMessage>
    );
}

export default Login;
