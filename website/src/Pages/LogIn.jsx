import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function LogIn(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogIn(){
        if(username && password)
        {
            console.log('Logged in!');
            navigate('/home');
        }else{
            alert("Please enter both username and password");
        }
    }

    // async
    // async function handleLogIn(){
    //     if(username && password){
    //         try{
    //             const response = await fetch('http', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({username, password}),
    //             });

    //             const data = await response.json();

    //             if(response.status === 200){
    //                 localStorage.setItem('authToken', data.token);
    //                 navigate('/home');
    //             }else{
    //                 alert(data.message);
    //             }
    //         } catch(error){
    //             console.error('Error logging in: ', error);
    //             alert('NOOOOOOO');
    //         }
    //     } else {
    //         alert('Please');
    //     }
    // }

    function handleGoogleLogin(){
        window.location.href = '';
    }

    function handleKeyDown(event){
        if(event.key === 'Enter'){
            handleLogIn();
        }
    }

    return(
        <div>
            <div className="log-in">
                <h1>Log In</h1>
                <div className="login-input">
                    <label>Username</label>
                    <br></br>
                    <input type="text" placeholder="Enter Username" value={username} onKeyDown={handleKeyDown} onChange={handleUsernameChange}></input>
                    <br></br>
                </div>
                <div className="login-input">
                    <label>Password</label>
                    <br></br>
                    <input type="text" placeholder="Enter Password" value={password} onKeyDown={handleKeyDown} onChange={handlePasswordChange}></input>
                    <br></br>
                </div>

                <button onClick={handleLogIn}>Log In</button>

                <div style={{marginTop: '20px'}}>
                    <button onClick={handleGoogleLogin} style={{ backgroundColor: '#4285F4', color: '#fff', padding: '10px 20px', borderRadius: '20px'}}>Log In With Google</button>
                </div>
            </div>
        </div>
    )
}

export default LogIn
