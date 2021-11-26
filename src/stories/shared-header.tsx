import { useColorModeValue, Box, Button } from '@chakra-ui/react';

/* eslint-disable-next-line */
export interface SharedHeaderProps {}

export function SharedHeader() {
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.default, yellow.default)',
    'linear(to-r, purple.default, teal.default)'
  );

  return (
    <>
      <Box as="header" w="100%" h={['20vh', '40vh']} bgGradient={bgGradient} />
      <Box w="full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <linearGradient id="gradient">
            <stop
              stopColor={useColorModeValue('#13d2bf', '#632092')}
              offset="0%"
            />
            <stop
              stopColor={useColorModeValue('#fada51', '#13d2bf')}
              offset="100%"
            />
          </linearGradient>
          <path
            fill="url(#gradient)"
            d="M 0 50 Q 250 100 500 50 T 1000 50 L 1000 0 L 0 0 Z"
          />
        </svg>
      </Box>
      <Button colorScheme="blue">Button</Button>
    </>
  );
}
export default SharedHeader;
