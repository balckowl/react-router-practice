import React, { useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../apis/firebase';
import Logout from './Logout';

const Login = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {
            navigate('/');
        }).catch(error => {
            console.error('ログインエラー:', error);
        });
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            {user && <p>{user.displayName}</p>}
        </div>
    );
}

export default Login;
