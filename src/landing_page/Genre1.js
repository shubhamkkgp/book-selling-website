import React,{useState,useEffect} from 'react';


const Genre1 = (props) => {

  const [user, setUser] = useState([]);

 const getUsers = async() =>{
    console.log(props.search);
     const response   =   await  fetch(`https://api.itbook.store/1.0/search/${props.search}`);
     let data = await response.json()
      setUser(data.books);
  }

  useEffect(()=>{
     getUsers();
  },[])


  return (
    <div>
        <div class="book-container">

          {
            user.map((data)=>{
              return(
                <div className="flex flex-wrap m-auto my-container container justify-center">
                <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
                <a href="cart"className="block relative h-48 rounded overflow-hidden ">
                <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={data.image}></img>
                </a>
                <h2 class ="book-name">{data.title}</h2>
                <span class="book-price">{data.price}</span>
              </div>
              </div>
              )})
            
          }
        </div>
    </div>
  )
}

export default Genre1