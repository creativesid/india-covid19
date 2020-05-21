import React from "react"
import axios from "axios"
import Rajya from "./Rajya"
import All from "./All"

class Details1 extends React.Component{

    state={
        rajya:[],
        loading:true
    }

    async componentDidMount(){
        const res = await axios.get("https://api.covid19india.org/data.json")
        console.log(res)

        const arr= this.setState({rajya:res.data.statewise})
        this.setState({loading:false})
    }

    render(){
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        return(
            <div>
              
                <Rajya sumary={this.state.rajya[1]} />
                <All sumary={this.state.rajya[1]} />
                <All sumary={this.state.rajya[2]} />
                <All sumary={this.state.rajya[3]} />
                <All sumary={this.state.rajya[4]} />
                <All sumary={this.state.rajya[5]} />
                <All sumary={this.state.rajya[6]} />
                <All sumary={this.state.rajya[7]} />
                <All sumary={this.state.rajya[8]} />
                <All sumary={this.state.rajya[9]} />
                <All sumary={this.state.rajya[10]} />
                <All sumary={this.state.rajya[11]} />
                <All sumary={this.state.rajya[12]} />
                <All sumary={this.state.rajya[13]} />
                <All sumary={this.state.rajya[14]} />
                <All sumary={this.state.rajya[15]} />
                <All sumary={this.state.rajya[16]} />
                <All sumary={this.state.rajya[17]} />
                <All sumary={this.state.rajya[18]} />
                <All sumary={this.state.rajya[19]} />
                <All sumary={this.state.rajya[20]} />
                <All sumary={this.state.rajya[21]} />
                <All sumary={this.state.rajya[22]} />
                <All sumary={this.state.rajya[23]} />
                <All sumary={this.state.rajya[24]} />
                <All sumary={this.state.rajya[25]} />
                <All sumary={this.state.rajya[26]} />
                <All sumary={this.state.rajya[27]} />
                <All sumary={this.state.rajya[28]} />
                <All sumary={this.state.rajya[29]} />
                <All sumary={this.state.rajya[30]} />
                <All sumary={this.state.rajya[31]} />
                <All sumary={this.state.rajya[32]} />
                <All sumary={this.state.rajya[33]} />
                <All sumary={this.state.rajya[34]} />
                <All sumary={this.state.rajya[35]} />
                <All sumary={this.state.rajya[36]} />
                <All sumary={this.state.rajya[37]} />
            </div>
        )
    }
}

export default Details1;