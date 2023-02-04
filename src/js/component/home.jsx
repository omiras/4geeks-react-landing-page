import React from "react";
import PropTypes from 'prop-types';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const JumboTron = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  );
};


const Card = (props) => {
  return (
    <div className="col-md card p-0 g-4">
      <img src={props.imageURL} className="card-img-top"  alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
		{props.description}
        </p>
        <a href={props.buttonURL} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
	imageURL: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string
  };

//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <JumboTron />
      <div className="row justify-content-center">
        <Card title="Cat" description="Cute Cat to take away" imageURL="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600" buttonURL="http://progatcornella.org/web/"></Card>
        <Card title="Cat" description="Cute Cat to take away" imageURL="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600" buttonURL="http://progatcornella.org/web/"></Card>            <Card title="Cat" description="Cute Cat to take away" imageURL="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1600" buttonURL="http://progatcornella.org/web/"></Card>
      </div>
    </div>
  );
};

export default Home;
