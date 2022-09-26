import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from './CardsData';
import "../styles/index.scss"
import {useDispatch} from "react-redux";
import {ADD} from "../redux/actions/action";


function Cards() {

    const [data, setData] = useState(Cardsdata);
    //console.log(data);

    const dispatch = useDispatch();

    const send = (e)=>{
        dispatch(ADD(e));
    }

  return (
    
    <div className='cards container mt-3'>
        <h2 className='title text-center' >Add to Cart Projects</h2>

        <div className='row d-flex justify-content-center align-item-center' >
        {
          data.map((element,id)=>{
            return(
                <>
                <Card style={{ width: '18rem', border:"none"}} className="mx-2 mt-4 card_style"> 
                    <Card.Img variant="top" 
                              src={element.imgdata} 
                              style={{height:"16rem", objectFit:"cover", borderRadius:5}}
                              className="mt-3"/>
                    <Card.Body>
                        <Card.Title>{element.rname}</Card.Title>
                        <Card.Text>
                            price :  {element.price} £
                        </Card.Text>
                        <div className='button_div d-flex justify-content-center'>
                            <Button variant="primary"
                            onClick={()=> send(element)}
                            style={{backgroundColor:"green", border:".5px solid rgb(115, 206, 11)"}}
                            className='col-lg-12'>Add to Cart</Button>
                        </div>
                        
                    </Card.Body>
                </Card>
                </>
            )
          })
        }
            
        </div>
    </div>
  
  )
}

export default Cards