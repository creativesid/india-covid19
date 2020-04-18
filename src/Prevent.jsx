import React from "react"
import "./Style.css"

class Prevent extends React.Component{
    render(){
        return(
            <div className="container text-center mt-5 mb-5 pt-5">
                <h1 className="mb-5 text-primary">Preventation</h1>
                <div className="row">
                        <div className="col-md-3" >
                            <div className="card text-dark">
                                <div className="card-body">
                                    <img src="images/2.png" className="img"/>
                                    <p className="card-text pt-3">Stay at Home </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 second">
                            <div className="card text-dark">
                                <div className="card-body">
                                <img src="images/3.png" className="img"/>
                                <p className="card-text pt-3">Wash your hand </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 " >
                            <div className="card  text-dark">
                                <div className="card-body">
                                <img src="images/4.png" className="img"/>
                                <p className="card-text pt-3">Make a distance </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 " >
                            <div className="card  text-dark">
                                <div className="card-body">
                                <img src="images/5.png" className="img"/>
                                <p className="card-text pt-3">call doctor if you sick </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Prevent;