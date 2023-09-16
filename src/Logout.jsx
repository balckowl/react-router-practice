import React from 'react'
import { auth } from '../apis/firebase';

const SignOutButton = () => {
    return (
        <div>
            <button onClick={() => auth.signOut()}>サインアウト</button>
        </div>
    )
}

export default SignOutButton