import React from 'react';
import BookMark from './BookMark';
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet';

function BookMarkDirect(props){
    const bookmarks = props.bookmarks
    return(
        <div className="photo-grid">
            <Helmet bodyAttributes={{style: 'background-color : grey'}}/>
            <Link to='/'><a className='navlinks bookmark-link'href="#">Back</a></Link>
     
            {bookmarks.map(bookmark => <BookMark bookmark={bookmark}/>)}
        </div>
    )
}

export default BookMarkDirect;