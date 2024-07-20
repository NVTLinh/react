import { useState } from 'react';
import '../assets/styles/LoginForm.css';
import Button from './Button';


export default function FormLogin(props) {
    const [loginform, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [lang, setLang] = useState('eng');

    const [Loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginForm({
            ...loginform,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: value ? '' : 'Không hợp lệ',
        });
    };

    const returnFormTitle = () => {
        return lang === 'vi' ? <h1 className='mb-3 text-center'>Form đăng nhập</h1> : <h1 className='mb-3 text-center'>Login Form</h1>;
    };

    const validateForm = () => {
        const newErrors = {
            email: loginform.email ? '' : 'Email không hợp lệ',
            password: loginform.password ? '' : 'Password không hợp lệ',
        };
        setErrors(newErrors);
        return !newErrors.email && !newErrors.password;
    };

    const submitLogin = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (loginform.email === 'a@gmail.com' && loginform.password === '123456') {
                alert('Đăng nhập thành công');
            } else {
                setErrors({
                    ...errors,
                    email: loginform.email !== 'a@gmail.com' ? 'Email không đúng' : '',
                    password: loginform.password !== '123456' ? 'Mật khẩu không đúng' : '',
                });
            }
        }, 1000);
    };

    console.log(loginform);

    return (
        <div className="container">
            <h1 className='text-center'>
                Đăng nhập
            </h1>

            <form onSubmit={submitLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        name="email"
                        className={`form-control w-100 ${errors.email ? 'is-invalid' : ''}`}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={handleInputChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className={`form-control w-100 ${errors.password ? 'is-invalid' : ''}`}
                        id="exampleInputPassword1"
                        onChange={handleInputChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={Loading}>
                    {Loading ? 'Loading...' : 'Submit'}
                </button>
            </form>

            {/* <Button
                type="success"
                loading={Loading}
                handleClick={submitLogin}
            /> */}
        </div>
    );
}
