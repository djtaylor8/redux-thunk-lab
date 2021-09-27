import React, { Component } from 'react';

export default class CatList extends Component {
    
    render() {

        let cats = this.props.catPics.map(cat => <img key={cat.id} src={cat.url}></img>)

        console.log(this.props)

        return (
            <div>
                <ul>
                {cats}
                </ul>
            </div>
        )
    }
}