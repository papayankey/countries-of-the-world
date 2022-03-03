import * as React from "react";
import { Box, Flex, Image } from "../../shared";
import { ActivityIndicator } from "../index";

interface CardImageProps {
  svg: string;
  common: string;
}

const CardImage: React.FC<CardImageProps> = ({ svg, common }) => {
  const [imageIsLoading, setImageIsLoading] = React.useState(true);
  const imageRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (imageRef?.current?.complete) {
      setImageIsLoading(false);
    }
  }, [setImageIsLoading, common]);

  return (
    <Box
      css={{
        position: "relative",
        p: "30%",
        // bg={isDark ? "" : "hsl(0, 0%, 98%)"}
        borderRadius: "none",
      }}
    >
      {imageIsLoading && (
        <Flex
          css={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator />
        </Flex>
      )}
      <Image src={svg} alt={common} ref={imageRef} />
    </Box>
  );
};

export default CardImage;
