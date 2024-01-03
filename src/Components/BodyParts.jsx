import {Box, ChakraProvider, GridItem, Heading, HStack, IconButton, Image} from "@chakra-ui/react";
import {useEffect} from "react";

export function Header() {
  return (
    <ChakraProvider>
      <GridItem pl="2" className="fixed top-0 left-0 right-0 px-2 py-2 bg-sky-700 text-white" area="header">
        <div className="flex h-full">
          <HStack spacing="0.3%" className="grow">
            <Box w="20%">
              <IconButton className="ml-10" isRound icon={<Image src={"logo.png"}/>} colorScheme="none"/>
            </Box>
            <Box w="60%">
              <Heading size={{lg: 'lg', xl: 'xl', '2xl': '2xl'}} className="text-center h-full font-sans">Hello
                World</Heading>
            </Box>
            <Box w="20%"/>
          </HStack>
        </div>
      </GridItem>
    </ChakraProvider>
  );
}

export function Body({bodycontent}) {
  useEffect(() => { }, [bodycontent]);
  return (
    <ChakraProvider>
      <GridItem pb={6} px={3} area="main" className="overflow-hidden">
        {bodycontent}
      </GridItem>
    </ChakraProvider>
  );
}
