import React,{useState} from 'react'
import axios from 'axios';
const ForgotPass = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleForgotPassword = async () => {
      try {
        await axios.post('/forgot-password', { email });
        setMessage('Password reset email sent. Check your inbox.');
      } catch (error) {
        setMessage('Error sending password reset email.');
      }
    };
    return (
        <>
            <div className='grid justify-center'>
                <h2>Forgot Password</h2>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleForgotPassword}>Reset Password</button>
                <p>{message}</p>
            </div>
        </>
    )
}

export default ForgotPass