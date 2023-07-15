import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextImage from "next/legacy/image";
import { Tooltip } from "react-tooltip";

export default function Trip() {
    return (
        <Box>
            <Head>
                <title>Acti - Heureux hasards</title>
            </Head>
            <Flex gap={100}>
                <Box w={"100%"}>
                    <Box marginBottom={50}>
                        <NextImage
                            layout="responsive"
                            width={200}
                            height={200}
                            src={"https://picsum.photos/200"}
                        />{" "}
                        <Center>coucou</Center>
                    </Box>
                    <Box marginBottom={50}>
                        <NextImage
                            layout="responsive"
                            width={200}
                            height={200}
                            src={"https://picsum.photos/200"}
                        />{" "}
                        <Center>coucou</Center>
                    </Box>
                </Box>
                <Box>
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

                        <a id="not-clickable">◕‿‿◕</a>
                        <Tooltip anchorSelect="#not-clickable">
                            <img src="https://picsum.photos/200" />
                        </Tooltip>
                        <Text mt={"35px"}>
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
                    <div className="timeline">
                        <div className="outer">
                            <div className="card">
                                <div className="info">
                                    <Heading size="l" className="title">
                                        Jour 1
                                    </Heading>
                                    <p>
                                        Nous partons la fleur au fusil sur les
                                        coups de 10 h, après nous être rassasiés
                                        d’un copieux petit déjeuner. La
                                        planification de cette première journée
                                        est à l’image de nos préparatifs, proche
                                        du néant. Un premier arrêt à Chambly est
                                        nécessaire afin de se munir de nouvelles
                                        sacoches. Ne les ayant pas ou peu
                                        expérimentées, elles se détachent du
                                        porte-bagages à chaque soubresaut, peu
                                        pratique. Ce premier déboire passé, nous
                                        profitons de notre premier déjeuner à
                                        Saint-Jean de Richelieu, situé à 40 km
                                        de Montréal, dans l’intention de
                                        vérifier combien de distance il nous
                                        reste à parcourir. Nous avons réservé
                                        pour cette première nuit une auberge
                                        avec piscine, pensant que nous pourrions
                                        patauger dedans et refroidir nos muscles
                                        à l’heure du goûter. Mais il est 14 h et
                                        nous avons du mal à cacher notre
                                        déception en voyant s’afficher les 80
                                        kilomètres subsistants, adieu chaises
                                        longues. Les paysages identiques de
                                        champs à perte de vue s’enchaînent. Les
                                        pistes cyclables ombragées restent
                                        agréables à utiliser. Les dix derniers
                                        kilomètres en montée sous le soleil
                                        encore brûlant à côté d’une route à
                                        forte affluence mettent nos nerfs à dure
                                        épreuve. Effort contrasté par notre
                                        arrivée à l’auberge de Knowlton qui se
                                        déroule en toute quiétude, nous sommes
                                        les seuls clients. Le gérant nous confie
                                        les clés de son établissement avant de
                                        rentrer chez lui. Nous sommes maintenant
                                        les heureux propriétaires d’une bâtisse
                                        de 50 chambres. Après application d’un
                                        peu de vaseline réparatrice permettant
                                        des futurs moins douloureux sur la
                                        selle, nous voilà en route pour la
                                        marina afin de récupérer de quoi nous
                                        sustenter. Nous en profitons au passage
                                        pour glisser un orteil dans l’eau de la
                                        piscine. Demain, nous avons prévu de
                                        traverser la frontière américaine à vélo
                                        en passant par un petit poste de douane.
                                        Nous espérons que l’aventure ne va pas
                                        s’arrêter là. .{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">Jour 2</h3>
                                    <p>
                                        Nous nous levons à 8 h et vérifions la
                                        météo afin de ne pas avoir de mauvaises
                                        surprises. Encore aujourd’hui, le
                                        thermomètre dépasse les 28°. Nous
                                        remplissons les gourdes et nous nous
                                        dirigeons vers le café le plus proche.
                                        Café qui ne paye pas de mine avec un
                                        excellent petit déjeuner accompagné de
                                        son cappuccino au lait d’avoine. Enfin,
                                        nous nous remettons en route. Les cinq
                                        premiers kilomètres en montée demeurent
                                        douloureux et les courbatures font leurs
                                        premières apparitions. Cependant, les 20
                                        km suivants se déroulent en descente et
                                        nous permettent donc d’apprécier un
                                        échauffement tranquille. Nous apercevons
                                        les montagnes du Vermont au loin,
                                        regrettant déjà les terrains plats de la
                                        veille. La fin de cette matinée nous
                                        amène directement au poste-frontière. Le
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
                                        fixées au banc ne nous rassurent pas.
                                        Dix longues minutes plus tard, nous
                                        franchissons la frontière munie de notre
                                        passeport tamponné USA. Le cliché de la
                                        ville américaine est aussitôt vérifié.
                                        Des dizaines de drapeaux américains
                                        plantés dans les jardins flottent au gré
                                        du vent et un panneau LED accroché sur
                                        la devanture d’une église catholique
                                        vante les mérites du pasteur du village.
                                        C’est à partir de cette deuxième étape
                                        que nous prenons plaisir à croiser
                                        d’autres cyclistes et à les saluer. Dans
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
                                        juxtaposé à une station-service. Nous
                                        voici en train de dévorer notre premier
                                        repas américain. Quelques kilomètres
                                        après notre départ, mon porte-bagages se
                                        fait la malle (sans mauvais jeu de
                                        mots). Je me pose donc sur le bas-côté à
                                        la recherche de la vis perdue, sous
                                        l’atmosphère étouffante de l’après-midi.
                                        Cinq minutes plus tard, un jeune garçon
                                        sort de sa maison, un verre de limonade
                                        à la main et me l’offre, une délicate
                                        attention qui mérite cet hommage dans ce
                                        récit. Au Vermont, les routes de
                                        voitures sont constamment agencées d’un
                                        sentier dédié aux engins non motorisés.
                                        Malheureusement, ces chemins sont
                                        confectionnés de terre et se
                                        transforment parfois en pente giboyeuse
                                        et ensablée. Ma monture profita de cette
                                        première occasion pour s’y embourber, me
                                        laissant parcourir à pied un bon
                                        kilomètre, Antoine ricanant doucement du
                                        haut de son vélo tout terrain. Cette
                                        voie boueuse fut suivie de ce que j’ai
                                        renommé la ligne rouge. Un sentier
                                        parsemé de petits graviers sur lequel
                                        mes pneus n’adhèrent pas, mettant mes
                                        cuisses à rude épreuve. Plus désagréable
                                        encore, le guidon vibre, manquant de me
                                        déboîter les poignets, les épaules et le
                                        dos. Arrivés à 17 h dans la seule
                                        auberge du coin, nous prenons le temps
                                        de nous désaltérer et de nous préparer
                                        pour la troisième journée pour laquelle
                                        nous n’avons prévu ni itinéraire ni
                                        point de chute ! .{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">Title 4</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="info">
                                    <h3 className="title">Title 5</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Box marginTop={30}>
                        <Heading size="l">Retour expérience</Heading>
                        <p>
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
                        </p>
                    </Box>
                </Box>
                <Box w={"100%"}>
                    <NextImage
                        layout="responsive"
                        width={200}
                        height={200}
                        src={"https://picsum.photos/200"}
                    />{" "}
                </Box>
            </Flex>
        </Box>
    );
}
