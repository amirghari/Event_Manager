import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { register } from "../services/authService";
import "../Styles/Register.css";

function Register() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;
        const newErrors: Record<string, string> = {};

        if (!name) {
            newErrors.name = "Name is required";
        }

        if (!email) {
            newErrors.email = "Email is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                await register(name, email, password, confirmPassword);
                setShowSuccessMessage(true);
                console.log("Form data submitted:", formData);
            } catch (error) {
                console.error("Registration failed:", error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        className="form-input"
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
                        className="form-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <span className="error">{errors.confirmPassword}</span>
                    )}
                </div>
                <button className="form-button" type="submit">
                    Sign Up
                </button>
                {showSuccessMessage && (
                    <p>
                        Congrats you have signed Up, <Link to="/login">LOGIN</Link> to Login
                    </p>
                )}
            </form>
        </div>
    );
}

export default Register;