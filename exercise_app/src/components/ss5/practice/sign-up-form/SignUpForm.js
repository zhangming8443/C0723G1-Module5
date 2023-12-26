import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function SignUpForm() {
    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value});
    }

    function handleSubmit() {
        const isValid = form.username && form.email && form.password && form.confirmPassword;
        alert(isValid ? "Sign up successfully !!!" : "Please fill out all the fields !!!");
    }

    return (
        <div>
            <h1>Sign up</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={form.username || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.email || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={form.password || ""} onChange={handleChange}/>
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword || ""}
                           onChange={handleChange}/>
                </div>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}


export default SignUpForm;