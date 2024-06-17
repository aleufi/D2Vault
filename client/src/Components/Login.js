import Footer from './Footer'
import {Container, Row, Col, Button} from 'react-bootstrap'
import quotes from './Quotes'

function handleRedirect(){
  window.location.href = '/auth/bungie'
}

function Login() {

  let randomQuoteIndex = parseInt(Math.random() * ((Object.keys(quotes)).length))

  let randomCharacter = quotes[randomQuoteIndex].character
  let randomCharacterQuote = randomCharacter[parseInt(Math.random() * ((Object.keys(randomCharacter)).length - 1))] 

  return (
    <div className="App bg-dark vh-100 d-flex align-items-center">

    <Container className='bg-dark'>

      <Row className="bg-dark h-50 m-5">

        <Col md={{ span: 6, offset: 3 }} className='bg-white rounded p-4 pb-5 pt-5 text-center'>

          <img alt='vaultIcon' src='https://cdn-icons-png.flaticon.com/512/6014/6014688.png' height='24px'></img>

          <h1 className='display-5 text-dark bold fw-bolder mt-4'>Welcome to D2Vault</h1>

          <p>Manage items, analyse statistics and fight the Darkness</p>

          <Button variant="btn btn-light mt-4 border-1 border-dark-subtle" onClick={handleRedirect} target='_blank'>
          <p className='fw-medium m-0'>
            <img alt='bungie.netIcon' className='img-fluid m-2' src='https://logosarchive.com/wp-content/uploads/2021/07/Bungie-icon.svg' width='24'></img>
            Login with Bungie.net</p>
          </Button>

        </Col>
      
      </Row>

      <Row>
        <figure class="text-center">

          <blockquote class="blockquote">
            <p className='text-white'>{randomCharacterQuote}</p>
          </blockquote>

          <figcaption class="blockquote-footer">
            <cite title="Source Title">{randomCharacter.name}</cite>
          </figcaption>
          
        </figure>
      </Row>


    </Container>
      
    <Footer></Footer>

    </div>
  );
}

export default Login;
