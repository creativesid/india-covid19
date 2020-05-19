import React from "react"

class All extends React.Component{    
    
    render(){
        return(
            <div className="container mt-3">
                <h3 className="text-danger">{this.props.state}</h3>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{this.props.confirmed}</td>
                    <td>{this.props.recovered}</td>
                    <td>{this.props.deaths}</td>
                    </tr>
                </tbody>
                </table>
        </div>
            
        )
    }
}

export default All;
