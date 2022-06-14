import { 
  Container, 
  Row, 
  Col,
  Section,
  Heading,
  Button,
  Form
} from 'components/components/';
import React from 'react';
import Link from 'next/link';


export default function Login() {
  return (        
      <Section className="bg-grad-primary-dark-reverse py-5 py-md-8">
        <Container>
          <Heading className='text-center color-light'>
                Welcome Back
          </Heading>
          <Heading 
            level={2}
            style={4}
            className='text-center color-light'>
                Log in to your account
          </Heading>
          <Container small>
            <Form>
              <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control type="email" placeholder="Enter your User Name" />
                  <Form.Text className="text-muted">
                    This will be your User name
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Text className="text-muted">
                    This will be your password
                  </Form.Text>
                </Form.Group>
              </Row>
              <Row className="mt-3">
                  <p >
                    Did you forgot your 
                    {/* TODO: Check the URL standard below */}
                    <Link href="/consumer/forgotPassword/">
                      <a> password?</a>
                    </Link> 
                  </p>
              </Row>
              <Row >
                  <Button variant='primary' size="lg">Log in</Button>
              </Row>
            </Form>
          </Container>

        </Container>
      </Section> 
  );
}