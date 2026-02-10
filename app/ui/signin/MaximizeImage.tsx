import { Box } from "@chakra-ui/react";
import NextImage from "next/image";

const MaximizeImage = () => {
  return (
    <Box
      position="relative"
      flex={0.6}
      hideBelow="md"
      maxW={"708px"}
      maxH={"646px"}
      aspectRatio={354 / 323}
    >
      <NextImage src="/max.svg" alt="Maximise" fill />
    </Box>
  );
};

export default MaximizeImage;
