import {Hide, Show, Stack} from "@chakra-ui/react";
import {PresentationCard} from "./PresentationCard.jsx";
import {TabsBig} from "./TabsBig.jsx";
import {TabsSmall} from "./TabsSmall.jsx";

export const MainCard = () => {

  return (
    <Stack spacing={8} direction='row'>
      <Hide below='lg'>
        <PresentationCard/>
        <TabsBig/>
      </Hide>
      <Show below='lg'>
        <TabsSmall/>
      </Show>
    </Stack>
  );

}
