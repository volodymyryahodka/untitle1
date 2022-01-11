import React, {useEffect, useState} from 'react';

const Users = () => {


    let [users, setUsers] = useState( []);

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce => responce.json())
            .then(value => {
                setUsers(value);
            });

    }, [])

    return (
        <div>

            <ul>

                {
                    users.map(value => <li key={value.id}> {value.name}</li>)
                }

            </ul>


        </div>
    );
};

export default Users;