import React, {useEffect, useState} from 'react';

const Comments = () => {

    let [comments, setComments] = useState( []);

    useEffect( () => {


        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(responce => responce.json())
            .then(value => {
                setComments(value);
            });

    }, [])

    return (
        <div>

            <ul>

                {
                    comments.map(value => <li key={value.id}> {value.body}</li>)
                }

            </ul>

        </div>
    );
};

export default Comments;