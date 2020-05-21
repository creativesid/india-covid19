import React from "react"
import axios from "axios"
import Cards from "./Cards"

class Details extends React.Component{

    state={
        states:[],
        loading:true
    }

    async componentDidMount(){
        const res = await axios.get("https://api.covid19india.org/data.json")
        console.log(res)

        this.setState({states:res.data.statewise})
        this.setState({loading:false})
    }

    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        return(
            <div>
                <Cards summary={this.state.states[0]}/>
                
            </div>
        )
    }
}

export default Details;