import React from "react"
import  styles from "./Cards.module.css"
import CountUp from "react-countup"
   
    class Cards extends React.Component{
        render(){
            const {summary}= this.props;
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" style={{marginTop:20}}>
                            <div className="card bg-warning text-light">
                                <div className="card-body">
                                    <h4 className="card-title">Confirmed Cases:</h4>
                                    <h5><CountUp end= {summary.confirmed}/></h5>
                                    <p className="card-text">Last updated at {summary.lastupdatedtime}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 second" style={{marginTop:20}}>
                            <div className="card bg-success text-light">
                                <div className="card-body">
                                    <h4 className="card-title">Number of Recoveries</h4>
                                    <h5><CountUp end= {summary.recovered}/></h5>
                                    <p className="card-text">Last updated at {summary.lastupdatedtime}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 " style={{marginTop:20}}>
                            <div className="card bg-danger text-light">
                                <div className="card-body">
                                    <h4 className="card-title">Number of Deaths</h4>
                                    <h5><CountUp end= {summary.deaths}/></h5>
                                    <p className="card-text">Last updated at {summary.lastupdatedtime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
        }
    }

export default Cards;