import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Center
} from "@chakra-ui/react";

export const PresentationCard = () => {
  return (
    <Card w='full' flex={3} variant='unstyled'>
      <Center h='100%'>
        <CardBody>
          <Center>
            <Image
              src="katePhoto.png"
              alt='Green double couch with wooden legs'
              borderRadius='sm'
              boxSize='250px'
            />
          </Center>
          <Stack mt='6' spacing='3'>
            <Heading size='md' textAlign='center'>Full Stack Software Developer</Heading>
            <Text align='justify' fontFamily=''>
              This sofa is perfect for modern tropical spaces, baroque inspired
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
      </Center>
      <Divider />
      <CardFooter>
        <Center>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </Center>
      </CardFooter>
    </Card>
  );
}
