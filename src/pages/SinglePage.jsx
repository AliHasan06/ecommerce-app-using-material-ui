import axios from 'axios'
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  let [Data, setData] = useState(null);

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>{
    // console.log(res.data);
    setData(res.data)
    
  }).catch((err)=>{console.log(err)
  })

  },[])
  return <></>;
};

export default SinglePage;
