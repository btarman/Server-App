import React from 'react';

function App() {
  // const page = 'test-component';
  const path = window.location.hash
  const [page, setPage] = useState(path);
  console.log(window.location.hash)
  let visibleComponent = <HomeComponent />


  if (page === '#listen') {
	visibleComponent = <ListenComponent />
  }
  return (
  	<div>
  		<HeaderComponent setPage={setPage}/>
  		{visibleComponent}
  	</div>
  	)

}
<Nav.Link href="#home" onClick={() => props.setPage('home-component')}>Home</Nav.Link>
      				<Nav.Link href="#listen" onClick={() => props.setPage('#listen')}>Listen</Nav.Link>

export default TestComponent;