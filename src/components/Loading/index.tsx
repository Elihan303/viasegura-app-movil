import { Center, Container, Spinner } from "native-base";
import React from "react";
import { styles } from "./styles";

const Loading = () => {
  return (
    <Center style={styles.container}>
      <Container>
        <Spinner size="lg" />
      </Container>
    </Center>
  );
};

export default Loading;
