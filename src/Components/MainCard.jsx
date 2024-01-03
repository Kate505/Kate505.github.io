import {Button, Card, CardBody, CardFooter, Heading, Stack, Text, Image} from "@chakra-ui/react";
import {PresentationCard} from "./PresentationCard.jsx";
import {TabsCard} from "./TabsCard.jsx";

export const MainCard = () => {

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <PresentationCard />

      <Stack>
        <CardBody>
          <TabsCard />
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );

}
