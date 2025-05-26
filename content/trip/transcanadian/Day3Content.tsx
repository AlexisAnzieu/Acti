import { 
  Box, 
  Highlight,
  Text, 
  VStack
} from "@chakra-ui/react";

export const Day3Content = () => (
  <VStack spacing={6} align="stretch">
    <Box>
      <Text lineHeight="1.8" mb={4}>
        Deuxième réveil à bord. Il semblerait que mon corps se soit déjà habitué aux secousses intermittentes nocturnes. Une routine s'installe petit à petit dans les cinq mètres carrés d'habitacle partagées avec Carla et s'optimise heures après heures. À l'ouverture du store de la chambre une surprise non des moindres nous attend. Le paysage a totalement changé. Sommes-nous dans le même hémisphère ? Les forêts marécageuses jouxtant les lacs gelés font maintenant place à de vastes{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/b1eda295-80f0-4b16-9702-101046e1542e.jpg"
        >
          <Highlight
            query="étendues arides et sèches"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            étendues arides et sèches
          </Highlight>
        </a>{" "}
        : les fameuses prairies canadiennes. Les animaux n'ont pas d'habitat où se cacher des regards, si bien que nous apercevons des biches et des coyotes. De nombreuses fermes accompagnées de leurs{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/9ec2d6e1-6b8c-4455-98a4-9c2f505dd8fa.jpg"
        >
          <Highlight
            query="gigantesques silos à grains"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            gigantesques silos à grains
          </Highlight>
        </a>{" "}
        font leur apparition de temps à autre le long de la voie ferrée.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Après le petit-déjeuner, un court arrêt nous permet de nous dégourdir les jambes pour la journée. Cette gare est située au milieu d'un bien étrange environnement composé de milliers de containers, hauts de plusieurs étages, une ville de métal sans aucune habitation à l'horizon. La nouvelle équipe à bord apporte un peu de renouvellement de visages au sein du quartier, Nous partageons maintenant entre voyageurs les souvenirs de l'ancienne équipe. Autre nouveauté notable, les égouts sont bouchés dans le wagon adjacent, ses occupants se font disperser à travers les différents quartiers du village-train afin de pouvoir accéder à leurs besoins primaires. Aussi, aujourd'hui au programme: c'est bingo et dégustation de vin. Allons-y ! Nous avons passé le restant de notre après-midi dans le wagon panoramique à se laisser envoûter par notre musique tout en regardant au dehors, un vrai safari ! On ne s'en lasse pas.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Le train, fidèle à lui-même, file à toute allure, il est cependant temps de parler de la partie logistique de ce monstre. Deux fois par jour, il s'arrête au milieu de zones désertiques dans des gares esseulées afin de faire le plein d'essence, de se ravitailler en eau et de vider les poubelles qui s'accumulent lors des trois repas quotidiens à bord. En trois jours, il y a déjà eu une panne d'eau, des sinistres dans les canalisations et une panne de courant dans certains wagons. Cependant, le destrier continue sa progression à travers monts et vallées, transportant 400 passagers sans que rien ne parvienne à le ralentir. Les mécaniciens réparent les avaries à la volée. Mon seul objectif demain est de parvenir à trouver le temps de dessiner un plan du wagon-lit. Finalement, plus que les paysages, c'est le temps qui file à toute allure.
      </Text>
    </Box>
  </VStack>
);
