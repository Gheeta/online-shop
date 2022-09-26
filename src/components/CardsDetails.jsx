import React, { useEffect, useState } from 'react';
import  Table  from 'react-bootstrap/Table';
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { DLT,ADD,REMOVE } from '../redux/actions/action';

const CardsDetails =()=> {

    const [data, setData]= useState([]);
    //console.log(data);

    const {id}= useParams();
    //console.log(id);

    const history = useNavigate();

    const dispatch = useDispatch();

    const getdata = useSelector((state)=>state.cartreducer.carts);
    
    const compare = ()=>{
        let comparedate = getdata.filter( (e)=>{
            return e.id ==id ;
        });
        setData(comparedate);
    }

    //add data 
    const send = (e)=>{
        dispatch(ADD(e));
    }

    const dlt=(id)=>{
        dispatch(DLT(id));
        history("/");
    }

    //remove one
    const remove=(item)=>{
        dispatch(REMOVE(item))
    }

    useEffect( ()=>{
        compare();
    },[id]);
    

  return (
    <>
    <div className='container mt-2 '>
        <h2 className='text-center'>Item Details Page</h2>

        <section className='container mt-3'>
           <div className='iteamsdetails'>
           {
             data.map( (ele)=>{
                return(
                    <>
                    <div className='items_img'>
                       <img src={ele.imgdata} alt='' style={{borderRadius:"10px"}}/>
                    </div>

                    <div className='details'>
                        <Table>
                          <tr>
                            <td>
                                <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                                <p><strong>Price </strong> : {ele.price}£ </p>
                                <p><strong>Dishes </strong> : {ele.address}</p>
                                <p><strong style={{fontSize:"bold"}}>Total </strong> : {ele.price *ele.qnty} £</p>
                                <div className='mt-5 d-flex justify-content-between align-item-center' style={{width:100, cursor:"pointer",backgroundColor:"#ddd", color:"#111",borderRadius:"5px"}}>
                                    <span style={{fontSize:24}} onClick={ele.qnty <=1? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                                    <span style={{fontSize:22}}>{ele.qnty}</span>
                                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                                </div>
                            </td>
                            <td>
                                <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff", padding:"2px 5px" ,borderRadius:"5px"}}>{ele.rating} ★</span> </p>
                                <p><strong>Order Review :</strong> <span>{ele.somedata}</span> </p>
                                <p><strong >Remove :</strong> <span> <i className='fa-solid fa-trash-can' onClick={()=>dlt(ele.id)} style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span> </p>
                            </td>
                          </tr>
                        </Table>
                    </div>
                    </>
                )
             })
           }
              
           </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails;