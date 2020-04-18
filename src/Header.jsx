import React from "react"
import "./Style.css"

class Header extends React.Component{
    render(){
        return(
            <div className="container text-center mt-5 mb-5">
                <h1>India:<span className="text-danger">Covid19</span></h1>
                <img src="images/1.png" className="img-fluid" />
            </div>
        )
    }
}

export default Header;