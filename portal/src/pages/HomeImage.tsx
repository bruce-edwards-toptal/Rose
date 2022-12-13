import BlueOnBlue from "../images/svg/BlueOnBlue";
import OrangeOnBluePink from "../images/svg/OrangeOnBluePink";
import OrangeOnGrey from "../images/svg/OrangeOnGrey";
import PinkOnBlueSmoke from "../images/svg/PinkOnBlueSmoke";
import PurpeOnBlueSmoke from "../images/svg/PurpeOnBlueSmoke";
import PurpleOnGreySmoke from "../images/svg/PurpleOnGreySmoke";
import Red from "../images/svg/Red";
import RedOnBlack from "../images/svg/RedOnBlack";
import RedOnBlack2 from "../images/svg/RedOnBlack2";
import RedOnBlackSmoke from "../images/svg/RedOnBlackSmoke";
import RedOnBlackSmoke2 from "../images/svg/RedOnBlackSmoke2";
import RedOnBlue from "../images/svg/RedOnBlue";
import RedOnBlue2 from "../images/svg/RedOnBlue2";
import RedOnBlueCream from "../images/svg/RedOnBlueCream";
import RedOnGreenSmoke from "../images/svg/RedOnGreenSmoke";
import RedOnGrey from "../images/svg/RedOnGrey";
import RedOnGrey2 from "../images/svg/RedOnGrey2";
import RedOnGrey3 from "../images/svg/RedOnGrey3";
import RedOnGreySmoke from "../images/svg/RedOnGreySmoke";
import Rose from "../images/svg/Rose";
import RoseStem from "../images/svg/RoseStem";

const homeimages = [
  { component: BlueOnBlue, h: 1024, w: 683 },
  { component: OrangeOnBluePink, h: 1024, w: 683 },
  { component: OrangeOnGrey, h: 1024, w: 683 },
  { component: PinkOnBlueSmoke, h: 1024, w: 683 },
  { component: PurpeOnBlueSmoke, h: 1024, w: 683 },
  { component: PurpleOnGreySmoke, h: 1024, w: 683 },
  { component: Red, h: 1024, w: 683 },
  { component: RedOnBlack, h: 1024, w: 683 },
  { component: RedOnBlack2, h: 1024, w: 683 },
  { component: Rose, h: 169, w: 231 },
  { component: RoseStem, h: 192, w: 272 },
];

interface Props {
  parentheight: number;
  selection: number;
}

export const HomeImage: React.FC<Props> = ({ parentheight, selection }) => {
  const MyComponent = homeimages[selection].component;
  return (
    <MyComponent
      height={parentheight}
      width={(homeimages[selection].h / homeimages[selection].w) * parentheight}
    />
  );
};
