import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Allan Camargo</Text>
          <Text color="gray.300" fontSize="small">
            allan.cdev@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Allan Camargo"
        src="https://github.com/allancdev.png"
      />
    </Flex>
  );
}
