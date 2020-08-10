import React from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';


function ListenComponent () {
	return (
		<Jumbotron fluid className="listen-page">
  			<Container>
  			<Row>
  				<Col></Col>
  				<Col>
  					<iframe id='bandcamp-embed' src="https://bandcamp.com/EmbeddedPlayer/album=3711302796/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/" seamless><a href="http://servermusic1.bandcamp.com/album/hail-fellow-well-met">Hail Fellow Well Met by Server</a></iframe>
  				</Col>
  				<Col></Col>

  			</Row>
  			</Container>
		</Jumbotron>
		)
}

export default ListenComponent;
