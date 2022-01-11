import React, {useEffect, useState} from 'react';

const Posts = () => {

    let [posts, setPosts] = useState( []);

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(responce => responce.json())
            .then(value => {
                setPosts(value);
            });

    }, [])


    return (
        <div>

            {
                posts.map( value => <li key={value.id}> {value.title}</li>)
            }

        </div>
    );
};

export default Posts;