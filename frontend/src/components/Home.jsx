import React, { Component } from 'react';

class Home extends Component {
  
  constructor() {
    super();
    this.state = {
      data: [],
      isLoaded: false
    };
  };  

  async componentDidMount() {
    try {
      const url = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&stateCd=pr&startDT=2018-07-09&endDT=2018-07-12&siteType=GW,GW-CR,GW-EX,GW-HZ,GW-IW,GW-MW,GW-TH&siteStatus=all"
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        data: data,
        isLoaded: true
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state.data)
    if (this.state.isLoaded) {
      return (
        <p>Loaded.</p>
      );
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }
}

export default Home;
