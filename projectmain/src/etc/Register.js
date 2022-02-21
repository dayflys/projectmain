import axios from "axios";
import React, {useState, useEffect} from "react";
import {Navigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import BlackRoundButton from "./BlackRoundButton";

export default function Register(props) {
    const [accountId,setAccountId] = useState(0);
    const [accountPassword,setAccountPassword] = useState(0);
    const [accountEmail,setAccountEmail] = useState('');

    const handleIdChange = (arg) => {
        setAccountId(arg.target.value);
    }

    const handleSubmit = (arg) => {
        arg.preventDefault();
        let temp = async() => {
            console.log('Entered');
            await axios.post('/api/register',{
                accountId: accountId,
                Password: accountPassword,
                accountEmail: accountEmail
            })
            .then((res) => {
                if(res.data.success == true) {
                    alert('가입이 완료되었습니다.\n새로운 아이디로 로그인하십시오.');
                    window.location.replace('/Login');
                }
            })
        }
        temp();
    }

    const handlePassword = (arg) => {
        setAccountPassword(arg.target.value);
    }

    const handleEmailChange = (arg) => {
        setAccountEmail(arg.target.value);
    }

    return (
    <div style={{display: 'flex',justifyContent:'center', alignItems:'center',width:'100%',height:'70vh', flexDirection:'column',marginTop:'0px'}}>
        <div>
            <h1>REGISTER</h1>
        </div>
        <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:"column",justifyContent:"flex-start",alignItems:"center",width:'1000px'}}>
            <div></div>
            <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',width:'100%',height:'100%',flexDirection:'column'}}>
            <label>MEMBERSHIP REGISTER</label>
            <input type="text" value={accountId.value} onChange={handleIdChange} placeholder="ID"
                style={{width:"300px",padding:"10px",margin:"5px"}}
            />
            <input type="password" value={accountPassword.value} onChange={handlePassword} placeholder="PASSWORD"
                style={{width:"300px",padding:"10px",margin:"5px"}}
            />
            <input type="text" value={accountEmail.value} onChange={handleEmailChange} placeholder="email@example.com"
                style={{width:"300px", padding:"10px", margin:"5px"}}
            />
            <button type="submit" className="floating-button brb"
                style={{width:'300px',height:'50px',
                fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                border:'0px'
            }}
            >REGISTER</button>
            </div>
        </form>
        <hr />
    </div>
    );
}