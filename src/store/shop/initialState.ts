import watch from "../../img/chasi.jpeg";
import souvenir from "../../img/suvenir.jpeg";
import rocker from "../../img/kachalka.jpeg";
import well from "../../img/skvazhina.webp";
import statue from "../../img/statuya.jpg";
import { ShopState } from "../../types/store.initialState";

export const DOLLAR = '$';

export const initialState: ShopState = {
  data: [
    {
      id: 1,
      price: 60,
      currency: DOLLAR,
      name: "DESK CLOCK",
      size: 0,
      img: watch,
      subtitle:
        'Bronze table clock "Oil rig with rocking chair" length 21 cm.',
    },
    {
      id: 2,
      price: 40,
      currency: DOLLAR,
      name: "Bronze souvenir for an oil worker",
      size: 0,
      img: souvenir,
      subtitle: 'Bronze souvenir "Oil industry worker"',
    },
    {
      id: 3,
      price: 50,
      currency: DOLLAR,
      name: 'Figurine "Oil pump"',
      size: 0,
      img: rocker,
      subtitle: 'Figurine "Oil pump" made of bronze and marble (6 cm)',
    },
    {
      id: 4,
      price: 30,
      currency: DOLLAR,
      name: 'Figurine "Oil rig"',
      size: 0,
      img: well,
      subtitle: "Figurine Oil rig, bronze",
    },
    {
      id: 5,
      price: 45,
      currency: DOLLAR,
      name: 'Figurine "Oil rig"',
      size: 0,
      img: statue,
      subtitle: 'Figurine "Oil rig" made of bronze and marble (16 cm)',
    },
  ],
};
