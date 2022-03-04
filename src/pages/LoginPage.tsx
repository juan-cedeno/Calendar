import '../css/auth.css'
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <div>
            <div className='cont_banner_auth'>
                <img 
                    src= 'https://i.ibb.co/YRgbr2d/calendar-banner.jpg' 
                    alt="Banner img" 
                    className="img_banner"
                    />
                <div>
                    <form>
                    <h3>Welcome</h3>
                        <label className='title_form'>Email</label>
                        <input 
                            type="email" 
                            placeholder='Email'
                            autoComplete='off'
                            name='email'
                            className='input_auth'
                        />
                        <label className='title_form'>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder='Password'
                            className='input_auth'
                        />

                        <button className='btn_auth'>Log in</button>

                        <div className="cont_letter">
                            <label className="letter_auth">You do not have an account?</label>
                            <Link 
                                to='/auth/register'
                                className="back_auth"
                            >Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
