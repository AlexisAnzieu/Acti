/* eslint-disable react/no-unescaped-entities */
import {
    Avatar,
    Box,
    Center,
    Container,
    Divider,
    Heading,
    Highlight,
    Text,
} from "@chakra-ui/react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Tooltip } from "react-tooltip";

import { Locale } from "../../component/NavbarComponent";

export default function Trip({ lang }: any) {
    if (lang === "en") {
        return (
            <Box>
                <Head>
                    <title>Happy coincidence</title>
                    <meta
                        name="og:description"
                        content="From Montreal to Boston, story of a joyful
                        650km cycling odyssey."
                    />
                    <meta
                        name="og:image"
                        content="/images/bostontrip/cover4.JPG"
                    />
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
                    <Box marginTop={30} textAlign={"center"}>
                        <Center>
                            {" "}
                            <Heading
                                fontFamily={"autography"}
                                fontSize={100}
                                mb={10}
                            >
                                {" "}
                                Happy coincidences
                            </Heading>
                        </Center>
                        <Center>
                            {" "}
                            <Heading fontStyle={"italic"} size="l">
                                {" "}
                                From Montreal to Boston, story of a joyous cycle
                                tourism odyssey.
                            </Heading>
                        </Center>

                        <Text
                            mt={"35px"}
                            lineHeight={"25px"}
                            textAlign={"justify"}
                        >
                            It was only two weeks before our departure that we
                            realized what was in store for us: 650 kilometers
                            and 4000 meters of ascent, all in 6 days. In a flash
                            of clarity, we asked chatGPT to suggest a sports
                            program to best prepare us for our physical
                            condition. His response was as scathing as it was
                            chilling. He suggested we cover between 50 and 100
                            kilometers a day for the next 14 days. Did we really
                            want to put so much time and energy into this
                            robotized program? Definitely not. Nevertheless, we
                            decided to test the sensations of a 100-kilometer
                            stage in the saddle. We did it on two of the
                            weekends we had left, without the elevation changes.{" "}
                            <br /> <br /> This was our one and only training for
                            the journey.
                        </Text>
                    </Box>
                    <br />
                    <Box className="timeline">
                        <Box className="outer">
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toknowlton.jpg"
                                        >
                                            <Highlight
                                                query="Day 1 (Montréal - Knowlton)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Day 1 (Montréal - Knowlton)
                                            </Highlight>
                                        </a>
                                    </Box>
                                    <Text>
                                        After a hearty breakfast, we set off at
                                        the crack of 10am with a flourish. The
                                        planning of this first day is as close
                                        to nothing as our preparations.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/chambly.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="A stop in Chambly"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                A stop in Chambly
                                            </Highlight>
                                        </a>{" "}
                                        is necessary to get new panniers. Having
                                        had little or no experience with them,
                                        they detach from the luggage rack with
                                        every jerk, which is a bit impractical.
                                        With this initial setback behind us, we
                                        enjoy{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/richelieu.jpeg"
                                        >
                                            <Highlight
                                                query="our first breakfast"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                our first breakfast
                                            </Highlight>
                                        </a>{" "}
                                        in Saint-Jean de Richelieu, 40 km from
                                        Montreal, with the intention of checking
                                        how far we still have to go. We've
                                        booked an inn with a swimming pool for
                                        this first night, thinking we'd be able
                                        to splash around in it and cool off our
                                        muscles by snack time. But it's 2 p.m.
                                        and we can't hide our disappointment
                                        when we see the remaining 80 kilometers
                                        on the display - goodbye deckchairs.
                                        Identical landscapes of fields as far as
                                        the eye can see follow one another. The
                                        shady cycle paths remain pleasant to
                                        use. The last ten kilometers uphill in
                                        the still-burning sun beside a busy road
                                        put our nerves to the test. This effort
                                        is contrasted by our arrival at the
                                        Auberge de Knowlton, where we are the
                                        only guests. The manager gives us the
                                        keys to his establishment before heading
                                        home. We are now the proud owners of a
                                        50-room building. After applying a bit
                                        of Vaseline, to make the future less
                                        painful in the saddle, we're off to the
                                        marina to pick up some sustenance. We
                                        take the opportunity to slip a toe in
                                        the pool. Tomorrow, we plan to cycle
                                        across the US border, passing through a
                                        small customs post. We hope the
                                        adventure doesn't end there.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toJefferson.jpg"
                                        >
                                            <Highlight
                                                query=" Day 2 (Knowlton - Jeffersonville)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Day 2 (Knowlton -
                                                Jeffersonville)
                                            </Highlight>
                                        </a>
                                    </Box>{" "}
                                    <Text>
                                        We get up at 8 a.m. and check the
                                        weather to avoid bad surprises. Even
                                        today, the thermometer exceeds 30°. We
                                        fill the gourds and we head to the
                                        nearest cafe. A fancy Coffee shop awaits
                                        us with an excellent breakfast{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/cafe.jpeg"
                                        >
                                            <Highlight
                                                query="accompanied by cappuccino"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                accompanied by cappuccino
                                            </Highlight>
                                        </a>{" "}
                                        and oat milk. Finally, we let's get back
                                        on track. The first five kilometers
                                        uphill remain painful and aches take
                                        their toll first appearances. However,
                                        the 20 following km take place downhill
                                        and therefore allows us to appreciate a
                                        quiet warm-up. We see the mountains of
                                        Vermont in the distance, already
                                        regretting the flat lands of the day
                                        before. The end of this morning
                                        teleports us directly to the border
                                        post. The customs officer welcomes us
                                        with kindness of a customs officer, that
                                        is to say he knows where to place the
                                        smile bar, and that is rather low. He
                                        asks us questions at the place of our
                                        first meeting, what we are going to do
                                        in Boston, at what date we arrived in
                                        Canada… In sum of themes that would be
                                        stated to a tourist we just met in a bar
                                        except that there, a bad answer can take
                                        us to the cell. The handcuffs attached
                                        to the bench do not reassure us. Ten
                                        long minutes later,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/poste-frontiere.jpeg"
                                        >
                                            <Highlight
                                                query="we cross the border"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                we cross the border
                                            </Highlight>{" "}
                                        </a>
                                        with our stamped USA passport. The
                                        cliché of the American city is
                                        immediately checked. Dozens of American
                                        flags planted in the gardens float with
                                        the wind and a LED panel hung on the
                                        front of a Catholic church extols the
                                        merits of the village pastor. It is from
                                        now that we take pleasure in meeting
                                        others cyclists and greeting them. In
                                        all, wish you a nice day to all the
                                        people we meet on the road, what it is
                                        sadly impossible to express on board a
                                        car. At 1 p.m., the sun hits hard, we
                                        decide to stop in a city in search of
                                        food. We are taken by surprise, because
                                        the dish main local remains the burger
                                        which unfortunately not included in our
                                        vegetarian diet. We are saved at the
                                        last minute by a Subway next to a gas
                                        station.
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/subway.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="Here we are devouring"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Here we are devouring
                                            </Highlight>{" "}
                                        </a>
                                        our first American meal. A few
                                        kilometers after our departure, a
                                        luggage rack packs away (without bad
                                        pun). We park ourselves on the side of
                                        the road looking for the lost screw,
                                        under the atmosphere sultry in the
                                        afternoon. Five minutes later, a young
                                        boy comes out of his house to offer us a
                                        lemonade, a delicate attention which
                                        deserves this tribute in this story. At
                                        Vermont, car roads are constantly
                                        arranged{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/trail.jpeg"
                                        >
                                            <Highlight
                                                query="with a dedicated trail"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                with a dedicated trail
                                            </Highlight>
                                        </a>{" "}
                                        for a non-motorized vehicles.
                                        Unfortunately, these paths are made of
                                        earth and sometimes transform into
                                        slopes gamey and silted. A tire took
                                        advantage of this opportunity to get
                                        bogged down. This muddy path was
                                        followed of what we renamed the red
                                        line.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/ligne-rouge.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="A path of small
                                             gravel"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                A path of small gravel
                                            </Highlight>
                                        </a>{" "}
                                        on which the road tires do not adhere at
                                        all, putting the thighs to rough test.
                                        Even more unpleasant, the handlebars
                                        vibrate, failing to disengage the
                                        wrists, shoulders and back. Arrivals at
                                        5 p.m. in the only local inn, we take
                                        the time to quench our thirst and
                                        prepare ourselves for the third day for
                                        which we haven't planned any itinerary
                                        or drop-off point!
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toWarren.jpg"
                                        >
                                            <Highlight
                                                query=" Day 3 (Jeffersonville - Warren)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Day 3 (Jeffersonville - Warren)
                                            </Highlight>
                                        </a>
                                    </Box>{" "}
                                    <Text>
                                        The night is short and not very intense,
                                        our room being located above the front
                                        door of the inn which kept clicking. The
                                        time to swallow two slices of muffins
                                        and here we go again for our third
                                        daytime. The unpleasant rest is quickly
                                        forgotten by the 20 km of trails
                                        compounds of
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/pont1.jpeg"
                                        >
                                            <Highlight
                                                query="old railway bridges"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                old railway bridges
                                            </Highlight>
                                        </a>{" "}
                                        and mountainous landscapes. There is
                                        less cyclists than the day before, but
                                        sufficiently to continue enjoying the
                                        warm “good morning”. We let's enjoy{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/mont.jpeg"
                                        >
                                            <Highlight
                                                query=" green mountains as far as
                                                 view"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                green mountains as far as view,
                                            </Highlight>
                                        </a>{" "}
                                        this region of Vermont definitely bears
                                        rightly its name. We grant ourselves a
                                        short break, time to find our next
                                        destination for lunch. We set our sights
                                        on a small café located about twenty
                                        kilometers. After the smoothness of the
                                        path, here we are back on the rigor of
                                        the road a little deafening because of
                                        the 33 tonnes passing by us brisk pace.
                                        However,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/piste.jpeg"
                                        >
                                            <Highlight
                                                query="the emergency lane"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                the emergency lane
                                            </Highlight>{" "}
                                        </a>
                                        /cycle path still leaves us a little
                                        wiggle room. We develop a sixth sense
                                        which consists to guess the size and
                                        appearance of a car just by the sound of
                                        its engine. However, we have difficulty
                                        differentiate large Ford cars from small
                                        trucks. A painful climb was followed by
                                        a 2 km slide at high speed to finish at
                                        a little café in Stowe. Very pleasantly
                                        surprised by the quality of food and
                                        drinks. It is 1:30 p.m. and our only
                                        desire adjoining this meal is to lie
                                        down and sleep. My comrade Antoine{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/antoineronfle.jpeg"
                                        >
                                            <Highlight
                                                query="also starts to snore."
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                also starts to snore.
                                            </Highlight>
                                        </a>{" "}
                                        The second part of the day is a little
                                        more complicated. It starts with buying
                                        a new pair of gloves, because the hands
                                        all appear red due to the shaking of the
                                        handlebars on the trail tracks. Followed
                                        by a 700 meters climb , an intense
                                        effort under 30° which hits the skull
                                        through the helmet. After a some time we
                                        manage to stall our pedaling on our
                                        breath. We we feel like we are learning
                                        to breathe again. It's still so painful,
                                        but at least we are moving forward with
                                        the confidence of arriving safely. We
                                        feel like we are climbing the slope half
                                        after half without ever seeing any the
                                        end. At the top of the hill,
                                        deliverance, the sweet joy of the wind
                                        of the descent annihilates the pain of
                                        the climb. We try to be careful, because
                                        at this speed the slightest difference
                                        in roadway could be fatal to us. This
                                        concentration on the road remains a
                                        routine to which we have fallen quickly
                                        accustomed, a sort of forced meditation
                                        lasting several hours per day. But thie
                                        safely was not enough to avoid the first
                                        puncture, 5 minutes before arrival, what
                                        a godsend! We succeed{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/crevaison.jpeg"
                                        >
                                            <Highlight
                                                query="changing
                                             the inner tube"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                changing the inner tube
                                            </Highlight>
                                        </a>{" "}
                                        promptly and made it to our third rental
                                        cocoon. Little dip in the opened pool
                                        just for us and tasting of a Norman
                                        cider, not really local. Tomorrow, it's
                                        raining, a novelty that we are pleased
                                        to experiment.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toKillington.jpg"
                                        >
                                            <Highlight
                                                query=" Day 4 (Warren - Killington)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Day 4 (Warren - Killington)
                                            </Highlight>
                                        </a>
                                    </Box>{" "}
                                    <Text>
                                        A pleasant silent night compared to the
                                        day before. We take the little American
                                        country lunch we are now used to,
                                        pancakes the size of the plate and
                                        cheese cream mounted on his bagel. We
                                        just placed our buttocks on the saddle
                                        when{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/goutte.jpeg"
                                        >
                                            <Highlight
                                                query="the first drops fall, oh
                                                 joy!"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                the first drops fall, oh joy!
                                            </Highlight>
                                        </a>{" "}
                                        However, we are more concerned by the
                                        tire, poorly recovered from its
                                        puncture, than by the clouds. The next
                                        bike shop is located at about thirty
                                        kilometers. Fortunately, we reside at
                                        the top of a pass and this morning will
                                        only be downhill. Rainy landscapes bring{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/brume.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="a magical atmosphere"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                a magical atmosphere
                                            </Highlight>
                                        </a>
                                        , the mist slipping between the trees
                                        tearful. The smell of wet earth and the
                                        little traffic transform this hour of
                                        worry in time of fullness. In the valley
                                        we are doubled by one, then two, then
                                        five, then around ten cyclists. But what
                                        is going on? A race ! And we find
                                        ourselves in it. We start a final sprint
                                        until the boutique in order to get on
                                        the podium, of course. We then enter
                                        into{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/alibaba.jpeg"
                                        >
                                            <Highlight
                                                query="a real Ali Baba’s cave."
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                a real Ali Baba’s cave.
                                            </Highlight>
                                        </a>{" "}
                                        Bicycles by hundreds, pedals,
                                        derailleurs, handlebars, saddles,
                                        maintained for a long time by old sea
                                        dogs. The atmosphere warmth forces us to
                                        tell our story adventure, a little
                                        shortened due to our dialect not used to
                                        accents so pronounced. The tire is
                                        replaced and the inflated inner tube. We
                                        are ready to face this second part of
                                        day under the guru of Zeus, god of the
                                        rain. But first, we eat a few meters
                                        from there.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/boustifaille.jpeg"
                                        >
                                            <Highlight
                                                query="We observe the cyclists"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                We observe the cyclists
                                            </Highlight>
                                        </a>
                                        defy the torrents of water with pedals.
                                        Lunch break extends over 2 hours. A
                                        large coffee milkshake heralds the end.
                                        The departure is complicated. No more
                                        serotonin in the blood, the clothes are
                                        wet, we slowly begin to find the
                                        downpour long. The landscapes are still
                                        so beautiful and soggy followed by a
                                        rise of around twenty of kilometers.
                                        Streams flow along the road and come
                                        lash out against our slippery wheels
                                        backwards. Splashes, sweats and
                                        torrential rain, painful cocktail of
                                        this end of the day. While we we finally
                                        arrive at the inn, the receptionist
                                        welcomes us with her usual welcome
                                        speech. Our ears quiver when we hear
                                        that the jacuzzi closes shortly. A
                                        jacuzzi you say? Five more minutes later
                                        we jump from the sudden water towards
                                        Holy water. To end the evening, the
                                        chance accomplishing things well,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/gastro.jpeg"
                                        >
                                            <Highlight
                                                query="a semi-gastronomic restaurant"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                a semi-gastronomic restaurant
                                            </Highlight>
                                        </a>{" "}
                                        is located a few meters from our
                                        accommodation. We will be able to refuel
                                        correctly before starting the most
                                        difficult and tortuous day of our
                                        expedition, 100 kilometers on 1100
                                        meters of positive altitude difference,
                                        all in our wet clothes.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toNewburry.jpg"
                                        >
                                            <Highlight
                                                query="Day 5 (Killington - Newburry)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Day 5 (Killington - Newburry)
                                            </Highlight>
                                        </a>
                                    </Box>{" "}
                                    <Text>
                                        We are somewhat apprehensive about this
                                        daytime. Breakfast does not appear
                                        copious, but enough to make us wait
                                        until noon. Being served on place
                                        presents the advantage of quickly
                                        putting our foot down on the stirrup.
                                        During the first five minutes, we rush
                                        down the hour of the day before. Are
                                        linked together then mountainous
                                        landscapes,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/lac.jpeg"
                                        >
                                            <Highlight
                                                query="dotted with lakes"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                dotted with lakes,
                                            </Highlight>
                                        </a>{" "}
                                        smooth routes, little traffic and birds
                                        still alive, happy to sing about spring.
                                        We let’s enjoy these landscapes even
                                        more remaining in the fact that some
                                        kilometers further awaits us steepest
                                        climb of our trip. Finally, she appears
                                        there, in front of us, starting out on a
                                        bumpy road. We don't look at GPS for
                                        fear of demotivate us, we know that we
                                        we will move forward to the end whatever
                                        arrived. We pass three cyclists who come
                                        down and greet us with a big smile, a
                                        bad sign. THE elevation starts at 8%,
                                        ending at 12. And at the same time,
                                        nature soothes effort, we find ourselves
                                        under the trees, the sun does not harass
                                        us directly, it no longer rains and the
                                        temperature appears ideal. Thirty
                                        minutes later, here we are at the top
                                        dripping with sweat, but proud of not
                                        not having set foot on the ground. We
                                        let's grab our water bottles and reward
                                        our muscles with big gulps of water, in
                                        a hurry to begin the descent. Let us
                                        take a moment to talk. The most pleasant
                                        thing is not descent in itself. If we
                                        didn't have fact that going down,
                                        enjoyment would have been less. True
                                        pleasure comes from the emotional gap
                                        between the effort intense and
                                        effortless. We let's enjoy the high
                                        elevations, knowing that after a descent
                                        follows. The adrenaline of speed and
                                        serotonin secreted by the muscles during
                                        the climb transform these a few minutes
                                        in moments of joy pure. We scream, we
                                        scream, we we are the kings of the world
                                        during these short moments. And if
                                        sometimes we let's put our foot down
                                        when effort is not a defeat. Other
                                        struggles will follow on which we will
                                        take the advantage. At the bottom of
                                        this mountain, the transition between
                                        the border of Vermont and New Hampshire
                                        appears harsh. We spend sweets green
                                        landscapes with four lanes American,
                                        sponsored by the dust and carbon
                                        monsters mechanical. The meager cycle
                                        path at our layout is full of holes,
                                        which does not facilitate our progress.
                                        For this afternoon, we decided to go eat
                                        at the only restaurant in the region
                                        which offered dishes vegetarians.
                                        Unfortunately once in front, a
                                        half-abandoned slum awaits us. We are
                                        surrounded by Pizza Hut, McDonald’s and
                                        Burger King which reigns supreme in its
                                        valleys infernal. Our only solution
                                        therefore consists of looking for what
                                        eat in the local supermarket then
                                        consume it{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/parking.jpeg"
                                        >
                                            <Highlight
                                                query="in the parking lot"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                in the parking lot.
                                            </Highlight>
                                        </a>{" "}
                                        We won't stay there long, great regret
                                        of our thighs again hot. We start with a
                                        gentle path in the forest a bit bumpy
                                        for road tires.We cross once again a{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/pont2.jpeg"
                                        >
                                            {" "}
                                            <Highlight
                                                query="old railway bridge"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                old railway bridge
                                            </Highlight>
                                        </a>{" "}
                                        and we meet two children driving each
                                        their quad, the parents to the rear. Now
                                        let's talk about elevation calculations
                                        for applications cartography. For this
                                        adventure, we we are equipped with
                                        Google Maps and Komoot in order to
                                        optimize the route by depending on the
                                        different styles of roadways, traffic
                                        and inclinations. Google Maps is not
                                        really not strong with angles. Komoot is
                                        not not very precise. It is therefore
                                        complicated to estimate with certainty
                                        in what situation we will find ourselves
                                        in the next five kilometers. This
                                        afternoon undoubtedly remained our worst
                                        disillusionment with effort physics that
                                        we still had to accomplish, Never mind.
                                        Kicking earth, hydration and swearing,
                                        we we arrive at our destination. We had
                                        booked this hotel the day before without
                                        much know what to prepare for and once
                                        the more we are not disappointed with
                                        the place. Being in low season, the
                                        high-end lodges lie empty and
                                        financially accessible. Swimming pool
                                        awaits us, it is high time for a splash.
                                        Tonight the only pub in the area is
                                        Irish, our sights are therefore set on
                                        fish & chips, always too regional. A
                                        small concert is at appointment, as well
                                        as an accent that wants more and more
                                        incomprehensible for our chauvinistic
                                        ears. More ... than two days, in
                                        potential rain, and to us Boston!
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toMerrimack.jpg"
                                        >
                                            <Highlight
                                                query=" Day 6 (Newburry - Merrimack)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Day 6 (Newburry - Merrimack)
                                            </Highlight>
                                        </a>
                                    </Box>{" "}
                                    <Text>
                                        Today is announced mentally complicated.
                                        The rain is back, not of life-saving
                                        restoration along the way and the hotel
                                        we booked is located on a highway area.
                                        We feel Boston getting closer with its
                                        zone industrial. We start the day with
                                        breakfast at the bakery local which is
                                        neither more nor less than a distributor
                                        equipped with an oven which bakes a
                                        bagel. We definitely don't have can't
                                        wait for this day to start. However,
                                        once on the bike and first aches behind
                                        us, we return to appreciating the nature
                                        that surrounds us. All the more that the
                                        latter has acquired a new capacity,
                                        wind. We had experienced extreme heat
                                        and rain. This is what we are
                                        experiencing now the resistance of the
                                        air against our movements. The descents
                                        turn into flat land, flat land is turn
                                        into climbs and climbs as for them, they
                                        do not offer more resistance than usual
                                        due to our slowness. We could complain
                                        about our fate, however this wind has us
                                        saved from some problems respiratory.
                                        Canadian forests are engulfed in flames
                                        and generate ashes thousands of
                                        kilometers away all around, Montreal is
                                        what that day{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/vent.jpeg"
                                        >
                                            <Highlight
                                                query="the most polluted city in the world"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                the most polluted city in the
                                                world world.
                                            </Highlight>
                                        </a>{" "}
                                        What could be better than our way of
                                        carbon-free transport so as not to
                                        worsen the situation ? The wind that
                                        comes to us front keeps particles away
                                        from us and allows us to breathe air
                                        clean straight from the Gulf of Mexico.
                                        Against the odds therefore, but the
                                        healthy and serene lungs. We hesitate to
                                        turn around in front{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/danger.jpeg"
                                        >
                                            <Highlight
                                                query="a sign announcing a
                                                 hazard"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                a sign announcing a hazard
                                            </Highlight>
                                        </a>{" "}
                                        but let's decide to move forward. Wise
                                        decision because we are tumbling onto{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/parc.jpeg"
                                        >
                                            <Highlight
                                                query="a magnificent regional park"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                a magnificent regional park
                                            </Highlight>
                                        </a>{" "}
                                        just before our mid-day break. The
                                        journey appeared less strenuous than we
                                        thought so. Not a single drop of rain
                                        until the flood at the beginning
                                        afternoon, while we we found inside a
                                        convenience store to buy our lunch
                                        there. The happy coincidence striking
                                        for the umpteenth times. As the water
                                        fell on the bitumen, we met of an
                                        interesting character. He complimented
                                        our bikes before starting to tell his
                                        life story. According to him, he was the
                                        creator of clip-on pedals and had the
                                        idea while working at Salomon in France
                                        at the time for ski bindings. We are
                                        some little surprised to come across
                                        such an individual brilliant and known
                                        in his field in a rural village and far
                                        from everything. Such a American
                                        businessman, he praises the merits of
                                        his genius and we offers a discount on
                                        your next discovery: new anchors
                                        futuristic for skis. We appear doubtful
                                        as to the veracity of his words,
                                        nevertheless after verification we
                                        realize that we actually met the
                                        inventor of these clips which have
                                        allowed you to struggle less when going
                                        uphill. The storm stops. We resume the
                                        route to our destination: a highway
                                        area. Here the car is queen, no corridor
                                        for pedestrians, no bicycle lockers in
                                        the accommodation. People go from the
                                        hotel at the restaurant in their
                                        pick-up, at hell the few minutes of
                                        walking outside. Fortunately, we are not
                                        only passing, because tomorrow is the
                                        big day. It’s the arrival in Boston.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/toBoston.jpg"
                                        >
                                            <Highlight
                                                query=" Day 7 (Merrimack - Boston)"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Day 7 (Merrimack - Boston)
                                            </Highlight>
                                        </a>
                                    </Box>{" "}
                                    <Text>
                                        Not very restorative sleep in this area
                                        highway, but pleasantly surprised by the
                                        well-stocked breakfast which will carry
                                        us over the 80 km remaining. The wind is
                                        still present and ubiquitous traffic
                                        when we we begin the first kilometers.
                                        We let's cross{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/aire.jpeg"
                                        >
                                            <Highlight
                                                query="industrial zones"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                industrial zones
                                            </Highlight>
                                        </a>{" "}
                                        housed between Boston and the mountains.
                                        The pick-ups are speeding past us pace,
                                        the bicycle does not appear definitely
                                        not welcome here. We will force our way
                                        through as long as although poorly
                                        during these 30 km which we separate
                                        from the cycle lane. On my way, Google
                                        Maps, the specialist in shortcuts, makes
                                        us borrow the forest. Even if{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/foret.jpeg"
                                        >
                                            <Highlight
                                                query="we must set foot
                                                 earth,"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                we must set foot earth,
                                            </Highlight>
                                        </a>{" "}
                                        it's very pleasant to smell the foam
                                        trees, and earth, again damp from the
                                        day before. We cross by three times a
                                        walker with his dog which shows us the
                                        path to take. He tumbling from who knows
                                        where from behind the fagots. It looked
                                        like a camera hidden. Finally, the
                                        shaded corridor so expected brings us in
                                        one go to Boston. The pick-ups are made
                                        gradually rarer, replaced by city cars.
                                        The drivers appear more and more
                                        respectful and the lanes dedicated to
                                        cycling are located progressively wider.
                                        In counterpart, fewer greetings from the
                                        share of other cyclists, more accustomed
                                        to seeing others. As and when as we move
                                        deeper into the city,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/boston.jpeg"
                                        >
                                            <Highlight
                                                query="buildings are growing"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                buildings are growing
                                            </Highlight>
                                        </a>{" "}
                                        around us. The first skyscrapers
                                        emerging. The red lights every
                                        intersection slows us down. We are
                                        passing ahead of Harvard, then MIT, but
                                        we we only have one idea in mind. Before
                                        even take photos in front of these
                                        famous institutions. It's from put down
                                        our bikes, wash our things, then wash
                                        ourselves. And say that finally we did
                                        it. We have it do.
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box marginTop={30}>
                        <Center mb={10}>
                            {" "}
                            <Heading size="xl">Rétrospectives</Heading>
                        </Center>
                        <Text
                            my={10}
                            fontStyle={"italic"}
                            lineHeight={"25px"}
                            textAlign={"justify"}
                        >
                            <Avatar
                                size={"2xl"}
                                mr={4}
                                style={{ float: "left" }}
                                name="Antoine Ganard"
                                src="/images/bostontrip/antoine.jpeg"
                            />
                            « Freedom. This is what struck me during this
                            journey. The freedom to get up when you're ready, to
                            eat when you are hungry, go to bed when you are
                            fatigue. No schedule to respect, just time to
                            appreciate. It is extraordinary, moreover, the
                            notion of time on an adventure like this. We sees so
                            many landscapes, people or even of architecture in
                            one day, that it gives us seems to last several. In
                            one week, I had the impression of living for several
                            months. And yet, I was less bored than during the
                            few hours of driving on the way back. I have
                            experienced every 100% moment, and how good does it
                            feel. THE climbs that burn the thighs and reduce
                            butt in pieces, made me surpass myself many times.
                            By digging deep within myself I realized that I was
                            capable. In fact, if the mind wants, the body will
                            follow. And then, after the climbs come the
                            descents. They me made them instantly forget the
                            pain in their legs, the pouring rain or even the
                            heat. Every sensation is increased tenfold on the
                            bike, as if the body came back to life. That’s
                            actually life. Make every moment an intense and
                            welcome these feelings. Ideally, share all these
                            moments to keep track of them again more memorable.
                            For that, I warmly thank Alexis for accompanying me
                            on this trip. 15 years since we know each other, and
                            yet I had the impression of just met him during
                            these 7 days. SO now all we have to do is plan the
                            next trip. Because yes, it is unthinkable to don’t
                            start again. »
                        </Text>
                        <Divider />
                        <Text
                            my={10}
                            fontStyle={"italic"}
                            lineHeight={"25px"}
                            textAlign={"justify"}
                        >
                            <Avatar
                                size={"2xl"}
                                mr={4}
                                style={{ float: "left" }}
                                name="Alexis anzieu"
                                src="/images/bostontrip/alexis.jpeg"
                            />
                            «650km, on paper this number left me skeptical about
                            my physical abilities, moreover with training close
                            to nothing. I do not I didn't doubt I would succeed
                            but I feared having to endure constant effort during
                            the journey. Strength is to realize that it only
                            took me a day to adapt to this new routine and
                            experience extraordinary experience. More
                            concretely, let's stop justifying our inactions by
                            our fear of failure. Give ourselves the opportunity
                            to fail concretely instead of letting ourselves be
                            influenced by our own pessimistic scenarios. <br />
                            This journey also allowed me to quench my thirst
                            adventure without damaging our planet. He had me
                            demonstrated that other imaginations were within
                            reach of pedals without necessarily needing to
                            teleport to the other side of the globe. To all
                            those and to those who want to escape from their
                            daily life by traveling the world one week at a
                            time, I invites you to embark on an adventure
                            similar cycle tourism, at your own pace, and so take
                            care of the living.»
                        </Text>
                    </Box>
                    <Box
                        fontSize={30}
                        fontFamily={"autography"}
                        textAlign={"right"}
                    >
                        {" "}
                        Written on June 16, 2023 in Montreal by
                        <Box fontSize={80}>Antoine & Alexis</Box>
                    </Box>
                </Container>
            </Box>
        );
    }

    if (lang === "fr") {
        return (
            <Box>
                <Head>
                    <title>Heureux hasards</title>
                    <meta
                        name="og:description"
                        content="De Montréal à Boston, récit d’une joyeuse
                                odyssée cyclotouristique de 650km."
                    />
                    <meta
                        name="og:image"
                        content="/images/bostontrip/cover4.JPG"
                    />
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
                    <Box marginTop={30} textAlign={"center"}>
                        <Center>
                            {" "}
                            <Heading
                                fontFamily={"autography"}
                                fontSize={100}
                                mb={10}
                            >
                                {" "}
                                Heureux hasards
                            </Heading>
                        </Center>
                        <Center>
                            {" "}
                            <Heading fontStyle={"italic"} size="l">
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
                            kilomètres et 4000 mètres de dénivelé positif, le
                            tout en 6 jours. Dans un éclair de lucidité, nous
                            demandons à chatGPT de nous suggérer un programme
                            sportif afin de préparer au mieux notre condition
                            physique. Sa réponse demeura tout aussi cinglante
                            que glaçante. Il nous proposait de parcourir entre
                            50 et 100 kilomètres par jour, durant les 14
                            prochains jours. Avions-nous vraiment envie de
                            mettre autant de temps et d’énergie dans ce
                            programme robotisé ? Définitivement non. Nous
                            décidons tout de même de tester les sensations d’une
                            étape de 100 kilomètres sur une selle. Ce que nous
                            effectuons à deux reprises sur les week-ends qu’il
                            nous restait, sans les dénivelés. <br /> <br /> Ce
                            fut notre seul et unique entraînement pour ce
                            périple.
                        </Text>
                    </Box>
                    <br />
                    <Box className="timeline">
                        <Box className="outer">
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
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
                                    </Box>
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
                                                query="Un arrêt à Chambly"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Un arrêt à Chambly
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
                                                query="notre premier déjeuner"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                notre premier déjeuner
                                            </Highlight>
                                        </a>{" "}
                                        à Saint-Jean de Richelieu , situé à 40
                                        km de Montréal, dans l’intention de
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
                                        s’arrêter là.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
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
                                    </Box>{" "}
                                    <Text>
                                        Nous nous levons à 8 h et vérifions la
                                        météo afin de ne pas avoir de mauvaises
                                        surprises. Encore aujourd’hui, le
                                        thermomètre dépasse les 30°. Nous
                                        remplissons les gourdes et nous nous
                                        dirigeons vers le café le plus proche.
                                        Café qui ne paye pas de mine avec un
                                        excellent petit déjeuner{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/cafe.jpeg"
                                        >
                                            <Highlight
                                                query="accompagné de son cappuccino"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                accompagné de son cappuccino
                                            </Highlight>
                                        </a>{" "}
                                        au lait d’avoine. Enfin, nous nous
                                        remettons en route. Les cinq premiers
                                        kilomètres en montée demeurent
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
                                        Dix longues minutes plus tard,{" "}
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
                                            </Highlight>{" "}
                                        </a>
                                        notre premier repas américain. Quelques
                                        kilomètres après notre départ, un
                                        porte-bagages se fait la malle (sans
                                        mauvais jeu de mots). Nous nous posons
                                        donc sur le bas-côté à la recherche de
                                        la vis perdue, sous l’atmosphère
                                        étouffante de l’après-midi. Cinq minutes
                                        plus tard, un jeune garçon sort de sa
                                        maison, une limonade à la main et nous
                                        l’offre, une délicate attention qui
                                        mérite cet hommage dans ce récit. Au
                                        Vermont, les routes de voitures sont
                                        constamment agencées{" "}
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
                                                d’un sentier dédié
                                            </Highlight>
                                        </a>{" "}
                                        aux engins non motorisés.
                                        Malheureusement, ces chemins sont
                                        confectionnés de terre et se
                                        transforment parfois en pentes
                                        giboyeuses et ensablées. Une monture
                                        profita de cette occasion pour s’y
                                        embourber. Cette voie boueuse fut suivie
                                        de ce que l’on renomma la ligne rouge.{" "}
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
                                                graviers
                                            </Highlight>
                                        </a>{" "}
                                        sur lequel les pneus de route n’adhèrent
                                        pas , mettant les cuisses à rude
                                        épreuve. Plus désagréable encore, le
                                        guidon vibre, manquant de déboîter les
                                        poignets, les épaules et le dos. Arrivés
                                        à 17 h dans la seule auberge du coin,
                                        nous prenons le temps de nous désaltérer
                                        et de nous préparer pour la troisième
                                        journée pour laquelle nous n’avons prévu
                                        ni itinéraire ni point de chute !
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
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
                                    </Box>{" "}
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
                                        chaleureux « good morning ». Nous nous
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
                                                vue,
                                            </Highlight>
                                        </a>{" "}
                                        cette région du Vermont porte décidément
                                        bien son nom . Nous nous octroyons une
                                        courte pause, le temps de trouver notre
                                        prochaine destination pour le déjeuner.
                                        Nous jetons notre dévolu sur un petit
                                        café situé à une vingtaine de
                                        kilomètres. Après la douceur du sentier,
                                        nous voici de retour sur la rigueur de
                                        la route un peu assourdissante à cause
                                        des 33 tonnes passant à côté de nous de
                                        vives allures. Toutefois,{" "}
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
                                                la bande d’arrêt d’urgence
                                            </Highlight>{" "}
                                        </a>
                                        /piste cyclable nous laisse quand même
                                        un peu de marge de manœuvre. Nous
                                        développons un sixième sens qui consiste
                                        à deviner la taille et l’apparence d’une
                                        voiture au seul bruit de son moteur.
                                        Nous avons cependant du mal à
                                        différencier les gros camions de
                                        marchandises des énormes trucks. Une
                                        montée douloureuse fut suivie d’une
                                        glissade de 2 km à grande allure pour
                                        finir dans le petit café de Stowe. Très
                                        agréablement surpris par la qualité de
                                        la nourriture et des breuvages. Il est
                                        13 h 30 et notre seule envie jouxtant ce
                                        repas est de s’allonger et dormir. Mon
                                        camarade Antoine{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/antoineronfle.jpeg"
                                        >
                                            <Highlight
                                                query="commence
                                                d’ailleurs à ronfler."
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                commence d’ailleurs à ronfler.
                                            </Highlight>
                                        </a>{" "}
                                        La deuxième partie de la journée est un
                                        peu plus compliquée. Elle démarre par
                                        l’achat d’une nouvelle paire de gants,
                                        car les mains apparaissent toutes rouge
                                        dû aux tremblements du guidon sur les
                                        pistes de sentier. S’ensuivit une montée
                                        de dénivelé de 700 mètres en une
                                        trentaine de minutes, un effort intense
                                        accompagné des 30° qui tape sur le crâne
                                        à travers le casque. Au bout d’un
                                        certain temps, nous arrivons à caler
                                        notre pédalage sur notre souffle. Nous
                                        avons l’impression de réapprendre à
                                        respirer. C’est toujours aussi pénible,
                                        mais au moins nous avançons avec la
                                        confiance d’arriver à bon port. Nous
                                        avons l’impression de grimper la pente
                                        moitié après moitié sans jamais en voir
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
                                        effet, voici venue l’heure de la
                                        première crevaison, 5 minutes avant
                                        l’arrivée, quelle aubaine ! Nous
                                        réussissons cependant à{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/crevaison.jpeg"
                                        >
                                            <Highlight
                                                query="changer
                                                la chambre à air"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                changer la chambre à air
                                            </Highlight>
                                        </a>{" "}
                                        promptement et nous voilà parvenus à
                                        notre troisième cocon locatif. Petit
                                        plongeon dans la piscine ouverte juste
                                        pour nous et dégustation d’un cidre
                                        normand pas tout à fait local. Demain,
                                        il pleut, une nouveauté que nous avons
                                        hâte d’expérimenter.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
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
                                    </Box>{" "}
                                    <Text>
                                        Une agréable nuit silencieuse comparée à
                                        la veille. Nous prenons le petit
                                        déjeuner américain de campagne dont nous
                                        avons maintenant l’habitude, pancakes de
                                        la taille de l’assiette et fromage à la
                                        crème monté sur son bagel. Au moment de
                                        poser les fesses sur la selle,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/goutte.jpeg"
                                        >
                                            <Highlight
                                                query="les premières gouttes
                                                tombent, ô joie !"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                les premières gouttes tombent, ô
                                                joie !
                                            </Highlight>
                                        </a>{" "}
                                        Cependant, nous sommes plus préoccupé
                                        par le pneu, mal remis de sa crevaison,
                                        que par les nuages qui s’affolent. La
                                        prochaine boutique de vélo est située à
                                        une trentaine de kilomètres.
                                        Heureusement, nous résidons en haut d’un
                                        col et ce matin ne sera que descente.
                                        Les paysages pluvieux apportent{" "}
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
                                                une atmosphère féerique
                                            </Highlight>
                                        </a>
                                        , la brume se glissant entre les arbres
                                        larmoyants. L’odeur de la terre mouillée
                                        et le peu de circulation transforment
                                        cette heure d’inquiétude en temps de
                                        plénitude. Dans la vallée, nous nous
                                        faisons doubler par un, puis deux, puis
                                        cinq, puis une dizaine de cyclistes.
                                        Mais que se passe-t-il donc ? Une course
                                        ! Et nous nous trouvons dedans. Nous
                                        entamons un dernier sprint jusqu’à la
                                        boutique afin de monter sur le podium,
                                        bien évidemment. Nous entrons alors dans{" "}
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
                                                une vraie caverne d’Ali Baba.
                                            </Highlight>
                                        </a>{" "}
                                        Des vélos par centaines, des pédaliers,
                                        des dérailleurs, des guidons, des
                                        selles, entretenus de longue date par de
                                        vieux loups de mer. L’ambiance
                                        chaleureuse nous force à conter notre
                                        aventure, un peu écourtée du fait de
                                        notre patois peu habitué à des accents
                                        si prononcés. Le pneu est remplacé et la
                                        chambre à air gonflée. Nous sommes prêts
                                        à affronter cette deuxième partie de
                                        journée sous le gourou de Zeus, dieu de
                                        la pluie. Mais avant, place à la
                                        boustifaille située à quelques mètres de
                                        là.{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/boustifaille.jpeg"
                                        >
                                            <Highlight
                                                query=" Nous observons les cyclistes"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                Nous observons les cyclistes
                                            </Highlight>
                                        </a>
                                        défier les torrents d’eau à coup de
                                        pédales. La pause déjeuner se prolonge
                                        sur 2 heures. Un gros milk-shake au café
                                        en sonne le glas. Le départ est
                                        compliqué. La sérotonine ne subsiste
                                        plus dans le sang, les vêtements sont
                                        mouillés, nous commençons doucement à
                                        trouver l’averse longue. Les paysages
                                        toujours aussi beaux et détrempés se
                                        succèdent par une montée d’une vingtaine
                                        de kilomètres. Des ruisseaux coulent le
                                        long de la route et viennent se
                                        déchaîner contre nos roues qui glissent
                                        à reculons. Éclaboussures, sueurs et
                                        pluie torrentielle, pénible cocktail de
                                        cette fin de journée. Tandis que nous
                                        arrivons enfin à l’auberge, le
                                        réceptionniste nous accueille avec son
                                        discours habituel de bienvenue. Nos
                                        oreilles frémissent quand nous entendons
                                        que le jacuzzi ferme sous peu. Un
                                        jacuzzi dites-vous ? Cinq minutes plus
                                        tard, nous sautons de l’eau subite vers
                                        l’eau bénite. Pour finir la soirée, le
                                        hasard accomplissant bien les choses,{" "}
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
                                            </Highlight>
                                        </a>{" "}
                                        se situe à quelques mètres de notre
                                        hébergement. Nous allons pouvoir nous
                                        ravitailler correctement avant d’entamer
                                        la plus difficile et tortueuse journée
                                        de notre expédition, 100 kilomètres sur
                                        1100 mètres de dénivelé positif, le tout
                                        dans nos habits humides.
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
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
                                    </Box>{" "}
                                    <Text>
                                        Nous appréhendons quelque peu cette
                                        journée. Le petit déjeuner n’apparaît
                                        pas copieux, mais suffira à nous faire
                                        patienter jusqu’à midi. Étant servi sur
                                        place, il présente l’avantage de nous
                                        permettre de poser rapidement le pied
                                        sur l’étrier. Durant les cinq premières
                                        minutes, nous dévalons l’heure
                                        d’ascension de la veille. S’enchaînent
                                        ensuite des paysages montagneux,{" "}
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
                                                parsemés de lacs,
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
                                        Prenons d’ailleurs un instant pour en
                                        parler. Le plus plaisant n’est pas la
                                        descente en elle-même. Si nous n’avions
                                        fait que descendre, la jouissance aurait
                                        été moindre. Le vrai plaisir provient de
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
                                        infernales. Notre seule solution
                                        consiste donc à chercher de quoi se
                                        sustenter dans le supermarché du coin
                                        puis de le consommer{" "}
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
                                                sur le parking.
                                            </Highlight>
                                        </a>{" "}
                                        Nous n’y resterons pas longtemps, au
                                        grand regret de nos cuisses encore
                                        chaudes. Nous démarrons par un doux
                                        sentier dans la forêt un brin cahoteuse
                                        pour les pneus de route.Nous traversons
                                        une fois de plus un{" "}
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
                                                ancien pont ferroviaire
                                            </Highlight>
                                        </a>{" "}
                                        et croisons deux enfants conduisant
                                        chacun leur quad, les parents à
                                        l’arrière. Parlons maintenant des
                                        calculs de dénivelé des applications de
                                        cartographie. Pour cette aventure, nous
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
                                        et à nous Boston !
                                    </Text>
                                </Box>
                            </Box>
                            <Box className="card">
                                <Box className="info">
                                    <Box className="title">
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
                                    </Box>{" "}
                                    <Text>
                                        Aujourd’hui s’annonce mentalement
                                        compliqué. La pluie est de retour, pas
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
                                        à la ronde, Montréal est d’ailleurs ce
                                        jour-là{" "}
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
                                                la ville la plus polluée au
                                                monde.
                                            </Highlight>
                                        </a>{" "}
                                        Quoi de mieux que notre mode de
                                        transport décarboné pour ne pas aggraver
                                        la situation ? Le vent qui nous arrive
                                        de face garde les particules loin de
                                        nous et nous permet de respirer un air
                                        propre venu tout droit du golfe du
                                        Mexique. À contrevent donc, mais les
                                        poumons sains et sereins. Nous hésitons
                                        à faire demi-tour devant{" "}
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
                                                une pancarte présageant un
                                                danger
                                            </Highlight>
                                        </a>{" "}
                                        mais décidons d’aller de l’avant. Sage
                                        décision car nous déboulons sur{" "}
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
                                                un magnifique parc régional
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
                                    <Box className="title">
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
                                    </Box>{" "}
                                    <Text>
                                        Sommeil peu réparateur sur cette aire
                                        d’autoroute, mais agréablement surpris
                                        par le petit déjeuner bien achalandé qui
                                        nous transportera sur les 80 km
                                        restants. Le vent demeure encore présent
                                        et le trafic ubiquitaire lorsque nous
                                        entamons les premiers kilomètres.Nous
                                        traversons{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/aire.jpeg"
                                        >
                                            <Highlight
                                                query="  les zones
                                                industrielles"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                les zones industrielles
                                            </Highlight>
                                        </a>{" "}
                                        logées entre Boston et les montagnes.
                                        Les pick-up nous dépassent à vive
                                        allure, le bicycleux n’apparaît
                                        décidément pas comme étant le bienvenu
                                        ici. Nous nous forcerons un passage tant
                                        bien que mal durant ces 30 km qui nous
                                        séparent de la voie cyclable. En chemin,
                                        Google Maps, le spécialiste des
                                        raccourcis, nous fait emprunter la
                                        forêt. Même si{" "}
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
                                                nous devons mettre le pied à
                                                terre,
                                            </Highlight>
                                        </a>{" "}
                                        c’est très agréable de humer la mousse
                                        des arbres, et de la terre, encore
                                        humide de la veille. Nous croisons par
                                        trois fois un promeneur avec son chien
                                        qui nous indique la piste à prendre. Il
                                        déboulait d’on ne sait où de derrière
                                        les fagots. On aurait dit une caméra
                                        cachée. Enfin, le corridor ombragé tant
                                        attendu nous amène d’une traite à
                                        Boston. Les pick-up se font
                                        graduellement plus rares, remplacés par
                                        des voitures citadines. Les conducteurs
                                        apparaissent de plus en plus respectueux
                                        et les voies dédiées au vélo se trouvent
                                        progressivement plus larges. En
                                        contrepartie, moins de salutations de la
                                        part des autres cyclistes, davantage
                                        habitués à en voir d’autres. Au fur et à
                                        mesure que nous nous enfonçons dans la
                                        ville,{" "}
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            href="/images/bostontrip/boston.jpeg"
                                        >
                                            <Highlight
                                                query=" les
                                                bâtiments grandissent"
                                                styles={{
                                                    borderRadius: "50px",
                                                    px: "2",
                                                    py: "1",
                                                    bg: "green.100",
                                                }}
                                            >
                                                les bâtiments grandissent
                                            </Highlight>
                                        </a>{" "}
                                        autour de nous. Les premiers gratte-ciel
                                        émergent. Les feux rouges à chaque
                                        intersection nous freinent. Nous passons
                                        devant Harvard, puis le MIT, mais nous
                                        n’avons qu’une seule idée en tête. Avant
                                        même de se prendre en photos au devant
                                        de ces fameuses institutions. C’est de
                                        poser nos vélos, laver nos affaires,
                                        puis nous débarbouiller. Et dire
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
                            <Heading size="xl">Rétrospectives</Heading>
                        </Center>
                        <Text
                            my={10}
                            fontStyle={"italic"}
                            lineHeight={"25px"}
                            textAlign={"justify"}
                        >
                            <Avatar
                                size={"2xl"}
                                mr={4}
                                style={{ float: "left" }}
                                name="Antoine Ganard"
                                src="/images/bostontrip/antoine.jpeg"
                            />
                            « La liberté. C’est ça qui m’a marqué pendant ce
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
                                size={"2xl"}
                                mr={4}
                                style={{ float: "left" }}
                                name="Alexis anzieu"
                                src="/images/bostontrip/alexis.jpeg"
                            />
                            «650km, sur le papier ce nombre me laissait
                            sceptique quant à mes capacités physiques, de
                            surcroît avec un entraînement proche du néant. Je ne
                            doutais pas d’y arriver mais je redoutais de subir
                            un effort constant durant le trajet. Force est de
                            constater qu’il ne me fallut qu’une journée pour
                            m’adapter à cette nouvelle routine et vivre une
                            expérience hors du commun. Plus concrètement,
                            arrêtons de justifier nos inactions par notre peur
                            de l’échec. Offrons-nous l’opportunité d’échouer
                            concrètement au lieu de nous laisser influencer par
                            nos propres scénarios pessimistes. <br />
                            Ce périple m’a aussi permis d’assouvir ma soif
                            d’aventure sans dégrader notre planète. Il m’a
                            démontré que d’autres imaginaires étaient à portée
                            de pédales sans nécessairement avoir besoin de se
                            téléporter à l’autre bout du globe. À toutes celles
                            et à ceux qui désirent s’évader de leur quotidien en
                            parcourant le monde une semaine à la fois, je vous
                            invite à vous lancer dans une aventure
                            cyclotouristique similaire, à votre rythme, et ainsi
                            prendre soin du Vivant.»
                        </Text>
                    </Box>
                    <Box
                        fontSize={30}
                        fontFamily={"autography"}
                        textAlign={"right"}
                    >
                        {" "}
                        Rédigé le 16 Juin 2023 à Montréal par
                        <Box fontSize={80}>Antoine & Alexis</Box>
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
