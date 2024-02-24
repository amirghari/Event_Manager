import React from "react";
import { useAuth } from "../hooks/AuthContext";
import "../Styles/LoginAfterMessage.css"; // Import CSS file directly

interface User {
    name: string;
    email: string;
}

interface Props {
    children: React.ReactNode;
}

interface Styles {
    [key: string]: string;
}

// No need to require CSS file, since it's imported directly
const styles: Styles = {
    login_container: "your-class-name",
};

function LoginAfterMessage({ children }: Props): JSX.Element {
    const { user } = useAuth();

    return (
        <div className={styles.login_container2}>
            {user ? (
                <div>
                    <p>Welcome, {user.name}! 👋</p>
                    <p>Email: {user.email} 📧</p>
                    <h2>You have now logged in ! 😃</h2>
                </div>
            ) : (
                children
            )}
        </div>
    );
}

export default LoginAfterMessage;
