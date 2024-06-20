import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    fetch('/home/userdata')
      .then(response => {
        if (!response.ok) {
          throw new Error('Could not get data');
        }
        return response.json();
      })
      .then(data => {
        setUserData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className='bg-dark vh-100 d-flex'>

      <Container fluid='md'>

        <Row>

          <Col>
            {userData === undefined ? (
              <p className='text-white'>Loading...</p>
            ) : (
              <div className='d-flex justify-content-center'>
                <h1 className='text-white'>Hello {userData.BungieDisplayName}</h1>
                <p className='text-white'>Destiny Membership ID: {userData.destinyMembershipID}</p>
                <p className='text-white'>Destiny Membership Type: {userData.destinyMembershipType}</p>
              </div>
            )}
          </Col>

        </Row>

      </Container>

      <Footer />

    </div>
  );
}

export default Home;
