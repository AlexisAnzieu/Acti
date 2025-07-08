import { Box, Highlight, Text, VStack } from "@chakra-ui/react";

export const Day4Content = () => (
  <VStack spacing={6} align="stretch">
    <Box>
      <Text lineHeight="1.8" mb={4}>
        We're awakened at 8 AM by the voice coming from the room speakers
        "arriving in Jasper in 10 minutes!" I open the blind wide, eager to
        discover this new surprise landscape. What a contrast from yesterday!
        The plateaus stretching horizontally now give way to
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/e016de22-fd25-4e37-8790-863d44c7fefa.jpg"
        >
          <Highlight
            query="mountains rising vertically"
            styles={{
              background: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            mountains rising vertically
          </Highlight>
        </a>
        , grazing the clouds at their peaks. We decide to break our ritual and
        go get{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/5aa5ff5f-aad8-44b8-aaba-8d236e171a74.jpg"
        >
          <Highlight
            query="a coffee in the village"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            a coffee in the village
          </Highlight>
        </a>{" "}
        . It's early, everything is quiet here in the streets surrounded by
        snow-capped mountains.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Once our tour of the premises is finished, I haven't forgotten my bet
        and manage to sneak close enough to the locomotive for a souvenir photo.{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/c3c2f9d5-83aa-40f2-847a-a4c7a939c77d.jpg"
        >
          <Highlight
            query="Two others are attached"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Two others are attached
          </Highlight>
        </a>{" "}
        because today we're going to climb some elevation! We then return to the
        train, joined by about fifty new faces making the Jasper to Vancouver
        journey. Having witnessed the washing of the panoramic windows, we have
        only one strategic idea in mind at that moment, to secure a place in our
        favorite car to discover the{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/c7241aed-b61a-403d-bb39-d4253f2cfbfd.jpeg"
        >
          <Highlight
            query="Rockies"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Rockies
          </Highlight>
        </a>{" "}
        in 360 degrees from above. Mission accomplished.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        In the distance, an emerald-colored lake stands out from the majestic
        conifers that perfectly harmonize with some surrounding birch trees in
        full bloom, just barely showing their pale green coat. What a
        magnificent{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/258e7f55-509b-43fd-b4a0-66e6017772db.jpg"
        >
          <Highlight
            query="natural yin yang"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            natural yin yang
          </Highlight>
        </a>{" "}
        ! The flora is slowly awakening from its winter torpor, but the fauna
        isn't left behind. From our observatory high up, we spot a bear and a
        deer looking in our direction with curiosity. All this, of course,
        accompanied by a small glass of mimosa and a welcome appetizer. This is
        paradise!
      </Text>

      <Text lineHeight="1.8" mb={4}>
        We spent our entire afternoon under the glass dome exploring the
        surroundings with a trained eye. Five hours doing just that. We spot
        immense lakes unfolding below the cliffs, waterfalls with thousands of
        hectoliters of flow, entire hectares of vegetation burned by the
        numerous fires of previous years, and even trains several kilometers
        long! The last scene we see, before going to dinner, resembles a
        Scottish landscape, the mountains and conifers have disappeared to make
        way for vast rolling grass expanses.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        For the last evening, we requested to dine tête-à-tête. Having chosen
        the third service at 8 PM, which corresponds to 11 PM, 3 days earlier.
        Our energy gauge is limited, and we're apparently not the only ones as
        all other couples in the car have decided to eat alone. The end of the
        adventure is imminent.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        At 10 PM, we hear walkie-talkie noises in the hallway. Our right-side
        neighbor has pressed the alarm button in his room, dedicated to the car
        attendant. An ambulance is on its way, his condition is apparently
        concerning. This is an observation I've more or less kept silent about
        throughout this narrative, but during this period, the vast majority of
        passengers are over 70 years old. Many walk with a cane and have
        difficulty moving through these corridors that undulate according to the
        state of the rails. At 10:30 PM the convoy stops for the first time
        outside a station and we see flashing lights for five minutes. But
        whatever happens, the train departs, a beautiful allegory of the train
        of life.
      </Text>

      <Text lineHeight="1.8" mb={4} fontWeight="bold" fontSize="lg">
        Epilogue
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Woken at 9 AM, we learn that we've arrived three hours ahead of schedule
        at our destination. The conductor made no announcement to let us sleep
        peacefully, for which he should be warmly thanked. According to the car
        attendant, the journey's schedule is established with a six-hour margin
        due to railway freight priority. Lucky for us, freight was very light
        this week.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        Leaving the station, we marvel at the green trees, roses, purple tulips,
        and thousand scents floating in the air. Being deprived of our senses
        for four days catalyzed a powerful surge of freedom. In the distance, we
        hear shouts, we approach and realize we've arrived in the middle of the
        Vancouver marathon. An incredible stroke of luck because a large part of
        this city is closed to cars. We can wander freely with our five senses
        restored, without the noise or smell of combustion engines. Our next
        three weeks immersed in nature in a camper van promise to be
        intoxicating.
      </Text>
    </Box>
  </VStack>
);
