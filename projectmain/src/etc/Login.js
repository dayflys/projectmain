import axios from "axios";
import React, {useState, useEffect} from "react";
import {Navigate} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import BlackRoundButton from "./BlackRoundButton";

export default function Login(props) {
    const [accountId,setAccountId] = useState(0);
    const [accountPassword,setAccountPassword] = useState(0);
    const [cookies, removeCookie] = useCookies(['toyproject_auth']);
    const [hasCookie, setHasCookie] = useState(false);

    useEffect(() => {
        if(cookies.toyproject_auth == undefined || cookies.toyproject_auth == 'undefined' || cookies.toyproject_auth == null) {
            setHasCookie(false);
        }
        else{
            console.log('cookies: ',cookies.toyproject_auth);
            setHasCookie(true);
            // window.location.replace('/');
        }
        console.log(cookies);
    },[cookies])

    const handleChange = (arg) => {
        setAccountId(arg.target.value);
    }

    const handleSubmit = (arg) => {
        arg.preventDefault();
        let temp = async() => {
            await axios.post('/api/login',
            {
                accountId:accountId,
                Password:accountPassword
            }
            )
            .then((res) => {
                console.log(res);
                if(res.data.loginSuccess==true) {
                    window.location.replace('/');
                }
                else {
                    alert('아이디 및 비밀번호가 틀렸습니다.');
                }
            })
        };
        temp();
    }

    const handlePassword = (arg) => {
        setAccountPassword(arg.target.value);
    }

    const gotoJoinUs = (arg) => {
        window.location.replace('/Register');
    }

    const handleLogout = (arg) => {
        let temp = async() => {
            await axios.get('/api/logout')
            .then((res) => {
                console.log(res);
                removeCookie('toyproject_auth');
                if(res.logout == true) {
                    window.location.reload();
                }
            })
        }
        temp();
    }

    if(hasCookie) {
        return (
            <div style={{display: 'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'70vh',flexDirection:'column',marginTop:'0px'}}>
                <div><h1>LOGIN</h1></div>
                <h3>이미 로그인 되어 있습니다. 로그아웃 하시겠습니까?</h3>
                <BlackRoundButton width="100px" height="30px" value="LOGOUT" onClick={handleLogout}/>
            </div>
        );
    }

    return (
    <div>
    <hr></hr>
    <div style={{display: 'flex',justifyContent:'center', alignItems:'center',width:'100%',height:'70vh', flexDirection:'column',marginTop:'0px'}}>
        <div>
            <h1>LOGIN</h1>
        </div>
        <form onSubmit={handleSubmit} style={{display:'grid', gridTemplateColumns:'1fr 2fr 1fr 1fr',width:'1000px'}}>
            <div></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',width:'100%',height:'100%',flexDirection:'column'}}>
            <label>MEMBERSHIP LOGIN</label>
            <input type="text" value={accountId.value} onChange={handleChange} placeholder="ID"
                style={{width:"80%",padding:"10px",margin:"5px"}}
            />
            <input type="password" value={accountPassword.value} onChange={handlePassword} placeholder="PASSWORD"
                style={{width:"80%",padding:"10px",margin:"5px"}}
            />
            </div>
            <button type="submit" className="floating-button brb"
                style={{width:'100%',height:'100%',
                fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
                border:'0px'
            }}
            >LOGIN</button>
            <div></div>
        </form>
        <hr />
        <div style={{display: 'flex',justifyContent:'space-around', alignItems:'center',flexDirection:'row'}}>
        <div style={{marginRight:'5px',marginLeft:'5px'}}><BlackRoundButton value="JOIN US" onClick={gotoJoinUs} height="50px" width="200px"/></div>
        <div style={{marginRight:'5px',marginLeft:'5px'}}><BlackRoundButton value="Forgotten ID" height="50px" width="200px"/></div>
        <div style={{marginRight:'5px',marginLeft:'5px'}}><BlackRoundButton value="Forgotten PASSWORD" height="50px" width="200px"/></div>
        </div>
    </div>
    <hr></hr>
    </div>
    );
}