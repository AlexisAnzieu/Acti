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
        Second wake-up on board. It seems my body has already gotten used to the intermittent nighttime jolts. A routine is gradually establishing itself in the five square meters of cabin space shared with Carla and optimizing hour by hour. Upon opening the room's blind, a major surprise awaits us. The landscape has completely changed. Are we in the same hemisphere? The marshy forests bordering the frozen lakes have now given way to vast{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/b1eda295-80f0-4b16-9702-101046e1542e.jpg"
        >
          <Highlight
            query="arid and dry expanses"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            arid and dry expanses
          </Highlight>
        </a>{" "}
        : the famous Canadian prairies. Animals have nowhere to hide from view, so we spot deer and coyotes. Numerous farms accompanied by their{" "}
        <a
          data-tooltip-id="my-tooltip"
          href="https://acti.anzieu.com/assets/9ec2d6e1-6b8c-4455-98a4-9c2f505dd8fa.jpg"
        >
          <Highlight
            query="gigantic grain silos"
            styles={{
              borderRadius: "50px",
              px: "2",
              py: "1",
              bg: "orange.100",
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            gigantic grain silos
          </Highlight>
        </a>{" "}
        appear from time to time along the railway.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        After breakfast, a brief stop allows us to stretch our legs for the day. This station is situated in the middle of a rather strange environment composed of thousands of containers, stacked several stories high, a metal city with no dwellings in sight. The new crew on board brings some fresh faces to the neighborhood. We now share memories of the former crew among travelers. Another notable change, the sewers are blocked in the adjacent car, its occupants are being dispersed throughout the different neighborhoods of the train-village to access their basic needs. Also, today's program includes bingo and wine tasting. Let's go! We spent the remainder of our afternoon in the panoramic car letting ourselves be enchanted by our music while looking outside, a real safari! We never tire of it.
      </Text>

      <Text lineHeight="1.8" mb={4}>
        The train, true to itself, speeds along, however it's time to talk about the logistics of this monster. Twice a day, it stops in the middle of deserted areas at lonely stations to refuel, replenish water, and empty the garbage that accumulates during the three daily meals on board. In three days, there's already been a water shortage, plumbing disasters, and a power outage in some cars. However, the steed continues its progress through mountains and valleys, carrying 400 passengers with nothing managing to slow it down. The mechanics repair breakdowns on the fly. My only goal tomorrow is to find time to draw a plan of the sleeping car. Finally, more than the landscapes, it's time that's flying by at full speed.
      </Text>
    </Box>
  </VStack>
);
