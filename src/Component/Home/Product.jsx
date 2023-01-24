import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Product = () => {
    const [prod, setProd]=useState([])
    const [color, setcolor]=useState('red')
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(a=>a.data).then(a=>setProd(a))
    }, []);
    let handleFav=(id)=>{
        if(color==='red'){
            setcolor('white')
        }
        else{
            setcolor('red')
        }
    }
  return (
    <div className="container my-5">
        <div className="row">
                    {prod!=null?prod.map(el=>{
                        return <div className="col my-5" key={el.id}>
                            <div className="card d-flex flex-row shadow " style={{height:'200px'}}>
                                <div className='d-flex'>
                                    <span className='heart' onClick={()=>handleFav(el.id)} style={{color:color}}><i className="fa fa-heart"></i></span>
                                    <img src={el.image} alt="" className='border rounded' width='150px' />
                                </div>
                                <div className='mx-3'>
                                    <p>{el.title}</p>
                                    <h6>{el.price}</h6>
                                </div>
                            </div>
                        </div>
                    }):''}
        </div>
    </div>
  )
}

export default Product