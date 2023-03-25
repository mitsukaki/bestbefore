import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function AboutUs() {
  return (
    <Card maxW="sm" border="solid black" margin="auto">
      <CardHeader>
        <text>About Our Team!</text>
      </CardHeader>
      <CardBody>
        <text>
          Our team really enjoys food to the point where we waste nothing, and
          we want to give those same emotions to you!
        </text>
      </CardBody>
    </Card>
  );
}

export default AboutUs;
