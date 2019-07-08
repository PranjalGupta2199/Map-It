import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cards = [
  {
    title:'Layers',
    imgSrc: 'https://docs.geoserver.org/stable/en/user/_images/data_layers.png',
    text: 'Lists all the different layers available on the Server',
    link: '/layers',
  },
  {
    title:'Workspaces',
    imgSrc : 'https://docs.geoserver.org/stable/en/user/_images/data_workspaces.png',
    text: 'Lists all the different Workspaces on the Server',
    link:'/workspace' ,
  },
  {
    title:'Map',
    imgSrc : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/OpenLayers_logo.svg/1024px-OpenLayers_logo.svg.png',
    text: 'Lists all the different Workspaces on the Server',
    link:'/map' ,
  },
  {
    title:'Geoserver',
    imgSrc : 'https://www.osgeo.org/wp-content/uploads/GeoServer-370x206.png',
    text: 'Lists all the different Workspaces on the Server',
    ///link: `${config.get('geoserver')}`,
  },
  {
    title:'GeoWebCache',
    imgSrc : 'data:image/png;base64,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',
    text: 'Lists all the different Workspaces on the Server',
    // link: config.get('geowebcache'),
  },
];

function CardRender(props){
  return (
    <div className="col-sm-3 p-3">
    <Card style={{ width: '18rem'}} border='primary'>
      <Card.Img variant="top" src={props.cardObject.imgSrc}  height="200"/>
      <Card.Body className="py-1">
        <Card.Title> {props.cardObject.title}</Card.Title>
        <Card.Text>
          {props.cardObject.text}
        </Card.Text>
      </Card.Body>
      <Card.Body className="py-1">
        <Button variant='danger' href={props.cardObject.link}>{props.cardObject.title}</Button>
        {/* <Card.Link href="/">Home</Card.Link>*/}
      </Card.Body>
    </Card>
    </div>
    )
}

class Dashboard extends Component{
	render(){
  return (
    <div>
      <Header/>
      <div className='m-3'>
        <div className="row">
            {Cards.map((object, i) => {return <CardRender cardObject={object} key={i} />})}
          </div>
      </div>
      <Footer/>
    </div>
  );
	}
}

export default Dashboard;
