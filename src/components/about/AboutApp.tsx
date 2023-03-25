import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function AboutApp() {
  return (
    <Card maxW="sm" border="solid black" margin="auto">
      <CardHeader>
        <text>About Our App!</text>
      </CardHeader>
      <CardBody>
        <text>
          BestBefore is dedicated to reducing waste and making sure that food is
          used to the fullest extent possible!
        </text>
      </CardBody>
    </Card>
  );
}

export default AboutApp;
