import { useEffect, useState } from "react";



export default function Users(){

    const [userList, setUserList] = useState([]);
    const [pending, setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true);
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();

            if(result?.users){
                setUserList(result?.users);
                setPending(false);
            }else{
                setUserList([]);
                setPending(false);
            }

            console.log(result);
            
        }catch(error) {
            console.log(error);
        }
    }

    // function handlefetchListOfUsers(){
    //     fetchAllUsers();
    // }

    // useEffect(() =>{
    //    fetchAllUsers();
    // },[]);
    console.log(userList);

    if(pending) return <h1>Fetchng users! Please Wait</h1>
    

    return <div>
        <h1>All Users Lists</h1>
        <button onClick={fetchAllUsers}>Fetch Users List</button>
        <ul>
            {
                userList && userList.length > 0 ?(
                userList.map(userItem=>(
                    <li key={userItem?.id}>
                        <p>{userItem?.firstName}{userItem?.lastName}</p>
                    </li>))
                    ) : (<h1>No users found! Please try again.</h1>)
            }
        </ul>
    </div>
}