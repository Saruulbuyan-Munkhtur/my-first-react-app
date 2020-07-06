import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const ListItem = (props) => {
    
    return (
        <div className="br2 tl ml2 mt3 pl3 pt2 pb0 bg-primary-color grow dib f6-ns ba b--gold">
            <p>{props.id}</p>
        </div>
    );

}

export default ListItem;