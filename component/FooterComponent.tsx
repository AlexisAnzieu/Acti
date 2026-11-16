import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const FooterComponent = () => {
  const { t } = useTranslation("common");

  return (
    <Box as="footer" borderTop="1px solid" borderColor="line">
      <Flex
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 12 }}
        py={6}
        wrap="wrap"
        justify="space-between"
        gap={2}
        fontSize="sm"
        color="muted"
      >
        <Text>{t("footer.partOf")}</Text>
        <Text>contact@h2t.club</Text>
      </Flex>
    </Box>
  );
};

export default FooterComponent;
