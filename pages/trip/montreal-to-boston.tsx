import {
    Avatar,
    Box,
    Center,
    Container,
    Heading,
    Highlight,
    Text,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Tooltip } from "react-tooltip";
import { Divider } from "@chakra-ui/react";

import { Locale } from "../../component/NavbarComponent";

export default function Trip({ lang }: any) {
    if (lang === "en") {
        return (
            <Container>
                {" "}
                <Text>Coming soon...</Text>
            </Container>
        );
    }

    if (lang === "fr") {
        return (
            <Box>
                <Head>
                    <title>Acti - Heureux hasards</title>
                </Head>
                <Container maxW={1000} mb={100}>
                    <Tooltip
                        place="left"
                        opacity={1}
                        noArrow={true}
                        float={true}
                        id="my-tooltip"
                        style={{
                            maxWidth: "600px",
                            width: "40%",
                            borderRadius: "5%",
                            zIndex: 999,
                            padding: 0,
                        }}
                        render={({ activeAnchor }) => (
                            <img
                                style={{ borderRadius: "5%" }}
                                src={activeAnchor?.getAttribute("href") ?? ""}
                                alt=""
                            />
                        )}
                    />

                    <Box marginTop={30}>
                        <Center>
                            {" "}
                            <Heading size="xl"> Heureux hasards</Heading>
                        </Center>
                        <Center>
                            {" "}
                            <Heading size="l">
                                {" "}
                                De Montréal à Boston, récit d’une joyeuse
                                odyssée cyclotouristique.
                            </Heading>
                        </Center>

                        <Text
                            mt={"35px"}
                            lineHeight={"25px"}
                            textAlign={"justify"}
                        >
                            Ce n’est que deux semaines précédant notre départ
                            que nous réalisâmes ce qui nous attendait : 650
                            kilomètres accompagnés de 4000 mètres de dénivelé
                            positif, le tout en 6 jours. Dans un éclair de
                            lucidité, nous demandons à chatGPT de nous suggérer
                            un programme sportif afin de préparer au mieux notre
                            condition physique. Sa réponse demeura tout aussi
                            cinglante que glaçante. Il nous proposait de
                            parcourir entre 50 et 100 kilomètres par jour,
                            durant les 14 prochains jours. Avions-nous vraiment
                            envie de mettre autant de temps et d’énergie dans ce
                            programme robotisé ? Définitivement non. Nous
                            décidons tout de même de tester les sensations d’une
                            étape de 100 kilomètres sur une selle. Ce que nous
                            effectuons à deux reprises sur les week-ends qu’il
                            nous restait, évidemment sans dénivelé. <br />{" "}
                            <br /> Ce furent nos seuls et uniques entraînements
                            pour ce long périple qui s’avéra finalement bien
                            moins éprouvant physiquement que notre imagination
                            ne le présageait.
                        </Text>
                    </Box>
                    <br />
                    <Box className="timeline">
                        <Box className="outer">
                            <Box className="card">
                                <Box className="info">
                                    <Heading size="l" className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toknowlton.jpg"
                                        >
                                            <Highlight
                                                query="Jour 1 (Montréal - Knowlton)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Jour 1 (Montréal - Knowlton)
                                            </Highlight>
                                        </a>
                                    </Heading>
                                    <Text>
                                        Nous partons la fleur au fusil sur les
                                        coups de 10 h, après nous être rassasiés
                                        d’un copieux petit déjeuner. La
                                        planification de cette première journée
                                        est à l’image de nos préparatifs, proche
                                        du néant.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/chambly.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="Un premier arrêt à Chambly"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Un premier arrêt à Chambly
                                            </Highlight>
                                        </a>{" "}
                                        est nécessaire afin de se munir de
                                        nouvelles sacoches. Ne les ayant pas ou
                                        peu expérimentées, elles se détachent du
                                        porte-bagages à chaque soubresaut, peu
                                        pratique. Ce premier déboire passé, nous
                                        profitons de{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/richelieu.jpeg"
                                        >
                                            <Highlight
                                                query="notre premier déjeuner à Saint-Jean
                                                de Richelieu"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                notre premier déjeuner à
                                                Saint-Jean de Richelieu
                                            </Highlight>
                                        </a>
                                        , situé à 40 km de Montréal, dans
                                        l’intention de vérifier combien de
                                        distance il nous reste à parcourir. Nous
                                        avons réservé pour cette première nuit
                                        une auberge avec piscine, pensant que
                                        nous pourrions patauger dedans et
                                        refroidir nos muscles à l’heure du
                                        goûter. Mais il est 14 h et nous avons
                                        du mal à cacher notre déception en
                                        voyant s’afficher les 80 kilomètres
                                        subsistants, adieu chaises longues. Les
                                        paysages identiques de champs à perte de
                                        vue s’enchaînent. Les pistes cyclables
                                        ombragées restent agréables à utiliser.
                                        Les dix derniers kilomètres en montée
                                        sous le soleil encore brûlant à côté
                                        d’une route à forte affluence mettent
                                        nos nerfs à dure épreuve. Effort
                                        contrasté par notre arrivée à l’auberge
                                        de Knowlton qui se déroule en toute
                                        quiétude, nous sommes les seuls clients.
                                        Le gérant nous confie les clés de son
                                        établissement avant de rentrer chez lui.
                                        Nous sommes maintenant les heureux
                                        propriétaires d’une bâtisse de 50
                                        chambres. Après application d’un peu de
                                        vaseline réparatrice permettant des
                                        futurs moins douloureux sur la selle,
                                        nous voilà en route pour la marina afin
                                        de récupérer de quoi nous sustenter.
                                        Nous en profitons au passage pour
                                        glisser un orteil dans l’eau de la
                                        piscine. Demain, nous avons prévu de
                                        traverser la frontière américaine à vélo
                                        en passant par un petit poste de douane.
                                        Nous espérons que l’aventure ne va pas
                                        s’arrêter là.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Heading size="l" className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toJefferson.jpg"
                                        >
                                            <Highlight
                                                query=" Jour 2 (Knowlton - Jeffersonville)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Jour 2 (Knowlton -
                                                Jeffersonville)
                                            </Highlight>
                                        </a>
                                    </Heading>{" "}
                                    <Text>
                                        Nous nous levons à 8 h et vérifions la
                                        météo afin de ne pas avoir de mauvaises
                                        surprises. Encore aujourd’hui, le
                                        thermomètre dépasse les 28°. Nous
                                        remplissons les gourdes et nous nous
                                        dirigeons vers le café le plus proche.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/cafe.jpeg"
                                        >
                                            <Highlight
                                                query="accompagné de son cappuccino au lait d’avoine."
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Café qui ne paye pas de mine
                                                avec un excellent petit déjeuner
                                                accompagné de son cappuccino au
                                                lait d’avoine.
                                            </Highlight>
                                        </a>{" "}
                                        Enfin, nous nous remettons en route. Les
                                        cinq premiers kilomètres en montée
                                        demeurent douloureux et les courbatures
                                        font leurs premières apparitions.
                                        Cependant, les 20 km suivants se
                                        déroulent en descente et nous permettent
                                        donc d’apprécier un échauffement
                                        tranquille. Nous apercevons les
                                        montagnes du Vermont au loin, regrettant
                                        déjà les terrains plats de la veille. La
                                        fin de cette matinée nous amène
                                        directement au poste-frontière. Le
                                        douanier nous accueille avec l’amabilité
                                        d’un douanier, c’est-à-dire qu’il sait
                                        où placer la barre du sourire, et c’est
                                        plutôt bas. Il nous pose des questions
                                        sur le lieu de notre première rencontre,
                                        ce qu’on va effectuer à Boston, à quelle
                                        date nous sommes arrivés au Canada… En
                                        somme des thèmes qu’on énoncerait à un
                                        touriste qu’on vient de croiser dans un
                                        bar excepté que là, une mauvaise réponse
                                        peut nous mener en cellule. Les menottes
                                        fixées au banc ne nous rassurent pas.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/poste-frontiere.jpeg"
                                        >
                                            <Highlight
                                                query=" nous
                                                franchissons la frontière"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Dix longues minutes plus tard ,
                                                nous franchissons la frontière
                                            </Highlight>{" "}
                                        </a>
                                        munie de notre passeport tamponné USA.
                                        Le cliché de la ville américaine est
                                        aussitôt vérifié. Des dizaines de
                                        drapeaux américains plantés dans les
                                        jardins flottent au gré du vent et un
                                        panneau LED accroché sur la devanture
                                        d’une église catholique vante les
                                        mérites du pasteur du village. C’est à
                                        partir de cette deuxième étape que nous
                                        prenons plaisir à croiser d’autres
                                        cyclistes et à les saluer. Dans
                                        l’ensemble, souhaiter une belle journée
                                        à tous les gens que nous rencontrons sur
                                        la route, ce qu’il est tristement
                                        impossible d’exprimer à bord d’une
                                        voiture. À 13 h, le soleil frappe fort,
                                        nous décidons de nous arrêter dans une
                                        ville à la recherche de nourriture. Nous
                                        sommes pris de court, car le plat
                                        principal local reste le burger qui ne
                                        figure malheureusement pas dans notre
                                        alimentation végétarienne. Nous sommes
                                        sauvés in extremis par un Subway
                                        juxtaposé à une station-service.
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/subway.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query=" Nous voici en train de dévorer "
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Nous voici en train de dévorer
                                                notre premier repas américain.
                                            </Highlight>{" "}
                                        </a>
                                        Quelques kilomètres après notre départ,
                                        mon porte-bagages se fait la malle (sans
                                        mauvais jeu de mots). Je me pose donc
                                        sur le bas-côté à la recherche de la vis
                                        perdue, sous l’atmosphère étouffante de
                                        l’après-midi. Cinq minutes plus tard, un
                                        jeune garçon sort de sa maison, un verre
                                        de limonade à la main et me l’offre, une
                                        délicate attention qui mérite cet
                                        hommage dans ce récit. Au Vermont, les
                                        routes de voitures sont constamment
                                        agencées{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/trail.jpeg"
                                        >
                                            <Highlight
                                                query=" d’un sentier dédié "
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                d’un sentier dédié aux engins
                                                non motorisés.
                                            </Highlight>
                                        </a>
                                        Malheureusement, ces chemins sont
                                        confectionnés de terre et se
                                        transforment parfois en pente giboyeuse
                                        et ensablée. Ma monture profita de cette
                                        première occasion pour s’y embourber, me
                                        laissant parcourir à pied un bon
                                        kilomètre, Antoine ricanant doucement du
                                        haut de son vélo tout terrain. Cette
                                        voie boueuse fut suivie de ce que j’ai
                                        renommé la ligne rouge.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/ligne-rouge.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query=" Un sentier parsemé de petits
                                                graviers"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Un sentier parsemé de petits
                                                graviers sur lequel mes pneus
                                                n’adhèrent pas
                                            </Highlight>{" "}
                                        </a>
                                        , mettant mes cuisses à rude épreuve.
                                        Plus désagréable encore, le guidon
                                        vibre, manquant de me déboîter les
                                        poignets, les épaules et le dos. Arrivés
                                        à 17 h dans la seule auberge du coin,
                                        nous prenons le temps de nous désaltérer
                                        et de nous préparer pour la troisième
                                        journée pour laquelle nous n’avons prévu
                                        ni itinéraire ni point de chute ! .{" "}
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Heading size="l" className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toWarren.jpg"
                                        >
                                            <Highlight
                                                query=" Jour 3 (Jeffersonville - Warren)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Jour 3 (Jeffersonville - Warren)
                                            </Highlight>
                                        </a>
                                    </Heading>{" "}
                                    <Text>
                                        La nuitée est courte et peu intense,
                                        notre chambre étant située au-dessus de
                                        la porte d’entrée de l’auberge qui
                                        n’arrêtait pas de claquer. Le temps
                                        d’avaler deux tranches de muffins et
                                        nous voilà repartis pour notre troisième
                                        journée. Le désagréable repos est vite
                                        oublié par les 20 km de sentiers
                                        composés
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/pont1.jpeg"
                                        >
                                            <Highlight
                                                query="  d’anciens ponts ferroviaires"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                d’anciens ponts ferroviaires
                                            </Highlight>
                                        </a>{" "}
                                        et de paysages montagneux. Il y a moins
                                        de cyclistes que la veille, suffisamment
                                        pour continuer à apprécier les
                                        chaleureux « good morning ». Nous nous
                                        délectons{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/mont.jpeg"
                                        >
                                            <Highlight
                                                query="  des monts verdoyants à perte de vue"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                des monts verdoyants à perte de
                                                vue, cette région du Vermont
                                                porte décidément bien son nom
                                            </Highlight>
                                        </a>
                                        . Nous nous octroyons une courte pause,
                                        le temps de trouver notre prochaine
                                        destination pour le déjeuner. Nous
                                        jetons notre dévolu sur un petit café
                                        situé à une vingtaine de kilomètres.
                                        Après la douceur du sentier, nous voici
                                        de retour sur la rigueur de la route un
                                        peu assourdissante à cause des 33 tonnes
                                        passant à côté de nous de vives allures.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/piste.jpeg"
                                        >
                                            <Highlight
                                                query="la bande d’arrêt
                                                d’urgence"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Toutefois, la bande d’arrêt
                                                d’urgence/piste cyclable
                                            </Highlight>{" "}
                                        </a>
                                        nous laisse quand même un peu de marge
                                        de manœuvre. Nous développons un sixième
                                        sens qui consiste à deviner la taille et
                                        l’apparence d’une voiture au seul bruit
                                        de son moteur. Nous avons cependant du
                                        mal à différencier les gros camions de
                                        marchandises des énormes trucks. Une
                                        montée douloureuse fut suivie d’une
                                        glissade de 2 km à grande allure pour
                                        finir dans le petit café de Stowe. Très
                                        agréablement surpris par la qualité de
                                        la nourriture et des breuvages. Il est
                                        13 h 30 et notre seule envie jouxtant ce
                                        repas est de s’allonger et dormir.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/antoineronfle.jpeg"
                                        >
                                            <Highlight
                                                query=" Mon camarade Antoine commence
                                                d’ailleurs à ronfler."
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Mon camarade Antoine commence
                                                d’ailleurs à ronfler.
                                            </Highlight>
                                        </a>{" "}
                                        La deuxième partie de la journée est un
                                        peu plus compliquée. Elle démarre par
                                        l’achat d’une nouvelle paire de gants,
                                        car mes mains apparaissent toutes rouge
                                        dû aux tremblements du guidon sur les
                                        pistes de sentier. S’ensuivit une montée
                                        de dénivelé de 700 m en une trentaine de
                                        minutes, un effort intense accompagné
                                        des 30° qui tape sur le crâne à travers
                                        le casque et les cheveux. Au bout d’un
                                        certain temps, j’arrive à caler mon
                                        pédalage sur mon souffle. J’ai
                                        l’impression de réapprendre à respirer.
                                        C’est toujours aussi pénible, mais au
                                        moins j’avance avec la confiance
                                        d’arrivée au bout. Je me rappelle un
                                        article que j’avais lu en rapport avec
                                        la distance et l’infini. Il mettait en
                                        scène la relation entre un but marqué et
                                        un filet. La balle franchit la moitié de
                                        la distance qui la sépare du filet au
                                        bout de quelques secondes. Puis encore
                                        la moitié, puis encore la moitié, puis
                                        encore la moitié et en fin de compte la
                                        balle ne devrait jamais toucher le
                                        filet. C’est un peu l’impression que
                                        j’avais sur cette pente, le sentiment
                                        d’avancer par moitié sans jamais en voir
                                        le bout. En haut de la côte, délivrance,
                                        la douce joie du vent de la descente
                                        annihile la peine de la montée. Nous
                                        essayons cependant de faire attention,
                                        car à cette vitesse le moindre écart de
                                        chaussée pourrait nous être fatal. La
                                        concentration sur la route reste une
                                        routine à laquelle nous nous sommes
                                        rapidement habitués, une sorte de
                                        méditation forcée de plusieurs heures
                                        par jour. Mais ça ne sera pas sur la
                                        pente qu’un problème surviendra. En
                                        effet, voici venue l’heure de ma
                                        première crevaison, 5 minutes avant
                                        l’arrivée, quelle aubaine !{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/crevaison.jpeg"
                                        >
                                            <Highlight
                                                query="Je réussis cependant à changer
                                                ma chambre à air promptement"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Je réussis cependant à changer
                                                ma chambre à air promptement
                                            </Highlight>
                                        </a>{" "}
                                        et nous voilà parvenus à notre troisième
                                        cocon locatif. Petit plongeon dans la
                                        piscine ouverte juste pour nous et
                                        dégustation d’un cidre normand pas tout
                                        à fait local. Demain, il pleut, une
                                        nouveauté que nous avons hâte
                                        d’expérimenter.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Heading size="l" className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toKillington.jpg"
                                        >
                                            <Highlight
                                                query=" Jour 4 (Warren - Killington)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Jour 4 (Warren - Killington)
                                            </Highlight>
                                        </a>
                                    </Heading>{" "}
                                    <Text>
                                        Une agréable nuit silencieuse comparée à
                                        la veille. Nous prenons le petit
                                        déjeuner américain de campagne dont nous
                                        avons maintenant l’habitude, pancakes de
                                        la taille de l’assiette et fromage à la
                                        crème monté sur son bagel.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/goutte.jpeg"
                                        >
                                            <Highlight
                                                query="les premières gouttes
                                                tombent, ô joie !"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Au moment de poser les fesses
                                                sur la selle, les premières
                                                gouttes tombent, ô joie !
                                            </Highlight>
                                        </a>{" "}
                                        Cependant, je suis plus préoccupé par
                                        mon pneu, mal remis de sa crevaison, que
                                        par les nuages qui s’affolent. La
                                        prochaine boutique de vélo est située à
                                        une trentaine de kilomètres.
                                        Heureusement, nous résidons en haut d’un
                                        col et ce matin ne sera que descente.
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/brume.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="une atmosphère féerique"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Les paysages pluvieux apportent
                                                une atmosphère féerique, la
                                                brume se glissant entre les
                                                arbres larmoyants.
                                            </Highlight>
                                        </a>
                                        L’odeur de la terre mouillée et le peu
                                        de circulation transforment cette heure
                                        d’inquiétude en temps de plénitude. Dans
                                        la vallée, nous nous faisons doubler par
                                        un, puis deux, puis cinq, puis une
                                        dizaine de cyclistes. Mais que se
                                        passe-t-il donc ? Une course ! Et nous
                                        nous trouvons dedans. Nous entamons un
                                        dernier sprint jusqu’à la boutique afin
                                        de monter sur le podium, bien
                                        évidemment.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/alibaba.jpeg"
                                        >
                                            <Highlight
                                                query="une vraie
                                                caverne d’Ali Baba"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Nous entrons alors dans une
                                                vraie caverne d’Ali Baba. Des
                                                vélos par centaines, des
                                                pédaliers, des dérailleurs, des
                                                guidons, des selles, entretenus
                                                de longue date par de vieux
                                                loups de mer.
                                            </Highlight>
                                        </a>
                                        L’ambiance chaleureuse nous force à
                                        conter notre aventure, un peu écourtée
                                        du fait de notre patois peu habitué à
                                        des accents si prononcés. Mon pneu est
                                        remplacé et ma chambre à air gonflée.
                                        Nous sommes prêts à affronter cette
                                        deuxième partie de journée sous le
                                        gourou de Zeus, dieu de la pluie. Mais
                                        avant, place à la boustifaille située à
                                        quelques mètres de là.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/boustifaille.jpeg"
                                        >
                                            <Highlight
                                                query=" Nous regardons les cyclistes"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Nous regardons les cyclistes
                                                défier les torrents d’eau à coup
                                                de pédales.
                                            </Highlight>
                                        </a>{" "}
                                        La pause déjeuner se prolonge sur 2
                                        heures. Un gros milk-shake au café en
                                        sonne le glas. Le départ est compliqué.
                                        La sérotonine ne subsiste plus dans le
                                        sang, les vêtements sont mouillés, nous
                                        commençons doucement à trouver l’averse
                                        longue. Les paysages toujours aussi
                                        beaux et détrempés se succèdent par une
                                        montée d’une vingtaine de kilomètres.
                                        Des ruisseaux coulent le long de la
                                        route et viennent se déchaîner contre
                                        nos roues qui glissent à reculons.
                                        Éclaboussures, sueurs et pluie
                                        torrentielle, pénible cocktail de cette
                                        fin de journée. Tandis que nous arrivons
                                        enfin à l’auberge, le réceptionniste
                                        nous accueille avec son discours
                                        habituel de bienvenue. Nos oreilles
                                        frémissent quand nous entendons que le
                                        jacuzzi ferme sous peu. Un jacuzzi
                                        dites-vous ? Cinq minutes plus tard,
                                        nous sautons de l’eau subite vers l’eau
                                        bénite. Pour finir la soirée, le hasard
                                        accomplissant bien les choses,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/gastro.jpeg"
                                        >
                                            <Highlight
                                                query="un restaurant semi-gastronomique"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                un restaurant semi-gastronomique
                                                se situe à quelques mètres de
                                                notre hébergement.
                                            </Highlight>
                                        </a>{" "}
                                        Nous allons pouvoir nous ravitailler
                                        correctement avant d’entamer la plus
                                        difficile et tortueuse journée de notre
                                        expédition, 100 kilomètres sur 1200
                                        mètres de dénivelé positif, le tout dans
                                        nos habits humides.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Heading size="l" className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toNewburry.jpg"
                                        >
                                            <Highlight
                                                query="Jour 5 (Killington - Newburry)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Jour 5 (Killington - Newburry)
                                            </Highlight>
                                        </a>
                                    </Heading>{" "}
                                    <Text>
                                        Nous appréhendons quelque peu cette
                                        journée. Le petit déjeuner n’apparaît
                                        pas copieux, mais suffira à nous faire
                                        patienter jusqu’à midi. Étant servi sur
                                        place, il présente l’avantage de nous
                                        permettre de poser rapidement le pied
                                        sur l’étrier. Durant les cinq premières
                                        minutes, nous dévalons l’heure
                                        d’ascension de la veille.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/lac.jpeg"
                                        >
                                            <Highlight
                                                query="parsemés de lacs"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                S’enchaînent ensuite des
                                                paysages montagneux, parsemés de
                                                lacs,
                                            </Highlight>
                                        </a>{" "}
                                        de tracés lisses, de peu de trafic et
                                        d’oiseaux toujours aussi vivants,
                                        heureux de chanter le printemps. Nous
                                        profitons d’autant plus de ces paysages
                                        demeurant au fait que quelques
                                        kilomètres plus loin nous attend la
                                        montée la plus abrupte de notre voyage.
                                        Enfin, elle apparaît là, en face de
                                        nous, débutant sur une route cabossée.
                                        Nous ne regardons pas le GPS de peur de
                                        nous démotiver, nous savons que nous
                                        avancerons jusqu’au bout quoiqu’il
                                        arrive. Nous croisons trois cyclistes
                                        qui descendent et qui nous saluent avec
                                        un grand sourire, mauvais signe. Le
                                        dénivelé démarre à 8 %, pour finir à 12.
                                        Et en même temps, la nature apaise
                                        l’effort, nous nous trouvons sous les
                                        arbres, le soleil ne nous harcèle pas
                                        directement, il ne pleut plus et la
                                        température apparaît idéale. Trente
                                        minutes plus tard, nous voici en haut
                                        dégoulinant de sueurs, mais fiers de ne
                                        pas avoir mis un pied à terre. Nous
                                        attrapons nos gourdes et récompensons
                                        nos muscles à coup de grosses gorgées
                                        d’eau, pressé d’entamer la descente.
                                        Profitons-en un peu pour en parler. Le
                                        plus plaisant n’est pas la descente en
                                        elle-même. Si nous n’avions fait que
                                        descendre, la jouissance aurait été
                                        moindre. Le vrai plaisir provient de
                                        l’écart émotionnel entre l’effort
                                        intense et l’effort néant. Nous en
                                        venons à apprécier les hauts dénivelés,
                                        sachant qu’après une descente s’ensuit.
                                        L’adrénaline de la vitesse et la
                                        sérotonine sécrétée par les muscles au
                                        cours de la montée transforment ces
                                        quelques minutes en moments de joie
                                        pure. Nous crions, nous hurlons, nous
                                        sommes les rois du monde durant ces
                                        courts instants. Et si parfois nous
                                        mettons un pied à terre lors de
                                        l’effort, ce n’est pas une défaite.
                                        D’autres luttes suivront sur lesquelles
                                        nous prendrons l’avantage. Au bas de
                                        cette montagne, la transition entre la
                                        frontière du Vermont et du New Hampshire
                                        apparaît rude. Nous passons des doux
                                        paysages verdoyants aux quatre voies
                                        américaines, sponsorisées par la
                                        poussière et les monstres carbonés
                                        mécaniques. La maigre piste cyclable à
                                        notre disposition est garnie de trous,
                                        ce qui ne facilite pas notre avancée.
                                        Pour ce midi, nous avions décidé d’aller
                                        manger à l’unique restaurant de la
                                        contrée qui proposait des plats
                                        végétariens. Malheureusement une fois
                                        devant, un taudis à moitié abandonné
                                        nous attend. Nous sommes entourés de
                                        Pizza Hut, McDonald’s et Burger King qui
                                        règne en maîtres dans ses vallées
                                        infernales.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/parking.jpeg"
                                        >
                                            <Highlight
                                                query="sur le parking"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Notre seule solution consiste
                                                donc à chercher de quoi se
                                                sustenter dans le supermarché du
                                                coin puis de le consommer sur le
                                                parking.
                                            </Highlight>
                                        </a>
                                        Nous n’y resterons pas longtemps, au
                                        grand regret de nos cuisses encore
                                        chaudes. Nous démarrons par un doux
                                        sentier dans la forêt un brin cahoteuse
                                        pour mes pneus de route, un peu moins
                                        pour ceux d’Antoine.
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/pont2.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="ancien pont ferroviaire"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Nous traversons une fois de plus
                                                un ancien pont ferroviaire
                                            </Highlight>
                                        </a>{" "}
                                        et croisons deux enfants conduisant
                                        chacun leur quad, les parents à
                                        l’arrière. Parlons maintenant des
                                        calculs de dénivelé des applications de
                                        cartographie. Lors de ce trajet, nous
                                        nous sommes munis de Google Maps et de
                                        Komoot afin d’optimiser l’itinéraire en
                                        fonction des différents styles de
                                        chaussées, du trafic et des
                                        inclinaisons. Google Maps n’est vraiment
                                        pas fort avec les angles. Komoot n’est
                                        pas très précis. Il est donc compliqué
                                        d’estimer avec certitude dans quelle
                                        situation nous nous retrouverons dans
                                        les cinq prochains kilomètres. Cet
                                        après-midi resta incontestablement notre
                                        pire désillusion concernant l’effort
                                        physique qu’il nous restait à accomplir,
                                        qu’à cela ne tienne. À coup de pied à
                                        terre, d’hydratation et de jurons, nous
                                        arrivons à destination. Nous avions
                                        réservé cet hôtel la veille sans trop
                                        savoir à quoi se préparer et une fois de
                                        plus nous ne sommes pas déçus de
                                        l’endroit. Étant en basse saison, les
                                        gîtes haut de gamme gisent vides et
                                        financièrement accessibles. Une piscine
                                        nous attend, il est grand temps d’un
                                        plouf. Ce soir, le seul pub du coin est
                                        irlandais, notre dévolu est donc jeté
                                        sur un fish & chips, toujours aussi
                                        régional. Un petit concert est au
                                        rendez-vous, de même qu’un accent qui se
                                        veut de plus en plus incompréhensible
                                        pour nos oreilles chauvines. Plus que
                                        deux jours, sous une pluie potentielle,
                                        et à nous Boston !
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Heading size="l" className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toMerrimack.jpg"
                                        >
                                            <Highlight
                                                query=" Jour 6 (Newburry - Merrimack)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Jour 6 (Newburry - Merrimack)
                                            </Highlight>
                                        </a>
                                    </Heading>{" "}
                                    <Text>
                                        Aujourd’hui s’annonce mentalement
                                        compliqué. La pluie est de retour et pas
                                        de restauration salvatrice en chemin et
                                        l’hôtel que nous avons réservé est situé
                                        sur une aire d’autoroute. Nous sentons
                                        Boston se rapprocher avec sa zone
                                        industrielle. Nous entamons la journée
                                        avec un petit déjeuner à la boulangerie
                                        locale qui n’est ni plus ni moins qu’un
                                        distributeur équipé d’un four qui nous
                                        cuit un bagel. Nous n’avons décidément
                                        pas hâte que cette journée commence.
                                        Cependant, une fois sur le vélo et les
                                        premières courbatures derrière nous,
                                        nous nous remettons à apprécier la
                                        nature qui nous entoure. D’autant plus
                                        que cette dernière s’est dotée d’une
                                        nouvelle capacité, le vent. Nous avions
                                        éprouvé de fortes chaleurs et la pluie.
                                        Voici que nous expérimentons maintenant
                                        la résistance de l’air face à nos
                                        mouvements. Les descentes se muent en
                                        terrain plat, les terrains plats se
                                        transforment en montée et les montées
                                        quant à elles n’offrent pas plus de
                                        résistance que d’habitude due à notre
                                        lenteur. Nous pourrions nous plaindre de
                                        notre sort, cependant ce vent nous a
                                        sauvés de quelques problèmes
                                        respiratoires. Les forêts canadiennes
                                        sont en proie aux flammes et génèrent
                                        des cendres à des milliers de kilomètres
                                        à la ronde,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/vent.jpeg"
                                        >
                                            <Highlight
                                                query="la ville la plus polluée au monde"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Montréal est d’ailleurs ce
                                                jour-là la ville la plus polluée
                                                au monde.
                                            </Highlight>
                                        </a>{" "}
                                        Une douce piqûre de rappel sur
                                        l’objectif de notre aventure, se
                                        déplacer sans dégager de carbone pour ne
                                        pas amplifier le phénomène. Le vent qui
                                        nous arrive de face garde les particules
                                        loin de nous et nous permet de respirer
                                        un air propre venu tout droit du golfe
                                        du Mexique. À contrevent donc, mais les
                                        poumons sains et sereins. Nous hésitons
                                        à faire demi-tour{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/danger.jpeg"
                                        >
                                            <Highlight
                                                query="une pancarte présageant un
                                                danger"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                devant une pancarte présageant
                                                un danger
                                            </Highlight>
                                        </a>{" "}
                                        mais décidons d’aller de l’avant. Sage
                                        décision car nous déboulons{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/parc.jpeg"
                                        >
                                            <Highlight
                                                query="un magnifique parc régional"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                sur un magnifique parc régional
                                            </Highlight>
                                        </a>{" "}
                                        juste avant notre pause de mi-journée.
                                        Le trajet apparut moins éprouvant que
                                        nous le pensions. Pas une seule goutte
                                        de pluie jusqu’au déluge en début
                                        d’après-midi, alors que nous nous
                                        trouvions à l’intérieur d’une supérette
                                        afin d’y acheter notre déjeuner.
                                        L’heureux hasard frappant pour la énième
                                        fois. Tandis que l’eau s’abattait sur le
                                        bitume, nous effectuâmes la rencontre
                                        d’un personnage intéressant. Il
                                        complimenta nos vélos avant de commencer
                                        à conter sa vie. D’après ses dires, il
                                        était le créateur des pédales à clips et
                                        en avait eu l’idée en travaillant chez
                                        Salomon en France à l’époque pour les
                                        fixations de ski. Nous sommes quelque
                                        peu étonnés de croiser un individu aussi
                                        brillant et connu dans son domaine dans
                                        un village rural et loin de tout. Tel un
                                        homme d’affaires américain, il nous
                                        vante les mérites de son génie et nous
                                        offre une réduction sur sa prochaine
                                        trouvaille : de nouveaux ancrages
                                        futuristes pour les skis. Nous
                                        apparaissons dubitatifs quant à la
                                        véracité de ses propos, néanmoins après
                                        vérification nous nous rendons compte
                                        que nous avons bel et bien rencontré
                                        l’inventeur de ces clips qui nous ont
                                        permis de moins peiner lors des montées.
                                        L’orage s’arrête. Nous reprenons
                                        l’itinéraire jusqu’à notre destination :
                                        une aire d’autoroute. Ici, la voiture
                                        est reine, pas de corridor pour les
                                        piétons, pas de casier à vélo dans les
                                        hébergements. Les gens vont de l’hôtel
                                        au restaurant dans leur pick-up, au
                                        diable les quelques minutes de marche en
                                        extérieur. Heureusement, nous ne sommes
                                        que de passage, car demain c’est le
                                        grand jour. C’est l’arrivée à Boston.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Heading size="l" className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toBoston.jpg"
                                        >
                                            <Highlight
                                                query=" Jour 7 (Merrimack - Boston)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Jour 7 (Merrimack - Boston)
                                            </Highlight>
                                        </a>
                                    </Heading>{" "}
                                    <Text>
                                        Sommeil peu réparateur sur cette aire
                                        d’autoroute, mais agréablement surpris
                                        par le petit déjeuner bien achalandé qui
                                        nous transportera sur les 80 km
                                        restants. Le vent demeure encore présent
                                        et le trafic ubiquitaire lorsque nous
                                        entamons les premiers kilomètres.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/aire.jpeg"
                                        >
                                            <Highlight
                                                query=" Nous traversons les zones
                                                industrielles"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Nous traversons les zones
                                                industrielles logées entre
                                                Boston et les montagnes.
                                            </Highlight>
                                        </a>{" "}
                                        Les pick-up nous dépassent à vive
                                        allure, le bicycleux n’apparaît
                                        décidément pas comme étant le bienvenu
                                        ici. Nous nous forcerons un passage tant
                                        bien que mal durant ces 30 km qui nous
                                        séparent de la voie cyclable. En chemin,
                                        Google Maps, le spécialiste des
                                        raccourcis, nous fait emprunter la
                                        forêt.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/foret.jpeg"
                                        >
                                            <Highlight
                                                query="nous devons mettre le pied à
                                                terre"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Même si nous devons mettre le
                                                pied à terre, c’est très
                                                agréable de humer la mousse des
                                                arbres, et de la terre, encore
                                                humide de la veille.
                                            </Highlight>
                                        </a>{" "}
                                        Nous croisons par trois fois un
                                        promeneur avec son chien qui nous
                                        indique la piste à prendre. Il déboulait
                                        d’on ne sait où de derrière les fagots.
                                        On aurait dit une caméra cachée. Enfin,
                                        le corridor ombragé tant attendu nous
                                        amène d’une traite à Boston. Les pick-up
                                        se font graduellement plus rares,
                                        remplacés par des voitures citadines.
                                        Les conducteurs apparaissent de plus en
                                        plus respectueux et les voies dédiées au
                                        vélo se trouvent progressivement plus
                                        larges. En contrepartie, moins de
                                        salutations de la part des autres
                                        cyclistes, davantage habitués à en voir
                                        d’autres.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/boston.jpeg"
                                        >
                                            <Highlight
                                                query=" les
                                                bâtiments grandissent autour de
                                                nous"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Au fur et à mesure que nous nous
                                                enfonçons dans la ville, les
                                                bâtiments grandissent autour de
                                                nous. Les premiers gratte-ciel
                                                émergent.
                                            </Highlight>
                                        </a>
                                        Les feux rouges à chaque intersection
                                        nous freinent. Nous passons devant
                                        Harvard, puis le MIT, mais nous n’avons
                                        qu’une seule idée en tête. Avant même de
                                        se prendre en photos auprès de ces
                                        belles institutions. C’est de poser nos
                                        vélos et laver nos affaires, pour
                                        finalement se débarbouiller. Et dire
                                        qu’enfin nous l’avons fait. Nous l’avons
                                        fait.
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box marginTop={30}>
                        <Center mb={10}>
                            {" "}
                            <Heading size="l">Rétrospectives</Heading>
                        </Center>
                        <Text
                            my={10}
                            fontStyle={"italic"}
                            lineHeight={"25px"}
                            textAlign={"justify"}
                        >
                            <Avatar
                                size={"xl"}
                                mr={4}
                                style={{ float: "left" }}
                                name="Antoine Ganard"
                                src="/images/bostontrip/antoine.jpeg"
                            />
                            «  La liberté. C’est ça qui m’a marqué pendant ce
                            voyage. La liberté de se lever quand on est prêt, de
                            manger quand on a faim, de se coucher quand on est
                            fatigué. Pas d’horaire à respecter, juste le temps à
                            apprécier. Elle est extraordinaire d’ailleurs, la
                            notion de temps sur une aventure comme celle-ci. On
                            voit tellement de paysages, de gens ou même
                            d’architectures en une journée, qu’elle nous en
                            paraît en durer plusieurs. En une semaine, j’ai eu
                            l’impression de vivre plusieurs mois. Et pourtant,
                            je me suis moins ennuyé que pendant les quelques
                            heures de voiture sur le retour. J’ai vécu chaque
                            moment à 100%, et qu’est-ce que ça fait du bien. Les
                            montées qui brûlent les cuisses et réduisent les
                            fesses en miettes, m’ont fait me dépasser à
                            plusieurs reprises. En puisant au fond de moi-même
                            je me suis rendu compte que j’étais capable. En
                            fait, si le mental veut, le corps suivra. Et puis,
                            après les montées viennent les descentes. Elles me
                            faisaient oublier instantanément la douleur dans les
                            jambes, la pluie battante ou encore la chaleur.
                            Chaque sensation est décuplée sur le vélo, comme si
                            le corps reprenait vie. C’est ça en fait, la vie.
                            Faire de chaque instant une expérience intense et
                            accueillir ces sensations. Idéalement même, partager
                            tous ces moments pour en garder une trace encore
                            plus mémorable. Pour ça, je remercie chaleureusement
                            Alexis de m’avoir accompagné sur ce trip. 15 ans que
                            l’on se connaît, et pourtant j’ai eu l’impression de
                            tout juste le rencontrer pendant ces 7 jours. Alors
                            maintenant, il ne nous reste plus qu’à planifier le
                            prochain voyage. Car oui, il est inenvisageable de
                            ne pas recommencer.»
                        </Text>
                        <Divider />
                        <Text
                            my={10}
                            fontStyle={"italic"}
                            lineHeight={"25px"}
                            textAlign={"justify"}
                        >
                            <Avatar
                                size={"xl"}
                                mr={4}
                                style={{ float: "left" }}
                                name="Alexis anzieu"
                                src="/images/bostontrip/alexis.jpeg"
                            />
                            «  La liberté. C’est ça qui m’a marqué pendant ce
                            voyage. La liberté de se lever quand on est prêt, de
                            manger quand on a faim, de se coucher quand on est
                            fatigué. Pas d’horaire à respecter, juste le temps à
                            apprécier. Elle est extraordinaire d’ailleurs, la
                            notion de temps sur une aventure comme celle-ci. On
                            voit tellement de paysages, de gens ou même
                            d’architectures en une journée, qu’elle nous en
                            paraît en durer plusieurs. En une semaine, j’ai eu
                            l’impression de vivre plusieurs mois. Et pourtant,
                            je me suis moins ennuyé que pendant les quelques
                            heures de voiture sur le retour. J’ai vécu chaque
                            moment à 100%, et qu’est-ce que ça fait du bien. Les
                            montées qui brûlent les cuisses et réduisent les
                            fesses en miettes, m’ont fait me dépasser à
                            plusieurs reprises. En puisant au fond de moi-même
                            je me suis rendu compte que j’étais capable. En
                            fait, si le mental veut, le corps suivra. Et puis,
                            après les montées viennent les descentes. Elles me
                            faisaient oublier instantanément la douleur dans les
                            jambes, la pluie battante ou encore la chaleur.
                            Chaque sensation est décuplée sur le vélo, comme si
                            le corps reprenait vie. C’est ça en fait, la vie.
                            Faire de chaque instant une expérience intense et
                            accueillir ces sensations. Idéalement même, partager
                            tous ces moments pour en garder une trace encore
                            plus mémorable. Pour ça, je remercie chaleureusement
                            Alexis de m’avoir accompagné sur ce trip. 15 ans que
                            l’on se connaît, et pourtant j’ai eu l’impression de
                            tout juste le rencontrer pendant ces 7 jours. Alors
                            maintenant, il ne nous reste plus qu’à planifier le
                            prochain voyage. Car oui, il est inenvisageable de
                            ne pas recommencer.»
                        </Text>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            lang: locale,
            ...(await serverSideTranslations(locale as Locale, ["common"])),
        },
    };
}
