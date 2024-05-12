import Onboarding from "react-native-onboarding-swiper";
import j2 from "../../assets/Journey1.png";
import j1 from "../../assets/journey2.png";
import j3 from "../../assets/journey3.png";
import { Image, TouchableOpacity, View ,Text} from "react-native";


const Done = ({...props}) => (
   <TouchableOpacity className="bg-green-400 py-1 m-4 px-2 rounded-full">
      <Text>
        Get Started
      </Text>
    </TouchableOpacity>
);



//change the color and width of the dots here
const Dots = ({selected}) => {
  let backgroundColor;
  let width;

  backgroundColor = selected ? "green" : "gray";
  width = selected ? 15 : 5;

  return (
    <View
      style={{
        width,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};





export default function Onboardings({navigation}) {

  return (
    <Onboarding
      DoneButtonComponent={Done}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: "#fff",
          //   image: <Image source={require('')} />,
          image: (
            <Image source={j2} className=" object-cover h-[400px] w-full" />
          ),
          title: "Ready to Travel",
          subtitle:
            "Choose your destination, plan your trip. select the best place for your holiday.",
        },
        {
          backgroundColor: "#fff",
          //   image: <Image source={require('')} />,
          image: (
            <Image source={j1} className=" object-cover h-[400px] w-full" />
          ),

          title: "Book a Ride.",
          subtitle:
            "Select the day, book your ticket, we give you the best price we guranteed.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image source={j3} className=" object-cover  h-[400px] w-full" />
          ),

          title: "Let's Enjoy!",
          subtitle:
            "Lets enjoy every second of your holiday.Also have a fun and enjoyable trip",
        },
      ]}
    />
  );
}
