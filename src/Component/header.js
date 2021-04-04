import React from 'react';
import LogoImage from '../images/logo.png';
import CarouselImage1 from '../images/bmw1.jpg'
import CarouselImage2 from '../images/newbmw2.jpg'
import CarouselImage3 from '../images/bmw-x1.jpg'




class Logo extends React.Component {
    render() {
        return (
            <img src={LogoImage} alt="" width="50px" />
        )
    }
}

class SearchButton extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
        )
    }
}

class Caraousel extends React.Component{
    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={CarouselImage1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={CarouselImage2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={CarouselImage3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Logo />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Work</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Items
                    </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Laptop</a></li>
                                    <li><a className="dropdown-item" href="#">Mobile Phone</a></li>
                                    <li><a className="dropdown-item" href="#">Electronic Items</a></li>
                                </ul>
                            </li>
                        </ul>
                            <SearchButton />
                        
                    </div>
                </div>
            </nav>
        
        )
    }
}


export {
    Logo, Header,SearchButton,Caraousel
}