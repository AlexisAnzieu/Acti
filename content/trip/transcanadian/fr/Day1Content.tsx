import { Box, Highlight, Text, VStack, Tooltip } from "@chakra-ui/react";
import LazyTooltipImage from "../../../../components/LazyTooltipImage";

export const Day1Content = () => (
  <VStack spacing={6} align="stretch">
    <Box>
      <Text lineHeight="1.8" mb={4}>
        Remontons le fil du récit jusqu'au J-0, lorsque le mardi 29 mai en fin
        d'après-midi nous entamons notre aventure ferroviaire. Il faut en effet
        se rendre à Toronto afin d'embarquer sur le Transcanadien. Qu'à cela ne
        tienne, nous avons déjà fait le trajet de cinq heures reliant Montréal à
        Toronto plusieurs fois. Les confortables wagons récemment mis en service
        nous permettent de nous délecter d'un beau coucher de soleil . Seul
        bémol, les coups de klaxon intempestifs qui surviennent à la moindre
        petite intersection dénuée de barrières de signalisation. Casque
        antibruit sur les oreilles et livre de poche en main, un avant-goût de
        notre aventure se dessine.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Notre arrivée à Toronto débute par une petite marche nocturne de 15
        minutes jusqu'à l'auberge de jeunesse la plus proche. S'ensuit une nuit
        passablement bruyante due à{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/bd1f809a-c28a-4991-9757-7ab4a1f4715d.jpeg"
        >
          <Highlight
            query="une isolation douteuse"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            une isolation douteuse
          </Highlight>
        </a>
        . Le transcanadien part à 10h, le réveil est mis à 8h, ce serait dommage
        de louper le départ hebdomadaire.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Nous voilà enfin au Jour 1 !{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/f7ea270c-367d-48b8-afe6-de8483714c38.jpeg"
        >
          <Highlight
            query="De retour à la gare"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            De retour à la gare
          </Highlight>
        </a>{" "}
        avec une bonne heure d'avance à la recherche du{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/4ff82893-51d0-47bc-b3e5-7c794e69c641.jpeg"
        >
          <Highlight
            query="train numéro 001"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            train numéro 001
          </Highlight>
        </a>
        . L'enregistrement se déroule dans le salon business, qui ne doit son
        nom qu'à ses fauteuils émaillés par le temps. Le distributeur de
        café-filtre à disposition ne nous émerveille pas vraiment. Nous décidons
        de partir à la recherche d'un Starbucks, afin d'allier un soupçon de
        présent à ces vestiges du passé.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Café en main, nous nous rendons sur le quai et nous apercevons enfin se
        prolongeant devant nous,{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/708cbfb4-4bce-4f78-9d3e-61ea57c99dbf.jpeg"
        >
          <Highlight
            query="ce monstre de fer et d'acier brillant"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            ce monstre de fer et d'acier brillant
          </Highlight>
        </a>{" "}
        sous les miroirs ensoleillés des gratte-ciels. Je remonte la rame à la
        recherche de la locomotive, mais me fait stopper net dans mon élan par
        un garde de la sécurité qui ne souhaitait apparemment pas me voir
        m'aventurer jusque-là. Défi relevé, je réussirai à capturer une photo de
        cette locomotive d'ici la fin du séjour.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        "10 minutes avant le départ !" scande une voix grave dans la gare, Nous
        profitons d'un dernier bol d'air frais comme si nous embarquions dans
        une navette spatiale pour un an, puis escaladons la marche d'accès
        menant au wagon. Ce n'est pas une simple porte que nous franchissons
        mais une véritable machine à remonter dans le temps. Un seul pas à
        l'intérieur suffit à nous projeter 70 ans en arrière, à l'ère où la
        moquette sur les murs était de mise. Notre intendante de wagon nous
        présente la chambre dans laquelle nous allons dormir ces quatre
        prochains jours.{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/318f7597-6020-4157-865a-799bd5eba3af.jpeg"
        >
          <Highlight
            query="Deux sièges"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Deux sièges
          </Highlight>
        </a>{" "}
        sont disposés ici, repliés en soirée afin de{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/c9c86f6c-f059-462e-beb0-13c50ba0fd99.jpg"
        >
          <Highlight
            query="laisser place à un lit"
            styles={{
              background: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            laisser place à un lit
          </Highlight>
        </a>
        superposé. L'odeur du vieux cuir monte aux narines, accompagnée de cette
        nostalgie du passé que nous n'avions vue que dans des vieux films.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Le conducteur du train nous accueille à bord par les haut-parleurs, deux
        minutes avant d'enclencher le levier de vitesse. L'accélération est
        immédiate. Le paysage fuse à toute allure. Ou presque. C'est par une
        pointe de 20 km/h que va débuter cette sortie de périphérie de Toronto.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Nous sommes tellement enthousiastes à l'idée d'explorer le convoi que
        nous sortons de notre cocon dans les 5 minutes qui suivent le départ.
        J'avais l'impression d'être dans un livre d'Agatha Christie, en espérant
        que le meurtre ne concerne aucun d'entre nous. Au besoin, nous avions
        acheté un escape game en chemin afin d'assouvir notre soif de mystère
        (et aussi pour nous occuper). La première voiture que nous abordons, et
        de loin la plus importante, est la{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/e501390e-6168-4f89-9823-462870c2581d.jpeg"
        >
          <Highlight
            query="voiture-restaurant"
            styles={{
              background: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            voiture-restaurant
          </Highlight>
        </a>
        . Les assiettes tintent au rythme des soubresauts des rails qui nous
        offrent une douce mélodie. Nous remontons une voiture de plus et tombons
        sur celle des activités. Quelques jeux de société à la boîte en carton
        délabré, victimes de leur succès, s'empilent dans un coin de table. Une
        dame m'interpelle tout au bout et me demande si je souhaite goûter au
        cocktail mimosa de bienvenue. Il est 10 heures mais après tout pourquoi
        pas. Cette première matinée consista à s'approprier ce véhicule d'un
        kilomètre et nous dépensâmes les heures suivantes à vagabonder de
        l'avant économique jusqu'à l'arrière prestige. Pour les plus cinéphiles
        d'entre vous, certains peuvent s'imaginer ce train comme celui du film
        Snowpiercer, symbolisant une lutte des classes. Ici défini par le droit
        d'accès aux wagons panoramiques, le clou du spectacle sur lequel nous
        reviendrons plus tard.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Et maintenant, comment occuper tout ce temps disponible auquel nous ne
        sommes plus habitués ? Par chance, nous avons embarqué avec nous des
        romans mais ces derniers ne vont sûrement pas suffire. À 14h,{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/0dc37f25-e0df-43b2-b808-ebd9f506dc17.jpeg"
        >
          <Highlight
            query="c'est l'appel pour le troisième service"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            c'est l'appel pour le troisième service
          </Highlight>
        </a>{" "}
        de déjeuner. Voici venu le temps du double date entre inconnus. L'idée à
        bord est de mélanger les passagers de tout horizon lors des repas. Deux
        retraités nous racontent leur ancien métier d'architecte: paysagiste
        dans les parcs pour l'un et dans les cimetières pour l'autre. Cette
        discussion d'abord confuse et maladroite s'éclaircit peu à peu malgré la
        différence de langues et de générations. Bien que formelle, elle nous
        projette dans un univers différent. Mais l'exercice de traduction vers
        l'anglais est fatigant, notamment avec le bruit du train et des accents.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        À 17h, premier arrêt au milieu de l'inconnu, il fait à peine 10 degrés
        mais tout le monde se précipite dehors afin d'apprécier la caresse du
        vent frais et l'espace non exigu.{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/ca1abab7-af0d-4a3e-892b-eb7e903de607.jpg"
        >
          <Highlight
            query="Tous étudient"
            styles={{
              background: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Tous étudient
          </Highlight>
        </a>{" "}
        avec curiosité ce sous-marin roulant, voguant en équipage vers l'inconnu
        à travers un environnement désertique.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Nous n'en sommes qu'à notre première journée et un fil conducteur
        commence déjà à émerger: le mouvement perpétuel sous nos pieds et le
        paysage qui défile en continu. Les hauts pins vert et les arbres dénués
        de feuilles, sortent tout juste de l'hiver.{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/41a4bc35-0846-409c-9716-febc27ec57c7.jpeg"
        >
          <Highlight
            query="Les lacs, à peine dégelés"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Les lacs, à peine dégelés
          </Highlight>
        </a>
        , sur lesquels sont parsemées des traces de motoneige. Les quelques
        maisons alignées le long de la voie ferrée. Et enfin le bouquet final,{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/280a4968-7598-4bd1-9698-2f8740f828fb.jpg"
        >
          <Highlight
            query="le coucher de soleil"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            le coucher de soleil
          </Highlight>
        </a>{" "}
        en dégustant notre crème de champignons au dîner. La serveuse nous
        prévient du changement de fuseau horaire car cela fait plusieurs heures
        que nous n'avons plus de réseau et donc plus de synchronisation
        automatique. Ça serait bête de louper le petit déjeuner !
      </Text>
    </Box>
  </VStack>
);
