import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';


function ListenComponent () {
	return (
		<Jumbotron fluid className="listen-page">
  			<Container>
    			<iframe className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/album=3711302796/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://servermusic1.bandcamp.com/album/hail-fellow-well-met">Hail Fellow Well Met by Server</a></iframe>
  			</Container>
		</Jumbotron>
		)
}

export default ListenComponent;
