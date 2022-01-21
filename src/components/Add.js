import e from "cors";
import { Fragment, useEffect, useState } from "react";
import User from "./User";

function Add () {

    const [ num1, setNum1 ] = useState(0);
    const [ num2, setNum2 ] = useState(0);
    const [ result, setResult ] = useState(0);
    const [ users, setUsers ] = useState([]);

    function addFun() {
        setResult(num1 + num2);
    }

    function getUsers() {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
                console.table(json)
                var rows = [];
                for(let i = 0; i < json.length; i++) {
                    rows.push(<User key={i} user={json[i]}/>);
                }
                setUsers(rows);
            }
        );

    }

    return (<Fragment>
        <h1>Addition of two numbers</h1>
        <input type="text" onChange={ e => setNum1(parseInt(e.target.value)) }/>
        <input type="text" onChange={ e => setNum2(parseInt(e.target.value)) } />
        <button onClick={addFun}>Get Addtion</button>
        <div>{result}</div>
        <button onClick={getUsers}>Get Users</button>

        <table border='1'>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table>
        {/* <div>{addFun()}</div> */}
    </Fragment>);
}

export default Add;