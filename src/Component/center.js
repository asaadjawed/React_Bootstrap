import React from 'react';
import ArrivalImage from '../images/bmw3.jpg';
import ArrivalImage2 from '../images/bmw1.jpg';
import ArrivalImage3 from '../images/newbmw2.jpg';



class Heading extends React.Component{
    render(){
        return(
            <h1 className ="arrival-heading">New Arrival</h1>
        )
    }
}

class Center extends React.Component {
    render() {
        return (

          

            <div className="center">

<Heading />     

            <div className="row">

                <div className="card col-sm-4" style={{ width: '18rem' }}>
                    <img src={ArrivalImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Red BMW</h5>
                        <p className="card-text">This is a new model of our BMW's car gallery </p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>

                <div className="card col-sm-4" style={{ width: '18rem' }}>
                    <img src={ArrivalImage2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Navy Color</h5>
                        <p className="card-text">This navy blue color is so attractive</p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>

                <div className="card col-sm-4" style={{ width: '18rem' }}>
                    <img src={ArrivalImage3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Orange Color</h5>
                        <p className="card-text">Bmw's car is one of the best model in the car gallery.</p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                </div>

            </div>
            </div>

        )
    }
}


export{
    Center,Heading
}

