import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.css';
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate("");
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    async function ApiData() {
        try {
            await axios.post(`http://localhost:5555/users`, formValues)

        } catch (error) {
            console.log("Something is Wrong");
        }
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            ApiData()
            navigate("/list");
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        } else if (values.password.length > 8) {
            errors.password = "Password cannot exceed more than 8 characters";
        }
        return errors;
    };
    return (
        <div className={styles.demo}>
            {Object.keys(formErrors).length === 0}
            <form onSubmit={handleSubmit}>
                <h3>Login-Form</h3>
                <label>Email</label><br></br>
                <input type="text" name="email" placeholder="name@example.email”,"
                    value={formValues.email} onChange={handleChange} />
                <p>{formErrors.email}</p>

                <label>Password</label><br></br>
                <input type="password" name="password" placeholder="Password"
                    value={formValues.password} onChange={handleChange} />
                <p>{formErrors.password}</p>
                <button type="Submit">Login</button>


            </form>
        </div>
    );
}
export default LoginPage;