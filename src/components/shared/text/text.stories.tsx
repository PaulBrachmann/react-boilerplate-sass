import { storiesOf } from "@storybook/react";
import React from "react";

import Text from ".";
import { View } from "..";
import { Story } from "../../storybook";

storiesOf("Components|Text", module)
  .add("Style Presets", () => (
    <Story>
      <View>
        <View>
          <Text>Hello!</Text>
        </View>
        <View>
          <Text style={{ paddingTop: 10 }}>
            Check out{"\n"}
            my{"\n"}
            line height
          </Text>
        </View>
        <View>
          <Text style={{ paddingTop: 10 }}>
            The quick brown fox jumped over the slow lazy dog.
          </Text>
        </View>
        <View>
          <Text>$123,456,789.00</Text>
        </View>
        <View>
          <Text preset="bold">Osnap! I'm puffy.</Text>
        </View>
        <View>
          <Text preset="header">Behold!</Text>
        </View>
      </View>
    </Story>
  ))
  .add("Passing Content", () => (
    <Story>
      <View>
        <View>
          <Text text="Heyo!" />
        </View>
        <View>
          <Text tx="__tests__:key" />
        </View>
        <View>
          <Text>Passing strings as children.</Text>
        </View>
        <View>
          <Text>
            {" "}
            Hello <Text preset="bold">bolded</Text> World.
          </Text>
        </View>
      </View>
    </Story>
  ));
