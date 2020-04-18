import React from "react"

class All extends React.Component{    
    
    render(){
        const {sumary}= this.props;

        return(
            <div className="container mt-3">
                <h3 className="text-danger">{sumary.state}</h3>
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
                    <td>{sumary.confirmed}</td>
                    <td>{sumary.recovered}</td>
                    <td>{sumary.deaths}</td>
                    </tr>
                </tbody>
                </table>
        </div>
            
        )
    }
}

export default All;