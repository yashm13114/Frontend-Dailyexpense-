import React, { useState } from 'react'
import axios from 'axios';
const ResetPass = () => {
    const { token } = match.params;
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async () => {
        try {
            await axios.post(`/api/reset-password/${token}`, { newPassword });
            setMessage('Password updated successfully.');
        } catch (error) {
            setMessage('Error updating password.');
        }
    };
    return (
        <>
            <div>
                <h2>Reset Password</h2>
                <label>New Password:</label>
                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <button onClick={handleResetPassword}>Update Password</button>
                <p>{message}</p>
            </div>

        </>
    )
}

export default ResetPass