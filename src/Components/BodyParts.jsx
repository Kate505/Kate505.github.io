import {Box, ChakraProvider, GridItem, Heading, HStack, IconButton} from "@chakra-ui/react";
import {useEffect} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";

export function Header() {
  return (
    <ChakraProvider>
      <GridItem bgColor='#1d3557' pl="2" className="fixed top-0 left-0 right-0 px-2 py-2 text-white" area="header">
        <Box className="flex h-full" backdropFilter='auto' backdropBlur='8px'>
          <HStack spacing="0.3%" className="grow">
            <Box w="20%">
              {/*<IconButton className="ml-10" icon={<HamburgerIcon />}/>*/}
            </Box>
            <Box w="60%">
              <Heading size="md" className="text-left h-full font-sans">
                Katherine Delgado
              </Heading>
            </Box>
            <Box w="20%"/>
          </HStack>
        </Box>
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
