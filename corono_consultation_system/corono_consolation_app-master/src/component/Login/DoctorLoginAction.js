import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'
import axios from 'axios'
// import {loginAction} from '../../redux/reduxuser/UserActions'

function DoctorLoginAction(props)
{
    function preback()
        {
          window.history.forward();
        }
        setTimeout(preback(),0);
      
        window.onunlod=()=>(null);
      
    const history=useHistory()

        const [msg,setMsg]=useState(" ")
        const [message , setMessage]= useState(" ")
        

     useEffect(()=>
    {     
        axios
        .get(`http://localhost:8080/doctor/login/${props.userName}/${props.password}`)
        .then((response) => {

         if(response.data.userType=="doctor")
         {
             sessionStorage.setItem("password",response.data.password)
             sessionStorage.setItem("name",response.data.userName)
             sessionStorage.setItem("id",response.data.userId)
          console.log(response.data)
             setMessage("Login As Admin Success")
             alert("Login Successfull")
            history.push({
                pathname:'/Home'
            })

            setTimeout(function(){
                myFunction()
              },1000)
        }
        else{
            sessionStorage.setItem("name",response.data.userName)
            sessionStorage.setItem("id",response.data.userId)
            sessionStorage.setItem("password",response.data.password)
            history.push({
                pathname:'/About'
            })
            alert("Login UnSuccessfull")
            setMessage("Login As Admin unSuccess")
            setTimeout(function(){
                myFunction()
              },1000)
        }

        })
        .catch((error) => {
          setMsg(error.response.data);
         console.log(msg)
        });
      
    },[])


    function myFunction()
    {
     window.location.reload(false)
    }
   

     return (
         <>
         <div className="alert alert-success">{msg}</div>
         <div> 
             <h3>{message}</h3>
         </div>
         </>
     )
    //loginuser.loading?(
    //     <div className="text-warning">{loginuser.loading}</div>
    // ) : loginuser.error ?(
    //     <div className="alert alert-danger">{loginuser.error}</div>
    // ):
    // (
    //         <div className="alert alert-success">Welcome {loginuser.lUser.userName} </div>
    // )

    
}

// const mapStateToProps=(state,props)=>{
//     return{

//         prop:props,
//         loginuser:state.loginU
//     }
// }

// const mapDispatchToProps= (dispatch,props)=>{
//     return{
//         loginAction: ()=> dispatch(loginAction(props.userName,props.password))
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(LoginAction)


export default DoctorLoginAction