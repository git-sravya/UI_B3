import '../App.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';



function FormValidation() {
  let [user, setUser] = useState({
    name: '', 
    username: '',
    email: '',
    phone: ''
  });
  let [error, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
  });
  let validateForm = () => {
    let isValid = true;
    Object.values(error).forEach(v => {
      if(v.length > 0)
        isValid = false;
    })
    return isValid;
  }
  let submitForm = (e) => {
    e.preventDefault();
    if(validateForm()){
      console.log('USER', user);
      console.log('ERR', error);
    }
    else{
      console.error("INVALID FORM..");
    }
  }
  let getFormValues = (e) => {
    let err = '';
    let {name, value} = e.target;

    if(value == '')
      err = [name].toString().toUpperCase() + ' is mandatory'
    else if([name] == 'email'){
      let reg = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
      if(!reg.test(value)){
        err = 'Email is not in correct format.'
      }
    }

    console.log('ERR', err)  
    if(err == ''){
      setUser({...user, [name]: value});
      setErrors({...error, [name]: ''});
    }
    else
      setErrors({...error, [name]: err});
  }

  return (
      <form onSubmit={submitForm}>
        <div className='form-frame'>
          <div className='form-group' style={{ marginBottom: '20px' }}>
            <label>Name</label>
            <input type='text' placeholder='Enter Name' name='name' className='form-control' onInput={getFormValues} />
            {
              error.name != "" && <label className='alert alert-danger'>{ error.name }</label>
            }
          </div>
          <div className='form-group' style={{ marginBottom: '20px' }}>
            <label>User Name</label>
            <input type='text' placeholder='Enter User Name' name='username' className='form-control' onChange={getFormValues} />
            {
              error.username != "" && <label className='alert alert-danger'>{ error.username }</label>
            }
          </div>
          <div className='form-group' style={{ marginBottom: '20px' }}>
            <label>Phone</label>
            <input type='text' placeholder='Enter Phone' name='phone' className='form-control' onChange={getFormValues} />
            {
              error.phone != "" && <label className='alert alert-danger'>{ error.phone }</label>
            }
          </div>
          <div className='form-group' style={{ marginBottom: '20px' }}>
            <label>Email</label>
            <input type='text' placeholder='Enter Email' name='email' className='form-control' onChange={getFormValues} />
            {
              error.email != "" && <label className='alert alert-danger'>{ error.email }</label>
            }
          </div>
          <div className='form-group' style={{ marginBottom: '20px' }}>
            <button className='btn btn-primary'>Submit</button>
          </div>
        </div>
      </form>
  );
}

export default FormValidation;
