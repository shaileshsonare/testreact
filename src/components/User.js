import { Fragment } from "react";

function User(props) {

    const {id, name, username, email} = props.user;

    return (
        <Fragment>
            <tr>
                <td>{props.user.id}</td> 
                <td>{props.user.name}</td>
                <td>{username}</td>  
                <td>{email}</td>
            </tr>
        </Fragment>
    );

}

export default User;