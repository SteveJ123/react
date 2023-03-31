import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Detail = () => {
  return (
    <Container>
      
      <div className='row'>
        <div className="col-lg-4">
      <div className='d-flex'>
          <div>
         <h4 className="text-right mt-4 teacher">Experienced Teacher</h4> 
         <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
         </div>
         <div>
         <i class="fas fa-chalkboard-teacher" style={{marginLeft: '10px', fontSize:'48px', color:'orange', paddingTop: '100px'}}></i>
         </div>
        </div>         
         
        <div className='d-flex '>
            <div>
         <h4 className="text-right mt-4 campus">A/C Residential Campus</h4> 
         <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
         </div>
         <div>
         <i class="fas fa-home" style={{marginLeft: '10px', fontSize:'48px', color:'green', paddingTop: '100px'}}></i>
         </div>
        </div>
        <div className='d-flex '>
            <div>
         <h4 className="text-right mt4 delicious">Delicious Food</h4> 
         <p className="text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
         </div>
         <div>
         <i class="fa fa-bread-slice" style={{marginLeft: '10px', fontSize:'48px', color:'brown', paddingTop: '100%'}}></i>
         </div>
        </div>      
        </div>
        <div className="col-lg-4">
        <img src="https://media.gettyimages.com/id/470258484/vector/cartoon-kids-reading-book.jpg?s=1024x1024&w=gi&k=20&c=NhJzu8z-I8IUXdD1M05jsBTV-jdqo_owJC8WtKFFVJc="
          width="350px"
          height="600px"
          />
        </div>

        <div className="col-lg-4">
        <div className='d-flex'>
        <div>
         <i class="fas fa-baseball-ball" style={{marginRight: '10px', fontSize:'48px', color:'orange', paddingTop: '100px'}}></i>
         </div>
            <div>
         <h4 className="text-left mt-4 teacher">Sports Facilities</h4> 
         <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
         </div>
        
        </div>         
         
        <div className='d-flex'>
        <div>
         <i class="fas fa-book" style={{marginRight: '10px', fontSize:'48px', color:'green', paddingTop: '100px'}}></i>
         </div>
            <div>
         <h4 className="text-left mt-4 campus">Holistic Education</h4> 
         <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
         </div>
         
        </div>
        <div className='d-flex'>
        <div>
         <i class="fas fa-bus" style={{marginRight: '10px', fontSize:'48px', color:'brown', paddingTop: '100px'}}></i>
         </div>
            <div>
         <h4 className="text-left mt4 delicious">Transportation</h4> 
         <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi praesentium quisquam adipisci possimus non eius quo, repellendus ab rerum aspernatur ipsa illo. Eos fugiat hic labore dolores quaerat expedita!</p>
         </div>
         
        </div>    
        </div>
      </div>  
      
      
    </Container>
  );
}

export default Detail