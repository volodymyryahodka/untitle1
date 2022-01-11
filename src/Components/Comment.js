import React from 'react';

const Comment = ( {item} ) => {
    return (
        <div>
            {item.body}
        </div>
    );
};

export default Comment;