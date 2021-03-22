import React,{useState} from 'react';
const Contact=()=>{

    const [data,setData]=useState({
       fname:'',
       phone:'',
       email:'',
       msg:'',
    })

    const inpute=(e)=>{
        const{name,value}=e.target

        setData((old)=>{
            return {
                ...old,
                [name]:value,
            }
        })
    }
    const fSubmit=(e)=>{
e.preventDefault();
alert(`my name is ${data.fname}.my nubr is ${data.phone}my msg is ${data.msg}`)
    }
    return (
        <>
      <div className="my-5">
          <h1 className="text-center">contact us</h1>
      </div>
      <div className="container contact_div">
          <div className="row">
              <div className="col-md-6 col-10 mx-auto">

              <form onSubmit={fSubmit}>
              <div class="mb-3">
           
                    <label for="exampleFormControlInput1" class="form-label">full name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" 
                    name='fname' 
                    value={data.fname}
                    onChange={inpute}
                    placeholder="name@example.com"/>
              </div>


              <div class="mb-3">
                 <label for="exampleFormControlInput1" class="form-label">phone number</label>
                 <input type="number" class="form-control" id="exampleFormControlInput1"
                  name="phone" 
                    value={data.phone}
                    onChange={inpute}
                  placeholder="name@example.com"/>
                 </div>

             <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Email address</label>
           <input type="email" class="form-control" id="exampleFormControlInput1"
                     name="email" 
                    value={data.email}
                    onChange={inpute}
            placeholder="name@example.com"/>
          </div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" 
                     name="msg" 
                    value={data.msg}
                    onChange={inpute}
  rows="3"></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>


              </div>
          </div>
      </div>
        </>
    )
    }
export default Contact