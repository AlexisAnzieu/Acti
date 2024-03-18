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
            name="image"
            property="og:image"
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
              <Heading fontFamily={"autography"} fontSize={100} mb={10}>
                {" "}
                Happy coincidences
              </Heading>
            </Center>
            <Center>
              {" "}
              <Heading fontStyle={"italic"} size="l">
                {" "}
                From Montreal to Boston, the story of a joyful cycling odyssey.
              </Heading>
            </Center>

            <Text mt={"35px"} lineHeight={"25px"} textAlign={"justify"}>
              It was only two weeks before our departure that we realized what
              awaited us: 650 kilometers and 4000 meters of positive elevation
              gain, all in 6 days. In a moment of clarity, we asked ChatGPT to
              suggest a sports program to best prepare our physical condition.
              Its response was as sharp as it was chilling. It proposed that we
              cover between 50 and 100 kilometers per day over the next 14 days.
              Did we really want to invest so much time and energy into this
              robotic program? Definitely not. Nevertheless, we decided to test
              the sensations of a 100-kilometer stage on a saddle. This we did
              twice on the remaining weekends, without the elevation changes.{" "}
              <br /> <br /> This was our one and only training for this journey.
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
                    We set off carefree around 10 am, after indulging in a
                    hearty breakfast. The planning for this first day resembled
                    our preparations, close to nothing.{" "}
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
                    was necessary to acquire new saddlebags. Having not
                    experienced them much, they detached from the rack with
                    every bump, quite impractical. Once past this initial
                    setback, we enjoyed{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/richelieu.jpeg"
                    >
                      <Highlight
                        query="our first lunch"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        our first lunch
                      </Highlight>
                    </a>{" "}
                    in Saint-Jean de Richelieu, located 40 km from Montreal,
                    intending to check how much distance remained. For our first
                    night, we had booked an inn with a pool, thinking we could
                    wade in and cool our muscles at snack time. But it's 2 pm,
                    and we struggle to hide our disappointment upon seeing the
                    remaining 80 kilometers ahead, farewell to lounge chairs.
                    The identical landscapes of endless fields unfold. The
                    shaded bike paths remain pleasant to use. The last ten
                    kilometers uphill under the still scorching sun next to a
                    busy road test our nerves. Contrastingly, our arrival at the
                    Knowlton inn unfolds tranquilly; we are the only guests. The
                    manager hands us the keys to his establishment before
                    heading home. We are now the proud owners of a 50-room
                    building. After applying a bit of reparative vaseline to
                    make future rides less painful, we set off for the marina to
                    get something to eat. Along the way, we take the opportunity
                    to dip a toe in the pool water. Tomorrow, we plan to cross
                    the American border by bicycle through a small customs post.
                    We hope the adventure won't end there.
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
                        Day 2 (Knowlton - Jeffersonville)
                      </Highlight>
                    </a>
                  </Box>{" "}
                  <Text>
                    We rise at 8 am and check the weather to avoid any
                    unpleasant surprises. Again today, the thermometer exceeds
                    30°C. We fill our water bottles and head to the nearest
                    café. A nondescript café serves an excellent breakfast{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/cafe.jpeg"
                    >
                      <Highlight
                        query=" accompanied by oat milk cappuccino"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        accompanied by oat milk cappuccino
                      </Highlight>
                    </a>{" "}
                    Finally, we hit the road again. The first five kilometers
                    uphill remain painful, and the soreness begins to appear.
                    However, the following 20 kilometers downhill allow us to
                    enjoy a gentle warm-up. We catch sight of the Vermont
                    mountains in the distance, already regretting the flat
                    terrain of the previous day. The end of this morning brings
                    us directly to the border crossing. The customs officer
                    welcomes us with the courtesy of a customs officer, meaning
                    he knows where to set the bar for a smile, and it's rather
                    low. He asks us questions about where we first met, what we
                    plan to do in Boston, what date we arrived in Canada...
                    Essentially, topics one would bring up to a tourist just met
                    in a bar except that here, a wrong answer could land us in a
                    cell. The handcuffs fixed to the bench don't reassure us.
                    Ten long minutes later,{" "}
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
                    with our stamped USA passports. The cliché of the American
                    town is immediately verified. Dozens of American flags
                    planted in gardens flutter in the wind, and a LED sign hung
                    on the front of a Catholic church extols the virtues of the
                    village pastor. From this second stage onward, we enjoy
                    crossing paths with other cyclists and greeting them.
                    Overall, wishing everyone we meet on the road a good day,
                    something sadly impossible to express from inside a car. At
                    1 pm, the sun beats down hard, and we decide to stop in a
                    town in search of food. We are taken aback because the local
                    main dish is burgers, which unfortunately do not fit into
                    our vegetarian diet. We are saved at the last minute by a
                    Subway next to a gas station.
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
                    our first American meal. A few kilometers after our
                    departure, a saddlebag decides to take a leap (pun
                    unintended). So, we pull over to the side of the road in
                    search of the lost screw, amidst the stifling afternoon
                    atmosphere. Five minutes later, a young boy emerges from his
                    house, lemonade in hand, and offers it to us, a delicate
                    gesture worthy of mention in this narrative. In Vermont, car
                    roads are constantly accompanied{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/trail.jpeg"
                    >
                      <Highlight
                        query="by a trail dedicated"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        by a trail dedicated
                      </Highlight>
                    </a>{" "}
                    to non-motorized vehicles. Unfortunately, these paths are
                    made of dirt and sometimes turn into muddy and sandy slopes.
                    One bike took advantage of this opportunity to get stuck.
                    This muddy path was followed by what we called the "red
                    line".{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/ligne-rouge.jpeg"
                    >
                      {" "}
                      <Highlight
                        query="A trail dotted with small gravel"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        A trail dotted with small gravel
                      </Highlight>
                    </a>{" "}
                    where road tires do not grip well, putting our thighs to the
                    test. Even more unpleasant, the handlebars vibrate,
                    threatening to dislocate wrists, shoulders, and backs.
                    Arriving at 5 pm at the only inn in the area, we take the
                    time to quench our thirst and prepare for the third day for
                    which we have neither planned route nor destination!
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
                    The night is short and not very restful, our room being
                    located above the inn's entrance door that kept banging.
                    After quickly devouring two slices of muffin, we set off for
                    our third day. The unpleasant rest is quickly forgotten by
                    the 20 kilometers of trails composed of
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
                    and mountainous landscapes. There are fewer cyclists than
                    yesterday, enough to continue enjoying the warm "good
                    mornings". We relish{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/mont.jpeg"
                    >
                      <Highlight
                        query="the endless green mountains;"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        the endless green mountains;
                      </Highlight>
                    </a>{" "}
                    this region of Vermont certainly lives up to its name. We
                    take a short break to find our next lunch destination,
                    settling on a small café about twenty kilometers away. After
                    the gentleness of the trail, we are back on the rigidity of
                    the road, a bit deafening due to the 33-ton trucks passing
                    us at high speed. However,{" "}
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
                    /bike path still leaves us some room to maneuver. We develop
                    a sixth sense that involves guessing the size and appearance
                    of a car solely from the sound of its engine. However, we
                    struggle to differentiate between large cargo trucks and
                    huge trucks. A painful ascent was followed by a 2-kilometer
                    slide at high speed, ending up in the small café in Stowe.
                    Pleasantly surprised by the quality of the food and drinks.
                    It's 1:30 pm, and all we want after this meal is to lie down
                    and sleep. My companion Antoine{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/antoineronfle.jpeg"
                    >
                      <Highlight
                        query="starts to snore."
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        starts to snore.
                      </Highlight>
                    </a>{" "}
                    The second part of the day is a bit more complicated. It
                    starts with the purchase of a new pair of gloves, as our
                    hands are all red due to the handlebar vibrations on the
                    trail paths. This was followed by a 700-meter elevation
                    climb in about thirty minutes, an intense effort accompanied
                    by the 30°C beating down on the head through the helmet.
                    After some time, we manage to synchronize our pedaling with
                    our breath. It feels like we're relearning how to breathe.
                    It's still just as painful, but at least we move forward
                    with the confidence of reaching our destination. We feel
                    like we're climbing the slope half by half without ever
                    seeing the end. At the top of the hill, relief; the gentle
                    joy of the downhill wind cancels out the pain of the climb.
                    However, we try to be careful because at this speed, any
                    deviation in the road could be fatal. Focusing on the road
                    remains a routine we quickly adapted to, a kind of forced
                    meditation for several hours a day. But the problem won't
                    arise on the slope. Indeed, it's time for the first flat
                    tire, 5 minutes before arrival, what luck! However, we
                    manage{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/crevaison.jpeg"
                    >
                      <Highlight
                        query="to change the inner tube"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        to change the inner tube
                      </Highlight>
                    </a>{" "}
                    promptly and arrive at our third lodging. A quick dip in the
                    pool just for us and tasting a not-quite-local Norman cider.
                    Tomorrow, it's raining, a novelty we're looking forward to
                    experiencing.
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
                    A pleasant silent night compared to the previous one. We
                    have the American countryside breakfast we're now accustomed
                    to: pancakes the size of plates and cream cheese on a bagel.
                    Just as we're about to settle onto the saddle{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/goutte.jpeg"
                    >
                      <Highlight
                        query="the first drops fall, oh joy!"
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
                    However, we're more concerned about the tire, still not
                    fully recovered from its puncture, than the gathering
                    clouds. The next bike shop is about thirty kilometers away.
                    Luckily, we're at the top of a pass, and this morning will
                    be all downhill. The rainy landscapes create{" "}
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
                    , with mist creeping among the weeping trees. The smell of
                    wet earth and the sparse traffic transform this hour of
                    worry into a moment of serenity. In the valley, we get
                    overtaken by one, then two, then five, then a dozen
                    cyclists. What's happening? A race! And we find ourselves in
                    it. We kick off a final sprint to the bike shop to make it
                    onto the podium, naturally. Once inside, we enter{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/alibaba.jpeg"
                    >
                      <Highlight
                        query="a true treasure trove."
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        a true treasure trove.
                      </Highlight>
                    </a>{" "}
                    Bikes by the hundreds, pedals, derailleurs, handlebars,
                    saddles, all maintained for a long time by seasoned
                    veterans. The warm atmosphere prompts us to recount our
                    adventure, albeit a bit truncated due to our dialect
                    unaccustomed to such pronounced accents. The tire is
                    replaced, and the inner tube is inflated. We're ready to
                    face the second part of the day under the guidance of Zeus,
                    the god of rain. But first, it's time for some grub located
                    a few meters away.{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/boustifaille.jpeg"
                    >
                      <Highlight
                        query="We watch as cyclists"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        We watch as cyclists
                      </Highlight>
                    </a>
                    challenge the downpours with every pedal stroke. The lunch
                    break extends to 2 hours. A large coffee milkshake signals
                    its end. The start is tough. Serotonin no longer lingers in
                    our blood, our clothes are wet, and we're slowly beginning
                    to find the rain tiresome. The landscapes, though still
                    beautiful and drenched, pass by during a twenty-kilometer
                    ascent. Streams flow along the road and lash against our
                    wheels, causing them to skid backward. Splashes, sweat, and
                    torrential rain, a challenging cocktail for the end of the
                    day. Finally arriving at the inn, the receptionist greets us
                    with his usual welcome speech. Our ears perk up when we hear
                    that the jacuzzi will close shortly. A jacuzzi you say? Five
                    minutes later later we transition from sudden water to
                    blessed water. To end the evening, by chance or fate,{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/gastro.jpeg"
                    >
                      <Highlight
                        query="a semi-gourmet restaurant"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        a semi-gourmet restaurant
                      </Highlight>
                    </a>{" "}
                    is located a few meters from our lodging. We'll be able to
                    replenish ourselves properly before tackling the most
                    difficult and tortuous day of our expedition, 100 kilometers
                    with 1100 meters of elevation gain, all in our damp clothes.
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
                    We approach this day with some apprehension. Breakfast
                    doesn't seem very filling, but it will suffice until noon.
                    Being served on-site has the advantage of allowing us to
                    quickly get back on the road. During the first five minutes,
                    we retrace the climb from yesterday. Then come the
                    mountainous landscapes,{" "}
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
                    smooth trails, little traffic and birds still lively, happy
                    to sing about spring. We enjoy these landscapes even more as
                    the steepest climb of our journey awaits us just a few
                    kilometers ahead. Finally, it appears before us, starting on
                    a bumpy road. We avoid checking the GPS for fear of
                    demotivation; we know we'll push through to the end no
                    matter what. We pass three cyclists going downhill, smiling
                    broadly at us, a bad sign. The elevation starts at 8%,
                    ending at 12%. Yet, nature soothes the effort; we're under
                    the trees, the sun isn't directly beating down on us, it's
                    no longer raining, and the temperature feels ideal. Thirty
                    minutes later, we're at the top, dripping with sweat but
                    proud not to have set foot on the ground. We grab our water
                    bottles and reward our muscles with big gulps of water,
                    eager to start the descent. Let's take a moment to talk
                    about it. The most enjoyable part isn't the descent itself.
                    If we had only gone downhill, the enjoyment would have been
                    less. The real pleasure comes from the emotional contrast
                    between intense effort and effortless gliding. We come to
                    appreciate the high elevations, knowing that a descent
                    follows. The adrenaline from speed and the serotonin
                    released by our muscles during the climb turn these few
                    minutes into moments of pure joy. We shout, we scream, we're
                    kings of the world during these brief moments. And if
                    sometimes we dismount during the effort, it's not a defeat.
                    Other battles will follow where we'll prevail. At the foot
                    of this mountain, the transition between Vermont and New
                    Hampshire's border seems harsh. We go from gentle green
                    landscapes to American four-lane highways, sponsored by dust
                    and mechanical carbon monsters. The meager bike path at our
                    disposal is riddled with holes, making progress difficult.
                    For lunch, we had decided to eat at the only restaurant in
                    the area offering vegetarian dishes. Unfortunately, once
                    there, a half-abandoned shack awaits us. We're surrounded by
                    Pizza Hut, McDonald's, and Burger King, reigning supreme in
                    their infernal valleys. Our only option is to scrounge up
                    some sustenance from the nearby supermarket and consume it{" "}
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
                    We start with a gentle trail through the slightly bumpy
                    forest for road tires. Once again, we cross an{" "}
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
                    and encounter two children each driving their quad, with
                    their parents at the back. Let's talk now about the
                    elevation calculations of mapping applications. For this
                    adventure, we equipped ourselves with Google Maps and Komoot
                    to optimize the route based on different road styles,
                    traffic, and inclinations. Google Maps isn't very accurate
                    with angles. Komoot isn't very precise either. So it's
                    challenging to estimate with certainty what situation we'll
                    find ourselves in the next five kilometers. This afternoon
                    undoubtedly remained our worst disillusionment regarding the
                    physical effort that still lay ahead, but we persevered.
                    With dismounts, hydration, and curses, we reached our
                    destination. We had booked this hotel the night before
                    without knowing what to expect, and once again, we're not
                    disappointed with the place. Being in the off-season, the
                    upscale lodgings lie empty and financially accessible. A
                    pool awaits us; it's high time for a dip. Tonight, the only
                    pub in the area is Irish, so our choice is set on fish &
                    chips, always regional. A small concert is on the agenda,
                    along with an accent that becomes increasingly
                    incomprehensible to our chauvinistic ears. Only two days
                    left, potentially under rain, and then Boston awaits us!
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
                    Today promises to be mentally challenging. The rain is back,
                    there's no saving grace for dining along the way, and the
                    hotel we've booked is located at a highway rest area. We
                    feel Boston approaching with its industrial zone. We start
                    the day with breakfast at the local bakery, which is nothing
                    more than a vending machine equipped with an oven that bakes
                    us a bagel. We definitely don't look forward to the day
                    ahead. However, once on the bike and with the initial
                    soreness behind us, we start to appreciate the nature around
                    us again. Especially since it has acquired a new element:
                    the wind. We've experienced intense heat and rain. Now,
                    we're experiencing the resistance of the air against our
                    movements. Descents turn into flat terrain, flat terrain
                    turns into uphill climbs, and uphill climbs offer no more
                    resistance than usual due to our slowness. We could complain
                    about our situation, but this wind has saved us from some
                    respiratory problems. Canadian forests are engulfed in
                    flames, generating ashes thousands of kilometers away.
                    Montreal is, in fact{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/vent.jpeg"
                    >
                      <Highlight
                        query="the most polluted city in the world that day."
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        the most polluted city in the world that day.
                      </Highlight>
                    </a>{" "}
                    What better than our decarbonized mode of transportation to
                    not exacerbate the situation? The headwind keeps the
                    particles away from us and allows us to breathe clean air
                    straight from the Gulf of Mexico. Against the wind, but with
                    healthy and serene lungs. We hesitate to turn back when we
                    see{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/danger.jpeg"
                    >
                      <Highlight
                        query="a sign warning of danger"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        a sign warning of danger
                      </Highlight>
                    </a>{" "}
                    but decide to press on. A wise decision because we stumble
                    upon{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/parc.jpeg"
                    >
                      <Highlight
                        query="a beautiful regional park"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        a beautiful regional park
                      </Highlight>
                    </a>{" "}
                    just before our midday break. The journey proved less taxing
                    than we thought. Not a single drop of rain until a downpour
                    in the early afternoon, while we were inside a supermarket
                    buying our lunch. Happy chance striking once again. As the
                    water poured down on the asphalt, we encountered an
                    interesting character. He complimented our bikes before
                    starting to tell his life story. According to him, he was
                    the creator of clipless pedals and had the idea while
                    working at Salomon in France at the time for ski bindings.
                    We're somewhat surprised to meet such a brilliant and
                    well-known individual in his field in a rural village far
                    from everything. Like an American businessman, he extols the
                    virtues of his genius to us and offers us a discount on his
                    next invention: futuristic ski bindings. We appear skeptical
                    about the truthfulness of his claims; however, after
                    verification, we realize that we did indeed meet the
                    inventor of those clips that made uphill climbs easier for
                    us. The storm stops. We resume the route to our destination:
                    a highway rest area. Here, the car is king, no walkways for
                    pedestrians, no bike racks in the accommodations. People go
                    from the hotel to the restaurant in their pickup trucks, to
                    hell with a few minutes of outdoor walking. Fortunately,
                    we're just passing through because tomorrow is the big day.
                    It's arrival in Boston.
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
                    Slept poorly at this highway rest area, but pleasantly
                    surprised by the well-stocked breakfast that will carry us
                    through the remaining 80 kilometers. The wind is still
                    present, and the traffic ubiquitous as we start the first
                    kilometers. We pass through the{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/aire.jpeg"
                    >
                      <Highlight
                        query="industrial areas"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        industrial areas
                      </Highlight>
                    </a>{" "}
                    nestled between Boston and the mountains. Pickup trucks zoom
                    past us, and it's clear that cyclists are not particularly
                    welcome here. We push through as best as we can during these
                    30 kilometers separating us from the bike path. Along the
                    way, Google Maps, the expert in shortcuts, takes us through
                    the forest. Even if{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/foret.jpeg"
                    >
                      <Highlight
                        query="we have to dismount,"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        we have to dismount,
                      </Highlight>
                    </a>{" "}
                    it's very pleasant to smell the moss on the trees and the
                    earth, still damp from yesterday. Three times we encounter a
                    walker with his dog who points us in the right direction. He
                    seemed to come out of nowhere. It felt like a hidden camera
                    prank. Finally, the long-awaited shaded corridor brings us
                    straight to Boston. Pickup trucks gradually become rarer,
                    replaced by city cars. Drivers become more respectful, and
                    bike lanes gradually widen. However, there are fewer
                    greetings from other cyclists, who are more accustomed to
                    seeing others. As we delve deeper into the city,{" "}
                    <a
                      data-tooltip-id="my-tooltip"
                      href="/images/bostontrip/boston.jpeg"
                    >
                      <Highlight
                        query="the buildings grow"
                        styles={{
                          borderRadius: "50px",
                          px: "2",
                          py: "1",
                          bg: "green.100",
                        }}
                      >
                        the buildings grow
                      </Highlight>
                    </a>{" "}
                    The first skyscrapers emerge. Red lights at every
                    intersection slow us down. We pass by Harvard, then MIT, but
                    we have one thing on our minds. Even before taking photos in
                    front of these famous institutions. It's to park our bikes,
                    wash our belongings, and freshen up. And to think, we
                    finally did it. We did it.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box marginTop={30}>
            <Center mb={10}>
              {" "}
              <Heading size="xl">Reflections</Heading>
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
              « Freedom. That's what struck me during this journey. The freedom
              to wake up when you're ready, to eat when you're hungry, to go to
              bed when you're tired. No schedules to follow, just time to
              appreciate. The notion of time on an adventure like this is
              extraordinary. You see so many landscapes, people, or even
              architectures in a day that it feels like it lasts for several
              days. In a week, I felt like I lived several months. And yet, I
              was less bored than during the few hours in the car on the way
              back. I lived every moment 100%, and it felt so good. The uphill
              climbs that burn your thighs and reduce your butt to shreds pushed
              me to surpass myself several times. By digging deep into myself, I
              realized that I was capable. In fact, if the mind wants, the body
              will follow. And then, after the climbs come the descents. They
              instantly made me forget the pain in my legs, the pouring rain, or
              the heat. Every sensation is heightened on the bike, as if the
              body comes back to life. That's life, actually. Making every
              moment an intense experience and embracing those sensations.
              Ideally, sharing all those moments to make them even more
              memorable. For that, I warmly thank Alexis for accompanying me on
              this trip. We've known each other for 15 years, and yet I felt
              like I just met him during these 7 days. So now, all that's left
              is to plan the next trip. Because yes, it's unthinkable not to do
              it again. »
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
              «650km, on paper this number left me skeptical about my physical
              abilities, especially with training close to nothing. I didn't
              doubt that I could do it, but I dreaded enduring constant effort
              during the journey. It only took me a day to adapt to this new
              routine and experience something extraordinary. More concretely,
              let's stop justifying our inactions by our fear of failure. Let's
              give ourselves the opportunity to fail concretely instead of being
              influenced by our own pessimistic scenarios. This journey also
              allowed me to quench my thirst for adventure without degrading our
              planet. It showed me that other imaginaries were within reach of
              pedals without necessarily needing to teleport to the other side
              of the globe. To all those who want to escape their daily lives by
              traveling the world one week at a time, I invite you to embark on
              a similar bike touring adventure, at your own pace, and thus take
              care of Life.»
            </Text>
          </Box>
          <Box fontSize={30} fontFamily={"autography"} textAlign={"right"}>
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
            name="image"
            property="og:image"
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
              <Heading fontFamily={"autography"} fontSize={100} mb={10}>
                {" "}
                Heureux hasards
              </Heading>
            </Center>
            <Center>
              {" "}
              <Heading fontStyle={"italic"} size="l">
                {" "}
                De Montréal à Boston, récit d’une joyeuse odyssée
                cyclotouristique.
              </Heading>
            </Center>

            <Text mt={"35px"} lineHeight={"25px"} textAlign={"justify"}>
              Ce n’est que deux semaines précédant notre départ que nous
              réalisâmes ce qui nous attendait : 650 kilomètres et 4000 mètres
              de dénivelé positif, le tout en 6 jours. Dans un éclair de
              lucidité, nous demandons à chatGPT de nous suggérer un programme
              sportif afin de préparer au mieux notre condition physique. Sa
              réponse demeura tout aussi cinglante que glaçante. Il nous
              proposait de parcourir entre 50 et 100 kilomètres par jour, durant
              les 14 prochains jours. Avions-nous vraiment envie de mettre
              autant de temps et d’énergie dans ce programme robotisé ?
              Définitivement non. Nous décidons tout de même de tester les
              sensations d’une étape de 100 kilomètres sur une selle. Ce que
              nous effectuons à deux reprises sur les week-ends qu’il nous
              restait, sans les dénivelés. <br /> <br /> Ce fut notre seul et
              unique entraînement pour ce périple.
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
                    Nous partons la fleur au fusil sur les coups de 10 h, après
                    nous être rassasiés d’un copieux petit déjeuner. La
                    planification de cette première journée est à l’image de nos
                    préparatifs, proche du néant.{" "}
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
                    est nécessaire afin de se munir de nouvelles sacoches. Ne
                    les ayant pas ou peu expérimentées, elles se détachent du
                    porte-bagages à chaque soubresaut, peu pratique. Ce premier
                    déboire passé, nous profitons de{" "}
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
                    à Saint-Jean de Richelieu , situé à 40 km de Montréal, dans
                    l’intention de vérifier combien de distance il nous reste à
                    parcourir. Nous avons réservé pour cette première nuit une
                    auberge avec piscine, pensant que nous pourrions patauger
                    dedans et refroidir nos muscles à l’heure du goûter. Mais il
                    est 14 h et nous avons du mal à cacher notre déception en
                    voyant s’afficher les 80 kilomètres subsistants, adieu
                    chaises longues. Les paysages identiques de champs à perte
                    de vue s’enchaînent. Les pistes cyclables ombragées restent
                    agréables à utiliser. Les dix derniers kilomètres en montée
                    sous le soleil encore brûlant à côté d’une route à forte
                    affluence mettent nos nerfs à dure épreuve. Effort contrasté
                    par notre arrivée à l’auberge de Knowlton qui se déroule en
                    toute quiétude, nous sommes les seuls clients. Le gérant
                    nous confie les clés de son établissement avant de rentrer
                    chez lui. Nous sommes maintenant les heureux propriétaires
                    d’une bâtisse de 50 chambres. Après application d’un peu de
                    vaseline réparatrice permettant des futurs moins douloureux
                    sur la selle, nous voilà en route pour la marina afin de
                    récupérer de quoi nous sustenter. Nous en profitons au
                    passage pour glisser un orteil dans l’eau de la piscine.
                    Demain, nous avons prévu de traverser la frontière
                    américaine à vélo en passant par un petit poste de douane.
                    Nous espérons que l’aventure ne va pas s’arrêter là.
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
                        Jour 2 (Knowlton - Jeffersonville)
                      </Highlight>
                    </a>
                  </Box>{" "}
                  <Text>
                    Nous nous levons à 8 h et vérifions la météo afin de ne pas
                    avoir de mauvaises surprises. Encore aujourd’hui, le
                    thermomètre dépasse les 30°. Nous remplissons les gourdes et
                    nous nous dirigeons vers le café le plus proche. Café qui ne
                    paye pas de mine avec un excellent petit déjeuner{" "}
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
                    au lait d’avoine. Enfin, nous nous remettons en route. Les
                    cinq premiers kilomètres en montée demeurent douloureux et
                    les courbatures font leurs premières apparitions. Cependant,
                    les 20 km suivants se déroulent en descente et nous
                    permettent donc d’apprécier un échauffement tranquille. Nous
                    apercevons les montagnes du Vermont au loin, regrettant déjà
                    les terrains plats de la veille. La fin de cette matinée
                    nous amène directement au poste-frontière. Le douanier nous
                    accueille avec l’amabilité d’un douanier, c’est-à-dire qu’il
                    sait où placer la barre du sourire, et c’est plutôt bas. Il
                    nous pose des questions sur le lieu de notre première
                    rencontre, ce qu’on va effectuer à Boston, à quelle date
                    nous sommes arrivés au Canada… En somme des thèmes qu’on
                    énoncerait à un touriste qu’on vient de croiser dans un bar
                    excepté que là, une mauvaise réponse peut nous mener en
                    cellule. Les menottes fixées au banc ne nous rassurent pas.
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
                    munie de notre passeport tamponné USA. Le cliché de la ville
                    américaine est aussitôt vérifié. Des dizaines de drapeaux
                    américains plantés dans les jardins flottent au gré du vent
                    et un panneau LED accroché sur la devanture d’une église
                    catholique vante les mérites du pasteur du village. C’est à
                    partir de cette deuxième étape que nous prenons plaisir à
                    croiser d’autres cyclistes et à les saluer. Dans l’ensemble,
                    souhaiter une belle journée à tous les gens que nous
                    rencontrons sur la route, ce qu’il est tristement impossible
                    d’exprimer à bord d’une voiture. À 13 h, le soleil frappe
                    fort, nous décidons de nous arrêter dans une ville à la
                    recherche de nourriture. Nous sommes pris de court, car le
                    plat principal local reste le burger qui ne figure
                    malheureusement pas dans notre alimentation végétarienne.
                    Nous sommes sauvés in extremis par un Subway juxtaposé à une
                    station-service.
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
                    notre premier repas américain. Quelques kilomètres après
                    notre départ, un porte-bagages se fait la malle (sans
                    mauvais jeu de mots). Nous nous posons donc sur le bas-côté
                    à la recherche de la vis perdue, sous l’atmosphère
                    étouffante de l’après-midi. Cinq minutes plus tard, un jeune
                    garçon sort de sa maison, une limonade à la main et nous
                    l’offre, une délicate attention qui mérite cet hommage dans
                    ce récit. Au Vermont, les routes de voitures sont
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
                    aux engins non motorisés. Malheureusement, ces chemins sont
                    confectionnés de terre et se transforment parfois en pentes
                    giboyeuses et ensablées. Une monture profita de cette
                    occasion pour s’y embourber. Cette voie boueuse fut suivie
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
                        Un sentier parsemé de petits graviers
                      </Highlight>
                    </a>{" "}
                    sur lequel les pneus de route n’adhèrent pas , mettant les
                    cuisses à rude épreuve. Plus désagréable encore, le guidon
                    vibre, manquant de déboîter les poignets, les épaules et le
                    dos. Arrivés à 17 h dans la seule auberge du coin, nous
                    prenons le temps de nous désaltérer et de nous préparer pour
                    la troisième journée pour laquelle nous n’avons prévu ni
                    itinéraire ni point de chute !
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
                    La nuitée est courte et peu intense, notre chambre étant
                    située au-dessus de la porte d’entrée de l’auberge qui
                    n’arrêtait pas de claquer. Le temps d’avaler deux tranches
                    de muffins et nous voilà repartis pour notre troisième
                    journée. Le désagréable repos est vite oublié par les 20 km
                    de sentiers composés
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
                    et de paysages montagneux. Il y a moins de cyclistes que la
                    veille, suffisamment pour continuer à apprécier les
                    chaleureux « good morning ». Nous nous délectons{" "}
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
                        des monts verdoyants à perte de vue,
                      </Highlight>
                    </a>{" "}
                    cette région du Vermont porte décidément bien son nom . Nous
                    nous octroyons une courte pause, le temps de trouver notre
                    prochaine destination pour le déjeuner. Nous jetons notre
                    dévolu sur un petit café situé à une vingtaine de
                    kilomètres. Après la douceur du sentier, nous voici de
                    retour sur la rigueur de la route un peu assourdissante à
                    cause des 33 tonnes passant à côté de nous de vives allures.
                    Toutefois,{" "}
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
                    /piste cyclable nous laisse quand même un peu de marge de
                    manœuvre. Nous développons un sixième sens qui consiste à
                    deviner la taille et l’apparence d’une voiture au seul bruit
                    de son moteur. Nous avons cependant du mal à différencier
                    les gros camions de marchandises des énormes trucks. Une
                    montée douloureuse fut suivie d’une glissade de 2 km à
                    grande allure pour finir dans le petit café de Stowe. Très
                    agréablement surpris par la qualité de la nourriture et des
                    breuvages. Il est 13 h 30 et notre seule envie jouxtant ce
                    repas est de s’allonger et dormir. Mon camarade Antoine{" "}
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
                    La deuxième partie de la journée est un peu plus compliquée.
                    Elle démarre par l’achat d’une nouvelle paire de gants, car
                    les mains apparaissent toutes rouge dû aux tremblements du
                    guidon sur les pistes de sentier. S’ensuivit une montée de
                    dénivelé de 700 mètres en une trentaine de minutes, un
                    effort intense accompagné des 30° qui tape sur le crâne à
                    travers le casque. Au bout d’un certain temps, nous arrivons
                    à caler notre pédalage sur notre souffle. Nous avons
                    l’impression de réapprendre à respirer. C’est toujours aussi
                    pénible, mais au moins nous avançons avec la confiance
                    d’arriver à bon port. Nous avons l’impression de grimper la
                    pente moitié après moitié sans jamais en voir le bout. En
                    haut de la côte, délivrance, la douce joie du vent de la
                    descente annihile la peine de la montée. Nous essayons
                    cependant de faire attention, car à cette vitesse le moindre
                    écart de chaussée pourrait nous être fatal. La concentration
                    sur la route reste une routine à laquelle nous nous sommes
                    rapidement habitués, une sorte de méditation forcée de
                    plusieurs heures par jour. Mais ça ne sera pas sur la pente
                    qu’un problème surviendra. En effet, voici venue l’heure de
                    la première crevaison, 5 minutes avant l’arrivée, quelle
                    aubaine ! Nous réussissons cependant à{" "}
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
                    promptement et nous voilà parvenus à notre troisième cocon
                    locatif. Petit plongeon dans la piscine ouverte juste pour
                    nous et dégustation d’un cidre normand pas tout à fait
                    local. Demain, il pleut, une nouveauté que nous avons hâte
                    d’expérimenter.
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
                    Une agréable nuit silencieuse comparée à la veille. Nous
                    prenons le petit déjeuner américain de campagne dont nous
                    avons maintenant l’habitude, pancakes de la taille de
                    l’assiette et fromage à la crème monté sur son bagel. Au
                    moment de poser les fesses sur la selle,{" "}
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
                        les premières gouttes tombent, ô joie !
                      </Highlight>
                    </a>{" "}
                    Cependant, nous sommes plus préoccupé par le pneu, mal remis
                    de sa crevaison, que par les nuages qui s’affolent. La
                    prochaine boutique de vélo est située à une trentaine de
                    kilomètres. Heureusement, nous résidons en haut d’un col et
                    ce matin ne sera que descente. Les paysages pluvieux
                    apportent{" "}
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
                    , la brume se glissant entre les arbres larmoyants. L’odeur
                    de la terre mouillée et le peu de circulation transforment
                    cette heure d’inquiétude en temps de plénitude. Dans la
                    vallée, nous nous faisons doubler par un, puis deux, puis
                    cinq, puis une dizaine de cyclistes. Mais que se passe-t-il
                    donc ? Une course ! Et nous nous trouvons dedans. Nous
                    entamons un dernier sprint jusqu’à la boutique afin de
                    monter sur le podium, bien évidemment. Nous entrons alors
                    dans{" "}
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
                    Des vélos par centaines, des pédaliers, des dérailleurs, des
                    guidons, des selles, entretenus de longue date par de vieux
                    loups de mer. L’ambiance chaleureuse nous force à conter
                    notre aventure, un peu écourtée du fait de notre patois peu
                    habitué à des accents si prononcés. Le pneu est remplacé et
                    la chambre à air gonflée. Nous sommes prêts à affronter
                    cette deuxième partie de journée sous le gourou de Zeus,
                    dieu de la pluie. Mais avant, place à la boustifaille située
                    à quelques mètres de là.{" "}
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
                    défier les torrents d’eau à coup de pédales. La pause
                    déjeuner se prolonge sur 2 heures. Un gros milk-shake au
                    café en sonne le glas. Le départ est compliqué. La
                    sérotonine ne subsiste plus dans le sang, les vêtements sont
                    mouillés, nous commençons doucement à trouver l’averse
                    longue. Les paysages toujours aussi beaux et détrempés se
                    succèdent par une montée d’une vingtaine de kilomètres. Des
                    ruisseaux coulent le long de la route et viennent se
                    déchaîner contre nos roues qui glissent à reculons.
                    Éclaboussures, sueurs et pluie torrentielle, pénible
                    cocktail de cette fin de journée. Tandis que nous arrivons
                    enfin à l’auberge, le réceptionniste nous accueille avec son
                    discours habituel de bienvenue. Nos oreilles frémissent
                    quand nous entendons que le jacuzzi ferme sous peu. Un
                    jacuzzi dites-vous ? Cinq minutes plus tard, nous sautons de
                    l’eau subite vers l’eau bénite. Pour finir la soirée, le
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
                    se situe à quelques mètres de notre hébergement. Nous allons
                    pouvoir nous ravitailler correctement avant d’entamer la
                    plus difficile et tortueuse journée de notre expédition, 100
                    kilomètres sur 1100 mètres de dénivelé positif, le tout dans
                    nos habits humides.
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
                    Nous appréhendons quelque peu cette journée. Le petit
                    déjeuner n’apparaît pas copieux, mais suffira à nous faire
                    patienter jusqu’à midi. Étant servi sur place, il présente
                    l’avantage de nous permettre de poser rapidement le pied sur
                    l’étrier. Durant les cinq premières minutes, nous dévalons
                    l’heure d’ascension de la veille. S’enchaînent ensuite des
                    paysages montagneux,{" "}
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
                    de tracés lisses, de peu de trafic et d’oiseaux toujours
                    aussi vivants, heureux de chanter le printemps. Nous
                    profitons d’autant plus de ces paysages demeurant au fait
                    que quelques kilomètres plus loin nous attend la montée la
                    plus abrupte de notre voyage. Enfin, elle apparaît là, en
                    face de nous, débutant sur une route cabossée. Nous ne
                    regardons pas le GPS de peur de nous démotiver, nous savons
                    que nous avancerons jusqu’au bout quoiqu’il arrive. Nous
                    croisons trois cyclistes qui descendent et qui nous saluent
                    avec un grand sourire, mauvais signe. Le dénivelé démarre à
                    8 %, pour finir à 12. Et en même temps, la nature apaise
                    l’effort, nous nous trouvons sous les arbres, le soleil ne
                    nous harcèle pas directement, il ne pleut plus et la
                    température apparaît idéale. Trente minutes plus tard, nous
                    voici en haut dégoulinant de sueurs, mais fiers de ne pas
                    avoir mis un pied à terre. Nous attrapons nos gourdes et
                    récompensons nos muscles à coup de grosses gorgées d’eau,
                    pressé d’entamer la descente. Prenons d’ailleurs un instant
                    pour en parler. Le plus plaisant n’est pas la descente en
                    elle-même. Si nous n’avions fait que descendre, la
                    jouissance aurait été moindre. Le vrai plaisir provient de
                    l’écart émotionnel entre l’effort intense et l’effort néant.
                    Nous en venons à apprécier les hauts dénivelés, sachant
                    qu’après une descente s’ensuit. L’adrénaline de la vitesse
                    et la sérotonine sécrétée par les muscles au cours de la
                    montée transforment ces quelques minutes en moments de joie
                    pure. Nous crions, nous hurlons, nous sommes les rois du
                    monde durant ces courts instants. Et si parfois nous mettons
                    un pied à terre lors de l’effort, ce n’est pas une défaite.
                    D’autres luttes suivront sur lesquelles nous prendrons
                    l’avantage. Au bas de cette montagne, la transition entre la
                    frontière du Vermont et du New Hampshire apparaît rude. Nous
                    passons des doux paysages verdoyants aux quatre voies
                    américaines, sponsorisées par la poussière et les monstres
                    carbonés mécaniques. La maigre piste cyclable à notre
                    disposition est garnie de trous, ce qui ne facilite pas
                    notre avancée. Pour ce midi, nous avions décidé d’aller
                    manger à l’unique restaurant de la contrée qui proposait des
                    plats végétariens. Malheureusement une fois devant, un
                    taudis à moitié abandonné nous attend. Nous sommes entourés
                    de Pizza Hut, McDonald’s et Burger King qui règne en maîtres
                    dans ses vallées infernales. Notre seule solution consiste
                    donc à chercher de quoi se sustenter dans le supermarché du
                    coin puis de le consommer{" "}
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
                    Nous n’y resterons pas longtemps, au grand regret de nos
                    cuisses encore chaudes. Nous démarrons par un doux sentier
                    dans la forêt un brin cahoteuse pour les pneus de route.Nous
                    traversons une fois de plus un{" "}
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
                    et croisons deux enfants conduisant chacun leur quad, les
                    parents à l’arrière. Parlons maintenant des calculs de
                    dénivelé des applications de cartographie. Pour cette
                    aventure, nous nous sommes munis de Google Maps et de Komoot
                    afin d’optimiser l’itinéraire en fonction des différents
                    styles de chaussées, du trafic et des inclinaisons. Google
                    Maps n’est vraiment pas fort avec les angles. Komoot n’est
                    pas très précis. Il est donc compliqué d’estimer avec
                    certitude dans quelle situation nous nous retrouverons dans
                    les cinq prochains kilomètres. Cet après-midi resta
                    incontestablement notre pire désillusion concernant l’effort
                    physique qu’il nous restait à accomplir, qu’à cela ne
                    tienne. À coup de pied à terre, d’hydratation et de jurons,
                    nous arrivons à destination. Nous avions réservé cet hôtel
                    la veille sans trop savoir à quoi se préparer et une fois de
                    plus nous ne sommes pas déçus de l’endroit. Étant en basse
                    saison, les gîtes haut de gamme gisent vides et
                    financièrement accessibles. Une piscine nous attend, il est
                    grand temps d’un plouf. Ce soir, le seul pub du coin est
                    irlandais, notre dévolu est donc jeté sur un fish & chips,
                    toujours aussi régional. Un petit concert est au
                    rendez-vous, de même qu’un accent qui se veut de plus en
                    plus incompréhensible pour nos oreilles chauvines. Plus que
                    deux jours, sous une pluie potentielle, et à nous Boston !
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
                    Aujourd’hui s’annonce mentalement compliqué. La pluie est de
                    retour, pas de restauration salvatrice en chemin et l’hôtel
                    que nous avons réservé est situé sur une aire d’autoroute.
                    Nous sentons Boston se rapprocher avec sa zone industrielle.
                    Nous entamons la journée avec un petit déjeuner à la
                    boulangerie locale qui n’est ni plus ni moins qu’un
                    distributeur équipé d’un four qui nous cuit un bagel. Nous
                    n’avons décidément pas hâte que cette journée commence.
                    Cependant, une fois sur le vélo et les premières courbatures
                    derrière nous, nous nous remettons à apprécier la nature qui
                    nous entoure. D’autant plus que cette dernière s’est dotée
                    d’une nouvelle capacité, le vent. Nous avions éprouvé de
                    fortes chaleurs et la pluie. Voici que nous expérimentons
                    maintenant la résistance de l’air face à nos mouvements. Les
                    descentes se muent en terrain plat, les terrains plats se
                    transforment en montée et les montées quant à elles
                    n’offrent pas plus de résistance que d’habitude due à notre
                    lenteur. Nous pourrions nous plaindre de notre sort,
                    cependant ce vent nous a sauvés de quelques problèmes
                    respiratoires. Les forêts canadiennes sont en proie aux
                    flammes et génèrent des cendres à des milliers de kilomètres
                    à la ronde, Montréal est d’ailleurs ce jour-là{" "}
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
                        la ville la plus polluée au monde.
                      </Highlight>
                    </a>{" "}
                    Quoi de mieux que notre mode de transport décarboné pour ne
                    pas aggraver la situation ? Le vent qui nous arrive de face
                    garde les particules loin de nous et nous permet de respirer
                    un air propre venu tout droit du golfe du Mexique. À
                    contrevent donc, mais les poumons sains et sereins. Nous
                    hésitons à faire demi-tour devant{" "}
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
                        une pancarte présageant un danger
                      </Highlight>
                    </a>{" "}
                    mais décidons d’aller de l’avant. Sage décision car nous
                    déboulons sur{" "}
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
                    juste avant notre pause de mi-journée. Le trajet apparut
                    moins éprouvant que nous le pensions. Pas une seule goutte
                    de pluie jusqu’au déluge en début d’après-midi, alors que
                    nous nous trouvions à l’intérieur d’une supérette afin d’y
                    acheter notre déjeuner. L’heureux hasard frappant pour la
                    énième fois. Tandis que l’eau s’abattait sur le bitume, nous
                    effectuâmes la rencontre d’un personnage intéressant. Il
                    complimenta nos vélos avant de commencer à conter sa vie.
                    D’après ses dires, il était le créateur des pédales à clips
                    et en avait eu l’idée en travaillant chez Salomon en France
                    à l’époque pour les fixations de ski. Nous sommes quelque
                    peu étonnés de croiser un individu aussi brillant et connu
                    dans son domaine dans un village rural et loin de tout. Tel
                    un homme d’affaires américain, il nous vante les mérites de
                    son génie et nous offre une réduction sur sa prochaine
                    trouvaille : de nouveaux ancrages futuristes pour les skis.
                    Nous apparaissons dubitatifs quant à la véracité de ses
                    propos, néanmoins après vérification nous nous rendons
                    compte que nous avons bel et bien rencontré l’inventeur de
                    ces clips qui nous ont permis de moins peiner lors des
                    montées. L’orage s’arrête. Nous reprenons l’itinéraire
                    jusqu’à notre destination : une aire d’autoroute. Ici, la
                    voiture est reine, pas de corridor pour les piétons, pas de
                    casier à vélo dans les hébergements. Les gens vont de
                    l’hôtel au restaurant dans leur pick-up, au diable les
                    quelques minutes de marche en extérieur. Heureusement, nous
                    ne sommes que de passage, car demain c’est le grand jour.
                    C’est l’arrivée à Boston.
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
                    Sommeil peu réparateur sur cette aire d’autoroute, mais
                    agréablement surpris par le petit déjeuner bien achalandé
                    qui nous transportera sur les 80 km restants. Le vent
                    demeure encore présent et le trafic ubiquitaire lorsque nous
                    entamons les premiers kilomètres.Nous traversons{" "}
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
                    logées entre Boston et les montagnes. Les pick-up nous
                    dépassent à vive allure, le bicycleux n’apparaît décidément
                    pas comme étant le bienvenu ici. Nous nous forcerons un
                    passage tant bien que mal durant ces 30 km qui nous séparent
                    de la voie cyclable. En chemin, Google Maps, le spécialiste
                    des raccourcis, nous fait emprunter la forêt. Même si{" "}
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
                        nous devons mettre le pied à terre,
                      </Highlight>
                    </a>{" "}
                    c’est très agréable de humer la mousse des arbres, et de la
                    terre, encore humide de la veille. Nous croisons par trois
                    fois un promeneur avec son chien qui nous indique la piste à
                    prendre. Il déboulait d’on ne sait où de derrière les
                    fagots. On aurait dit une caméra cachée. Enfin, le corridor
                    ombragé tant attendu nous amène d’une traite à Boston. Les
                    pick-up se font graduellement plus rares, remplacés par des
                    voitures citadines. Les conducteurs apparaissent de plus en
                    plus respectueux et les voies dédiées au vélo se trouvent
                    progressivement plus larges. En contrepartie, moins de
                    salutations de la part des autres cyclistes, davantage
                    habitués à en voir d’autres. Au fur et à mesure que nous
                    nous enfonçons dans la ville,{" "}
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
                    autour de nous. Les premiers gratte-ciel émergent. Les feux
                    rouges à chaque intersection nous freinent. Nous passons
                    devant Harvard, puis le MIT, mais nous n’avons qu’une seule
                    idée en tête. Avant même de se prendre en photos au devant
                    de ces fameuses institutions. C’est de poser nos vélos,
                    laver nos affaires, puis nous débarbouiller. Et dire
                    qu’enfin nous l’avons fait. Nous l’avons fait.
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
              « La liberté. C’est ça qui m’a marqué pendant ce voyage. La
              liberté de se lever quand on est prêt, de manger quand on a faim,
              de se coucher quand on est fatigué. Pas d’horaire à respecter,
              juste le temps à apprécier. Elle est extraordinaire d’ailleurs, la
              notion de temps sur une aventure comme celle-ci. On voit tellement
              de paysages, de gens ou même d’architectures en une journée,
              qu’elle nous en paraît en durer plusieurs. En une semaine, j’ai eu
              l’impression de vivre plusieurs mois. Et pourtant, je me suis
              moins ennuyé que pendant les quelques heures de voiture sur le
              retour. J’ai vécu chaque moment à 100%, et qu’est-ce que ça fait
              du bien. Les montées qui brûlent les cuisses et réduisent les
              fesses en miettes, m’ont fait me dépasser à plusieurs reprises. En
              puisant au fond de moi-même je me suis rendu compte que j’étais
              capable. En fait, si le mental veut, le corps suivra. Et puis,
              après les montées viennent les descentes. Elles me faisaient
              oublier instantanément la douleur dans les jambes, la pluie
              battante ou encore la chaleur. Chaque sensation est décuplée sur
              le vélo, comme si le corps reprenait vie. C’est ça en fait, la
              vie. Faire de chaque instant une expérience intense et accueillir
              ces sensations. Idéalement même, partager tous ces moments pour en
              garder une trace encore plus mémorable. Pour ça, je remercie
              chaleureusement Alexis de m’avoir accompagné sur ce trip. 15 ans
              que l’on se connaît, et pourtant j’ai eu l’impression de tout
              juste le rencontrer pendant ces 7 jours. Alors maintenant, il ne
              nous reste plus qu’à planifier le prochain voyage. Car oui, il est
              inenvisageable de ne pas recommencer.»
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
              «650km, sur le papier ce nombre me laissait sceptique quant à mes
              capacités physiques, de surcroît avec un entraînement proche du
              néant. Je ne doutais pas d’y arriver mais je redoutais de subir un
              effort constant durant le trajet. Force est de constater qu’il ne
              me fallut qu’une journée pour m’adapter à cette nouvelle routine
              et vivre une expérience hors du commun. Plus concrètement,
              arrêtons de justifier nos inactions par notre peur de l’échec.
              Offrons-nous l’opportunité d’échouer concrètement au lieu de nous
              laisser influencer par nos propres scénarios pessimistes. <br />
              Ce périple m’a aussi permis d’assouvir ma soif d’aventure sans
              dégrader notre planète. Il m’a démontré que d’autres imaginaires
              étaient à portée de pédales sans nécessairement avoir besoin de se
              téléporter à l’autre bout du globe. À toutes celles et à ceux qui
              désirent s’évader de leur quotidien en parcourant le monde une
              semaine à la fois, je vous invite à vous lancer dans une aventure
              cyclotouristique similaire, à votre rythme, et ainsi prendre soin
              du Vivant.»
            </Text>
          </Box>
          <Box fontSize={30} fontFamily={"autography"} textAlign={"right"}>
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
