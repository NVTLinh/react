import { useState } from 'react'
import '../assets/styles/LoginForm.css'
import Button from './Button';


export default function FormLogin(props) {
    const [loginform, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const [lang, setLang] = useState('eng');

    const [Loading, setLoading] = useState(false)

    // const setUserEmail = (event)=>{
    //     const target = event.target;
    //     setLoginForm({
    //         ...loginform,
    //         email : target.value,
    //     })
    // }

    // const setUserPassword = (event)=>{
    //     const target = event.target;
    //     setLoginForm({
    //         ...loginform,
    //         password : target.value,
    //     })
    // }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginForm({
            ...loginform,
            [name]: value
        });
    };

    const returnFormTitle = () => {

        return lang === 'vi' ? <h1 className='mb-3 text-center'>Form đăng nhập</h1> : <h1 className='mb-3 text-center'>Login Form</h1>

    }

    const submitLogin = (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (loginform.email === 'TL@gmail.com' && loginform.password === '123456') {
                alert('Đăng nhập thành công');
                return
            }
            alert('Tài khoản hoặc mật khẩu không đúng');
        }, 3000)
    }

    console.log(loginform);

    return (
        <div className="container">

            <p>
                Lời nhắn từ component cha : {props.message}
            </p>

            <form onSubmit={submitLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email address</label>
                    <input type="email" name='email' className="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp" onClick={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
                    <input type="password" name='password' className="form-control w-100" id="exampleInputPassword1" onClick={handleInputChange} />
                </div>
                <div className="mb-3 htmlForm-check">
                    <input type="checkbox" className="htmlForm-check-input " id="exampleCheck1" />
                    <label className="htmlForm-check-label " htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={Loading}>
                    {Loading ? 'Loading...' : 'Submit'}
                </button>
            </form>

            <Button
                type = "success"
                loading = {Loading}
                handleClick = {submitLogin}
            >
            </Button>


        </div>
    )
};