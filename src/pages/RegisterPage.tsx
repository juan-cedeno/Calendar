import { Link } from "react-router-dom"

export const RegisterPage = () => {
    return (
        <div>
            <div className='cont_banner_auth'>
                <img 
                    src= 'https://i.ibb.co/10RPb4J/calendar-banner2.png' 
                    alt="Banner img" 
                    className="img_banner"
                    />
                <div>
                    <form>
                    <h3>Register</h3>
                    <label className='title_form'>Name</label>
                        <input 
                            type="text" 
                            placeholder='Name'
                            autoComplete='off'
                            name='name'
                            className='input_auth'
                        />
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
                        <label className='title_form'>Repeat password</label>
                        <input 
                            type="password" 
                            name="password2" 
                            placeholder='Reepat password'
                            className='input_auth'
                        />

                        <button className='btn_auth'>Register</button>
                        <div className="cont_letter">
                            <label className="letter_auth">Have an account?</label>
                            <Link 
                                to='/auth/login'
                                className="back_auth"
                            >Log in</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
