import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


function ListenComponent () {
	return (
  			<Container fluid className="listen-page">
  			<Row >
  				<Col xs lg='2'></Col>
  				<Col xs='auto'>
  					<iframe id='bandcamp-embed' src="https://bandcamp.com/EmbeddedPlayer/album=3711302796/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/" seamless><a href="http://servermusic1.bandcamp.com/album/hail-fellow-well-met">Hail Fellow Well Met by Server</a></iframe>
  				</Col>
  				<Col xs lg='2'></Col>

  			</Row>
  			</Container>
		)
}

export default ListenComponent;
