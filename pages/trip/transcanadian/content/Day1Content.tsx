import { 
  Box, 
  Text, 
  VStack, 
  HStack, 
  Badge, 
  Divider, 
  List, 
  ListItem, 
  ListIcon,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Flex,
  Icon
} from "@chakra-ui/react";
import { MdCheckCircle, MdTrain, MdLocationOn, MdSchedule, MdRestaurant } from "react-icons/md";

export const Day1Content = () => (
  <VStack spacing={8} align="stretch">
    <Box>
      <HStack spacing={3} mb={4} flexWrap="wrap">
        <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdTrain} />
            <Text>Départ</Text>
          </HStack>
        </Badge>
        <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdLocationOn} />
            <Text>Montréal → Toronto</Text>
          </HStack>
        </Badge>
        <Badge colorScheme="orange" fontSize="sm" px={3} py={1}>
          <HStack spacing={1}>
            <Icon as={MdSchedule} />
            <Text>J-0 & J-1</Text>
          </HStack>
        </Badge>
      </HStack>
    </Box>

    <Card>
      <CardBody>
        <Heading size="md" mb={3} color="blue.600">
          🚂 Le Voyage Commence
        </Heading>
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          Remontons le fil du récit jusqu'au J-0, lorsque le mardi 29 mai en fin d'après-midi 
          nous entamons notre aventure ferroviaire. Il faut en effet se rendre à Toronto afin 
          d'embarquer sur le Transcanadien.
        </Text>
        <Text fontSize="md" color="gray.600" fontStyle="italic">
          Casque antibruit sur les oreilles et livre de poche en main, un avant-goût de notre aventure se dessine.
        </Text>
      </CardBody>
    </Card>

    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
      <Card>
        <CardBody>
          <Heading size="sm" mb={2} color="purple.600">
            🌙 Nuit à Toronto
          </Heading>
          <Text fontSize="md">
            Notre arrivée à Toronto débute par une petite marche nocturne de 15 minutes jusqu'à 
            l'auberge de jeunesse. S'ensuit d'une nuit passablement bruyante due à une isolation douteuse.
          </Text>
        </CardBody>
      </Card>
      
      <Card>
        <CardBody>
          <Heading size="sm" mb={2} color="orange.600">
            ⏰ Le Grand Jour
          </Heading>
          <Text fontSize="md">
            Le transcanadien part à 10h, le réveil est mis à 8h. Ce serait dommage de louper 
            le départ hebdomadaire !
          </Text>
        </CardBody>
      </Card>
    </SimpleGrid>

    <Divider />

    <Card bg="blue.50">
      <CardBody>
        <Heading size="md" mb={4} color="blue.700">
          🚉 À la Gare Union - Train 001
        </Heading>
        
        <VStack spacing={4} align="stretch">
          <Text fontSize="lg" lineHeight="1.8">
            De retour à la gare avec une bonne heure d'avance à la recherche du train numéro 001. 
            L'enregistrement se déroule dans le salon business, qui ne doit son nom qu'à ses 
            fauteuils émaillés par le temps.
          </Text>
          
          <Box p={4} bg="white" borderRadius="md" borderLeft="4px solid" borderColor="blue.400">
            <Text fontSize="md" fontWeight="medium" color="blue.700">
              "Café en main, nous nous rendons sur le quai et nous apercevons enfin se prolongeant 
              devant nous, ce monstre de fer et d'acier brillant sous les miroirs ensoleillés des gratte-ciels."
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card>

    <Card bg="green.50">
      <CardBody>
        <Heading size="md" mb={4} color="green.700">
          🎬 Machine à Remonter le Temps
        </Heading>
        
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          "10 minutes avant le départ !" scande une voix grave dans la gare. Ce n'est pas une 
          simple porte que nous franchissons mais une véritable machine à remonter dans le temps.
        </Text>
        
        <List spacing={2}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Un seul pas à l'intérieur suffit à nous projeter 70 ans en arrière
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            L'ère où la moquette sur les murs était de mise
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            L'odeur du vieux cuir monte aux narines
          </ListItem>
        </List>
      </CardBody>
    </Card>

    <Card bg="yellow.50">
      <CardBody>
        <Heading size="md" mb={4} color="yellow.700">
          🕵️ Exploration du Convoi
        </Heading>
        
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          L'accélération est immédiate. Le paysage fuse à toute allure. Ou presque. 
          C'est par une pointe de 20 km/h que va débuter cette sortie de périphérie de Toronto.
        </Text>
        
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Box textAlign="center" p={3} bg="white" borderRadius="md">
            <Text fontSize="2xl" mb={2}>🍽️</Text>
            <Text fontWeight="medium">Voiture-Restaurant</Text>
            <Text fontSize="sm" color="gray.600">Les assiettes tintent au rythme des rails</Text>
          </Box>
          
          <Box textAlign="center" p={3} bg="white" borderRadius="md">
            <Text fontSize="2xl" mb={2}>🎲</Text>
            <Text fontWeight="medium">Voiture Activités</Text>
            <Text fontSize="sm" color="gray.600">Jeux de société délabres</Text>
          </Box>
          
          <Box textAlign="center" p={3} bg="white" borderRadius="md">
            <Text fontSize="2xl" mb={2}>🥂</Text>
            <Text fontWeight="medium">Cocktail Mimosa</Text>
            <Text fontSize="sm" color="gray.600">Il est 10h mais pourquoi pas !</Text>
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>

    <Card bg="purple.50">
      <CardBody>
        <Heading size="md" mb={4} color="purple.700">
          🍽️ Premier Repas - Double Date
        </Heading>
        
        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <Box flex={1}>
            <Text fontSize="lg" lineHeight="1.8" mb={4}>
              À 14h, c'est l'appel pour le troisième service de déjeuner. Voici venu le temps 
              du double date entre inconnus. L'idée à bord est de mélanger les passagers de tout horizon.
            </Text>
            
            <Badge colorScheme="purple" mb={2}>
              <HStack spacing={1}>
                <Icon as={MdRestaurant} />
                <Text>Service 3 - 14h00</Text>
              </HStack>
            </Badge>
          </Box>
          
          <Box flex={1} p={4} bg="white" borderRadius="md">
            <Text fontWeight="medium" mb={2}>👥 Nos Compagnons de Table</Text>
            <Text fontSize="sm">
              Deux retraités architectes : paysagiste dans les parcs pour l'un, 
              dans les cimetières pour l'autre. Une discussion d'abord confuse qui 
              s'éclaircit peu à peu malgré les différences.
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>

    <Card bg="red.50">
      <CardBody>
        <Heading size="md" mb={4} color="red.700">
          🌅 Premier Coucher de Soleil
        </Heading>
        
        <Text fontSize="lg" lineHeight="1.8" mb={4}>
          À 17h, premier arrêt au milieu de l'inconnu. Il fait à peine 10 degrés mais tout le monde 
          se précipite dehors afin d'apprécier la caresse du vent frais et l'espace non exigu.
        </Text>
        
        <VStack spacing={3} align="stretch">
          <Text fontSize="md" fontWeight="medium">🌲 Le paysage qui défile :</Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
            <Box textAlign="center" p={2} bg="white" borderRadius="md">
              <Text>🌲 Hauts pins verts</Text>
            </Box>
            <Box textAlign="center" p={2} bg="white" borderRadius="md">
              <Text>🏔️ Lacs dégelés</Text>
            </Box>
            <Box textAlign="center" p={2} bg="white" borderRadius="md">
              <Text>🏠 Maisons alignées</Text>
            </Box>
            <Box textAlign="center" p={2} bg="white" borderRadius="md">
              <Text>🌅 Coucher de soleil</Text>
            </Box>
          </SimpleGrid>
          
          <Box p={3} bg="white" borderRadius="md" borderLeft="4px solid" borderColor="red.400">
            <Text fontSize="sm" fontStyle="italic" color="red.700">
              "Et enfin le bouquet final, le coucher de soleil en dégustant notre crème de champignons au dîner."
            </Text>
          </Box>
        </VStack>
      </CardBody>
    </Card>

    <Box textAlign="center" p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="sm" color="gray.600">
        ⏰ La serveuse nous prévient du changement de fuseau horaire - 
        ça serait bête de louper le petit déjeuner !
      </Text>
    </Box>
  </VStack>
);
