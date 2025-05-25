import { 
  Box, 
  Text, 
  VStack, 
  HStack, 
  Badge, 
  Card, 
  CardBody,
  Heading,
  SimpleGrid,
  Icon
} from "@chakra-ui/react";
import { MdLocationOn, MdSchedule, MdNature } from "react-icons/md";

export const Day2Content = () => (
  <VStack spacing={8} align="stretch">
    <Box>
      <HStack spacing={3} mb={4} flexWrap="wrap">
        <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdLocationOn} />
            <Text>Ottawa → Toronto</Text>
          </HStack>
        </Badge>
        <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdSchedule} />
            <Text>Jour 2</Text>
          </HStack>
        </Badge>
      </HStack>
    </Box>

    <Card bg="green.50">
      <CardBody>
        <Heading size="md" mb={4} color="green.700">
          🏛️ Départ d'Ottawa
        </Heading>
        <Text fontSize="lg" lineHeight="1.8">
          Au départ de la magnifique gare restaurée d'Ottawa, nous traversons le cœur de l'Ontario. 
          La capitale canadienne nous offre ses derniers regards avant que nous ne nous dirigions 
          vers la plus grande ville du pays.
        </Text>
      </CardBody>
    </Card>

    <Card bg="blue.50">
      <CardBody>
        <Heading size="md" mb={4} color="blue.700">
          🌿 Transformation du Paysage
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          Le paysage se transforme progressivement, passant de l'étalement urbain à une nature 
          sauvage immaculée. C'est un spectacle fascinant de voir cette transition s'opérer 
          sous nos yeux.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>🏙️</Text>
            <Text fontWeight="medium">Étalement Urbain</Text>
            <Text fontSize="sm" color="gray.600">Les derniers faubourgs d'Ottawa</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>🌲</Text>
            <Text fontWeight="medium">Nature Sauvage</Text>
            <Text fontSize="sm" color="gray.600">Forêts immaculées de l'Ontario</Text>
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>

    <Card bg="yellow.50">
      <CardBody>
        <Heading size="md" mb={4} color="yellow.700">
          🌅 L'Après-midi Doré
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          D'innombrables lacs et forêts défilent devant nos fenêtres. Le soleil de l'après-midi 
          peint le paysage de teintes dorées alors que nous approchons de Toronto.
        </Text>
        
        <Box p={4} bg="white" borderRadius="md" borderLeft="4px solid" borderColor="yellow.400">
          <Text fontSize="md" fontWeight="medium" color="yellow.700">
            "Le soleil de l'après-midi transforme chaque lac en miroir doré, 
            chaque forêt en cathédrale de lumière."
          </Text>
        </Box>
      </CardBody>
    </Card>

    <Card bg="purple.50">
      <CardBody>
        <Heading size="md" mb={4} color="purple.700">
          🏙️ Approche de Toronto
        </Heading>
        <Text fontSize="lg" lineHeight="1.8">
          Toronto, la plus grande ville du Canada, se dessine à l'horizon. Ses gratte-ciels 
          percent le ciel et annoncent notre arrivée dans cette métropole cosmopolite qui 
          sera notre prochaine étape vers l'Ouest canadien.
        </Text>
        
        <HStack spacing={3} mt={4} flexWrap="wrap">
          <Badge colorScheme="purple" variant="subtle">
            <HStack spacing={1}>
              <Icon as={MdNature} />
              <Text>Cœur de l'Ontario</Text>
            </HStack>
          </Badge>
          <Badge colorScheme="blue" variant="subtle">Plus grande ville du Canada</Badge>
          <Badge colorScheme="green" variant="subtle">Métropole cosmopolite</Badge>
        </HStack>
      </CardBody>
    </Card>
  </VStack>
);
