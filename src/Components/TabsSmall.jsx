import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {PresentationCard} from "./PresentationCard.jsx";

export const TabsSmall = () => {

  return (
    <Tabs flex={7} w='full' position="relative" variant="unstyled">
      <TabList>
        <Tab>About</Tab>
        <Tab>Expertise</Tab>
        <Tab>Projects</Tab>
        <Tab>Experience</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bgColor='#1d3557'
        borderRadius="1px"
      />
      <TabPanels>
        <TabPanel>
          <PresentationCard/>
        </TabPanel>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}