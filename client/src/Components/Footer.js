import '../App.scss';

import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
    return(

        <Container fluid id="footerBar" className='text-center fixed-bottom p-3 bg-info'>

            <Row>
                <Col>
                    
                    <h6 className='text-white-50 m-0'>Made by 
                        <a id='aleufiFooter' className='text-decoration-none' href='https://www.bungie.net/7/en/User/Profile/3/4611686018490910479' target='_blank' rel="noreferrer">
                        <svg id='warlockFooterIcon' className='ms-1 me-1 mb-1' fill="#FFB841" width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m5.442 23.986 7.255-11.65-2.71-4.322-9.987 15.972zm5.986 0 4.28-6.849-2.717-4.333-6.992 11.182zm7.83-11.611 7.316 11.611h5.426l-10.015-15.972zm-7.26 11.611h8.004l-4.008-6.392zm6.991-11.182-2.703 4.324 4.302 6.858h5.413zm-5.707-.459 2.71-4.331 2.71 4.331-2.703 4.326z"></path></g></svg>
                        aleufi_</a>
                        
                    </h6>

                </Col>
            </Row>

        </Container>
    )
}

export default Footer;