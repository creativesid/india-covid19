import React from "react"
import Cards from "./Cards"
import Rajya from "./Rajya"
import styles from "./App.module.css"
import Details from "./Details"
import Details1 from "./Details1"
import Header from "./Header"
import Prevent from"./Prevent"
import Footer from "./Footer"

class App extends React.Component{
    render(){
        return(
            <div>
                <div classname={styles.card}>
                    <Header classname={styles.card}/>
                    <Details/>
                    <Prevent/>
                    <Details1/>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default App; 