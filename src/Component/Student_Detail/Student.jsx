import axios from 'axios';
import React,{useEffect,useState} from 'react'

const Student = () => {
    const [std, setstd]=useState()
    useEffect(() => {
        axios.get('https://cms.analyttica.com/testimonials').then(data=>setstd(data.data))
    }, []);
  return (
    <div className="container my-5">
        <div className="row">
            {std!=null?std.map((el)=>{
                return <div className='col col-sm-4 my-5' key={el.id} >
                    <div className="card shadow border-primary" style={{height:'300px'}}>
                        <div className='text-center'>
                            <img className='border rounded-circle' src={`https://cms.analyttica.com${el.Image[0]!=null?el.Image[0].url:''}`}  alt="" />
                        </div>
                        <div className='mx-3'>
                            <h6>ID : {el.id}</h6>
                            <h6>Title : {el.Title}</h6>
                        </div>
                    </div>
                </div>
            }):''}
        </div>
    </div>
  )
}

export default Student