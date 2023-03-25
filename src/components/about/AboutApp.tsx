import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

function AboutApp() {
  return (
    <Card maxW="lg" border="solid black" margin="auto">
      <CardHeader>
        <text>About Our App!</text>
      </CardHeader>
      <CardBody>
        <text>
          BestBefore is dedicated to reducing waste and making sure that food is
          used to the fullest extent possible!
        </text>
        <Image
          src="fridge.jpg"
          boxSize="400px"
          margin="auto"
          display="block"
        ></Image>
      </CardBody>
    </Card>
  );
}

export default AboutApp;
