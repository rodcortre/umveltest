import { Card as CardInfo } from "./Card";
import { Details } from "./Details";
import { FadeInImage } from "./Image";
import { Name } from "./Name";
import { Specie } from "./Specie";
import { Status } from "./Status";
import { Gender } from "./Gender";
import { Origin } from "./Origin";
import { Back } from "./Back";
export const Card = Object.assign(CardInfo, {
  Name,
  Image: FadeInImage,
  Details,
  Specie,
  Status,
  Gender,
  Origin,
  Back,
});
