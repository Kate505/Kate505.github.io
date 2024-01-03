import {useEffect} from "react";
import {Grid} from "@chakra-ui/react";
import {Body, Header} from "./BodyParts.jsx";

export const Skeleton = ({ bodycontent }) => {
  useEffect(() => { }, [bodycontent]);

  return (
    <Grid className="h-screen relative" templateAreas={'\'header header\' \'main main\''} gridTemplateRows="50px 1fr 30px" gridTemplateColumns="150px 1fr" gap="1" color="blackAlpha.700" fontWeight="bold">
      <Header />
      <Body bodycontent={bodycontent} />
    </Grid>
  );
}
