import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import {images} from '../../constants'
import './Payment.css';

const SignUp = () => {
  const navigate = useNavigate();

    const{useState}=React;
    
    const[inputs,setinputs]=useState({
    email:"",
    password:""
    });
    
    const[warnemail,setwarnemail]=useState(false);
    const[warnpass,setwarnpass]=useState(false);
    const[danger,setdanger]=useState(true);
    
    const[eye,seteye]=useState(true);
    const[pass,setpass]=useState("password");
    
    
    const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    if(name=="email"){
    if(value.length>0){
    setdanger(true);
    }
    }
    setinputs((lastValue)=>{
    return{
    ...lastValue,
    [name]:value
    }
    });
    };
    
    const submitForm=(e)=>{
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);
    if(inputs.email.length<1){ setdanger(false); } if(inputs.email=="" ){ setwarnemail(true); } else if(inputs.password=="" ){ setwarnpass(true); } else{ alert("Logged in Successfully"); } }; const Eye=()=>{
        if(pass=="password"){
        setpass("text");
        seteye(false);
        }else{
        setpass("password");
        seteye(true);
        }
        }; 
        const [agree, setAgree] = useState(false);

        const checkboxHandler = () => {
          // if agree === true, it will be set to false
          // if agree === false, it will be set to true
          setAgree(!agree);
          // Don't miss the exclamation mark
        }
      
        // When the button is clicked
        const btnHandler = () => {
          navigate('about');
        };
        return(
        <>
            <div className="container">
                <div className="card">
                    <div className="form">
                    <div className="left-side">
                            
  
                            <div className="hello">
                                <p className='my__txt'>Sign up</p>

                                <p className='my__txt1'>Let's get you started </p>
                            </div>
                            <br/>
                            <form onSubmit={submitForm}>
                                <label className='my__lbl1' htmlFor="">E-mail</label>
                                <div className="input_text1">
                                    <input className={` ${warnemail ? "warning" : "" }`} type="text" placeholder="temi@gmail.com" name="email" value={inputs.email} onChange={inputEvent} />
                                    <p className={` ${danger ? "danger" : "" }`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                                </div>
                                <br/>
                                <label className='my__lbl1' htmlFor="">Password</label>
                                <div className="input_text1">
                                    <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                                </div>
                                <br/>

                                <label className='my__lbl1' htmlFor="">Confirm Password</label>
                                <div className="input_text1">
                                    <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                                </div>
                                <br/>
                                <div>
                                <input type="checkbox" className='lbl1' id="agree" onChange={checkboxHandler} />
                                <label htmlFor="agree" className='lbl'> By creating an account you agree to the <a href="#"><span className='pp'>Terms & conditions</span></a> and <a href="#"><span className='pp'>Privacy Policy</span></a> </label>
                               </div>

                                <div className="btn">
                                <Button className='my__btns' style={{ height: '40px', fontSize: '15px', width: '100%', cursor: 'pointer'}} disabled={!agree} onClick={btnHandler}>Create account</Button>
                                </div>
                                <br/>
                                <label htmlFor="agree" className='lbl2'> Already have an account? <a href="#"><span className='pp'>Log in</span></a> </label>
                            </form>
    
                            
                        </div>
                        <div className="right-side">
                        <img src={images.frame14}/>
                        </div>
    
                    
                    </div>
                </div>
            </div>
    
    
    
        </>
        );
        }
      
export default SignUp;
