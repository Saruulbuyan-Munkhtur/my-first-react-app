import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const ListItem = (props) => {
    const itemClick = (e) => {
        e = e || window.event;
        const item = e.target || e.srcElement;
        if (item.hasAttribute("class")){
            item.removeAttribute("class"); 
        } else {
        item.setAttribute("class", "strike");
    }
    }

    return (
        <div className="br2 tl ml2 mt3 pl3 pt2 pb0 bg-primary-color grow dib f6-ns ba b--gold">
            <p onClick={itemClick} id={props.id} className='strike' >{props.content}</p>
        </div>
    );

}

export default ListItem;