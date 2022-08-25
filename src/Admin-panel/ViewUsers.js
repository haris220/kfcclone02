import SecondNavbar from './SecondNavbar';



import { useState, useEffect } from 'react'




const ViewUsers = () => {

    const [user, setUser] = useState([])

    useEffect(() =>{
            getUsers();
    },[])

    const getUsers = async () =>{

        let result = await fetch('http://localhost:7000/all-users');
        result = await result.json();

        if(result){
            setUser(result)
        }else{
            console.log("No Record Found")
        }
    }

    // for deleting user detail / information from database

    const delUser = async (id) =>{
      let result = await fetch(`http://localhost:7000/all-users/${id}`,{
       method:"Delete"
      });
      result = await result.json()
      
      if(result){getUsers()
      }
        

         

    }

  return (
    
    <div>
      <div className='container'>
      <SecondNavbar/>
      </div>




    {/*    <h1 className='text-success text-center fw-bold fs-2 mt-5'>Users Detail</h1>
        <hr className='w-25 text-center m-auto' /> */}
        <div className='col justify-content-center  d-flex' style={{marginBottom : '50px'}}>  
          <h2 style={{marginTop: '30'}}>All USERS Details</h2>
       </div>

<div className='container'>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      
      <th scope="col">Delete</th>
      

      
    </tr>
  </thead>
  
  <tbody>
        {
            user.map((obj, ind) =>(
                    
                        <tr key={obj._id}>
                            <th scope="row">{ind + 1}</th>
                            <td>{obj.name}</td>
                            <td>{obj.email}</td>
                            
                            <td>
                                <button onClick={() =>delUser(obj._id)} className='btn btn-danger '>
                                    <p>Remove User</p>
                                </button>
                            </td>
                           
                        </tr>
                        
                    
            ))
        }
        </tbody>
</table>
</div>
    </div>
  )
}

export default ViewUsers