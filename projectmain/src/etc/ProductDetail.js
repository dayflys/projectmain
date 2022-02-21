import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";
import BlackRoundButton from './BlackRoundButton';

export default function ProductDetail() {
    const [data,setData] = useState(null);
    const {category,name} = useParams();
    useEffect(async() => {
        await axios.get(`/api/goods/${category}/${name}`)
        .then((res) => {
            setData(res.data.data[0]);
    })
    },[]);
    if(data != null) {
        console.log(data);
        return (<div>
            <h1>{data.Name}</h1>
            <img src={'images/'+data.ImageSource} />
            <h3>{data.Description}</h3>
            <h2>{data.Remains}개 남음.</h2>
            <BlackRoundButton width="150px" height="20px" value="목록으로 돌아가기" onClick={() => {window.location.replace(`/Products/${category}`)}} />
        </div>);
    }
    return (<div><h1>Please wait.</h1></div>);
}