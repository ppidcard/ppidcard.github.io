import React from 'react';
import BookMark from './BookMark';

function BookMarkDirect(props){
    const bookmarks = props.bookmarks
    return(
        <div className='bookmark'>{bookmarks.map(bookmark => <BookMark bookmark={bookmark}/>)}
        </div>
    )
}

export default BookMarkDirect;