import React, { Component } from 'react';
import axios from 'axios';

import DisplayImage from './displayimage';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: "",
            query: "",
            gifs: [],
            query: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            search: e.target.value
        })
    }


    componentDidMount() {
        axios.get(`http://localhost:5000/gif/trending`)
            .then((res => {
                // console.log(res.data.data);
                this.setState({
                    gifs: res.data.data
                })
                console.log(gifs);
            }))
    }

    getSearch() {
        axios.get(`http://localhost:5000/gif/search?search=${this.state.query}`)
            .then((res => {
                this.setState({
                    search: "",
                    gifs: res.data.data
                })
            }))
    }

    searchGifs () {
    //     this.setState({
    //         query: this.search.value
    //     })
    
        // if(this.state.gifs.length > 0) {
        //     return ( <img id="gif" src={this.state.gifs}  />);
        // }
        // else {
        //     return ( <img id="gif" src={}/>)
        // }

    }


    render() {
        return (
            <div>
                <h1>Hello GIPHY World!</h1>
                <input type="text" value={this.state.search} onChange={this.changeHandler.bind(this)} />
                <button className="bnt bnt-primary" onClick={this.getSearch.bind(this)}>Search</button>
                {/* <div className="container text-center">
                    { this.searchGifs() }
                </div> */}
                <div>
                <DisplayImage gifs={this.state.gifs}/>
                </div>
                
            </div>
        )
    }
}

export default Container;