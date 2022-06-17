import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack'
function Login() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <Container className="col-md-5">
        <Card className="shadow-sm">
          <Card.Header as="h2" className="text-center">
            Log In As
          </Card.Header>
          <Card.Body style={{
            alignItems: 'center',
          }}>
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="secondary">Admin</Button>
              <Button variant="secondary">HR</Button>
              <Button variant="secondary">Interviewer</Button>
              <Button variant="secondary">Employee</Button>
            </Stack>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            Don't have an account? <Link to={"/gt"}>Create One</Link>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}

export default Login;
