import './style.css'
import basketLogo from '../../assets/Group.png'
import user from '../../assets/user.png'
import lock from '../../assets/lock.png'

const Login = () => {
    return ( 
        <div className='login section__padding'>
            <div className='login__container'>
                <div className='login__container-logo'>
                    <img src={basketLogo} alt='logo' />
                </div>
                
                <div className='login__container-username'>
                    <img src={user} />
                    <input type='text' placeholder='USERNAME'/>
                </div>
                <div className='login__container-password'>
                    <img src={lock} />
                    <input type='password' placeholder='PASSWORD'/>
                </div>
                
                <button>LOGIN</button>
                <p><a href='#'>Forgot password?</a></p>
            </div>
        </div>
     );
}
 
export default Login;