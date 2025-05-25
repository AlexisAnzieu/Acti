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
  Icon,
  Progress
} from "@chakra-ui/react";
import { MdLocationOn, MdSchedule, MdTerrain, MdGrass } from "react-icons/md";

export const Day3Content = () => (
  <VStack spacing={8} align="stretch">
    <Box>
      <HStack spacing={3} mb={4} flexWrap="wrap">
        <Badge colorScheme="orange" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdLocationOn} />
            <Text>Toronto → Winnipeg</Text>
          </HStack>
        </Badge>
        <Badge colorScheme="red" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdSchedule} />
            <Text>Plus longue étape</Text>
          </HStack>
        </Badge>
      </HStack>
    </Box>

    <Card bg="red.50">
      <CardBody>
        <Heading size="md" mb={4} color="red.700">
          ⚠️ La Plus Longue Étape
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          La plus longue étape de notre voyage commence. Nous nous apprêtons à traverser 
          des paysages qui vont radicalement changer au fil des heures, nous emmenant 
          du Bouclier canadien aux vastes prairies de l'Ouest.
        </Text>
        
        <Progress value={75} colorScheme="red" size="lg" borderRadius="md" />
        <Text fontSize="sm" color="gray.600" mt={2} textAlign="center">
          Segment le plus long du voyage transcanadie
        </Text>
      </CardBody>
    </Card>

    <Card bg="gray.50">
      <CardBody>
        <Heading size="md" mb={4} color="gray.700">
          🪨 Le Bouclier Canadien
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          Nous traversons le Bouclier canadien, un terrain accidenté de formations rocheuses 
          anciennes et d'innombrables lacs. Cette région géologique fascinate par son âge 
          et sa beauté sauvage.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>⛰️</Text>
            <Text fontWeight="medium">Formations Rocheuses</Text>
            <Text fontSize="sm" color="gray.600">Anciennes comme la Terre</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>🏔️</Text>
            <Text fontWeight="medium">Terrain Accidenté</Text>
            <Text fontSize="sm" color="gray.600">Relief sculptée par les glaciers</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>💧</Text>
            <Text fontWeight="medium">Innombrables Lacs</Text>
            <Text fontSize="sm" color="gray.600">Miroirs d'eau cristalline</Text>
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>

    <Card bg="yellow.50">
      <CardBody>
        <Heading size="md" mb={4} color="yellow.700">
          🌾 Transformation vers les Prairies
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          En poursuivant vers l'ouest, le paysage se transforme progressivement. 
          Les rochers laissent place à une terre plus douce, annonçant l'arrivée 
          des vastes prairies canadiennes.
        </Text>
        
        <Box p={4} bg="white" borderRadius="md">
          <HStack spacing={4} align="center">
            <Icon as={MdTerrain} boxSize={6} color="gray.600" />
            <Text flex={1}>Bouclier Canadien</Text>
            <Text fontSize="2xl">→</Text>
            <Icon as={MdGrass} boxSize={6} color="green.500" />
            <Text flex={1}>Prairies</Text>
          </HStack>
        </Box>
      </CardBody>
    </Card>

    <Card bg="green.50">
      <CardBody>
        <Heading size="md" mb={4} color="green.700">
          🌾 La Mer d'Or des Prairies
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          Les champs de blé infinis s'étendent jusqu'à l'horizon, créant une mer d'or 
          hypnotisante sous l'immense ciel des prairies. C'est un spectacle à couper le souffle 
          qui définit le cœur agricole du Canada.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box p={4} bg="white" borderRadius="md">
            <Text fontSize="xl" mb={2}>🌾</Text>
            <Text fontWeight="medium" mb={2}>Champs de Blé Infinis</Text>
            <Text fontSize="sm" color="gray.600">
              Des étendues dorées qui se perdent à l'horizon, ondulant sous le vent 
              comme les vagues d'un océan terrestre.
            </Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md">
            <Text fontSize="xl" mb={2}>☁️</Text>
            <Text fontWeight="medium" mb={2}>Immense Ciel des Prairies</Text>
            <Text fontSize="sm" color="gray.600">
              Un dôme céleste qui semble toucher la terre, offrant des couchers de soleil 
              spectaculaires sur cette mer dorée.
            </Text>
          </Box>
        </SimpleGrid>
        
        <Box p={4} bg="white" borderRadius="md" borderLeft="4px solid" borderColor="green.400" mt={4}>
          <Text fontSize="md" fontWeight="medium" color="green.700" fontStyle="italic">
            "Une mer d'or hypnotisante sous l'immense ciel des prairies - 
            le cœur battant de l'agriculture canadienne."
          </Text>
        </Box>
      </CardBody>
    </Card>

    <Box textAlign="center" p={4} bg="blue.100" borderRadius="md">
      <Text fontSize="md" color="blue.800" fontWeight="medium">
        🚂 Direction : Winnipeg, Porte de l'Ouest Canadien
      </Text>
    </Box>
  </VStack>
);
