import React from 'react';



export default class Header extends React.Component{
        constructor(){
                super();
                this.state={
                        isnavopen:false
                }

                
        }

        ButonaTikla(){
                this.setState({isnavopen:!this.state.isnavopen});
                    }

       render(){
                return(
                        <div className="header">
                        <nav className="contanier navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="#">Eğitim Sitesi</a>

                                <button className="navbar-toggler" type="button" onClick={this.ButonaTikla.bind(this)}>
                                        <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="navbar-collapse" id="navbarNav"  style={{display:this.state.isnavopen?"block":"none"}}>
                                        <ul className="navbar-nav">
                                                <li className="nav-item">
                                                        <a className="nav-link" href="#">Anasayfa </a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link" href="#">Hakkımızda </a>
                                                </li>
                                                <li className="nav-item">
                                                        <a className="nav-link" href="#">Duyurular </a>
                                                </li>

                                        </ul>
                                </div>


                        </nav>

                </div>
                );
      }

}



