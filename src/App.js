//APP

//IMPORTING
import React, { Component } from "react";
import "./styles/tailwind.css";
import "./styles/main.css";
import NavBar from './components/navbar'
import Hero from './components/hero'
import Articles from "./components/articles";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services"
import Banner from "./components/banner";

//APP
export default class App extends Component {
  state = {
    active: false,
  };
  render() {
    return (
      <>
      <div className="w-full">
        <NavBar />
      </div>
      <Hero />
        <Banner />
        <Services />
        <Articles />
        <Contact />
        <Footer />
      </>
    );
  }
}
