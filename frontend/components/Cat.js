import React from 'react';
import axios from 'axios';
const API_ENDPOINT = 'https://api.thecatapi.com/v1/images/search';

export class Cat extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            catImageUrl: ''
        }
    }
    async getCatImage() {
        try {
            let catImageData = await axios.get(API_ENDPOINT);
            this.setState({
                isLoading: false,
                catImageUrl: catImageData.data[0].url
            });
        } catch(e) {
            console.log('so sad! no cats');
            this.setState({
                isLoading: false,
                catImageUrl: ''
            });
        }
    }
    componentDidMount() {
        this.getCatImage();
    }
    render(){
        return (
            <div>
                {this.state.isLoading ? 
                <div>Loading...</div> : <img src={this.state.catImageUrl}></img>}
            </div>
        );
    }
}
