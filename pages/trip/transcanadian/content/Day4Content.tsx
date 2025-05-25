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
  Flex
} from "@chakra-ui/react";
import { MdLocationOn, MdSchedule, MdLandscape } from "react-icons/md";

export const Day4Content = () => (
  <VStack spacing={8} align="stretch">
    <Box>
      <HStack spacing={3} mb={4} flexWrap="wrap">
        <Badge colorScheme="purple" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdLocationOn} />
            <Text>Winnipeg → Vancouver</Text>
          </HStack>
        </Badge>
        <Badge colorScheme="gold" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdSchedule} />
            <Text>Étape Finale</Text>
          </HStack>
        </Badge>
        <Badge colorScheme="red" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdLandscape} />
            <Text>Plus Spectaculaire</Text>
          </HStack>
        </Badge>
      </HStack>
    </Box>

    <Card bg="purple.50">
      <CardBody>
        <Heading size="md" mb={4} color="purple.700">
          🏁 La Dernière et Plus Spectaculaire Étape
        </Heading>
        <Text fontSize="lg" lineHeight="1.8">
          La dernière et plus spectaculaire étape de notre voyage commence à Winnipeg. 
          Nous nous apprêtons à vivre le clou du spectacle : la traversée des Montagnes Rocheuses, 
          l'un des passages ferroviaires les plus impressionnants au monde.
        </Text>
      </CardBody>
    </Card>

    <Card bg="green.50">
      <CardBody>
        <Heading size="md" mb={4} color="green.700">
          🌾 ➡️ 🏔️ Transformation Dramatique
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          En direction de l'ouest, les prairies plates laissent progressivement place aux 
          contreforts vallonnés, qui s'élèvent ensuite de manière spectaculaire jusqu'aux 
          majestueuses Montagnes Rocheuses.
        </Text>
        
        <Flex direction={{ base: "column", md: "row" }} gap={4}>
          <Card flex={1} bg="white">
            <CardBody textAlign="center">
              <Text fontSize="2xl" mb={2}>🌾</Text>
              <Text fontWeight="medium">Prairies Plates</Text>
              <Text fontSize="sm" color="gray.600">Point de départ</Text>
            </CardBody>
          </Card>
          
          <Box alignSelf="center" fontSize="2xl" color="gray.400">
            ➡️
          </Box>
          
          <Card flex={1} bg="white">
            <CardBody textAlign="center">
              <Text fontSize="2xl" mb={2}>🏞️</Text>
              <Text fontWeight="medium">Contreforts Vallonnés</Text>
              <Text fontSize="sm" color="gray.600">Transition</Text>
            </CardBody>
          </Card>
          
          <Box alignSelf="center" fontSize="2xl" color="gray.400">
            ➡️
          </Box>
          
          <Card flex={1} bg="white">
            <CardBody textAlign="center">
              <Text fontSize="2xl" mb={2}>🏔️</Text>
              <Text fontWeight="medium">Montagnes Rocheuses</Text>
              <Text fontSize="sm" color="gray.600">Majestueux</Text>
            </CardBody>
          </Card>
        </Flex>
      </CardBody>
    </Card>

    <Card bg="blue.50">
      <CardBody>
        <Heading size="md" mb={4} color="blue.700">
          🚂 Traversée des Rocheuses
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          Le train serpente à travers des cols montagneux spectaculaires, offrant des vues 
          à couper le souffle à chaque virage. C'est l'ingénierie ferroviaire à son apogée.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>🏔️</Text>
            <Text fontWeight="medium">Cols Montagneux</Text>
            <Text fontSize="sm" color="gray.600">Passages spectaculaires</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>🌊</Text>
            <Text fontWeight="medium">Rivières Tumultueuses</Text>
            <Text fontSize="sm" color="gray.600">Eaux cristallines</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" textAlign="center">
            <Text fontSize="2xl" mb={2}>🕳️</Text>
            <Text fontWeight="medium">Longs Tunnels</Text>
            <Text fontSize="sm" color="gray.600">Prouesses d'ingénierie</Text>
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>

    <Card bg="yellow.50">
      <CardBody>
        <Heading size="md" mb={4} color="yellow.700">
          🌲 Descente vers la Vallée du Fraser
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          Après avoir traversé les sommets enneigés, le train entame sa descente vers la côte Pacifique. 
          La vallée du Fraser nous accueille avec sa végétation luxuriante, un contraste saisissant 
          avec les paysages montagneux que nous venons de quitter.
        </Text>
        
        <Box p={4} bg="white" borderRadius="md" borderLeft="4px solid" borderColor="green.400">
          <HStack spacing={3}>
            <Icon as={MdLandscape} boxSize={6} color="green.500" />
            <VStack align="start" spacing={1}>
              <Text fontWeight="medium" color="green.700">Vallée du Fraser</Text>
              <Text fontSize="sm" color="gray.600">
                Luxuriante végétation côtière annonçant l'arrivée à Vancouver
              </Text>
            </VStack>
          </HStack>
        </Box>
      </CardBody>
    </Card>

    <Card bg="red.50">
      <CardBody>
        <Heading size="md" mb={4} color="red.700">
          🌊 Arrivée à Vancouver
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          Notre odyssée transcontinentale se termine dans la magnifique ville de Vancouver, 
          où les montagnes rencontrent l'océan Pacifique. Quatre jours après avoir quitté Toronto, 
          nous avons traversé un continent entier et découvert la diversité incroyable du Canada.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box p={4} bg="white" borderRadius="md">
            <Text fontSize="xl" mb={2}>🏙️</Text>
            <Text fontWeight="medium" mb={2}>Vancouver</Text>
            <Text fontSize="sm" color="gray.600">
              Ville cosmopolite où les montagnes rencontrent l'océan, 
              point final de notre aventure transcontinentale.
            </Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md">
            <Text fontSize="xl" mb={2}>🎯</Text>
            <Text fontWeight="medium" mb={2}>Mission Accomplie</Text>
            <Text fontSize="sm" color="gray.600">
              4 jours, 1 continent traversé, des souvenirs inoubliables 
              et une nouvelle perspective sur l'immensité canadienne.
            </Text>
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>

    <Box textAlign="center" p={6} bg="gradient-to-r" bgGradient="linear(to-r, blue.400, purple.500)" borderRadius="md" color="white">
      <Text fontSize="xl" fontWeight="bold" mb={2}>
        🎉 Fin de l'Aventure Transcontinentale
      </Text>
      <Text fontSize="md">
        De l'Atlantique au Pacifique - Un voyage à travers l'âme du Canada
      </Text>
    </Box>
  </VStack>
);
